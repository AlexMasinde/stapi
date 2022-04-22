import PageNavigation from "./components/PageNavigation";
import ResultsPerPage from "./components/ResultsPerPage";
import SearchSpaceCrafts from "./components/SearchSpaceCrafts";
import SpaceCraftList from "./components/SpaceCraftList";
import { SpacecraftsProvider } from "./contexts/spacecraftsContext";

function App() {
  return (
    <SpacecraftsProvider>
      <div className="w-[fit-content] mx-auto my-8 text-primary-dark">
        <h1 className="font-bold">Spacecraft from STAPI API</h1>
      </div>
      <SearchSpaceCrafts />
      <div className="flex w-[1200px] mx-auto mb-4 justify-between">
        <PageNavigation />
        <ResultsPerPage />
      </div>
      <SpaceCraftList />
    </SpacecraftsProvider>
  );
}

export default App;
