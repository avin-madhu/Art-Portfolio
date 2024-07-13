import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: white;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const cardVariants = {

  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function GalleryCard({ galleryArtwork }) {
  return (
    <Card data-aos="fade-up" variants={cardVariants}>
      <Image src={galleryArtwork.image} />
    </Card>
  );
}

export default GalleryCard;