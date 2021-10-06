import './john.css'

let content = "<h1>alert('a');</h1>"
let John = () => <div id="johndiv" dangerouslySetInnerHTML={{__html:content}}></div>

export default John 