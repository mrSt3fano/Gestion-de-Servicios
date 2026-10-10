import React, { useState } from 'react';

interface NavbarProps {
    pathname?: string;
}

const Navbar = ({ pathname = '/' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const getLinkClass = (path: string, mobile = false) => {
        const baseClass = mobile
            ? "block px-4 py-2.5 rounded-lg text-base font-bold transition-all"
            : "px-3 py-2 rounded-md text-base font-bold transition-colors";

        const activeClass = isActive(path)
            ? "text-cyan-400"
            : "text-white hover:text-cyan-400";

        return `${baseClass} ${activeClass}`;
    };

    return (
        <nav className="bg-black/40 backdrop-blur-xl border-b border-white/10 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Sección del Logo (Reemplazado por Imagen) */}
                    <div className="flex-1 flex justify-start items-center">
                        <a href="/" className="flex items-center">
                            <img 
                                src="/images/lobia1.png" 
                                alt="Logo LOBIA TEC" 
                                className="h-30 w-auto object-contain"
                                onError={(e) => {
                                    /* Texto de respaldo por si la imagen no carga */
                                    (e.target as HTMLElement).style.display = 'none';
                                    (e.target as HTMLElement).nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <span className="hidden fuente-titulos uppercase tracking-widest font-bold text-xl">LOBIA TEC</span>
                        </a>
                    </div>

                    <div className="hidden lg:flex flex-1 justify-center items-center space-x-2 xl:space-x-4">
                        <a href="/" className={getLinkClass('/')}>Inicio</a>
                        <a href="/nosotros" className={getLinkClass('/nosotros')}>Nosotros</a>
                        <a href="/servicios" className={getLinkClass('/servicios')}>Servicios</a>
                        <a href="/beta" className={getLinkClass('/beta')}>Contacto</a>
                    </div>

                    <div className="flex-1 flex justify-end items-center">
                        <div className="hidden lg:block">
                            <a href="/beta" className="px-6 py-2.5 rounded-xl text-base font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-900 transition-colors shadow-md">
                                Únete a la Beta
                            </a>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 hover:bg-white/5 focus:outline-none transition-colors"
                            >
                                <span className="sr-only">Abrir menú</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl">
                        <a href="/" className={getLinkClass('/', true)}>Inicio</a>
                        <a href="/nosotros" className={getLinkClass('/nosotros', true)}>Nosotros</a>
                        <a href="/servicios" className={getLinkClass('/servicios', true)}>Servicios</a>
                        <a href="/beta" className={getLinkClass('/beta', true)}>Contacto</a>
                        <a href="/beta" className="block px-4 py-3 mx-2 my-2 rounded-xl text-base font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-900 transition-colors shadow-md">
                            Únete a la Beta
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;