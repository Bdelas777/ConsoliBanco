
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import Charts from '@/components/Charts'; // Importar el componente de gráficas
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const Analitica = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Bienvenid@"
            user={loggedIn?.firstName || 'Invitado'}
            subtext="Accede y maneja tu cuenta y transacciones eficazmente."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
         <div className="charts">
          <Charts /> 
        </div> 
      </div>
    </section>
  );
}

export default Analitica;
