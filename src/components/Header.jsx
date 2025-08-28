import { FaHome, FaUsers, FaMoneyBillWave, FaChartBar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
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
        <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] backdrop-blur-md shadow-lg text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">PayManager</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FaHome className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FaUsers className="w-5 h-5" />
                        Clientes
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FaMoneyBillWave className="w-5 h-5" />
                        Pagos
                    </a>
                    <a href="#" className="flex items-center gap-1 hover:text-blue-400">
                        <FaChartBar className="w-5 h-5" />
                        Reportes
                    </a>
                </nav>

                <div className="flex items-center gap-2 md:gap-0">
                    <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium sm:font-semibold whitespace-nowrap">
                        <IoIosAddCircle className="w-4 h-4 sm:w-5 sm:h-5"/>
                        <span className="hidden xs:inline">Añadir nuevo pago</span>
                        <span className="xs:hidden">Añadir nuevo pago</span>
                    </button>
                    
                    <button 
                        className="md:hidden ml-2 text-white focus:outline-none" 
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
                <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800">
                    <div className="px-4 py-3 space-y-3">
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-800 rounded-md">
                            <FaHome className="w-5 h-5" />
                            Dashboard
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-800 rounded-md">
                            <FaUsers className="w-5 h-5" />
                            Clientes
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-800 rounded-md">
                            <FaMoneyBillWave className="w-5 h-5" />
                            Pagos
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm py-2 px-3 hover:bg-gray-800 rounded-md">
                            <FaChartBar className="w-5 h-5" />
                            Reportes
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}