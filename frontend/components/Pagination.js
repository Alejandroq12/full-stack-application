import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

export default function Pagination({ page }) {
  return (
    <PaginationStyles>
      <Head>
        <title>La tiendita - Page {page} of___</title>
      </Head>
    </PaginationStyles>
 );
}
