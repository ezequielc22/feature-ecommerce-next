import React from 'react';
import Card from '@/components/ui/Card';
import { wordingsLayout } from '../../data/mocks/MockWordings';
import aboutUsBackground from '../../public/images/aboutUsBackground.png';
import Image from 'next/image';
export const metadata = {
  title: 'Nosotros',
  description: 'Descubre más sobre nosotros y nuestra pasión por los mates. Conoce nuestra historia y compromiso con la calidad.',
}

const AboutUsPage = () => {
  const { AboutUs } = wordingsLayout;

  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={aboutUsBackground}
          alt="Fondo de la página Sobre Nosotros"
          className="sticky inset-0 w-screen z-0"
          objectFit="cover"
        />
      </div>
      
      <div className="relative z-10">
        <Card wordings={AboutUs} />
      </div>
    </div>
  );
};

export default AboutUsPage;