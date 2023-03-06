import { getToken } from "./storage";

export type Character = {
  id: number;
  characterId: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export type Episode = {
  id: number;
  episodeId: number;
  name: string;
  air_date: string;
  episode: string;
};

export type Location = {
  id: number;
  locationId: number;
  name: string;
  type: string;
  dimension: string;
};


export const getCharacter = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/characters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Character[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncCharacters = async (page: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/syncApi/characters?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeCharacter = async (id: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/characters/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createCharacter = async (data: Omit<Character, "id">) => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/characters", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateCharacter = async (id: number, data: Partial<Character>) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/characters"/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};



export const syncEpisodes = async (page: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/syncApi/episodes?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};


export const getEpisode = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/characters", {
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

export const removeEpisode = async (id: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/characters/${id}`, {
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
    await fetch("http://localhost:8000/characters", {
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
    await fetch(`http://localhost:8000/characters"/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};


export const syncLocations = async (page: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/syncApi/locations?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};


export const getLocation = async () => {
  try {
    const token = getToken();
    const response = await fetch("http://localhost:8000/locations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Location[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const removeLocation = async (id: number) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/locations/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createLocation = async (data: Omit<Location, "id">) => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/locations", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateLocation = async (id: number, data: Partial<Location>) => {
  try {
    const token = getToken();
    await fetch(`http://localhost:8000/locations"/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};




