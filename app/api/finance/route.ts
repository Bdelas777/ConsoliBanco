export async function POST(req: Request) {
  const { salary, hasDebts, studentLoans, goals } = await req.json();

  // Calcular las categorías principales
  const basicNeeds = salary * 0.50;
  const discretionary = salary * 0.30;
  let savings = salary * 0.20;
  let debtRepayment = 0;

  // Si hay deudas, calcular el pago de deuda basado en el salario disponible
  if (hasDebts) {
      const maxAvailableForDebt = salary - (basicNeeds + discretionary);
      debtRepayment = studentLoans ? Math.min(studentLoans * 0.20, maxAvailableForDebt) : Math.min(salary * 0.15, maxAvailableForDebt);
      savings -= debtRepayment;
  }

  // Evitar valores negativos en ahorros
  if (savings < 0) {
      savings = 0;
  }

  // Asegurarse de que el pago de deudas no sea negativo
  if (debtRepayment < 0) {
      debtRepayment = 0;
  }

  const plan = {
      basicNeeds,
      discretionary,
      savings,
      debtRepayment,
      goals,
  };

  return new Response(JSON.stringify(plan), {
      status: 200,
      headers: { "Content-Type": "application/json" },
  });
}
