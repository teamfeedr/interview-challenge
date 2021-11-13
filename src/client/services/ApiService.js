const baseUrl = "http://localhost:8080/api/items";

const getItems = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
};

export default getItems;
