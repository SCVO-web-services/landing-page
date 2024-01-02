import { useRouter } from 'next/router';

function CoursesDetail() {
  const router = useRouter();
  const productID = router.query.courseid;
  return <h1>Details about product {productID}</h1>;
}
export default CoursesDetail;
