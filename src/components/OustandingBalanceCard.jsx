
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { useState } from "react";
import { PayModal } from "./PayModal";

export function OutstandingBalanceCard({ title, fullName, endDate, totalAmount, pendingAmount, status, description }) {
    const [completed, setCompleted] = useState(status);
    const [isOpen, setIsOpen] = useState(false);
    //const [balance, setBalance] = useState(pendingAmount);


    const handleRegisterPayment = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="w-full rounded-xl p-4 shadow-md">
            <header className="flex justify-between items-center">
                <h3 className="text-lg text-wrap line-clamp-2 font-bold">{title}</h3>
                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${completed
                    ? "bg-red-400/10 text-red-500 inset-ring inset-ring-red-500/20"
                    : "bg-green-400/10 text-green-500 inset-ring inset-ring-green-500/20"
                    }`}>
                    {completed ? "Pendiente" : "Completo"}
                </span>
            </header>
            <main className="mt-4">
                <p className="mb-2 text-sm line-clamp-3 text-wrap">{description}</p>
                <div className="flex flex-col mt-2">
                    <span className="self-start rounded-md bg-[#F2F2F2] font-semibold px-2 py-1 inline-flex items-center gap-1.5 text-sm">
                        <FaUser className="text-gray-500 text-base" />
                        <span>{fullName}</span>
                    </span>
                    <div className="flex justify-between mt-1">
                        <dl>
                            <dd className="inline-flex items-center gap-1.5 rounded-md bg-[#F2F2F2] px-2 py-1 font-semibold text-sm">
                                <FaCalendar className="text-gray-500 text-base" />
                                <span>{endDate}</span>
                            </dd>
                            <dt className="text-sm text-[#616161] px-2">Fecha limite</dt>
                        </dl>
                        <dl className="">
                            <dd className="inline-flex items-center gap-1.5 rounded-md bg-[#F2F2F2] px-2 py-1 font-medium text-sm">
                                <FaMoneyBill className="text-gray-500 text-base" />
                                <span>Bs {totalAmount}</span>
                            </dd>
                            <dt className="text-sm text-[#767676] px-2">Monto total</dt>
                        </dl>
                    </div>
                </div>
                <hr className="w-full h-px bg-gray-200 border-0 mt-2 my-2" />
                <footer className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col px-1">
                        <span className="text-xl font-medium">Bs {pendingAmount}</span>
                        <span className="text-sm text-[#767676]">Saldo pendiente</span>

                    </div>
                    <button className="bg-[#1A1A1A] text-sm text-white py-2 px-4 rounded-md hover:bg-[#1A1A1A]/85 hover:scale-105 transition-all"
                        onClick={handleRegisterPayment}>Registrar pago</button>
                </footer>
            </main>
            <PayModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                changeStatus={() => setCompleted(!completed)}
            />
        </div>

    );
}
