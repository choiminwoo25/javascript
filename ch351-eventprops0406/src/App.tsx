//(Ex 2.... 오류 발생)
//JSX에서 HTML 태그에는 DOM 표준 이벤트 속성만 사용 가능함.
//아래 코드와 같이 존재하지 않는 속성(onFive)을 사용하면 
//웹 브라우저에서 인식할 수 없어 오류가 발생하거나 무시됨.
import Button from "./components/Button";

export default function App() {
  return (
    <>
      <Button onFive={() => alert("five")} />
    </>
  );
}