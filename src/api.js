import axios from "axios";

const API_KEY = "CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const renderPhoto = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );

  return data;
};