import { finalFourDigits, fullCardNumber } from "../contstants";
import RepeatDot from "./RepeatDot";

const CardNumber = ({ showDetails }) => {
    if (showDetails) {
        return <div class="card-number">{fullCardNumber}</div>
    } else {
        return <div class="card-number flex">
            <div class="card-number-hidden">
                <RepeatDot quantity={4} />
            </div>
            <div className="ml-2">{finalFourDigits}</div>
        </div>
    }
}

export default CardNumber;