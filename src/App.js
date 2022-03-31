import "./App.css";
import AddTransaction from "./compenets/AddTransaction";
import Balance from "./compenets/Balance";
import Header from "./compenets/Header";
import IncomeExpence from "./compenets/IncomeExpence";
import TransactionList from "./compenets/TransactionList";

function App() {
  return (
    <div>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpence/>
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
