import { Routes, Route, BrowserRouter } from "react-router-dom";
import { OutstandingBalancePage } from "../pages/OutstandingBalancePage";
import { DetailBalancePage } from "../pages/DetailBalancePage";

export function RoutesConfig() {
    return (
            <Routes>
                <Route path="/" element={<OutstandingBalancePage />} />
                <Route path="/:id/detalle" element={<DetailBalancePage />} />
            </Routes>
    );
}