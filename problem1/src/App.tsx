import Button from "./components/Button";
import Content from "./components/Content";
import Header from "./components/Header";

export default function MyApp() {
  return(
  <>
  <Header/>
    <Content message={"안녕하세요 React!"}/>
   <Button onClick={() => alert("버튼 클릭됨")}/>
  </>
  )
}