import axios from 'axios';

export async function handleGoogleRequest(searchInput) {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&startIndex=0&maxResults=15`
    );
    return data.items;
  } catch (err) {
    console.error(err);
  }
}
