//Main TIP-CALCULATOR
import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Calculate from "./Calculate";
import Reset from "./Reset";
import Output from "./Output";
import Footer from "./Footer";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const [calculateTip, setCalculateTip] = useState(null);

  function handleCalculate() {
    const tip = bill * ((percentage1 + percentage2) / 2 / 100);
    setCalculateTip(tip);
  }
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage1(0);
    setCalculateTip(null);
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Tip Calculator🧮</h1>
        </div>
        <div className="main-box">
          <BillInput bill={bill} onSetBill={setBill} />

          <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
            <strong>How did you like the service?</strong>
          </SelectPercentage>

          <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
            <strong>How did your friend like the service?</strong>
          </SelectPercentage>

          {calculateTip !== null && <Output bill={bill} tip={calculateTip} />}

          {bill > 0 && (
            <>
              <div className="btn-Box">
                <Calculate onCalculate={handleCalculate} />
                <Reset onReset={handleReset} />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TipCalculator;
