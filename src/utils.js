export function requestParams(searchTerm) {
  const params = new URLSearchParams();

  searchTerm && params.append("name", searchTerm);

  return params;
}
