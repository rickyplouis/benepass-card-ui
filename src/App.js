
import benepassLogo from './benepassLogo.svg';

export default function App() {
  return (
    <div className="ml-12 mt-12">
      <h1>
        Flex Card
      </h1>
      <h2>
        Used for pre-tax purposes
      </h2>
      <div class="card-container">
        <div class="card-container-logo">
          <img class="w-full" src={benepassLogo} alt="Benepass Logo" />
        </div>
      </div>
    </div>
  )
}