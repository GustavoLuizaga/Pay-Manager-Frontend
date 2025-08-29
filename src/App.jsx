import { OutstandingBalance } from "./components/OustandingBalance";
import { Header } from "./components/Header";
import { RoutesConfig} from "./routes/Routes";

function App() {

  return (
    <div className="text-gray-800 flex flex-col min-h-screen ">
      <Header />
      <main className="pt-24 pb-16 flex-grow text-wrap">
        <div className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoutesConfig />
        </div>
      </main>
    </div>
  );
}
export default App;