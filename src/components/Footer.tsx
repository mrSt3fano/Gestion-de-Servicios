import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

/**
 * Componente de pie de página (Footer).
 * Contiene información de contacto, enlaces rápidos, redes sociales y horario de atención.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-surface text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center justify-items-center">

                    {/* Column 1: Company Info */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-xl font-bold mb-4">LAPSUS</h3>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400 max-w-sm">
                            Soluciones para todo negocio que necesita tener el control
                            de su información usando la tecnología en sus negocios.
                        </p>
                        <div className="flex space-x-5 justify-center">
                            <a href="https://www.tiktok.com/@minares.south?lang=es" className="text-gray-400 hover:text-brand-primary transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} size="xl" />
                            </a>
                            <a href="https://www.facebook.com/people/Minares-South-SRL-Laboratorio-Qu%C3%ADmico-Metal%C3%BArgico/61572169857346/?mibextid=ZbWKwL" className="text-gray-400 hover:text-brand-primary transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="xl" />
                            </a>
                            <a href="https://www.instagram.com/minares.south" className="text-gray-400 hover:text-brand-primary transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                            </a>
                            <a href="https://www.linkedin.com/company/minares-south-s-r-l/" className="text-gray-400 hover:text-brand-primary transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                            </a>                           
                            <a href="https://www.youtube.com/@MINARESSOUTHSRL-d7s" className="text-gray-400 hover:text-brand-primary transition-all hover:scale-110 active:scale-95 flex items-center justify-center" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} size="xl" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 flex flex-col items-center">
                            {[
                                { name: 'Inicio', href: '/' },
                                { name: 'Nosotros', href: '/nosotros' },
                                { name: 'Servicios', href: '/servicios' },
                                { name: 'Únete a la Beta', href: '/productos' },
                                { name: 'Contacto', href: '/contactenos' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm hover:text-brand-accent transition-colors flex items-center justify-center group">
                                        <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-2 text-brand-primary group-hover:text-brand-accent transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Horario de Atención */}
                    <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Horario de Atención</h3>
                        <p className="text-sm text-gray-400 mb-4 max-w-sm">
                            Nuestro equipo está disponible para atender sus consultas.
                        </p>
                        <div className="bg-brand-primary/10 p-4 rounded-lg border border-brand-primary/20 w-full max-w-xs text-center">
                            <p className="text-brand-accent font-semibold text-sm mb-1">Lunes a Domingo:</p>
                            <p className="text-gray-400 text-sm">8:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer: Copyright */}
            <div className="border-t border-gray-800 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                        &copy; {currentYear} LAPSUS. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 justify-center">
                        <a href="/politica-de-privacidad" className="text-sm text-gray-500 hover:text-white transition-colors">Privacidad</a>
                        <a href="/terminos-y-condiciones" className="text-sm text-gray-500 hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;