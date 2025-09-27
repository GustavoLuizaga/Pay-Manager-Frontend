export function ConfirmDeletedModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg text-center font-semibold">Confirmar eliminación</h3>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="text-sm text-gray-600 text-center">¿Estás seguro de que deseas eliminar este elemento?</p>
                        <p className="text-xs text-red-500 text-center">Esta acción no se puede deshacer.</p>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-[#1A1A1A] hover:text-white border border-[#1A1A1A] hover:bg-[#1A1A1A] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#1A1A1A] dark:text-[#1A1A1A] dark:hover:text-white dark:hover:bg-[#1A1A1A] dark:focus:ring-gray-700"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 dark:border-red-700"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
