//EX1 spread Operator 관련 코드

// interface UserProps{
//      name : string ; age : number;
//     clickHandler : () => void ;
// }

// export default function User(props: UserProps) {
//   const {  name, age ,clickHandler } = props;

//   return (
//     <>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <button onClick={clickHandler}>클릭</button>
//     </>
//   );
// }

//ex2 props.children 속성 관련 코드

export default function User(
    {title, children} :
     {title : string;
        children : React.ReactNode;
     } )
     {
        return(
            <>
            <h1>{title}</h1>
            {children}
            </>
        )
     }
