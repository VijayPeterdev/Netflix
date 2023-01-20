import React, { useEffect, useState } from "react";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import "./SignedHome.scss";
// import Kgf from "../../assets/kgf3.jpg";

// import { moviedata } from "./../../data";
import Footer from "./../../components/Footer/Footer";
import axios from "axios";

import ScrollSlider from "./../../components/ScrollSlider/ScrollSlider";

const SignedHome = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [categories] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        // localhost:8080/api/movielist/?type=series&categories=action

        const res = await axios.get(
          `movielist${type ? "/?type=" + type : ""}${
            categories ? "&categories=" + categories : ""
          }`,
          {
            headers: {
              token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJjMzQ4ZGZhYmQ1MzYxYzMxYzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjM5NTgxMywiZXhwIjoxNjc0OTg3ODEzfQ.9qw7BjdMJCiP-DVSkE4cCipdBad54TviYZDqYeMxEj0",
            },
          }
        );

        setLists(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [type, categories]);

  return (
    <div className="signedhome__container">
      <Navbar />
      <Featured type={type} />

      <div className="slidercards_grid">
        {lists.map((movie) => (
          <>
            <ScrollSlider movielist={movie} />
          </>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default SignedHome;
