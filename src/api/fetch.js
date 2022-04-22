export default async function fetchSpacecrafts(configObject) {
  const { axiosInstance, method, url, requestConfig } = configObject;

  const requestController = new AbortController();

  try {
    const response = await axiosInstance(url, {
      method: method.toLowerCase(),
      ...requestConfig,
      signal: requestController.signal,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
