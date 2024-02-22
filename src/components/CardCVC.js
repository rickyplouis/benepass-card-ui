import CardCVCNumber from "./CardCVCNumber"

const CardCVC = ({ showDetails }) => <div class="card-exp-container">
    <div class="card-exp-header">
        CVC
    </div>
    <div class="card-exp-label">
        <CardCVCNumber quantity={3} showDetails={showDetails} />
    </div>
</div>

export default CardCVC