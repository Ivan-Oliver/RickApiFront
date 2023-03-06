import { getToken } from "../storage";

export type Character = {
  id: string;
  characterId: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

const BASE_API_URL = "http://localhost:8000/characters";

export const getCharacter = async (id: string) => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method:'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    });
    console.log({response})

    const data: Character = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }

  return null
  
};

export const getCharacters = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      method:'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    });
    console.log(response)
    const data: Character[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }

  return []
};


export const syncCharacter = async () => {
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

export const removeCharacter = async (id: number) => {
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

export const createCharacter = async (data: Omit<Character, "id" | "characterId">) => {
  try {
    const token = getToken();
    console.log({data})
    await fetch(BASE_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
      body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((character) => createCharacter2(data, character.id));
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createCharacter2 = async (data: any, id: string) => {
  try {
    data.characterId = id;
    const token = getToken();
    console.log({data})
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.log((error as Error).message);
  }
};


export const updateCharacter = async (id: number, data: Partial<Character>) => {
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
