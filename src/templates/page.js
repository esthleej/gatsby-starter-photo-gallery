import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

const PhotosPage = ({ data: { contentfulPost }, location }) => {
  const pictures = contentfulPost.photos.map(({ fluid, id, title }) => {
    return { fluid, id, title };
  });

  const title = contentfulPost.title;

  return (
    <Fragment>
      <SEO title={title} image={pictures[0].fluid.src} />
      <Gallery images={pictures} pathname={location.pathname} title={title} />
    </Fragment>
  );
};

PhotosPage.propTypes = {
  data: PropTypes.shape({
    contentfulPost: PropTypes.shape({
      main: PropTypes.bool,
      title: PropTypes.string,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          fluid: PropTypes.shape({
            src: PropTypes.string,
            srcSet: PropTypes.string,
            base64: PropTypes.string,
            aspectRatio: PropTypes.number,
            sizes: PropTypes.string,
          }),
        })
      ),
      sub: PropTypes.shape({
        title: PropTypes.string,
        photos: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            fluid: PropTypes.shape({
              src: PropTypes.string,
              srcSet: PropTypes.string,
              base64: PropTypes.string,
              aspectRatio: PropTypes.number,
              sizes: PropTypes.string,
            }),
          })
        ),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotosPage;

export const photosQuery = graphql`
  query($id: String!) {
    contentfulPost(id: { eq: $id }) {
      main
      title
      slug
      photos {
        id
        title
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      sub {
        title
        photos {
          id
          title
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`;
