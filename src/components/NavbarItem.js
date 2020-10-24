import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';

const NavbarItem = ({ item, handleScrollToTop }) => {
  const [openLink, setOpenLink] = useState(false);
  const handleOpenLink = () => {
    setOpenLink(!openLink);
  };

  const subLinks = () =>
    item.sub.map((sub) => {
      return (
        <Fragment key={sub.id}>
          {openLink && (
            <div className='sub-link'>
              <Link
                to={`/${item.slug}/${sub.slug}`}
                onClick={handleScrollToTop}
              >
                {sub.title}
              </Link>
            </div>
          )}
        </Fragment>
      );
    });

  return (
    <Fragment>
      {item.sub ? (
        <Fragment>
          <button className='main-link' type='submit' onClick={handleOpenLink}>
            {item.title}
          </button>
          {subLinks()}
        </Fragment>
      ) : (
        <div className='main-link'>
          <Link to={`/${item.slug}`} onClick={handleScrollToTop}>
            {item.title}
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default NavbarItem;

NavbarItem.propTypes = {
  item: PropTypes.shape({
    main: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    sub: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        slug: PropTypes.string,
      })
    ),
  }).isRequired,
  handleScrollToTop: PropTypes.func.isRequired,
};
