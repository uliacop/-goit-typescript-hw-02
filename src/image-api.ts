import axios from "axios";
import { Image } from "./types";

export async function fetchPhotosByInput(
  inputSearch: string,
  page: number
): Promise<Image[]> {
  const ACCESS_KEY = "tRsuTcj77wgSs6BIemL4nHsC7fCBOuRa0E2ejonSRKc";
  const url: string = `https://api.unsplash.com/search/photos`;

  try {
    const response = await axios.get(url, {
      params: {
        query: inputSearch,
        client_id: ACCESS_KEY,
        per_page: 15,
        page: page,
      },
    });

    const photos: Image[] = response.data.results;

    return photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}
