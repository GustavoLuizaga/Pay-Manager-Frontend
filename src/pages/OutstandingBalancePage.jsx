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

      {/* Boarding Pass Design - Copia exacta */}
      <section className="bg-[#1A1A1A] text-white rounded-2xl p-6 mb-8 shadow-lg max-w-md mx-auto">
        {/* Header con ciudades */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-left">
            <div className="text-sm text-gray-400">Gestiona tus saldos</div>
            <div className="text-2xl font-bold">CGK</div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Warsawa</div>
            <div className="text-2xl font-bold">WAW</div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Información en grid */}
        <div className="grid grid-cols-4 gap-4 text-center mb-6">
          <div>
            <div className="text-xs text-gray-400 mb-1">Class</div>
            <div className="text-sm font-semibold">Economy</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Terminal</div>
            <div className="text-sm font-semibold">F2</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Gate</div>
            <div className="text-sm font-semibold">32</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Seat</div>
            <div className="text-sm font-semibold">8A</div>
          </div>
        </div>

        {/* Sección check-in */}
        <button onClick={handleOpenForm} className="w-full bg-green-500 text-white rounded-lg py-3 font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
          <FiPlus className="w-6 h-6" />
          Añadir nuevo saldo
        </button>
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