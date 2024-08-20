const API_KEY = '45523262-d0ffc350dbb21d9b3ec29cf8d';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchQuery => {
  const urlParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&${urlParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};