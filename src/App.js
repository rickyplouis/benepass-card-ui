import { useState } from "react";
import { ShowDetailsText, CardNumber, CardCVC } from "./components";
import { zipcode } from "./contstants";
import { benepassLogo, visa } from "./img";

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui-container">
      <h1 class="main-header">Flex Card</h1>
      <h2 class="sub-header">Used for pre-tax purposes</h2>
      <div class="card">
        <div class="card-branding-container">
          <div class="card-logo-container">
            <div class="card-logo">
              <img class="full-image" src={benepassLogo} alt="Benepass Logo" />
            </div>
          </div>
          <div class="card-virual-badge-container">
            <div class="card-virtual-badge">Virtual</div>
          </div>
        </div>
        <CardNumber showDetails={showDetails} />
        <div class="card-security-container">
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
        <div class="card-footer-container">
          <div class="card-zip-container">
            <div class="card-zip">
              ZIP {zipcode}
            </div>
          </div>
          <div class="card-visa-container">
            <img class="card-visa" src={visa} alt="Visa Logo" />
          </div>
        </div>
      </div>
      <div class="checkbox-container">
        <input
          class="styled-checkbox"
          type="checkbox"
          checked={showDetails}
          onChange={() => setShowDetails(!showDetails)}
        />
        <div class="show-details-container">
          <ShowDetailsText showDetails={showDetails} />
        </div>
      </div>
    </div >
  );
}
