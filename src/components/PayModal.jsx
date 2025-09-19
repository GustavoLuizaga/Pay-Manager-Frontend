import { useState } from "react";
import BASE_URL from "../UrlBase";

export function PayModal({ isOpen, onClose,outstandingID,setBalanceCards }) {
    const [formData, setFormData] = useState({
        mount: ''
    });

    
    if (!isOpen) return null;

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({ mount: value });
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPayment = {
            datePay: new Date().toISOString().split('T')[0],
            mountPay: formData.mount,
            payType: "Efectivo",
        };

        await fetch(`${BASE_URL}/pay-balance/${outstandingID}`, {
            method: 'POST',
            headers: {      
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPayment)
        });


        console.log("Registering payment:", newPayment);

        onClose();
        setBalanceCards();

    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <form className="flex flex-col gap-4">
                    <h3 className="text-lg text-center font-semibold">Registrar pago</h3>
                    <div className="flex justify-between gap-2">
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="Monto"
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-700 dark:text-red-700 dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-700"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="text-white bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#1A1A1A] dark:hover:bg-[#1A1A1A] dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={handleSubmit}
                        >
                            Confirmar pago
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}