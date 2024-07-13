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
          <video style={bgvidStyles} src="./assets/bgvid.mp4" autoPlay loop muted></video>
            <div style={headerStyles}>
              <img data-aos = "fade-up" data-duration = "2000" style={logoStyles} src={avinartzlogo} alt="logo" />
              <p data-aos="fade-up" style={subline}>I sketch, therefore I am</p>
            </div> 
        </div>
        <div style={artworkGridStyles} >
             <ArtworkGrid artworks={artworks} />
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
  width: "300px",
  height: "100px",
  zIndex: "1"
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
     position: "relative",
     zIndex: "1"
}

const bgvidStyles = {
  position: 'absolute',
  left: '50%',
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  transform: 'translate(-50%, -50%)',
  zIndex: '-1',
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
  {
    id: 4,
    title: "Artwork 4",
    image: "/assets/artworks/art10.jpg",
  },
  {
    id: 5,
    title: "Artwork 5",
    image: "/assets/artworks/art14.png",
  },
  {
    id: 6,
    title: "Artwork 6",
    image: "/assets/artworks/art16.jpg",
  },
  {
    id: 7,
    title: "Artwork 6",
    image: "/assets/artworks/art15.png",
  },
  {
    id: 8,
    title: "Artwork 6",
    image: "/assets/artworks/art13.png",
  },
  {
    id: 9,
    title: "Artwork 6",
    image: "/assets/artworks/art12.png",
  },
];