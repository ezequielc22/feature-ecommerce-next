import Image from 'next/image';
import landingFrame from '../public/images/landing.png'
import ProductsContainer from '@/components/ui/containers/ProductsContainer';
import Card from '@/components/ui/Card';
import { wordingsLayout } from '../data/mocks/MockWordings'

export const metadata = {
  title: 'Home',
  description: 'Eccommerce de mates!',
}
const Home = async() => {
  const { cyberMonday } = wordingsLayout;
  const popularProducts = await fetch(`http://localhost:3000/api/popularProducts`,
  {cache: "no-store"}
  ).then(r => r.json());
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={landingFrame}
          alt="Landing-image"
          className="sticky inset-0 w-screen z-0"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10">
        <div className='flex justify-center text-4xl lg:text-7xl text-contrast-200 pt-10'>
          CYBER WEEK EN ALMATE!
        </div>
        <ProductsContainer products={popularProducts}/>
        <Card wordings={cyberMonday}/>
      </div>
    </div>
  );
};

export default Home;