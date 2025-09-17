
import { useState } from "react";

export function OutstandingBalanceForm({ isOpen, onClose, onAddBalance }) {
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fullName: '',
        dateEnd: '',
        mount: '',
        balance: '',
        state: false
    });

    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'El título es requerido';
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'El nombre completo es requerido';
        }

        if (!formData.dateEnd) {
            newErrors.dateEnd = 'La fecha de finalización es requerida';
        }

        if (!formData.mount || formData.mount <= 0) {
            newErrors.mount = 'El monto debe ser mayor a 0';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            fullName: '',
            dateStart: '',
            dateEnd: '',
            mount: '',
            state: false
        });
        setErrors({});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }
        const newBalance = {
            dateStart: new Date().toISOString().split('T')[0],
            dateEnd: formData.dateEnd,
            title: formData.title,
            description: formData.description || 'Sin descripción',
            fullName: formData.fullName,
            mount: parseFloat(formData.mount),
            state: false
        };

        if (onAddBalance) {
            onAddBalance(newBalance);
        }

        resetForm();
        onClose();
    };

    const handleCancel = () => {
        resetForm();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-2">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Agregar Nuevo Saldo</h3>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Título *
                        </label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`border rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                errors.title ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Ej: Pago de servicio"
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <input 
                            type="text" 
                            id="description" 
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Descripción opcional..."
                        />
                    </div>

                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo *
                        </label>
                        <input 
                            type="text" 
                            id="fullName" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`border rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                errors.fullName ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Nombre de la persona"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                        <label htmlFor="dateEnd" className="block text-sm font-medium text-gray-700 mb-1">
                            Fecha de finalización *
                        </label>
                        <input 
                            type="date" 
                            id="dateEnd" 
                            name="dateEnd"
                            value={formData.dateEnd}
                            onChange={handleChange}
                            className={`border rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                errors.dateEnd ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.dateEnd && <p className="text-red-500 text-xs mt-1">{errors.dateEnd}</p>}
                    </div>

                    <div>
                        <label htmlFor="mount" className="block text-sm font-medium text-gray-700 mb-1">
                            Monto *
                        </label>
                        <input 
                            type="number" 
                            id="mount" 
                            name="mount"
                            value={formData.mount}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            className={`border rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
                                errors.mount ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="0.00"
                        />
                        {errors.mount && <p className="text-red-500 text-xs mt-1">{errors.mount}</p>}
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="text-white bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Agregar Saldo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
