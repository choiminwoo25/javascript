import CustomButton from "./components/CustomButton";

export default function App() {
  return(
    <>
    <CustomButton onFive={() => alert("five")} text={"버튼1"}/>
      <CustomButton onFive={() => alert(" double five")} text={"버튼2"}/>
    </>
  )
}