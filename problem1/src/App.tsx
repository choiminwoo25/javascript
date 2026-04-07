import Button from "./components/Button";
import Contend from "./components/Content";
import Header from "./components/Header";

export default function MyApp() {
  return<>
   <Header/>
   <Contend/>
   <Button onFive={() => alert("버튼 클릭됨")}/>
  </>
}