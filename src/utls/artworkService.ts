const API_BASE_URL = 'https://corsproxy.io/?https://api.artic.edu/api/v1';

export async function fetchArtworks() {
  try {
    const response = await fetch(`${API_BASE_URL}/artworks`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    throw new Error('Error fetching artworks');
  }
}

export async function fetchArtworkById(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error('Error fetching artwork');
  }
}
