import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const  useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const jsonData = await data.json();
    console.log("🚀 ~ getNowPlayingMovies ~ jsonData:", jsonData.results);  
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
