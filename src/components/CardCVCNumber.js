import { cvc } from "../contstants"
import RepeatDot from "./RepeatDot"

const CardCVCNumber = ({ showDetails }) => {
    if (showDetails) {
        return <div class="card-exp-label">{cvc}</div>
    } else {
        return <div class="card-exp-cvc"><RepeatDot quantity={3} /></div>
    }
}

export default CardCVCNumber;