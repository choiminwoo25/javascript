//(문제 1) 정답 프로그램

// function Button({ text, onClick }) {
//   return <button         
//         onClick={onClick}>{text}</button>;
// }

// export default function App() 
// {
//   return (
//     <>
//       <Button text="A" onClick={() => alert("A 클릭")} />
//       <Button text="B" onClick={() => alert("B 클릭")} />
//       <Button text="C" onClick={() => alert("C 클릭")} />
//     </>
//   );
// }

//(문제 2) 정답 프로그램
function CustomButton({ text, onFive }) {
  return (
    <button onClick={onFive}>
      {text}
    </button>
  );
}

export default function App() {
  return (
    <>
      <CustomButton
        text="버튼1"
        onFive={() => alert("five")}
      />
      <CustomButton
        text="버튼2"
        onFive={() => alert("double five")}
      />
    </>
  );
}