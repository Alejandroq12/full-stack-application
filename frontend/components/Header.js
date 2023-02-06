import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2 rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem; 
  }
`;

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Store</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
