import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "PRESENTACION",
        description: "Más de 18 años, con la Calidad, Seguridad y Confianza de Siempre en Nuestras 7 Sedes a Nivel Nacional",
        image: "/images/arequipa_office.png ",
        color: "bg-brand-primary"
    },
    {
        id: 2,
        title: "PREPARACIÓN MECÁNICA",
        description: "Preparación mecánica de muestras de minerales, concentrados, relaves y pulpas mediante trituración, pulverización, cuarteo y control granulométrico",
        image: "/images/preparacion_muestras.png",
        color: "bg-brand-primary"
    },
    {
        id: 3,
        title: "ÁREA DE VIA SECA",
        description: "Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión y estándares internacionales.",
        image: "/images/via_seca2.png",
        color: "bg-brand-secondary"
    },
    {
        id: 4,
        title: "METODOS VOLUMETRICOS",
        description: "Ensayos para concentrados de cobre, plomo y zinc, con determinación de elementos de alta ley y resultados confiables para el control de calidad.",
        image: "/images/via_humeda.jpg",
        color: "bg-brand-surface"
    },
    {
        id: 5,
        title: "ENSAYOS POR INSTRUMENTACIÓN",
        description: "Ensayos por instrumentación con Absorción Atómica, ICP-OES y UV-VIS para análisis multielemental de minerales, concentrados, muestras geoquímicas y soluciones.",
        image: "/images/absorcion_atomica.jpg",
        color: "bg-brand-surface"
    },
    {
        id: 6,
        title: "ÁREA DE INVESTIGACIÓN - PRUEBAS METALURGICAS",
        description: "Pruebas metalúrgicas de flotación, cianuración, gravimetría y Falcon para optimizar la recuperación de oro, cobre y minerales polimetálicos.",
        image: "/images/pruebas_metalurgicas1.png",
        color: "bg-brand-surface"
    },
    {
        id: 7,
        title: "CONSULTORIA Y ASESORIA",
        description: "Consultoria en desarrollo de software a la medida para negocios que requieran automatizar sus procesos.",
        image: "/images/consultoria.jpg",
        color: "bg-brand-surface"
    }
];

/**
 * Componente de carrusel (slider) de pantalla completa para la página de inicio.
 * Presenta los servicios principales con transiciones animadas y navegación.
 */
const ServicesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 6000); // 6 seconds

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
        <div className="relative w-full min-h-[450px] h-[calc(100vh-160px)] md:h-[calc(100vh-105px)] overflow-hidden bg-gray-900 group">
            {/* Slides */}
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Layer */}
                    <div className="absolute inset-0">
                        {/* Base Color / Gradient */}
                        <div className={`absolute inset-0 ${service.color} opacity-90`}></div>
                        <div className={`absolute inset-0 bg-brand-surface/20`}></div>

                        {/* Image with sophisticated blending */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-40 mix-blend-luminosity transform scale-100"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />

                        {/* Sophisticated Gradient Mask */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-2xl transform transition-all duration-1000 translate-y-0 motion-reduce:transition-none">
                                {index === currentSlide && (
                                    <div className="animate-fade-in-up">
                                        <div className="flex items-center space-x-3 mb-6">
                                            <div className="h-[2px] w-12 bg-brand-primary animate-pulse"></div>
                                            <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-80">Ingeniería de Software</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-[0.9] sm:leading-[0.85] drop-shadow-2xl uppercase">
                                            {service.id === 1 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Sistema de Gestión</span>
                                                    <span className="block">ANÁLISIS QUÍMICO DE MINERALES</span>
                                                </>
                                            ) : service.id === 2 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">PREPARACIÓN</span>
                                                </>
                                            ) : service.id === 3 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">VIA SECA</span>
                                                </>
                                            ) : service.id === 4 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">VIA HUMEDA</span>
                                                </>
                                            ) : service.id === 5 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">INSTRUMENTACIÓN</span>
                                                </>
                                            ) : service.id === 6 ? (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block">PRUEBAS METALURGICAS</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="block text-xl md:text-2xl font-bold opacity-70 tracking-normal mb-1">Área</span>
                                                    <span className="block text-2xl sm:text-4xl md:text-6xl">CONSULTORIA</span>
                                                </>
                                            )}
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-10 font-medium max-w-xl leading-relaxed drop-shadow-lg opacity-90 border-l-2 border-brand-primary pl-4 sm:pl-6">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                            <a href="/servicios" className="group/btn relative overflow-hidden bg-brand-primary text-white font-black py-3 px-6 sm:py-4 sm:px-10 rounded-xl transition-all shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 active:scale-95 text-center text-sm sm:text-base">
                                                <span className="relative z-10">DESCUBRIR SERVICIOS</span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                            </a>
                                            <a href="/contactenos" className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-black py-3 px-6 sm:py-4 sm:px-10 rounded-xl transition-all hover:-translate-y-1 active:scale-95 text-center text-sm sm:text-base">
                                                CONTÁCTANOS
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons al estilo de la imagen */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-8 z-20 transform -translate-y-1/2 bg-transparent border border-white/40 hover:border-white text-white w-10 h-10 flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-0"
                aria-label="Previous Slide"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-8 z-20 transform -translate-y-1/2 bg-transparent border border-white/40 hover:border-white text-white w-10 h-10 flex items-center justify-center transition-all focus:outline-none backdrop-blur-sm group-hover:opacity-100 opacity-0 md:opacity-0"
                aria-label="Next Slide"
            >
                <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>

            {/* Puntos Minimalistas Centrados, Circulares y más separados */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-6 items-center">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'w-3 h-3 bg-white scale-110' 
                                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                    >
                        {/* Span invisible para aumentar el área clickeable sin dañar el diseño */}
                        <span className="absolute -inset-3"></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServicesSlider;