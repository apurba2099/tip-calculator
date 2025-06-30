export default // Button component
function Calculate({ onCalculate }) {
  return (
    <>
      <button className="btn" onClick={onCalculate}>
        Calculate
      </button>
    </>
  );
}
