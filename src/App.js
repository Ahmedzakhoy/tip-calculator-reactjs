import { TipCalculator } from "./TipCalculator";
import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Tip Calculator</h1>
        <p>
          write down the bill and how much you and your friend are satisfied
          with the service
        </p>
      </div>
      <TipCalculator />
    </>
  );
}
