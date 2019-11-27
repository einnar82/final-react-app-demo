async function fetchPhotos() {
  const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}photos`);
  return await response.json();
}

export { fetchPhotos };
