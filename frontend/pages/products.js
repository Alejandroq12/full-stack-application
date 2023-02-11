import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductPage() {
  return (
    <div>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </div>
  );
}
