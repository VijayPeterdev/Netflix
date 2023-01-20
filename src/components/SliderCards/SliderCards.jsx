import React, { useEffect, useState } from "react";
import "./SliderCard.scss";
import { AiOutlinePlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BiDislike, BiLike } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
// import Money from "../../assets/money.png";

/* {moviedetails,cardthmb,movieduration,movielikes,videothmb}  */

const SliderCards = ({ item, index ,type}) => {

  console.log(type);

  const [hover, setHover] = useState(false);
  // console.log(hover)
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        // localhost:8080/api/movies/find/63a541493a03c9cec5512d12
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJjMzQ4ZGZhYmQ1MzYxYzMxYzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjM5NTgxMywiZXhwIjoxNjc0OTg3ODEzfQ.9qw7BjdMJCiP-DVSkE4cCipdBad54TviYZDqYeMxEj0",
          },
        });

        setMovie(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [item]);

  return (
    <Link to={`/${type}/${item}`} style={{color:"inherit" ,textDecoration:"none"}} >
      <div className="container">
        <div
          className="SliderCard__container"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <img
            className="Moviethmb"
            src={hover ? movie.movieAnimationThmb : movie.moviethmb}
            alt="card"
          />

          <div className="details">
            <AiOutlinePlayCircle fontSize={"28px"} />
            <AiOutlinePlusCircle fontSize={"28px"} />
            <BiLike fontSize={"28px"} />
            <BiDislike fontSize={"28px"} />
          </div>

          <div className="details__content">
            <span> {movie.moviename} </span>
            <span>
              {movie.movieDuration} + {movie.ageLimit} 20 Likes
            </span>
            <span>{movie.movieShortDetails}</span>
          </div>
        </div>
      </div>
     </Link>
  );
};

export default SliderCards;
