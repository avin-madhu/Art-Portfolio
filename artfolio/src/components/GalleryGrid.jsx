import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GalleryCard from './GalleryCard';


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 2rem;
  margin: 0 auto;
  // background-color: #f0f0f0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function galleryGrid({ galleryArtworks }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid>
        {galleryArtworks.map((galleryArtwork) => (
          <GalleryCard key={galleryArtwork.id} galleryArtwork={galleryArtwork} />
        ))}
      </Grid>
    </motion.div>
  );
}

export default galleryGrid;