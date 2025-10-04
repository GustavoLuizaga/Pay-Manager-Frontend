
import { useState } from "react";

export function OutstandingBalanceForm({ isOpen, onClose, onAddBalance }) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fullName: '',
        dateEnd: '',
        mount: '',
        balance: '',
        state: false,
        floatingField: ''
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
            state: false,
            floatingField: ''
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
            balance: parseFloat(formData.mount),
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-auto transform transition-all">
                {/* Header con icono */}
                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xl font-bold">+</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">Nuevo Saldo</h3>
                    <p className="text-sm text-gray-500">Complete la información para agregar un saldo</p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className={`block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-2 transition-all duration-300 peer ${errors.title
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                                    : 'border-gray-200 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10'
                                }`}
                            placeholder=" "
                        />
                        <label
                            htmlFor="title"
                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium ${errors.title ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-600 peer-focus:text-[#1A1A1A]'
                                }`}
                        >
                            Título
                        </label>
                        {errors.title && (
                            <div className="flex items-center mt-1.5">
                                <span className="text-red-500 text-xs mr-1">⚠</span>
                                <p className="text-red-500 text-xs">{errors.title}</p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className={`block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-2 transition-all duration-300 peer ${errors.fullName
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                                    : 'border-gray-200 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10'
                                }`}
                            placeholder=" "
                        />
                        <label
                            htmlFor="fullName"
                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium ${errors.fullName ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-600 peer-focus:text-[#1A1A1A]'
                                }`}
                        >
                            Nombre completo
                        </label>
                        {errors.fullName && (
                            <div className="flex items-center mt-1.5">
                                <span className="text-red-500 text-xs mr-1">⚠</span>
                                <p className="text-red-500 text-xs">{errors.fullName}</p>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="date"
                            id="dateEnd"
                            name="dateEnd"
                            value={formData.dateEnd}
                            onChange={handleChange}
                            required
                            className={`block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-2 transition-all duration-300 peer ${errors.dateEnd
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                                    : 'border-gray-200 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10'
                                }`}
                        />
                        <label
                            htmlFor="dateEnd"
                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium ${errors.dateEnd ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-600 peer-focus:text-[#1A1A1A]'
                                }`}
                        >
                            Fecha de finalización
                        </label>
                        {errors.dateEnd && (
                            <div className="flex items-center mt-1.5">
                                <span className="text-red-500 text-xs mr-1">⚠</span>
                                <p className="text-red-500 text-xs">{errors.dateEnd}</p>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            id="mount"
                            name="mount"
                            value={formData.mount}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            required
                            className={`block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-2 transition-all duration-300 peer ${errors.mount
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                                    : 'border-gray-200 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10'
                                }`}
                            placeholder=" "
                        />
                        <label
                            htmlFor="mount"
                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium ${errors.mount ? 'text-red-500 peer-focus:text-red-500' : 'text-gray-600 peer-focus:text-[#1A1A1A]'
                                }`}
                        >
                            Monto en Bs
                        </label>
                        {errors.mount && (
                            <div className="flex items-center mt-1.5">
                                <span className="text-red-500 text-xs mr-1">⚠</span>
                                <p className="text-red-500 text-xs">{errors.mount}</p>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="block px-3 pb-2.5 pt-4 w-full text-sm text-[#1A1A1A] bg-transparent rounded-lg border-2 border-gray-200 appearance-none focus:outline-none focus:ring-2 focus:border-[#1A1A1A] focus:ring-[#1A1A1A]/10 transition-all duration-300 peer resize-none"
                            placeholder=" "
                        />
                        <label
                            htmlFor="description"
                            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#1A1A1A] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 font-medium"
                        >
                            Descripción
                        </label>
                    </div>
                    <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 px-4 py-2.5 text-sm font-medium text-red-600 bg-white border-2 border-red-500 rounded-lg hover:bg-red-600
                            hover:text-white hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 active:transform active:scale-95 transition-all duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
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
