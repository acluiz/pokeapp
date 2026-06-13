const BASE_URL = "https://pokeapi.co/api/v2";

export async function get<T>(route: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${route}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
