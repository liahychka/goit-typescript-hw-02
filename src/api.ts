import axios, { AxiosResponse } from "axios";

const API_KEY = "CfF87_GktDHKGZeUATCI9G7_4LMIAJu0I3IwAahnDfk";
axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const renderPhoto = async <T>(query: string, page: number): Promise<T> => {
  try {
      const { data } : AxiosResponse<T> = await axios.get<T>(
    `/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
  } catch (error) {
    throw error
  }
};