
import { BsCalendarEvent } from "react-icons/bs";
import { useState } from "react";
import { PayModal } from "./PayModal";

export function OutstandingBalanceCard({ id, title, fullName, endDate, totalAmount, pendingAmount, status, description }) {
    const [completed, setCompleted] = useState(status);
    const [isOpen, setIsOpen] = useState(false);

    const handleRegisterPayment = () => {
        setIsOpen(!isOpen);
    }
    const getInitials = (name) => {
        if (!name || typeof name !== 'string') return '??';
        return name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const months = [
            'ene', 'feb', 'mar', 'abr', 'may', 'jun',
            'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    const getDaysUntilDue = () => {
        const today = new Date();
        const dueDate = new Date(endDate);
        const diffTime = dueDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    const daysLeft = getDaysUntilDue();

    return (
        <div className="w-full bg-white rounded-2xl p-3 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative">
            <header className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                    {getInitials(fullName)}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[#1A1A1A] text-md sm:text-base line-clamp-1">{fullName}</h3>
                            <p className="text-xs sm:text-sm text-[#767676]">
                                {daysLeft > 0 ? `Vence en ${daysLeft} días` : daysLeft === 0 ? 'Vence hoy' : `Vencido hace ${Math.abs(daysLeft)} días`}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mb-2 sm:mb-3">
                <h4 className="font-medium text-[#1A1A1A] text-sm sm:text-sm line-clamp-2 mb-1 sm:mb-2">{title}</h4>
                <p className="text-xs sm:text-sm text-[#767676] line-clamp-2">{description}</p>
            </div>

            <div className="flex sm:flex-row sm:flex-wrap gap-2 sm:gap-2 mb-3 sm:mb-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium w-fit ${completed
                    ? "bg-green-400/10 text-green-500"
                    : "bg-red-400/10 text-red-500"
                    }`}>
                    {completed ? "Completo" : "Pendiente"}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#EBEBEB] text-[#1A1A1A] rounded-md text-xs font-medium w-fit">
                    <BsCalendarEvent className="w-3 h-3 text-[#1A1A1A]" />
                    {formatDate(endDate)}
                </span>

            </div>

            <div className="mb-3">
                <div className="sm:text-left">
                    <div className="flex items-baseline gap-1  sm:justify-start">
                        <span className="text-2xl sm:text-2xl font-semibold text-[#1A1A1A]">Bs {pendingAmount}</span>
                        {pendingAmount < totalAmount && (
                            <span className="text-xs sm:text-sm text-[#767676] line-through">Bs {totalAmount}</span>
                        )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#767676]">Saldo pendiente</p>
                </div>
            </div>
            <footer>
                <button
                    className="bg-[#1A1A1A] text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-sm font-medium hover:bg-[#1A1A1A]/85 hover:scale-105 transition-all w-full"
                    onClick={handleRegisterPayment}
                >
                    Registrar pago
                </button>
            </footer>

            <PayModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                changeStatus={() => setCompleted(!completed)}
                outstandingID={id}
            />
        </div>
    );
}
