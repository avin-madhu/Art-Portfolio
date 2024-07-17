import React from 'react'
// import "../App.css";
import GalleryGrid from '../components/GalleryGrid';
export default function Gallery() {
  return (
    <div style={galleryStyles}>
      <GalleryGrid galleryArtworks={galleryArtworks}/>
    </div>
  )
}

const galleryStyles = {
  position: "absolute",
  zIndex: "3000",
  height: "300vh",
  width: "100%",
  backgroundColor: "black"
}

const galleryArtworks = [
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