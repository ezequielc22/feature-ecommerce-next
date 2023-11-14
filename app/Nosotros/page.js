import React from 'react';
import Head from 'next/head';
import Card from '@/components/ui/Card';
import { wordingsLayout } from '../../data/mocks/MockWordings';
import aboutUsBackground from '../../public/images/aboutUsBackground.png';
import Image from 'next/image';

const AboutUsPage = () => {
  const { AboutUs } = wordingsLayout;

  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Sobre Nosotros - Tu Tienda</title>
        <meta name="description" content="Descubre más sobre nosotros y nuestra pasión por los mates. Conoce nuestra historia y compromiso con la calidad." />
      </Head>

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