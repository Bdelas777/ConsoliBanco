import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance bg-white shadow-md rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="total-balance-chart w-full md:w-1/2 flex justify-center">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
        <h2 className="header-2 text-lg font-semibold text-gray-800">
          Cuentas de banco: <span className="text-primary">{totalBanks}</span>
        </h2>
        
        <div className="flex flex-col gap-2">
          <p className="total-balance-label text-gray-500">
            Total del balance
          </p>

          <div className="total-balance-amount flex justify-center md:justify-start items-center gap-2 text-2xl font-bold text-green-500">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBalanceBox;
