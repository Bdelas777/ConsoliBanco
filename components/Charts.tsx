"use client"
import React from 'react';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Charts = () => {
  // Datos para la gráfica de Categorías de Gastos
  const expenseCategoryData = {
    labels: ['Food and Drink', 'Travel', 'Transfer', 'Payment'],
    datasets: [
      {
        label: 'Gastos por Categoría',
        data: [30, 25, 10, 40], // Datos basados en tus transacciones
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Datos para la gráfica de Gastos Mensuales
  const monthlyExpensesData = {
    labels: ['June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Gastos Mensuales',
        data: [200, 150, 300, 100], // Datos basados en tus transacciones
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Datos para la gráfica de Estados de Transacción
  const transactionStatusData = {
    labels: ['Success', 'Processing'],
    datasets: [
      {
        label: 'Estados de Transacción',
        data: [15, 5], // Datos basados en tus transacciones
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="charts-container p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="chart-item mb-6">
        <h2 className="text-xl font-semibold mb-4">Gráfica de Categorías de Gastos</h2>
        <div className="chart w-full max-w-xs mx-auto">
          <Pie data={expenseCategoryData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Categorías de Gastos' } } }} />
        </div>
      </div>

      <div className="chart-item mb-6">
        <h2 className="text-xl font-semibold mb-4">Gráfico de Gastos Mensuales</h2>
        <div className="chart w-full max-w-xs mx-auto">
          <Bar data={monthlyExpensesData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Gastos Mensuales' } } }} />
        </div>
      </div>

      <div className="chart-item">
        <h2 className="text-xl font-semibold mb-4">Gráfico de Estados de Transacción</h2>
        <div className="chart w-full max-w-xs mx-auto">
          <Doughnut data={transactionStatusData} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Estados de Transacción' } } }} />
        </div>
      </div>
    </section>
  );
};

export default Charts;
