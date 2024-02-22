
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

export default ShowDetailsText