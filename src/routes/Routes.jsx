import { Routes, Route, BrowserRouter } from "react-router-dom";
import { OutstandingBalancePage } from "../pages/OutstandingBalancePage";

export function RoutesConfig() {
    return (
            <Routes>
                <Route path="/" element={<OutstandingBalancePage />} />
            </Routes>
    );
}