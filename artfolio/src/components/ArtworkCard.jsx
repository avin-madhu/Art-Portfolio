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

function ArtworkCard({ artwork }) {
  return (
    <Card data-aos="fade-up" variants={cardVariants}>
      <Image src={artwork.image} />
    </Card>
  );
}

export default ArtworkCard;