import './swimlane.css'

let swimlane =  ({children, title}) => <div className="swimlane">
    <div className="lanetitle">{title}</div>
    <div className="laneBody" onDragEnter={(e) => {
        e.preventDefault();
    }}
    onDragOver={(e)=>{
        e.preventDefault();
    }} onDrop={()=>{
    }}>
    {children}
    </div>
</div>

export default swimlane;