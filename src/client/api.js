import axios from 'axios';

export async function handle_GoogleBooks_API_Request(searchInput) {
  try {
    let startIndex = 0;
    let maxResults = 15;
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
}
