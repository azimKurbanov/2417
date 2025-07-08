

const StatusBadge = ({ status }) => {
    const base = "px-3 py-1 rounded-full text-sm font-medium";
    const active = "bg-green-100 text-green-700";
    const inactive = "bg-red-100 text-red-700";
    return <span className={`${base} ${status === "Active" ? active : inactive}`}>{status}</span>;
    <h2>BDlAZ</h2>
  };
  <h1>salom</h1>
 
  export default StatusBadge;
  