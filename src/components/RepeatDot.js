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

export default RepeatDot;