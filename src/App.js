import { useState } from "react";
import benepassLogo from "./benepassLogo.svg";
import visa from './Visa.svg'

const fullCardNumber = '1232 2223 4432 1732';
const finalFourDigits = '1732';
const cvc = '345';

const Dot = () => <div className="dot" />

const RepeatDot = ({ quantity }) => {
  let body = [];
  for (let x = 0; x < quantity; x += 1) {
    body.push(<Dot />)
  }
  return <div className="flex">
    {body}
  </div>
}

const ShowDetailsText = ({ showDetails }) => {
  if (showDetails) {
    return <div class="font-bold text-benepass-red">
      Show details
    </div>
  }
  return <div class="font-light">
    Show details
  </div>

}

const CardNumber = ({ showDetails }) => {
  if (showDetails) {
    return <div class="card-number">{fullCardNumber}</div>
  } else {
    return <div class="card-number flex">
      <div class="mt-3 max-sm:mt-2.5">
        <RepeatDot quantity={4} />
      </div>
      <div className="ml-2">{finalFourDigits}</div>
    </div>
  }
}

const CardCVC = ({ showDetails }) => {
  if (showDetails) {
    return <div class="card-exp-label">{cvc}</div>
  } else {
    return <div class="mt-2 max-sm:mt-1"><RepeatDot quantity={3} /></div>
  }
}


export default function App() {
  const [showDetails, setShowDetails] = useState(false);


  return (
    <div className="ui-container">
      <h1 class="text-xl font-semibold">Flex Card</h1>
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
          <div class="card-zip flex-1 text-lg">
            ZIP 66062
          </div>
          <div class="w-14 max-sm:w-10">
            <img class="w-full flex" src={visa} alt="Visa Logo" />
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

        <ShowDetailsText showDetails={showDetails} />
      </div>
    </div>
  );
}
