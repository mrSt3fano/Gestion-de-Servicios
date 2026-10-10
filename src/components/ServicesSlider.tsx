import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "EL SISTEMA DE CITAS QUE SE ADAPTA A TU NEGOCIO",
        description: "Diseñado para clínicas, consultorios, agencias y negocios con sucursales. Automatiza tus reservas, gestiona clientes y controla tu agenda en un solo lugar.",
        image: "/images/hero1.jpeg",
        color: "bg-black"
    },
    {
        id: 2,
        title: "DEJA QUE UN BOT DE WHATSAPP AGENDE CITAS",
        description: "Crea tu propio Bot de Whatsapp con nosotros. Gana clientes usando la tecnología de tu lado.",
        image: "/images/hero2.jpeg",
        color: "bg-black"
    },
    {
        id: 3,
        title: "GESTIONA TU NEGOCIO DESDE UN PANEL DE CONTROL",
        description: "Tu negocio tus reglas. Administra múltiples locales, supervisa la agenda de todo tu personal y visualiza tus ingresos en tiempo real desde un solo panel.",
        image: "/images/hero3.jpeg",
        color: "bg-black"
    }
];

const ServicesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative w-full min-h-[650px] h-screen overflow-hidden bg-black group font-sans -mt-20">
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div className="absolute inset-0">
                        <div className={`absolute inset-0 ${service.color} opacity-40`}></div>
                        
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-70"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center pt-20">
                        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                            <div className="max-w-2xl transform transition-all duration-1000 translate-y-0">
                                {index === currentSlide && (
                                    <div className="animate-fade-in-up">
                                        {index === 0 ? (
                                            <>
                                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
                                                    EL SISTEMA DE CITAS QUE SE ADAPTA <br className="hidden md:block"/>
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                                        A TU NEGOCIO
                                                    </span>
                                                </h2>
                                                <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
                                                    {service.description}
                                                </p>
                                                
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <a href="/beta" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] text-center text-sm sm:text-base">
                                                        Sé parte de la Beta (GRATIS)
                                                    </a>
                                                    <a href="/contacto" className="bg-transparent text-white border border-gray-400 hover:border-white font-semibold py-3.5 px-8 rounded-full transition-all hover:bg-white/10 text-center text-sm sm:text-base backdrop-blur-sm">
                                                        Contacto
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center space-x-3 mb-4">
                                                    <div className="h-[2px] w-8 bg-cyan-400"></div>
                                                    <span className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs">
                                                        Ventaja del Sistema
                                                    </span>
                                                </div>
                                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                                    {service.title}
                                                </h2>
                                                <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <a href="/registro" className="inline-block bg-transparent text-white border border-cyan-400 font-semibold py-3 px-8 rounded-full transition-all hover:bg-cyan-400/20 text-sm backdrop-blur-sm">
                                                    Únete a la Beta Gratis
                                                </a>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 z-20 transform -translate-y-1/2 text-white/50 hover:text-white w-12 h-12 flex items-center justify-center transition-all focus:outline-none bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                aria-label="Anterior"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 z-20 transform -translate-y-1/2 text-white/50 hover:text-white w-12 h-12 flex items-center justify-center transition-all focus:outline-none bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                aria-label="Siguiente"
            >
                <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 items-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative transition-all duration-300 rounded-full ${
                            index === currentSlide 
                                ? 'w-8 h-2 bg-white' 
                                : 'w-2 h-2 bg-gray-400 hover:bg-white' 
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    >
                        <span className="absolute -inset-3"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServicesSlider;