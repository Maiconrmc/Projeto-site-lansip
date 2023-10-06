import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css';

function WhatsappButton(){
    return (
        <> 
            <a href='https://wa.me/554133878777' target='_blank' rel="noreferrer" className={`text-decoration-none text-reset whatsappButtonParent`}>
                <FaWhatsapp className='whatsappButton' fill='white'/>
            </a>
        </>
    );
}

export default WhatsappButton;