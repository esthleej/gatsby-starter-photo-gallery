import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';

const NotFoundContainer = styled.div`
  margin-left: 300px;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </NotFoundContainer>
);

export default NotFoundPage;
