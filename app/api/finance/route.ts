import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";

export const maxDuration = 60;

export async function POST(req: Request) {
    const { salary, hasDebts, studentLoans, goals } = await req.json();
  
    // Declarar las variables que pueden ser reasignadas con let
    const basicNeeds = salary * 0.50; 
    const discretionary = salary * 0.30; 
    let savings = salary * 0.20; // Cambiado a let porque será modificado si hay deudas
    let debtRepayment = 0;
  
    if (hasDebts) {
      debtRepayment = studentLoans ? studentLoans * 0.20 : salary * 0.15;
      savings -= debtRepayment; // Ahora savings se puede reasignar sin problemas
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
  