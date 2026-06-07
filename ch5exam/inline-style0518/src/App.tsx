//(Ex. 1) 인라인 스타일(inline style) 
//방법 1 : 스타일 객체를 변수로 분리해서 사용하는 방식

// export default function App() {
//   const styles = {
//     backgroundColor: 'blue',
//     color: 'white',
//     fontSize: '16px',
//     padding: '10px',
//   };

//   return (
//     <>
//       <h1 style={styles}>Inline Style</h1>
//     </>
//   );
// }

//(Ex. 2) 인라인 스타일(inline style) 
//방법 2 : JSX 내부에서 직접 style 객체 작성하는 방식

export default function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: 'orange',
          color: 'white',
          fontSize: '16px',
          padding: '10px',
        }}
      >
        Inline Style
      </h1>
    </>
  );
}