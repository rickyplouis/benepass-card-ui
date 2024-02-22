import { useState } from "react";
import { CardNumber, CardCVC, CardLogo, CardVirtualBadge, CardValidThru, ShowDetailsText, CardZip, CardVisa } from "./components";

export default function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui-container">
      <h1 class="main-header">Flex Card</h1>
      <h2 class="sub-header">Used for pre-tax purposes</h2>
      <div class="card">
        <div class="card-branding-container">
          <CardLogo />
          <CardVirtualBadge />
        </div>
        <CardNumber showDetails={showDetails} />
        <div class="card-security-container">
          <CardValidThru />
          <CardCVC showDetails={showDetails} />
        </div>
        <div class="card-footer-container">
          <CardZip />
          <CardVisa />
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
