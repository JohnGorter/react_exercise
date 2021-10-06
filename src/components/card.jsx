
import "./card.css"

let card =  ({title}) => <div className="card" id="card" draggable="true" onDragStart={(e)=>{
    e.dataTransfer.setData("card", title);
}}><strong>{title}</strong><p>Card data</p></div>
export default card