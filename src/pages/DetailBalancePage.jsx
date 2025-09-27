import {  useParams } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useEffect, useState } from "react";
import BASE_URL from "../UrlBase";


export function DetailBalancePage() {
    const { id } = useParams();
    const [dataBalance, setDataBalance] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/outstanding-balance/${id}`);
                const data = await response.json();
                setDataBalance(data.data);
            } catch (error) {
                console.error('Error fetching balance data:', error);
            }
        };

        fetchData();
    }, [id]);

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



    return (
        <div className="flex flex-col items-center mx-auto">
            <section className="w-full md:max-w-2xl mx-auto bg-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-lg border border-gray-800">
                {/* Header con etiqueta */}
                <div className="text-center mb-6">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                        Saldo pendiente
                    </span>
                </div>

                {/* Cantidad principal */}
                <div className="text-center mb-8">
                    <span className="text-4xl md:text-5xl font-bold text-white block">
                        Bs {dataBalance?.balance || 0}
                    </span>
                </div>

                {/* Información secundaria */}
                <div className="text-center">
                    <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm text-gray-300">
                            Monto total: 
                        </span>
                        <span className="text-sm font-semibold text-white ml-1">
                            Bs {dataBalance?.mount || 0}
                        </span>
                    </div>
                </div>
            </section>

            <section className="p-4 mt-6 w-full max-w-2xl">
                <span className="text-md font-semibold mb-4 block">
                    Pagos recientes
                </span>

                {
                    dataBalance?.payBalances?.length > 0 ? (
                        <ul>
                            {dataBalance.payBalances.map((payment) => (
                                <li key={payment.id} className="py-2 flex items-center gap-3">
                                    <div className="rounded-full bg-green-100 p-1 mr-2 flex items-center justify-center w-8 h-8">
                                        <IoIosArrowRoundUp className="text-green-500 w-5 h-5" />
                                    </div>
                                    <p className="flex flex-col">
                                        <span className="font-semibold text-sm">
                                            Pago realizado en {payment.payType}
                                        </span>
                                        <span className="text-sm text-gray-500 ">
                                            {formatDate(payment.datePay)}
                                        </span>
                                    </p>
                                    <span className="ml-auto  text-green-500 flex items-center font-medium gap-1">
                                        +Bs {payment.mountPay}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No hay pagos recientes.</p>
                    )
                }

            </section>
        </div>
    );
}