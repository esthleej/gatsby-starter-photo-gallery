import React, { useState, Fragment } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useScrollXPosition } from 'react-use-scroll-position';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import usePrevious from '../utils/hooks';
import InstagramIcon from '../images/instagram.svg';
import EmailIcon from '../images/email.svg';

const NavbarContainer = styled.nav`
  visibility: visible;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
    transition: opacity 0.3s ease-in;
    opacity: ${(props) => (props.scrolled ? '0' : '1')};
    visibility: ${(props) => (props.scrolled ? 'hidden' : 'visible')};
    margin: 0;
    position: fixed;
    height: calc(100vh - 3rem);
    padding: 1rem 3rem;
    min-width: 300px;
    z-index: 1;
    background: white;
    overflow: auto;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h3 {
      text-align: center;
      margin-bottom: 0;
      font-weight: 400;
      text-transform: uppercase;
    }

    @media (min-width: ${(props) => props.theme.sizes.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const HamburgerButton = styled.button`
  display: block;
  height: 2.1rem;
  width: 2rem;
  position: relative;

  div {
    transition: all 0.2s;
    height: 2px;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    position: absolute;

    &.first {
      top: ${(props) => (props.open ? '1rem' : '0.5rem')};
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
      left: 0;
    }
    &.second {
      left: 0;
      bottom: ${(props) => (props.open ? '1rem' : '0.5rem')};
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
      left: 0;
    }
  }
  :focus {
    outline: none;
  }
  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;

  .main-link {
    text-align: left;
    padding-bottom: 0.25rem !important;
    margin: 0;
    :hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  .sub-link {
    padding-bottom: 0.25rem !important;
    margin-left: 1rem;
  }

  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
    display: flex;
  }
`;

const Contact = styled.div`
  display: none;
  padding-top: 2rem;

  p {
    padding-top: 0.25rem;
  }

  img {
    padding-right: 1rem;
    :hover {
      opacity: 0.5;
    }
  }

  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
    display: block;
  }
`;

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost(
        filter: { main: { eq: true } }
        sort: { order: ASC, fields: order }
      ) {
        nodes {
          main
          slug
          title
          id
          sub {
            slug
            title
            id
          }
        }
      }
      contentfulWebsite {
        title
        instagram
        email
      }
    }
  `);
  const main = data.allContentfulPost.nodes;
  const { title, instagram, email } = data.contentfulWebsite;

  const mainLinks = main.slice(0, 3);
  const archiveLinks = main.slice(3).reverse();

  const today = new Date();
  const year = today.getFullYear();

  const [openMenu, setOpenMenu] = useState(false);
  const [openArchive, setOpenArchive] = useState(false);

  const scrollX = useScrollXPosition();
  const prevScroll = usePrevious(scrollX);
  const scrolled = scrollX > prevScroll && scrollX !== 0;

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleOpenArchive = () => {
    setOpenArchive(!openArchive);
  };

  const renderNavbarItems = (link) => {
    return link.map((link) => (
      <Fragment key={link.id}>
        <NavbarItem item={link} handleScrollToTop={handleScrollToTop} />
      </Fragment>
    ));
  };

  return (
    <NavbarContainer scrolled={scrolled} open={openMenu}>
      <div className='navbar'>
        <Link to='/' onClick={handleScrollToTop}>
          <h3>{title}</h3>
        </Link>
        <HamburgerButton onClick={handleOpenMenu} type='submit' open={openMenu}>
          <div className='first' />
          <div className='second' />
        </HamburgerButton>
      </div>

      <LinkContainer aria-hidden={!openMenu} open={openMenu}>
        <div className='main-link'>
          <Link to='/' onClick={handleScrollToTop}>
            Latest Photos
          </Link>
        </div>

        {renderNavbarItems(mainLinks)}

        {archiveLinks.length > 0 && (
          <button
            className='main-link'
            type='submit'
            onClick={handleOpenArchive}
          >
            Archive
          </button>
        )}
        {openArchive && (
          <div className='sub-link'>{renderNavbarItems(archiveLinks)}</div>
        )}
      </LinkContainer>

      <Contact>
        <a href='www.instagram.com'>
          <img src={InstagramIcon} alt='instagram' />
        </a>
        <a href={`mailto:${email}`}>
          <img src={EmailIcon} alt='email' />
        </a>
        <p>&copy; {year}</p>
      </Contact>
    </NavbarContainer>
  );
};

export default NavBar;
