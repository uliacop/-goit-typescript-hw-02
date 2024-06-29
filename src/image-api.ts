import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

const API_KEY = "tRsuTcj77wgSs6BIemL4nHsC7fCBOuRa0E2ejonSRKc";

export const getImages = async (topic, currentPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data.results;
};
