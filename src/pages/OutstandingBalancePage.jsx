import { useState } from "react";
import { OutstandingBalance } from "../components/OustandingBalance";
import { FiSearch, FiPlus } from "react-icons/fi";
import dataMock from "../mocks/dataMock.json";
import { OutstandingBalanceForm } from "../components/OuststandingBalanceForm";


export function OutstandingBalancePage() {
  const [balanceCards, setBalanceCards] = useState(dataMock.data || []);
  const [originalCards, setOriginalCards] = useState(dataMock.data || []); // Guardar datos originales
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/outstanding-balance');
  //       const data = await response.json();
  //       setBalanceCards(data.data || []);
  //       setOriginalCards(data.data || []); // Guardar una copia
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleChange = async (e) => {
    const value = e.target.value;
    if (value.startsWith(' ')) return;
    setQuery(value);

    if (value === "") {
      setBalanceCards(originalCards);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query === "") {
      setBalanceCards(originalCards);
      return;
    }

    const dataFiltered = balanceCards.filter(card =>
      card && card.fullName && card.fullName.toLowerCase().includes(query.toLowerCase())
    );

    setBalanceCards(dataFiltered);
  }


  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex justify-end items-center mb-6 gap-4">
        <form className="flex items-center w-full sm:w-auto" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              id="simple-search"
              value={query}
              onChange={handleChange}
              className="bg-gray-100 border border-gray-300 text-sm rounded-lg block ps-10 p-2.5 w-full focus:ring-2 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] transition-colors"
              placeholder="Buscar por nombre..."
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-[#1A1A1A] rounded-lg border border-[#1A1A1A] hover:bg-[#1A1A1A]/90 focus:ring-4 focus:outline-none"
          >
            <FiSearch className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      <section className="bg-[#1A1A1A] text-white mt-8 p-6 rounded-2xl mb-6 w-full sm:w-2xl">
        <div className="flex items-center justify-between">
          {/* Información principal */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-lg font-semibold">Saldos Pendientes</h3>
              <div className="w-px h-6 bg-gray-600"></div>
              <span className="text-sm text-gray-300">Gestión de Pagos</span>
            </div>
            <p className="text-sm text-gray-400">
              Crear un nuevo saldo pendiente para seguimiento
            </p>
          </div>

          {/* Botón de acción */}
          <button
            onClick={handleOpenForm}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all hover:scale-105"
          >
            <FiPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Agregar Saldo</span>
          </button>
        </div>

        {/* Línea decorativa inferior */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <dl>
              <dt>Saldos</dt>
              <dd className="text-center text-white  text-2xl">100</dd>
            </dl>
            <dl>
              <dt>Completos</dt>
              <dd className="text-center text-green-600  text-2xl">50</dd>
            </dl>
            <dl>
              <dt>Pendientes</dt>
              <dd className="text-center text-red-500  text-2xl">25</dd>
            </dl>
          </div>
        </div>
      </section>

      <h2 className="text-xl font-bold mb-6">Saldos Pendientes</h2>
      {balanceCards?.length > 0 ? (
        <OutstandingBalance balanceCards={balanceCards} />
      ) : (
        <p>No hay saldos pendientes que coincidan con tu búsqueda.</p>
      )}
      <OutstandingBalanceForm isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </>
  );
}