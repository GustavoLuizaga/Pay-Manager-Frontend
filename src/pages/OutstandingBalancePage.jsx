import { useState } from "react";
import { OutstandingBalance } from "../components/OustandingBalance";
import { TfiSearch } from "react-icons/tfi";
import dataMock from "../mocks/dataMock.json";

export function OutstandingBalancePage() {
  const [balanceCards, setBalanceCards] = useState(dataMock.data || []);
  const [originalCards, setOriginalCards] = useState(dataMock.data || []); // Guardar datos originales
  const [query, setQuery] = useState("");

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

  return (
    <section>
      <div className="flex justify-end items-center mb-6 gap-4">
        <form className="flex items-center w-full sm:w-auto" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <TfiSearch className="text-gray-500" />
            </div>
            <input 
              type="text"
              id="simple-search"
              value={query} 
              onChange={handleChange}
              className="border border-bg-gray-800 text-sm rounded-lg block ps-10 p-2.5 w-full"
              placeholder="Buscar por nombre..."
            />
          </div>
          <button 
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-[#1A1A1A] rounded-lg border border-[#1A1A1A] hover:bg-[#1A1A1A]/90 focus:ring-4 focus:outline-none"
          >
            <TfiSearch className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-bold mb-6">Saldos Pendientes</h2>

      {balanceCards?.length > 0 ? (
        <OutstandingBalance balanceCards={balanceCards} />
      ) : (
        <p>No hay saldos pendientes que coincidan con tu búsqueda.</p>
      )}
    </section>
  );
}