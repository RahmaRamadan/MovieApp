import { useEffect, useState, React } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosInstance";
import "./List.css";
import { delFromFavourites } from "../store/actions/DelFavAction";
import { useSelector, useDispatch } from "react-redux";

export default function Favourites() {
  const [movies, setMovies] = useState([]); //user
  //-------------------------------------------------------
  const favArray = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  const DelFromFav = (id) => {
    dispatch(delFromFavourites(id));
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
  function findCommonElement(p_favArray, p_Movies) {
    let favs = [];
    for (let i = 0; i < p_Movies.length; i++) {
      for (let j = 0; j < p_favArray.length; j++) {
        if (p_favArray[j] === p_Movies[i].id) {
          favs.push(p_Movies[i]);
        }
      }
    }
    return favs;
  }

  return (
    <div>
      <div className="container-fluid port_content">
        <div className="row g-0">
          <p className="p_paragraph">Favourite Movies</p>
        </div>
        <div className="container-md">
          <div className="row">
            {findCommonElement(favArray, movies).map((movie, index) => {
              return (
                <div key={index}>
                  <div className="col">
                    <div className="col_design_fav">
                      <div className="card list_images_fav">
                        <Link key={index} to="/favourites" className="card list_images_fav">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            className="card-img list_images_fav"
                          />
                          <div className="card-img-overlay">
                            <button
                              className="card-img-overlay btn-style"
                              onClick={() => DelFromFav(movie.id)}
                              style={{ color: "#FFD700" }}
                            >
                              <i
                                className="card-img-overlay fa fa-trash btn-style"
                                style={{ color: "red" }}
                              ></i>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="title_fav">
                    {
                      <Link
                        key={movie.id}
                        to={`/${movie.id}`}
                        className="title_fav"
                      >
                        {movie.title}
                      </Link>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
