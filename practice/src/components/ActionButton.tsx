export default function ActionButton(
    {onClick, text} : { onClick : () => void ;text : string} 
) {
    
    
    return(
        <>
        <button onClick={onClick}>{text}</button>
        </>
    )
}