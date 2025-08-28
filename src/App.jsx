import { OutstandingBalance } from "./components/OustandingBalance";
import { Header } from "./components/Header";
import { RoutesConfig} from "./routes/Routes";

function App() {
  const balanceCards = [
    {
      title: "Venta de correas 7k",
      fullName: "Gustavo Luizaga Merino",
      endDate: "31/10/2023",
      totalAmount: 1500,
      pendingAmount: 1500,
      status: "Pendiente",
      description: "Venta de autorepuesto cable de bujía para 3S, pago en 1 semana"
    },
    {
      title: "Servicio mecánico",
      fullName: "María Rodríguez",
      endDate: "15/09/2023",
      totalAmount: 2000,
      pendingAmount: 500,
      status: true,
      description: "Servicio de cambio de aceite y filtros para Toyota Corolla."
    },
    {
      title: "Venta de batería",
      fullName: "Carlos Gutiérrez",
      endDate: "05/11/2023",
      totalAmount: 800,
      pendingAmount: 800,
      status: true,
      description: "Batería de alto rendimiento para Ford Explorer, garantía 1 año."
    },
    {
      title: "Cambio de frenos",
      fullName: "Laura Sánchez",
      endDate: "22/09/2023",
      totalAmount: 1200,
      pendingAmount: 600,
      status: false,
      description: "Cambio de pastillas y discos de freno delanteros para Nissan Sentra."
    },
    {
      title: "Reparación motor",
      fullName: "Jorge Mendoza",
      endDate: "10/12/2023",
      totalAmount: 5000,
      pendingAmount: 3000,
      status: true,
      description: "Reparación parcial de motor, incluye cambio de juntas y rectificación."
    },
    {
      title: "Alineación y balanceo",
      fullName: "Ana Martínez",
      endDate: "03/09/2023",
      totalAmount: 350,
      pendingAmount: 350,
      status: false,
      description: "Servicio completo de alineación, balanceo y rotación de neumáticos."
    },
    {
      title: "Venta de correas 7k",
      fullName: "Gustavo Luizaga Merino",
      endDate: "31/10/2023",
      totalAmount: 1500,
      pendingAmount: 1500,
      status: "Pendiente",
      description: "Venta de autorepuesto cable de bujía para 3S, pago en 1 semana"
    },
    {
      title: "Servicio mecánico",
      fullName: "María Rodríguez",
      endDate: "15/09/2023",
      totalAmount: 2000,
      pendingAmount: 500,
      status: true,
      description: "Servicio de cambio de aceite y filtros para Toyota Corolla."
    },
    {
      title: "Venta de batería",
      fullName: "Carlos Gutiérrez",
      endDate: "05/11/2023",
      totalAmount: 800,
      pendingAmount: 800,
      status: true,
      description: "Batería de alto rendimiento para Ford Explorer, garantía 1 año."
    },
    {
      title: "Cambio de frenos",
      fullName: "Laura Sánchez",
      endDate: "22/09/2023",
      totalAmount: 1200,
      pendingAmount: 600,
      status: false,
      description: "Cambio de pastillas y discos de freno delanteros para Nissan Sentra."
    },
    {
      title: "Reparación motor",
      fullName: "Jorge Mendoza",
      endDate: "10/12/2023",
      totalAmount: 5000,
      pendingAmount: 3000,
      status: true,
      description: "Reparación parcial de motor, incluye cambio de juntas y rectificación."
    },
    {
      title: "Alineación y balanceo",
      fullName: "Ana Martínez",
      endDate: "03/09/2023",
      totalAmount: 350,
      pendingAmount: 350,
      status: false,
      description: "Servicio completo de alineación, balanceo y rotación de neumáticos."
    }
  ];

  return (
    <div className="text-gray-800 flex flex-col min-h-screen ">
      <Header />
      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-24 pb-16 flex-grow text-wrap">
        <div className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sección de saldos pendientes */}
          <h2 className="text-2xl font-bold mb-6">Saldos Pendientes</h2>
          <OutstandingBalance balanceCards={balanceCards} />
        </div>
      </main>
    </div>
  );
}

export default App;