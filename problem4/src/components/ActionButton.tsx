export default function ActionButton(
    {onClick} : {onClick :() => void}
) {
    return(
        <>
        <button onClick={onClick}>확인</button>
        </>
    )
}