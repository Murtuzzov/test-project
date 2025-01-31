import { Component } from "react";
// import MainDasboard from "./MainDasboard";
import SalaryBreakdown from "../components/SalaryBreakdown";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="w-[1440px]  flex ">
            {/* Левая панель */}
            <div className="bg-[#FEE2E2] w-[260px] ">
              <Sidebar />
            </div>

            {/* Правая панель */}
            <div className="flex-1 bg-[#F8F9FD] flex flex-col">
              {/* Навбар */}
              <div className="  flex justify-between items-center px-6 ">
                <Navbar />
              </div>

              {/* Основной контент */}
              <div className="flex-1 p-8">
                <SalaryBreakdown />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
