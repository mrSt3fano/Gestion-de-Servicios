import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faMicroscope, faVial, faIndustry, faCogs, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        slug: 'preparacion-mecanica',
        title: 'PREPARACIÓN MECÁNICA',
        description: 'Preparación mecánica de muestras de minerales, concentrados, relaves y pulpas mediante cuarteo, trituración, pulverización y control granulométrico',
        icon: faIndustry,
        image: '/images/preparacion_muestras.png',
        features: ['PREPARACIÓN DE MUESTRAS: Minerales, concentrados, relaves y pulpas.', 'TRITURACIÓN Y PULVERIZACIÓN: Reducción de tamaño con alta precisión.', 'CONTROL DE CALIDAD (QA/QC): Control granulométrico y limpieza de equipos.', 'HOMOGENIZACIÓN Y CUARTEO: Muestras representativas y confiables.']
    },
    {
        id: 2,
        slug: 'via-seca',
        title: 'VIA SECA',
        description: 'Análisis de oro y plata mediante ensayo al fuego (Fire Assay) con alta precisión y estándares internacionales.',
        icon: faIndustry,
        image: '/images/via_seca2.png',
        features: [
            'ANÁLISIS DE ORO Y PLATA: Determinación precisa por Ensayo al Fuego.', 
            'CONTROL DE CALIDAD QA/QC: Resultados confiables con estándares certificados.',  
            'MUESTRAS GEOQUÍMICAS: Gravimetria y AAS',
            'BULLONES Y RETALLAS: Determinar porcentaje de pureza Au y Ag.',
            'CARBÓN ACTIVADO RICO Y SOLUCIONES: Análisis de Au y Ag por triplicado y soluciones cianuradas por AAS.'          
        ]
    },
    {
        id: 3,
        slug: 'via-humeda',
        title: 'VIA HÚMEDA (VOLUMETRIA)',
        description: 'Ensayos para concentrados de cobre, plomo, zinc y hierro con determinación de elementos de alta ley y resultados confiables para el control de calidad.',
        icon: faVial,
        image: '/images/via_humeda_3.jpg',
        features: [
            'ANÁLISIS VOLUMÉTRICOS: Métodos de alta precisión para minerales de alta ley.', 
            'ALTA LEY Y CONCENTRADOS: Análisis de Cu, Pb, Zn, Fe.', 
            'MUESTRAS GEOQUÍMICAS: Ensayos confiables mediante digestión ácida.', 
            'CALIDAD GARANTIZADA: Control QA/QC con resultados precisos.']
       
    },
    {
        id: 4,        
        slug: 'area-instrumental',
        title: 'INSTRUMENTACIÓN',
        description: 'Ensayos por instrumentación con Absorción Atómica, ICP-OES y UV-VIS para análisis multielemental de minerales, concentrados, muestras geoquímicas y soluciones.',
        icon: faMicroscope,
        image: '/images/absorcion_atomica.jpg',
        features: [
            'ANÁLISIS POR INSTRUMENTACIÓN: Absorción Atómica, ICP-OES y UV-VIS.', 
            'ANÁLISIS MULTIELEMENTAL: Au, Ag, Cu, Zn, Pb y otros elementos.', 
            'MUESTRAS GEOQUÍMICAS: Minerales, cateos y exploraciones.', 
            'CALIDAD GARANTIZADA: Resultados precisos con estándares QA/QC.']
    },
    {
        id: 5,
        slug: 'pruebas-metalurgicas',
        title: 'PRUEBAS METALÚRGICAS E INVESTIGACIÓN',
        description: 'Pruebas metalúrgicas de flotación, cianuración, gravimetría y Falcon para optimizar la recuperación de oro, cobre y minerales polimetálicos.',
        icon: faFlask,
        image: '/images/pruebas_metalurgicas1.png',
        features: [
            'CARACTERIZACIÓN DEL MINERAL: Análisis químico, mineralógico, microscopía óptica y grado de liberación.', 
            'SEPARACIÓN SÓLIDO-LÍQUIDO: Pruebas de sedimentación y evaluación del comportamiento de pulpas.',
            'FLOTACIÓN: Pruebas batch, cerradas, cíclicas y cinéticas para Au, Ag y polimetálicos.', 
            'MOLIENDA Y CLASIFICACIÓN: Pruebas de moliendabilidad y cálculo de Work Index.', 
            'CONCENTRACIÓN GRAVIMÉTRICA: Pruebas con Knelson, Falcon y mesa gravimétrica.',
            'CIANURACIÓN: Evaluación de recuperación, cinética y consumo de reactivos.'  ]
    },
    {
        id: 6,
        slug: 'consultoria-asesoria',
        title: 'CONSULTORIA - ASESORIA',
        description: 'Consultoria en desarrollo de software a la medida para negocios que requieran automatizar sus procesos.',
        icon: faCogs,
        image: '/images/consultoria.jpg', // Temporary placeholder
        features: [
            'ASESORIA Y CONSULTORIA: De procesos metalúrgicos, Cianuración y Flotación.', 
            'CONSULTORÍA METALÚRGICA: Asesoría técnica para procesos y plantas mineras.', 
            'MUESTREO DE MINERALES: Evaluación y diseño de planes de muestreo.', 
            'OPTIMIZACIÓN DE PROCESOS: Soporte técnico para nuevos proyectos y operaciones.',
            'ANÁLISIS QUÍMICO: Interpretación de resultados, control de calidad, minerales complejos']
    }
];

/**
 * Componente que muestra una lista detallada de servicios con imágenes y características.
 * Cada servicio tiene un ID para navegación interna mediante anclas.
 */
const ServicesList = () => {
    return (
        <div className="bg-white py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 md:space-y-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.slug}
                            className={`flex flex-col lg:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-28`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 sm:h-80 lg:h-[28rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                                <div className="flex items-center space-x-3 md:space-x-4">
                                    <div className="p-2 md:p-3 bg-brand-primary rounded-lg text-white shadow-lg flex-shrink-0">
                                        <FontAwesomeIcon icon={service.icon} className="h-6 w-6 md:h-8 md:w-8" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                                </div>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-gray-50 p-5 md:p-6 rounded-xl border-l-4 border-brand-primary">
                                    <h4 className="font-bold text-gray-900 mb-4 text-sm md:text-base">CARACTERÍSTICAS CLAVE:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 text-xs md:text-sm">
                                                <FontAwesomeIcon icon={faArrowRight} className="h-2.5 w-2.5 md:h-3 md:w-3 text-brand-accent mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesList;
