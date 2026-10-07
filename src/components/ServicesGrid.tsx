import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id: 1,
        title: "MIS NEGOCIOS",
        subtitle: "(SUCURSALES Y CONFIGURACIÓN)",
        description: "Administra uno o varios negocios desde un solo panel: datos básicos, horario de atención, sucursales, servicios y precios.",
        image: "/images/gestion_negocios.png",
        link: "/servicios#mis-negocios"
    },
    {
        id: 2,
        title: "CALENDARIO",
        subtitle: "(VISTA DÍA Y SEMANA)",
        description: "Visualiza todas las citas próximas filtradas por sucursal o por staff, con estados claros: confirmada, en curso, completada o no-show.",
        image: "/images/calendario_citas.png",
        link: "/servicios#calendario"
    },
    {
        id: 3,
        title: "RESERVAR Y ADMINISTRAR",
        subtitle: "(GESTIÓN DE CITAS)",
        description: "Crea citas manualmente desde el panel o deja que tus clientes reserven solos, siempre mostrando solo los horarios realmente disponibles.",
        image: "/images/reserva_citas.png",
        link: "/servicios#citas"
    },
    {
        id: 4,
        title: "GESTIÓN DE STAFF",
        subtitle: "(SERVICIOS POR COLABORADOR)",
        description: "Asigna qué servicios puede realizar cada colaborador, define su disponibilidad propia y controla negocios generalistas o especializados.",
        image: "/images/gestion_staff.png",
        link: "/servicios#staff"
    },
    {
        id: 5,
        title: "PRIORIDAD AUTOMÁTICA",
        subtitle: "(EMERGENCIAS Y REORDENAMIENTO)",
        description: "El sistema reordena la agenda automáticamente ante emergencias o tardanzas, y notifica a los clientes afectados sin intervención manual.",
        image: "/images/prioridad_automatica.png",
        link: "/servicios#prioridad"
    },
    {
        id: 6,
        title: "BOT DE WHATSAPP",
        subtitle: "(CANAL INFORMATIVO Y RESERVA)",
        description: "Resuelve dudas de tus clientes sobre servicios y precios, y permite agendar citas directamente desde WhatsApp, sin salir de la conversación.",
        image: "/images/bot_whatsapp.png",
        link: "/servicios#whatsapp"
    }
];

/**
 * Componente que muestra los módulos principales del sistema en una cuadrícula.
 * Cada módulo incluye una imagen con efectos visuales técnicos y un enlace a detalles.
 */
const ServicesGrid = () => {
    return (
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 xl:max-w-5xl 2xl:max-w-7xl mx-auto">
            {services.map((service) => (
                <div key={service.id} className="flex flex-col bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group">
                    <div className="h-64 w-full relative overflow-hidden bg-brand-surface rounded-t-2xl">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-1000 ease-in-out"
                        />
                        {/* Clinical Scan Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                        {/* Technical Metadata */}
                        <div className="absolute top-4 right-4 text-[8px] font-bold text-white/40 tracking-[0.2em] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            MOD_CODE: {service.id}00X
                        </div>
                        <div className="absolute bottom-4 left-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="w-1 h-1 bg-brand-primary"></div>
                            <div className="w-4 h-[1px] bg-brand-primary self-center"></div>
                        </div>
                    </div>

                    <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight leading-tight uppercase group-hover:text-brand-primary transition-colors duration-500">
                                {service.title}
                            </h3>
                            {service.subtitle && (
                                <span className="text-[10px] font-black text-brand-primary block mt-1 tracking-[0.2em] uppercase">{service.subtitle}</span>
                            )}
                            <p className="mt-5 text-sm text-gray-500 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href={service.link}
                                className="group/btn relative inline-flex items-center justify-center w-full py-4 px-6 text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden"
                            >
                                {/* Technical Brackets */}
                                <span className="absolute left-0 top-0 h-4 w-[1px] bg-brand-primary group-hover/btn:h-full transition-all duration-500"></span>
                                <span className="absolute left-0 top-0 w-4 h-[1px] bg-brand-primary group-hover/btn:w-full transition-all duration-500"></span>
                                <span className="absolute right-0 bottom-0 h-4 w-[1px] bg-brand-primary group-hover/btn:h-full transition-all duration-500"></span>
                                <span className="absolute right-0 bottom-0 w-4 h-[1px] bg-brand-primary group-hover/btn:w-full transition-all duration-500"></span>

                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">
                                    Ver Detalles
                                </span>

                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="relative z-10 ml-4 h-3 w-3 group-hover/btn:text-white transform group-hover/btn:translate-x-2 transition-all duration-500"
                                />

                                {/* Background fill on hover (Red for high contrast with White text) */}
                                <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;