import { useEffect, useState } from "react";
import { OutstandingBalance } from "../components/OustandingBalance";

export function OutstandingBalancePage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/outstanding-balances");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Saldos Pendientes</h2>

      {
        data?.length > 0 ? (
          <OutstandingBalance balanceCards={data} />
        ) : (
          <p>No hay saldos pendientes.</p>
        )
      }
    </>
  );
}
