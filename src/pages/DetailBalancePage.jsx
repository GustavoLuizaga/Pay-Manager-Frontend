import { useParams, useLocation } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";

export function DetailBalancePage() {
    const { id } = useParams(); 
    const { state } = useLocation();

    // Extraer todos los datos del state
    const {
        mount,
        pending,
        payBalances
    } = state || {};

    console.log('ID:', id);
    console.log('Datos recibidos:', state);

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
            <div className="w-full md:max-w-2xl mx-auto flex flex-col gap-1 text-center rounded-lg p-4 bg-white shadow-xs border border-gray-100">
                <span className="text-xs text-gray-600">
                    Saldo pendiente
                </span>

                <span className="text-3xl font-bold">
                    Bs {pending}
                </span>

                <span className="text-sm rounded-xl py-1 px-3 mt-2 bg-blue-400/15 text-blue-600 font-semibold w-fit mx-auto">
                    Monto total <strong>Bs {mount}</strong>
                </span>
            </div>

            <section className="p-4 mt-6 w-full max-w-2xl">
                <span className="text-md font-semibold mb-4 block">
                    Pagos recientes
                </span>

                {
                    payBalances?.length > 0 ? (
                        <ul>
                            {payBalances.map((payment) => (
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