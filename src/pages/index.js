import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(
        filter: { main: { eq: true } }
        sort: { order: DESC, fields: updatedAt }
        limit: 6
      ) {
        nodes {
          main
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
    }
  `);

  const { nodes } = data.allContentfulPost;

  const images = [];

  nodes.forEach((node) => {
    if (node.photos) {
      node.photos.forEach(({ fluid, id, title }) => {
        images.push({ fluid, id, title });
      });
    }
    if (node.sub) {
      node.sub.forEach(({ photos }) => {
        photos.forEach(({ fluid, id, title }) => {
          images.push({ fluid, id, title });
        });
      });
    }
  });

  return (
    <Fragment>
      <SEO title='Latest Photos' image={images[0].fluid.src} />
      <Gallery
        images={images.slice(0, 10)}
        pathname={location.pathname}
        title='Latest Photos'
      />
    </Fragment>
  );
};

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default IndexPage;
