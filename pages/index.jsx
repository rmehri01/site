import Meta from '../components/Meta';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Meta />

      <Main />

      <Footer />
    </div>
  );
}
