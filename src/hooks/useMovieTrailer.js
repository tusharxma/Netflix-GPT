import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
 
  //  fetch trailer video and updating store with trailer video key  
  const dispatch = useDispatch();

  const getVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_Options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      console.log("Fetched video data:", jsonData);

      const filterData = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterData.length ? filterData[1] : jsonData.results[0];
      dispatch(addTrailerVideo(trailer.key));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

}

export default useMovieTrailer