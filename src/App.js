import { useState } from "react";
import benepassLogo from "./benepassLogo.svg";

const Dot = () => <div className="dot" />

const fullCardNumber = '1232 2223 4432 1732';
const finalFourDigits = '1732';

const CardNumber = ({ showDetails }) => {

  if (showDetails) {
    return <div class="card-number">{fullCardNumber}</div>
  } else {
    return <div class="card-number flex">
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <div className="ml-2">{finalFourDigits}</div>
    </div>
  }
}

export default function App() {
  const [showDetails, setShowDetails] = useState(false);


  return (
    <div className="ui-container">
      <h1>Flex Card</h1>
      <h2>Used for pre-tax purposes</h2>
      <div class="card">
        <div class="card-branding-container">
          <div class="flex-1">
            <div class="card-logo">
              <img class="w-full flex" src={benepassLogo} alt="Benepass Logo" />
            </div>
          </div>
          <div class="card-virual-badge-container">
            <div class="card-virtual-badge">Virtual</div>
          </div>
        </div>
        <CardNumber showDetails={showDetails} />
        <div class="card-security-container">
          <div class="flex space-x-4">
            <div class="card-exp-header">
              VALID THRU
            </div>
            <div className="card-exp-header">
              CVC
            </div>
          </div>

        </div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={showDetails}
          onChange={() => setShowDetails(!showDetails)}
        />
        show details
      </div>
    </div>
  );
}
