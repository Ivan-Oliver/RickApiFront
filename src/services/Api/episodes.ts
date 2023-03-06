import { getToken } from "../storage";

export type Episode = {
  id: number;
  episodeId: number;
  name: string;
  air_date: string;
  episode: string;
};

const BASE_API_URL = "http://localhost:8000/episodes";

export const getEpisode = async () => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Episode[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncEpisode = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncApi/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeEpisode = async (id: number) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createEpisode = async (data: Omit<Episode, "id">) => {
  try {
    const token = getToken();
    await fetch(BASE_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateEpisode = async (id: number, data: Partial<Episode>) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
