import { Routes, Route, BrowserRouter } from "react-router-dom";
import { OutstandingBalancePage } from "../pages/OutstandingBalancePage";

export function RoutesConfig() {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/o" element={<OutstandingBalancePage />} />
            </Routes>
       </BrowserRouter>
    );
}