import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

/**
 * Botón flotante para descargar el Brochure PDF.
 * Posicionado arriba del botón de WhatsApp (bottom-28).
 */
const BrochureButton = () => {
    return (
        <a
            href="/archivos/BROCHURE_MINARES_2026-2027_MASTER.pdf"
            download="Brochure-MinaresSouth.pdf"
            className="fixed bottom-28 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#F40F02] text-white rounded-full shadow-2xl hover:bg-[#d10d02] transition-all duration-300 group hover:scale-110 active:scale-95 animate-bounce-subtle"
            aria-label="Descargar Brochure PDF"
        >
            <div className="absolute inset-0 rounded-full bg-[#F40F02] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></div>
            <FontAwesomeIcon icon={faFilePdf} className="text-3xl" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">
                Descargar Brochure
            </span>
        </a>
    );
};

export default BrochureButton;