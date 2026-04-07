// //(ex 1)
// export default function User(props)
// {
//     console.log(props);
//     return <div> User Component </div>
// }






// ex2
// props 의 타입을 명시함
export default function User(props:
    { name: string; age: number}) {
        return(
            <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            </>
        );
    } 
