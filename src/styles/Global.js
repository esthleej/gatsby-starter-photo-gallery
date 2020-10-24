import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  p, a, li, span, small, div {
      font-family: ${(props) => props.theme.fonts.body};
      font-size: 1rem;
  }

  a {
    color: ${(props) => props.theme.colors.primary} !important;
    :hover {
      text-decoration: none !important;
      color: ${(props) => props.theme.colors.secondary} !important;
    }
  }
 

  h1, h2, h3, h5, h6, footer {
    font-family:${(props) => props.theme.fonts.body};
  }

  h1 {
    font-size: 3.157rem;
      line-height: 7.1rem;
      font-weight: 300;
  }

  h2 {
    font-size: 2.369rem;
    line-height: 5.1rem;
    font-weight: 300;
  }

  h3 {
    font-size: 1.333rem;
    line-height: 3.1rem;
    font-weight: 300;
  }

  h4 {
    font-weight: 500;
  }

  p {
    font-size: 1rem;
  }

  footer {
    font-size: 1rem;
  }
  
  button {
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
  }

  html { 
  font-family: ${(props) => props.theme.fonts.body}; 
  font-weight: 300;
  }

  @supports (font-variation-settings: normal) {
    html { 
    font-family: ${(props) => props.theme.fonts.body}; 
    }
  }
`;

export default Global;
