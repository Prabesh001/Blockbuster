export const YTS_CONFIG = {
  BASE_URL: "https://yts.mx/api/v2/list_movies.json",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  header: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  let endpoint = query
    ? `${YTS_CONFIG.BASE_URL}?query_term=${encodeURIComponent(query)}`
    : `${YTS_CONFIG.BASE_URL}?sort_by=popularity.desc`;

  const response: any = await fetch(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();

  return data.data.movies;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<any> => {
  try {
    const response: any = await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${movieId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movie details", response.statusText);
    }

    const data = await response.json();

    console.log(data.data.movies[0])

    return data.data.movies[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
