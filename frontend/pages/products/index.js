import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default function ProductPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  console.log(typeof page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products />
      <Pagination page={page || 1} />
    </div>
  );
}
