
import benepassLogo from './benepassLogo.svg';
import circle from './circle.svg'

export default function App() {
  return (
    <div className="ml-12 max-sm:ml-6 mt-12 max-sm:mt-6">
      <h1>
        Flex Card
      </h1>
      <h2>
        Used for pre-tax purposes
      </h2>
      <div class="card">
        <div class="flex">
          <div class="flex-1">
            <div class="card-logo">
              <img class="w-full flex" src={benepassLogo} alt="Benepass Logo" />
            </div>
          </div>
          <div>
            <div class="card-virtual-badge">
              Virtual
            </div>
          </div>
        </div>
        <div class="card-number">
          * * * * 1732
        </div>
      </div>
    </div>
  )
}