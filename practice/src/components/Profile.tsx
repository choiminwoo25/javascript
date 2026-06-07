export default function Profile(
    {name, grade } : {name : string ; grade : number }
) {
    return(
        <>
        <ul>
            <li>이름: {name}</li>
            <li> 학년:{grade}학년 </li>
        </ul>
        </>
    )
}