import { useState } from "react";
import { OutstandingBalance } from "../components/OustandingBalance";
import { FiSearch, FiPlus } from "react-icons/fi";
import dataMock from "../mocks/dataMock.json";
import { OutstandingBalanceForm } from "../components/OuststandingBalanceForm";


export function OutstandingBalancePage() {
  const [balanceCards, setBalanceCards] = useState(dataMock.data || []);
  const [originalCards, setOriginalCards] = useState(dataMock.data || []);
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

  // Función para agregar un nuevo saldo
  const handleAddBalance = (newBalance) => {
    // Agregar el nuevo saldo usando el estado previo
    setBalanceCards(prev => [...prev, newBalance]);
    setOriginalCards(prev => [...prev, newBalance]);
    
    // Si hay una búsqueda activa, mantener el filtro
    if (query) {
      setBalanceCards(prev => 
        prev.filter(card =>
          card && card.fullName && card.fullName.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
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
              placeholder="Buscar un saldo por nombre..."
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
      <section>
        <button onClick={handleOpenForm} className="flex items-center gap-2 mb-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          <FiPlus className="w-4 h-4" />
          <span>Agregar Saldo Pendiente</span>
        </button>
      </section>
      <h2 className="text-xl font-semibold mb-6">Saldos Pendientes</h2>
      {balanceCards?.length > 0 ? (
        <OutstandingBalance balanceCards={balanceCards} />
      ) : (
        <p>No hay saldos pendientes que coincidan con tu búsqueda.</p>
      )}
      <OutstandingBalanceForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(!isOpen)} 
        onAddBalance={handleAddBalance}
      />
    </>
  );
}