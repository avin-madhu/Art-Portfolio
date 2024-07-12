import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ArtworkGrid from "./components/ArtworkGrid";
import avinartzlogo from "./assets/avinartzlogo.png";
import GlobalStyles from "./components/scrollBar";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  color: #333;
  background-color: black;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

const heroStyles = {
  width: "100%",
  height: "800px",
  backgroundColor: "transparent",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const logoStyles = {
  width: "400px",
  height: "200px",
  zIndex: 1
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

const artworks = [
  { id: 1, title: "Artwork 1", image: "src/artworks/art1.png" },
  {
    id: 2,
    title: "Artwork 2",
    image: "src/artworks/art2.png",
  },
  {
    id: 3,
    title: "Artwork 3",
    image: "src/artworks/art4.jpg",
  },
  {
    id: 4,
    title: "Artwork 4",
    image: "src/artworks/art10.jpg",
  },
  {
    id: 5,
    title: "Artwork 5",
    image: "src/artworks/art14.png",
  },
  {
    id: 6,
    title: "Artwork 6",
    image: "src/artworks/art16.jpg",
  },
  {
    id: 7,
    title: "Artwork 6",
    image: "src/artworks/art15.png",
  },
  {
    id: 8,
    title: "Artwork 6",
    image: "src/artworks/art13.png",
  },
  {
    id: 9,
    title: "Artwork 6",
    image: "src/artworks/art12.png",
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
          <Header>
              <img data-aos = "fade-up" style={logoStyles} src={avinartzlogo} alt="logo" />
            </Header>
            <p data-aos="fade-up" style={subline}>I sketch, therefore I am</p>
        </div>
        <ArtworkGrid artworks={artworks} />
      </AppContainer>
    </>
  );
}

export default App;
