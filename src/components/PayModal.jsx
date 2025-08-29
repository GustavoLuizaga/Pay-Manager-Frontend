export function PayModal({ isOpen, onClose, changeStatus }) {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
        changeStatus();
        // Handle payment registration logic here
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
                            placeholder="Monto" 
                            className="border border-gray-300 rounded-md px-3 py-2 w-full" 
                        />
                    </div>
                    
                    <div className="flex justify-between">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit"
                            className="bg-[#1A1A1A] text-sm text-white px-4 rounded-md hover:bg-[#1A1A1A]/85 transition-all"
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