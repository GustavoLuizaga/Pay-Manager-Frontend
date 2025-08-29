
import { useEffect, useState } from "react";
import { OutstandingBalance } from "../components/OustandingBalance";

export function OutstandingBalancePage() {

   const [balanceCards, setBalanceCards] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       const response = await fetch('http://localhost:8080/outstanding-balance');
       const data = await response.json();
       setBalanceCards(data.data);
     };
     fetchData();
   }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Saldos Pendientes</h2>
      {
        balanceCards?.length > 0 ? (
          <OutstandingBalance balanceCards={balanceCards} />
        ) : (
          <p>No hay saldos pendientes.</p>
        )
      }
    </>
  );
}
