import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

/**
 * Componente de barra superior del sitio.
 * Muestra información de contacto rápida y enlaces a redes sociales.
 */
const TopHeader = () => {
    return (
        <div className="bg-brand-surface text-white py-2.5 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0 mb-3 sm:mb-0">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-brand-accent h-4 w-4" />
                        <span>+51 977 701 075</span>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-brand-accent h-4 w-4" />
                        <span>stefano13soto@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="https://www.tiktok.com/@minares.south?lang=es" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="TikTok" target='_blank'>
                        <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/people/Minares-South-SRL-Laboratorio-Qu%C3%ADmico-Metal%C3%BArgico/61572169857346/?mibextid=ZbWKwL" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="Facebook" target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/minares.south/" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="Instagram" target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/minares-south-s-r-l/" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="LinkedIn" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/@MINARESSOUTHSRL-d7s" className="opacity-70 hover:opacity-100 transition-all hover:scale-110 active:scale-95" aria-label="YouTube" target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
