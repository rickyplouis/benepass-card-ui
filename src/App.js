import { useState } from "react";
import benepassLogo from "./benepassLogo.svg";

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  const cardNumberPrefix = showDetails ? '1232 2223 4432' : '* * * *'

  return (
    <div className="ml-12 max-sm:ml-6 mt-12 max-sm:mt-6">
      <h1>Flex Card</h1>
      <h2>Used for pre-tax purposes</h2>
      <div class="card">
        <div class="card-header-container">
          <div class="flex-1">
            <div class="card-logo">
              <img class="w-full flex" src={benepassLogo} alt="Benepass Logo" />
            </div>
          </div>
          <div class="card-virual-badge-container">
            <div class="card-virtual-badge">Virtual</div>
          </div>
        </div>
        <div class="card-number">{`${cardNumberPrefix} 1732`}</div>
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
