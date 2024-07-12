import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ArtworkGrid from "./components/ArtworkGrid";
import avinartzlogo from "/assets/avinartzlogo.png";
import GlobalStyles from "./components/scrollBar";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: black;
  min-height: 100vh;
  position: relative;
`;

const heroStyles = {
  width: "100%",
  height: "800px",
  backgroundColor: "transparent",
  backgroundSize: "cover",
  backgroundPosition: "center",
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
  fontFamily: "Shadows Into Light, curive",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "23px",
  marginTop: "-30px",
  color: "grey",
}

const headerStyles = {
  position: "sticky",
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
  boxShadow: "0 8px 32px 0 rgba(255,255,255, 0.10)", 
};

const artworkGridStyles = {
     position: "relative",
     zIndex: "1"
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
      <AppContainer>
        <div style={heroStyles}>
            <div style={headerStyles}>
              <img data-aos = "fade-up" style={logoStyles} src={avinartzlogo} alt="logo" />
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
