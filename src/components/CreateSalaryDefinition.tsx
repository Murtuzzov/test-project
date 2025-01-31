import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSalary } from "../redux/slices/salarySlice";
import { useNavigate } from "react-router-dom";

const CreateSalaryDefinition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    basicSalary: "",
    allowance: "",
    deductions: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateSalaries = () => {
    const basicSalary = parseFloat(formData.basicSalary);
    const allowance = parseFloat(formData.allowance);
    const deductions = parseFloat(formData.deductions);
    const grossSalary = basicSalary + allowance;
    const netSalary = grossSalary - deductions;
    return {
      ...formData,
      basicSalary: basicSalary,
      allowance: allowance,
      grossSalary: grossSalary,
      deductions: deductions,
      netSalary: netSalary,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const salaryData = {
      ...calculateSalaries(),
      id: Date.now(), 
    };
    try {
      await dispatch(addSalary(salaryData) as any);
      navigate("/");
    } catch (error) {
      console.error("Failed to add salary:", error);
    }
  };

  return (
    <div className="w-[1148px] mx-auto mt-20">
      {" "}
      {/* Отступ от верха сайта */}
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:text-blue-700 mb-[30px] " // Отступ между кнопкой и заголовком
      >
        <span className="mr-1">&#8592;</span>Back
      </button>
      <h2 className="text-2xl font-bold mb-[60px]">
        {" "}
        Create Salary Definition
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-6 p-4" // Используем Flexbox
      >
        <div className="flex flex-col w-[350px]">
          {" "}
          {/* Контейнер для каждой пары инпутов */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="text"
            name="level"
            placeholder="Level"
            value={formData.level}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="basicSalary"
            placeholder="Basic Salary"
            value={formData.basicSalary}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="allowance"
            placeholder="Allowance"
            value={formData.allowance}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <input
            type="number"
            name="deductions"
            placeholder="Deductions"
            value={formData.deductions}
            onChange={handleInputChange}
            required
            className="border p-2 rounded w-full border-slate-400"
          />
        </div>

        <div className="flex flex-col w-[350px]">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSalaryDefinition;
