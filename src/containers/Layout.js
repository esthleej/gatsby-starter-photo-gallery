import React from 'react';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Global';
import Theme from '../styles/Theme';
import Reboot from '../styles/reboot';

import NavBar from '../components/Navbar';
import Transition from '../components/Transition';

const LayoutStyles = styled.div`
  display: flex;
  margin-top: 3rem;

  @media (max-width: ${Theme.sizes.mobile}) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const Layout = ({ children, location }) => {
  return (
    <LayoutStyles>
      <Reboot />
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <NavBar />
        <Transition location={location}>{children}</Transition>
      </ThemeProvider>
    </LayoutStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
