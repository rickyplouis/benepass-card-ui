import { useState } from "react";
import benepassLogo from "./benepassLogo.svg";
import visa from './Visa.svg'
import ShowDetailsText from "./components/ShowDetailsText";
import CardNumber from "./components/CardNumber";
import CardCVC from "./components/CardCVC";

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui-container">
      <h1 class="main-header">Flex Card</h1>
      <h2 class="text-lg">Used for pre-tax purposes</h2>
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
          <div class="flex space-x-12 max-sm:space-x-8 ">
            <div class="card-exp-container">
              <div class="card-exp-header">
                VALID THRU
              </div>
              <div class="card-exp-label">
                8/28
              </div>
            </div>
            <div class="card-exp-container">
              <div class="card-exp-header">
                CVC
              </div>
              <div class="card-exp-label">
                <CardCVC quantity={3} showDetails={showDetails} />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer-container">
          <div class="flex-1 ">
            <div class="card-zip text-lg">
              ZIP 66062
            </div>
          </div>
          <div class="w-14 max-sm:w-10">
            <img class="w-full flex mt-2" src={visa} alt="Visa Logo" />
          </div>
        </div>
      </div>
      <div class="checkbox-container">
        <div>
          <input
            class="styled-checkbox"
            type="checkbox"
            checked={showDetails}
            onChange={() => setShowDetails(!showDetails)}
          />
        </div>
        <div class="mt-0.5">
          <ShowDetailsText showDetails={showDetails} />
        </div>
      </div>
    </div >
  );
}
