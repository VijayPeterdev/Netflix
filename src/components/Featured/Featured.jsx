import React, { useEffect, useState } from "react";
import "./Featured.scss";
import MovieLogo from '../../assets/kgf2logo.png'
import { AiOutlineInfoCircle, AiOutlinePlayCircle } from "react-icons/ai";
import axios from "axios";

const Featured = ({type}) => {

  const [randomMovie , setRandomMovie] = useState({});


  useEffect(() =>{

   const randomMovieData = async () => {


    try{
      
       const res = await axios.get(`/movies/random?type=${type}`,{
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJjMzQ4ZGZhYmQ1MzYxYzMxYzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjM5NTgxMywiZXhwIjoxNjc0OTg3ODEzfQ.9qw7BjdMJCiP-DVSkE4cCipdBad54TviYZDqYeMxEj0",
        },
      })

       setRandomMovie(res.data[0])
       console.log("random movie is :"+randomMovie);

    }catch(err){
      console.log(err)
    }

   }
   randomMovieData();

  },[type])

  return (
    <div className="Featured__container">

      
      <img
        className="banner"
        src={ randomMovie? `${randomMovie.moviethmb}` :  "https://data1.ibtimes.co.in/en/full/771188/kgf-2-review.jpg"}
        alt="bannerimage"
      />
      <div className="movie__details">
      {type && (
            <div  className="category">

                <span>{type === "movies"? "Movies" : "Series" }</span>
                <select className="selected" name="select" id="select">
               <option >Horror</option>
               <option >Serious</option>
               <option value="comedy">Comedy</option>


                </select>
            </div>
        )}
        <img className="movielogo" src={randomMovie.movieLogo} alt=""movielogo/>
        <span className="movie__content">{randomMovie.movieShortDetails} </span>

        <div className="button__row">
            <button className="playbtn"> <AiOutlinePlayCircle fontSize={"22px"} /> Play</button>
            <button className="infobtn"><AiOutlineInfoCircle fontSize={"22px"}/> info</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
