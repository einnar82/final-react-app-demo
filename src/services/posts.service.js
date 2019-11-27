async function fetchPosts() {
  const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}posts`);
  return await response.json();
}

export { fetchPosts };
