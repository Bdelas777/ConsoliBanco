"use client"; // Asegúrate de que el componente sea cliente

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Admin() { 
  const [salary, setSalary] = useState('');
  const [hasDebts, setHasDebts] = useState(false);
  const [studentLoans, setStudentLoans] = useState('');
  const [goals, setGoals] = useState('');
  const [plan, setPlan] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar los datos al backend
    const res = await fetch("/api/finance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        salary: parseFloat(salary),
        hasDebts,
        studentLoans: parseFloat(studentLoans),
        goals: goals.split(','), // Dividimos las metas por comas
      }),
    });

    const data = await res.json();
    setPlan(data); // Guardamos el plan financiero en el estado
  };

  return (
    <div className="flex flex-col h-auto w-full max-w-[672px] mx-auto bg-white rounded-lg shadow-2xl overflow-visible">
      {!plan ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 bg-gradient-to-r from-blue-100 to-cyan-100">
          <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">Genera tu Plan Financiero</h1>
          <Input
            type="number"
            placeholder="Ingresa tu salario"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-cyan-500"
          />
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              checked={hasDebts}
              onChange={(e) => setHasDebts(e.target.checked)}
              className="accent-cyan-500 w-5 h-5"
            />
            Tienes deudas?
          </label>
          {hasDebts && (
            <Input
              type="number"
              placeholder="Monto de préstamos estudiantiles o deudas"
              value={studentLoans}
              onChange={(e) => setStudentLoans(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-cyan-500"
            />
          )}
          <Textarea
            placeholder="Metas financieras (separadas por comas)"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-cyan-500"
          />
          <Button type="submit" className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition">
            Generar Plan Financiero
          </Button>
        </form>
      ) : (
        <div className="p-8 bg-gradient-to-r from-purple-50 to-blue-50">
          <h2 className="text-2xl font-bold text-center mb-4">Tu Plan Financiero</h2>
          <div className="flex flex-col gap-3 mb-6">
            <p className="text-lg">Necesidades básicas: <span className="font-bold">${plan.basicNeeds}</span></p>
            <p className="text-lg">Gastos prescindibles: <span className="font-bold">${plan.discretionary}</span></p>
            <p className="text-lg">Ahorros e inversiones: <span className="font-bold">${plan.savings}</span></p>
            {plan.debtRepayment > 0 && (
              <p className="text-lg">Pago de deudas: <span className="font-bold">${plan.debtRepayment}</span></p>
            )}
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Metas Financieras</h3>
          <ul className="list-disc list-inside">
            {plan.goals.map((goal, index) => (
              <li key={index} className="text-gray-700">- {goal}</li>
            ))}
          </ul>
          <Button className="w-full mt-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 rounded-md hover:scale-105 transition transform" onClick={() => setPlan(null)}>
            Editar Plan
          </Button>
        </div>
      )}
      {/* Sección de Consejos Financieros */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Consejos para Administrar tu Dinero</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><span className="font-bold text-gray-800">Conoce tus ingresos y gastos:</span> Lleva un control mensual de lo que recibes y lo que gastas para evitar deudas innecesarias.</li>
          <li><span className="font-bold text-gray-800">Divide tu presupuesto:</span> 50% para necesidades básicas, 30% para gastos prescindibles y 20% para ahorro e inversión.</li>
          <li><span className="font-bold text-gray-800">Mantén un buen historial crediticio:</span> Paga tus deudas a tiempo y lleva un registro de ellas.</li>
        </ul>
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Consejos para Saldar Deudas</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Prioriza el pago de las deudas con tasas de interés más altas.</li>
          <li>Utiliza el método bola de nieve: paga las deudas más pequeñas primero.</li>
          <li>Paga más del mínimo mensual para reducir intereses.</li>
        </ul>
      </div>
    </div>
  );
}
