import './Addstock.css'
function Addstock(props){
     return(
      <div className="Addstock">
         <h2>Add Stock</h2> 
       <p>{props.answer}</p><br/>
        <button className="addbutton" onClick={props.fun} >increment</button>
       {props.condition1 && <button className="Clearbutton1" onClick={props.funclear}>Clear</button>} 
        <br/>
         <label>First number</label><br/>
         <input type="number" value={props.num1} onChange={props.funget1}/><br/>
         <label>Second number</label><br/>
         <input type="number" value={props.num2} onChange={props.funget2}/><br/>
         <label>Sum</label><br/>
         <h4>{props.num3}</h4><br/>
         <button className="calcbutton" onClick={props.funanswer}>Calculate</button> 
             </div>   
     )
}
export default Addstock;
