import wsp from './assets/images/whatsapp.webp'

import React from 'react'

const Whatsapp = () => {
  return (
     /* Chat Whatsapp*/
     <div className="btn-whatsapp">
     <img
       className="whatsapp-img"
       src={wsp}
       alt="whatsapp"
     />
     <div className="wcs_button_label">Contáctanos</div>
     <div className="whatsapp_chat_support wcs_fixed_right" id="button-w">
       <div className="wcs_popup">
         <div className="wcs_popup_close">
           <span className="fa fa-close" />
         </div>
         <div className="wcs_popup_header">
           <span className="bi bi-whatsapp">
             <i className="fa-brands fa-whatsapp" />
           </span>
           <strong>Servicio al cliente</strong>
           <div className="wcs_popup_header_description">
             ¿Necesidad de ayuda? Chatea con nosotros en Whatsapp
           </div>
         </div>
         <div className="wcs_popup_input" data-number="51945970045">
           <input type="text" placeholder="Hola!! Quisiera información!!" />
           <a href="https://wa.link/ofu5ri" target="_blank" rel="noreferrer">
             <i className="fa fa-play" />
           </a>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Whatsapp;