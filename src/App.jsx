import { useContext } from "react";
import { CountContext } from "./Context"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/Count";


function App() {

// context api use krne se hum bina prop drilling k value ko 
// teleport kr skte he by using wrapper  
  return (
    <div>
     <RecoilRoot>
       <Count />
     </RecoilRoot>
    </div>   
  )
}
/*this is count component or isme hum countrender component
 ko pass kr rhe h agr context api use nhi to count prop ko 
 Count component me dena pdega .*/
 function Count(){
  
  return <div>
    <Countrender/>
    <Buttons />
  </div>
 }

 function Countrender(){
  const count = useRecoilValue(countAtom);
   return <div>
      <b/>
      {count}
      <b/>
      <EvenCount/>
    </div>
 }
  function EvenCount(){
    const isEven = useRecoilValue(evenSelector);
    return <div>
      {!isEven ? "it is even":null}
    </div>

  }


 function Buttons(){
  const  [count,setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }} >Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
 }

export default App
