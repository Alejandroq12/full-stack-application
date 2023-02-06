import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';


const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    maxwidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

  }
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
