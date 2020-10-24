import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  position: absolute;

  p {
    position: fixed !important;
    z-index: 1;
    text-align: center;
    width: 100%;
    font-weight: 400;
    margin: 0px;
  }

  @media (max-width: ${(props) => props.theme.sizes.mobile}) {
    p {
      position: absolute !important;
    }
  }
`;

const PhotosContainer = styled.div`
  margin-left: 300px;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.sizes.mobile}) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const Image = styled(Img)`
  width: calc(${(props) => props.fluid.aspectRatio} * (95vh - 6rem));
  height: calc(95vh - 6rem);
  margin-right: 1rem;

  @media (max-width: ${(props) => props.theme.sizes.mobile}) {
    width: calc(100vw - 2rem);
    height: auto;
    margin: 0rem 1rem 1rem 1rem;
  }
`;

const Gallery = ({ images, title }) => {
  const photos = images.map(({ fluid, id, title }) => {
    return <Image key={id} fluid={fluid} alt={title} />;
  });

  return (
    <GalleryContainer>
      <p>{title}</p>
      <PhotosContainer>{photos}</PhotosContainer>

      <p>
        <i>
          Images were taken from&nbsp;
          <a href='https://unsplash.com/'>Unsplash</a>.
        </i>
      </p>
    </GalleryContainer>
  );
};

export default Gallery;

Gallery.defaultProps = {
  images: [
    {
      id: '',
      title: '',
      fluid: {
        base64: '',
        aspectRatio: 0,
        src: '',
        srcSet: '',
        sizes: '',
      },
    },
  ],
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      fluid: PropTypes.shape({
        base64: PropTypes.string,
        aspectRatio: PropTypes.number,
        src: PropTypes.string,
        srcSet: PropTypes.string,
        sizes: PropTypes.string,
      }),
    })
  ),
  title: PropTypes.string.isRequired,
};
