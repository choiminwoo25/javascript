import './App.css'
import ActionButton from './components/ActionButton'
import Profile from './components/Profile'
import Title from './components/Title'


export default function App() {
  return(
    <>
     <Title />
    <Profile name={"홍길동"} grade={2}/>
    <ActionButton onClick={() => alert("학생 정보가 확인되었습니다.")}/>
    </>
   
  )

}
    