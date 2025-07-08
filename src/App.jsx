import Sidebar from "./components/Sidebar";
import CustomerTable from "./components/CustomerTable";

function App() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Hello Evano 👋🏼</h1>
        <CustomerTable />
      </main>
    </div>
  );
}

export default App;
