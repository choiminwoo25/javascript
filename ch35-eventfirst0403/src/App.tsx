export default function App() {
  return (
    <>
      <button 
        style={{
            width: "300px",
            height: "200px"
          }} 
        onClick=
        { 
              () => { alert("Button Clicked!") } 
        } > 
        click 
      </button>
    </>
  );
}