export default function Profile(
    {name , grade }:{name:string; grade:number}) 
    {
    return(
        <>
         <p>이름 : {name}</p>
         <p>학년: {grade}학년</p>
         </>
    );
    
}