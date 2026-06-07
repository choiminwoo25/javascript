export default function CustomButton(
    {onFive, text} : {onFive : () => void ; text : string}
) {
    
    return(
        <>
        <button onClick={onFive}>{text}</button>
        </>
    )
}