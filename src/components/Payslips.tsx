import { NavLink } from "react-router-dom";
import BarChart from "./BarChart";
import InfoCards from "./InfoCards";

const Payslips = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      {" "}
      <div className="flex justify-between">
        <InfoCards />
        <BarChart />
      </div>
      <ul className="flex space-x-4 my-4">
        <li>
          <NavLink to="/">Salary Breakdown</NavLink>
        </li>
        <li>
          <NavLink to="/tax">Tax Definitions</NavLink>
        </li>
        <li>
          <NavLink to="/payslips">Payslips</NavLink>
        </li>
        <li>
          <NavLink to="/payroll">Payroll</NavLink>
        </li>
      </ul>
      <h1>Payslip</h1>
    </div>
  );
};

export default Payslips;
