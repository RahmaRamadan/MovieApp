import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosInstance";
import "./List.css";
import Box from "./BoxStyleProp";
import { addToFavourites } from "../store/actions/AddFavAction";
import { useSelector, useDispatch } from "react-redux";

export default function MoviesList() {
  const [movies, setMovies] = useState([]); //user
  //-------------------------------------------------------
  const favArray = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const AddToFav = (id) => {
    dispatch(addToFavourites(favArray.indexOf(id) === -1 ? id : 0));
  };
  //-------------------------------------------------------
  useEffect(() => {
    axiosInstance
      .get(`/movie/popular`, {
        params: {
          api_key: "318bb85f1f870c59398e563d0ea0c26a",
        },
        headers: {
          "Accept-language": "ar",
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container-fluid port_content">
        <div className="row g-0">
          <p className="p_paragraph">Movies</p>
        </div>
        <div className="container-md">
          <Box
            boxColorL="light_brown"
            boxColorD="dark_brown"
            content={movies.map((movie, index) => {
              return (
                <Link key={movie.id} to={`/${movie.id}`} className="title">
                  {movie.title}
                </Link>
              );
            })}
            img={movies.map((movie, index) => {
              return (
                <div className="card list_images">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img list_images col-4"
                  />
                  <div className="card-img-overlay">
                    <Link key={movie.id} to="/favourites" className="card-img-overlay btn-style col-2">
                      <button
                        className="card-img-overlay btn-style col-2"
                        onClick={() => AddToFav(movie.id)}
                      >
                        <i className="card-img-overlay fa fa-solid fa-star btn-style"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
}
