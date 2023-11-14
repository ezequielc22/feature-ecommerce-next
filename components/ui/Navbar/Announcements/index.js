const AnnouncementNavbar = () => {
    const announcementData = {
      installment: 'HASTA 3 CUOTAS SIN INTERÉS',
      freeShipping: ' ENVIOS A TODO EL PAIS',
      discounts: ' DESCUENTO EN EFECTIVO O TRANSFERENCIA',
    };
    const shouldRenderComponent =
    announcementData &&
    (announcementData.installment || announcementData.freeShipping || announcementData.discounts);

  
    const installmentDetails = announcementData.installment || '';
    const freeShippingDetails = announcementData.freeShipping || '';
    const discountsDetails = announcementData.discounts || '';

    return shouldRenderComponent ? (
      <div className="bg-contrast-950 text-contrast-200 text-center p-1">
        <div className="text-sm  sm:text-xs lg:text-sm font-bold mb-4">
        {`${installmentDetails} - ${freeShippingDetails} - ${discountsDetails}`}
        </div>
      </div>
    ) : null;
  };
  
  export default AnnouncementNavbar;