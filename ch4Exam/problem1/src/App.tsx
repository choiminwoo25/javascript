import { useState } from "react"
import Buttons from "./components/Buttons";

export default function App() {
  
  const [text, setText] = useState<string | null>(null);
  const alarmA = () => setText(text => {
    
    alert("A클릭");
    console.log("A 클릭");
  });
  const alarmB = () => setText(text => {
    alert("B클릭");
    console.log("B 클릭");
  });
  const alarmC = () => setText(text => {
    alert("C클릭");
    console.log("C 클릭");
  });

  return(
    <>
      <Buttons   alarmA={alarmA} alarmB={alarmB} alarmC={alarmC}/>
    </>
  )
}