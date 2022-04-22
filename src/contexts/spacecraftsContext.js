import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "../api/spaceCrafts";
import { requestParams } from "../utils";

const SpacecraftContext = createContext();

export function useSpacecrafts() {
  return useContext(SpacecraftContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_SPACECRAFT_LIST":
      return {
        ...state,
        spacecrafts: action.payload,
      };
    case "SET_PAGE_SIZE":
      return {
        ...state,
        pageSize: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_METHOD":
      return {
        ...state,
        method: action.payload,
      };
    case "SET_PAGE_NUMBER":
      return {
        ...state,
        pageNumber: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  spacecrafts: [],
  searchTerm: "",
  pageSize: 20,
  method: "GET",
  pageNumber: 0,
};

export function SpacecraftsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { method, searchTerm, pageSize, pageNumber, spacecrafts } = state;

  const URL = "/spacecraft/search";

  useEffect(() => {
    async function fetchSpacecrafts() {
      if (spacecrafts[pageNumber]) {
        return;
      }
      const params = requestParams(searchTerm);
      try {
        setLoading(true);
        const response = await axios(URL, {
          method: method.toLowerCase(),
          params: {
            pageSize,
            pageNumber,
          },
          ...(searchTerm && { data: params }),
        });
        const allSpacecraft = [...spacecrafts, response.data];
        dispatch({ type: "SET_SPACECRAFT_LIST", payload: allSpacecraft });
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSpacecrafts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, searchTerm, pageSize, pageNumber]);

  const value = {
    ...state,
    loading,
    error,
    dispatch,
  };

  return (
    <SpacecraftContext.Provider value={value}>
      {children}
    </SpacecraftContext.Provider>
  );
}
