import { useState } from "react";
import BASE_URL from "../UrlBase";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineQrCode2 } from "react-icons/md";
import { PiMoneyThin } from "react-icons/pi";

export function PayModal({ isOpen, onClose, outstandingID, setBalanceCards }) {
    const [formData, setFormData] = useState({
        mount: '',
        paymentMethod: 'efectivo'
    });


    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPayment = {
            datePay: new Date().toISOString().split('T')[0],
            mountPay: formData.mount,
            payType: formData.paymentMethod,
        };

        await fetch(`${BASE_URL}/pay-balance/${outstandingID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPayment)
        });



        onClose();
        setBalanceCards();

    };

    return (
        <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
        >
            <div 
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <form className="flex flex-col gap-4">
                    <h3 className="text-lg text-center font-semibold">Registrar pago</h3>
                    <div className="flex flex-col justify-between gap-2">

                        <div>
                            <span className="text-sm font-medium text-gray-700 mb-3 block">Método de pago:</span>
                            
                            <div className="grid grid-cols-3 gap-2">
                                <div className={`relative rounded-lg border-2 p-3 cursor-pointer transition-all duration-300 ${
                                    formData.paymentMethod === "efectivo" 
                                        ? 'border-[#1A1A1A] bg-[#1A1A1A]' 
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}>
                                    <input 
                                        type="radio" 
                                        id="efectivo" 
                                        name="paymentMethod" 
                                        value="efectivo" 
                                        checked={formData.paymentMethod === "efectivo"} 
                                        onChange={handleChange}
                                        className="sr-only"
                                        style={{ accentColor: '#1A1A1A' }}
                                    />
                                    <label htmlFor="efectivo" className="cursor-pointer flex flex-col items-center gap-2">
                                        <PiMoneyThin className={`w-5 h-5 ${
                                            formData.paymentMethod === "efectivo" 
                                                ? 'text-green-300' 
                                                : 'text-green-600'
                                        }`} />
                                        <span className={`text-xs font-medium text-center ${
                                            formData.paymentMethod === "efectivo" 
                                                ? 'text-white' 
                                                : 'text-gray-700'
                                        }`}>Efectivo</span>
                                    </label>
                                </div>

                                <div className={`relative rounded-lg border-2 p-3 cursor-pointer transition-all duration-300 ${
                                    formData.paymentMethod === "qr" 
                                        ? 'border-[#1A1A1A] bg-[#1A1A1A]' 
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}>
                                    <input 
                                        type="radio" 
                                        id="qr" 
                                        name="paymentMethod" 
                                        value="qr" 
                                        checked={formData.paymentMethod === "qr"} 
                                        onChange={handleChange}
                                        className="sr-only"
                                        style={{ accentColor: '#1A1A1A' }}
                                    />
                                    <label htmlFor="qr" className="cursor-pointer flex flex-col items-center gap-2">
                                        <MdOutlineQrCode2 className={`w-5 h-5 ${
                                            formData.paymentMethod === "qr" 
                                                ? 'text-blue-300' 
                                                : 'text-blue-600'
                                        }`} />
                                        <span className={`text-xs font-medium text-center ${
                                            formData.paymentMethod === "qr" 
                                                ? 'text-white' 
                                                : 'text-gray-700'
                                        }`}>QR</span>
                                    </label>
                                </div>

                                <div className={`relative rounded-lg border-2 p-3 cursor-pointer transition-all duration-300 ${
                                    formData.paymentMethod === "transferencia" 
                                        ? 'border-[#1A1A1A] bg-[#1A1A1A]' 
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                }`}>
                                    <input 
                                        type="radio" 
                                        id="transferencia" 
                                        name="paymentMethod" 
                                        value="transferencia" 
                                        checked={formData.paymentMethod === "transferencia"} 
                                        onChange={handleChange}
                                        className="sr-only"
                                        style={{ accentColor: '#1A1A1A' }}
                                    />
                                    <label htmlFor="transferencia" className="cursor-pointer flex flex-col items-center gap-2">
                                        <CiCreditCard1 className={`w-5 h-5 ${
                                            formData.paymentMethod === "transferencia" 
                                                ? 'text-purple-300' 
                                                : 'text-purple-600'
                                        }`} />
                                        <span className={`text-xs font-medium text-center ${
                                            formData.paymentMethod === "transferencia" 
                                                ? 'text-white' 
                                                : 'text-gray-700'
                                        }`}>Transferencia</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                       <div className="relative mt-4">
                        <input
                            type="number"
                            id="mount"
                            name="mount"
                            value={formData.mount}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            required
                            className="block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10 transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="mount"
                            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#1A1A1A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium"
                        >
                            Monto en Bs
                        </label>
                    </div>
                    </div>

                    <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 text-sm font-medium text-red-600 bg-white border-2 border-red-500 rounded-lg hover:bg-red-600
                            hover:text-white hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 active:transform active:scale-95 transition-all duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A]/90 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20 active:transform active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Agregar Saldo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}