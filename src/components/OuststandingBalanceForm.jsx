
export function OutstandingBalanceForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-2">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" className="border rounded px-2 py-1" />

                    <label htmlFor="description">Descripción</label>
                    <input type="text" id="description" className="border rounded px-2 py-1" />

                    <label htmlFor="full-name">Nombre completo</label>
                    <input type="text" id="full-name" className="border rounded px-2 py-1" />

                    <label htmlFor="date-end">Fecha de finalización</label>
                    <input type="date" id="date-end" className="border rounded px-2 py-1" />

                    <label htmlFor="amount">Monto</label>
                    <input type="number" id="amount" className="border rounded px-2 py-1" />
                    
                    <div className="flex justify-end gap-2 mt-2">
                        <button type="button" onClick={onClose} className="px-4 py-1 rounded bg-gray-200 hover:bg-gray-300">Cancelar</button>
                        <button type="submit" className="px-4 py-1 rounded bg-green-500 text-white hover:bg-green-600">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
