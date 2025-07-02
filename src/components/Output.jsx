export default // View outPut Component
function Output({ bill, tip }) {
  return (
    <>
      <div className="output">
        <h3>
          You pay &#8377;{bill + tip}(&#8377;{bill} + &#8377;
          {tip.toFixed(2)} Tips💵)
        </h3>
      </div>
    </>
  );
}
