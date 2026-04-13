export default function App() 
{
  const clickHandler = () => {
    console.log("클릭됨");
  };


  const onMouseEnter = () => {
    console.log("마우스 올라감");
  };
  const onMouseLeave = () => {
    console.log("마우스 나감");
  };

  return(
    <button onClick={clickHandler} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >이벤트 버튼</button>
  );
}