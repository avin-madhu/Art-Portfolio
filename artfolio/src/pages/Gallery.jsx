import React from 'react'
import { useState } from 'react';
// import "../App.css";
import "./Gallery.css"
import GalleryGrid from '../components/GalleryGrid';

const galleryStyles = {
  position: "absolute",
  zIndex: "3000",
  height: "300vh",
  width: "100%",
  backgroundColor: "black"
}

const galleryArtworks = [
  { id: 1, title: "Artwork 1", image: "/assets/artworks/3.jpg" },
  {
    id: 2,
    title: "Artwork 2",
    image: "/assets/artworks/4.jpg",
  },
  {
    id: 3,
    title: "Artwork 3",
    image: "/assets/artworks/5.jpg",
  },
  {
    id: 4,
    title: "Artwork 4",
    image: "/assets/artworks/6.png",
  },
  {
    id: 5,
    title: "Artwork 5",
    image: "/assets/artworks/7.png",
  },
  {
    id: 6,
    title: "Artwork 6",
    image: "/assets/artworks/8.jpg",
  },
  {
    id: 7,
    title: "Artwork 6",
    image: "/assets/artworks/9.jpg",
  },
  {
    id: 8,
    title: "Artwork 6",
    image: "/assets/artworks/10.png",
  },
  {
    id: 9,
    title: "Artwork 6",
    image: "/assets/artworks/11.jpg",
  },
  {
    id: 10,
    title: "Artwork 6",
    image: "/assets/artworks/12.png",
  },
  {
    id: 11,
    title: "Artwork 6",
    image: "/assets/artworks/13.png",
  },
  {
    id: 12,
    title: "Artwork 6",
    image: "/assets/artworks/14.png",
  },
  {
    id: 13,
    title: "Artwork 6",
    image: "/assets/artworks/15.jpg",
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const artworksPerPage = 6;
  const indexOfLastArtwork = currentPage * artworksPerPage;
  const indexOfFirstArtwork = indexOfLastArtwork - artworksPerPage;
  const currentArtworks = galleryArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div style={galleryStyles}>
      <GalleryGrid galleryArtworks={currentArtworks} />
      <div className="pagination">
        {[...Array(Math.ceil(galleryArtworks.length / artworksPerPage))].map((e, i) => (
          <button
            key={i}
            onClick={() => paginate((i + 1)%artworksPerPage)}
            className={currentPage === (i + 1)%artworksPerPage ? 'active' : ''}
          >
          {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery