import React from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import "./Home.scss";
import HomeBanner from "../../assets/netflixbanner.jpg";
import { FiArrowRight } from "react-icons/fi";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures"
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home__container">
      <LoginNavbar />
      <img src={HomeBanner}  className="home__banner" alt="banner" />

      <div className="banner__content">
        <h4>Unlimited movies, TV shows and more.</h4>
        <span className="content_medium">Watch anywhere. Cancel anytime.</span>
        <span className="content_small">
          Ready to watch? Enter your email to create or restart your membership.
        </span>

        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button className="start__btn">
            Get Started
            <FiArrowRight />
          </button>
        </div>
      </div>

   <HomeFeatures  titleone={"Enjoy on your TV."} detailone="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."  tvholder={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} title1video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"} title2img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" titletwo={"Download your shows to watch offline."} detailtwo="Save your favourites easily and always have something to watch.
"/>

<HomeFeatures  titleone={"Watch everywhere."} detailone="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."  tvholder={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} title1video={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"}  title2img="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"  titletwo={"Create profiles for children."} detailtwo="Send children on adventures with their favourite characters in a space made just for them—free with your membership."/>

<Footer/>
    </div>
  );
};

export default Home;
