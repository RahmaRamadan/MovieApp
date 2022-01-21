import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";
import "./List.css";

export default function UserDetails() {
  const params = useParams();
  const [details, setDetails] = useState({});
 console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?api_key=318bb85f1f870c59398e563d0ea0c26a`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
      // console.log("details: ",res);
  }, []);
  return (
    <div className="container details">
      {/* <h1 className="p_paragraph"> About Movie</h1> */}
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}?`} className="details_image" />
      <h2 className="details_title"> <span className="title_span"> MOVEI ID </span> {details.id}</h2>
      <h3 className="details_title"> <span className="title_span"> TITLE </span> {details.title}</h3>
      <h3 className="details_title"> <span className="title_span"> OVERVIEW </span> {details.overview}</h3>
    
    </div>
  );
}
