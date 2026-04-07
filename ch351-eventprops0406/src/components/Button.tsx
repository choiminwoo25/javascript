export default function Button( 
  { onFive }: { onFive: () => void }) 
{
  return (
    <button 
          style={{
              width: "300px",
              height: "200px"
            }}  onClick={onFive}
            >
              click
      </button>
     ) ;
}