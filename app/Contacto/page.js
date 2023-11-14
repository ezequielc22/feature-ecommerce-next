import React from 'react';
import Card from '@/components/ui/Card';
import { wordingsLayout } from '../../data/mocks/MockWordings'
import contactBackground from '../../public/images/contactBackground.png'
import Image from 'next/image';

const ContactPage = () => {
    const {Contact} = wordingsLayout;
    return (
    <div className="relative overflow-hidden">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src={contactBackground}
            alt="Landing-image"
            className="sticky inset-0 w-screen z-0"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10">
          <Card wordings={Contact}/>
        </div>
      </div>
    );
};

export default ContactPage;