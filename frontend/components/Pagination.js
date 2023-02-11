import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  return (
    <PaginationStyles>
      <Head>
        <title>La tiendita - Page {page} of___</title>
      </Head>
      <Link href="/">⬅ Prev</Link>
      <p>Page __ of __</p>
      <p>{count} Items Total</p>
      <Link href="/">Next ➡</Link>
    </PaginationStyles>
  );
}
