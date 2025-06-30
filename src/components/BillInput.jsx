export default // Bill Input Component
function BillInput({ bill, onSetBill }) {
  return (
    <>
      <div className="bill-box">
        <label>
          <strong>How much was the bill?</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Bill Value 💳..."
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </div>
    </>
  );
}
