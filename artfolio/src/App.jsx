import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ArtworkGrid from "./components/ArtworkGrid";
import avinartzlogo from "/assets/avinartzlogo.png";
import GlobalStyles from "./components/scrollBar";
import Navbar from "./components/Navbar";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AppContainer>
        <div style={heroStyles}>
            <div style={headerStyles}>
              <img data-aos = "fade-up" data-duration = "2000" style={logoStyles} src={avinartzlogo} alt="logo" />
              <br />
              <p data-aos="fade-up" style={subline}>I sketch, therefore I am</p>
            </div> 
        </div>
        <div style={artworkGridStyles} >
             <ArtworkGrid artworks={artworks} />
             <button style={seeMoreBtnStyles}>See More</button>
        </div>
        <div style={space}>

        </div>
        <div style={footerStyles}>

        </div>
      </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: black;
  min-height: 100vh;
  position: relative;
`;

const heroStyles = {
  width: "100%",
  height: "400px",
  backgroundColor: "transparent",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "400px",
};

const logoStyles = {
  width: "270px",
  height: "100px",
  zIndex: "1",
  marginBottom: "10px",
};

const subline = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "teko, cursive",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "23px",
  marginTop: "-30px",
  color: "grey",
}

const headerStyles = {
  top: "0",
  display: "flex",
  flexDirection: "column",
  zIndex: "1000",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.25)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", 
  padding: "20px",
};

const artworkGridStyles = {
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center"
}

const seeMoreBtnStyles = {
  backgroundColor: "black",
  marginTop: "20px",
  color: "white",
  padding: "1rem",
  border: " white solid 2px",
  borderRadius: "10px",
  fontFamily: "teko, cursive",
  fontSize: "15px",
  width: "100px",
  cursor: "pointer",

  ':hover': {
    color: '#1a1a1a',
    background: '#white',
    borderColor: '#white',
    border: "cyan solid 5px"
  },

}

const space = {
  height: "100px",
  width: "100%",
  marginTop: "260px"
}

const footerStyles = {
  border: "white solid 2px 0px 0px 0px",
  position: "absolute",
  bottom: "0px",
  width: "100%",
  height: "300px",
  backgroundColor: "black",
  boxShadow: "10px 20px 4px  rgba(255, 255, 255, 0.3)"
}

const artworks = [
  { id: 1, title: "Artwork 1", image: "/assets/artworks/art1.png" },
  {
    id: 2,
    title: "Artwork 2",
    image: "/assets/artworks/art2.png",
  },
  {
    id: 3,
    title: "Artwork 3",
    image: "/assets/artworks/art4.jpg",
  },
  // {
  //   id: 4,
  //   title: "Artwork 4",
  //   image: "/assets/artworks/art10.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Artwork 5",
  //   image: "/assets/artworks/art14.png",
  // },
  // {
  //   id: 6,
  //   title: "Artwork 6",
  //   image: "/assets/artworks/art16.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Artwork 6",
  //   image: "/assets/artworks/art15.png",
  // },
  // {
  //   id: 8,
  //   title: "Artwork 6",
  //   image: "/assets/artworks/art13.png",
  // },
  // {
  //   id: 9,
  //   title: "Artwork 6",
  //   image: "/assets/artworks/art12.png",
  // },
];