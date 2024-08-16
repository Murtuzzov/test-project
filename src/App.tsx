import "./App.css";
import { Routes, Route } from "react-router-dom";
import SalaryBreakdown from "./components/SalaryBreakdown";
import CreateSalaryDefinition from "./components/CreateSalaryDefinition";
import EditSalaryDefinition from "./components/EditSalaryDefinition";
import DeleteSalaryDefinition from "./components/DeleteSalaryDefinition";
import Tax from "./components/Tax";
import Payslips from "./components/Payslips";
import Payroll from "./components/Payroll";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SalaryBreakdown />} />
        <Route path="/create-salary" element={<CreateSalaryDefinition />} />
        <Route path="/edit-salary/:id" element={<EditSalaryDefinition />} />
        <Route path="/delete-salary/:id" element={<DeleteSalaryDefinition />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/payslips" element={<Payslips />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
    </>
  );
}

export default App;
