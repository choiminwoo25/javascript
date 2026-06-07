export default function Buttons(
    {alarmA, alarmB, alarmC, } :
    {alarmA : () => void;
     alarmB : () => void;
     alarmC : () => void;
     
    }
) {
    return(
        <>
         <>
      <button onClick={alarmA}>A</button>
      <button onClick={alarmB}>B</button>
      <button onClick={alarmC}>C</button>
    </>
        </>
    )

}