import { FiHome, FiUsers, FiDollarSign, FiBarChart2, FiPlus } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-md shadow-xs ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">PayManager</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FiHome className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FiUsers className="w-5 h-5" />
                        Clientes
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FiDollarSign className="w-5 h-5" />
                        Pagos
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FiBarChart2 className="w-5 h-5" />
                        Reportes
                    </a>
                </nav>

                <div className="flex items-center gap-2 md:gap-0">
                    <button className="flex items-center gap-2 bg-[#45d055] hover:bg-green-400 text-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium sm:font-semibold whitespace-nowrap">
                        <FiPlus className="w-4 h-4 sm:w-5 sm:h-5"/>
                        <span className="hidden xs:inline">Nuevo pago</span>
                        <span className="xs:hidden">Nuevo pago</span>
                    </button>
                    
                    <button 
                        className="md:hidden ml-2 text-[#1A1A1A] focus:outline-none" 
                        onClick={toggleMenu}
                        aria-label="Menú principal"
                    >
                        {isMenuOpen ? (
                            <HiX className="w-6 h-6" />
                        ) : (
                            <HiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden  border-t border-gray-800">
                    <div className="px-4 py-3 space-y-3">
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-100 rounded-md">
                            <FiHome className="w-5 h-5" />
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-100 rounded-md">
                            <FiUsers className="w-5 h-5" />
                            Clientes
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-100 rounded-md">
                            <FiDollarSign className="w-5 h-5" />
                            Pagos
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-100 rounded-md">
                            <FiBarChart2 className="w-5 h-5" />
                            Reportes
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}