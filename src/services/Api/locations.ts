import { getToken } from "../storage";

export type Location = {
  id: number;
  locationId: number;
  name: string;
  type: string;
  dimension: string;
};

const BASE_API_URL = "http://localhost:8000/locations";

export const getLocation = async () => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}`, {
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

export const syncLocation = async () => {
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

export const removeLocation = async (id: number) => {
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

export const createLocation = async (data: Omit<Location, "id">) => {
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

export const updateLocation = async (id: number, data: Partial<Location>) => {
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
