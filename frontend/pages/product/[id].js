import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
query {
    Product(where: { id: "63e16c3c66ab0646543f24b9" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ query }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);

  console.log({data, loading, error});
  return <p>Hey i am a single product { query.id }</p>;
}
