import Card from './card'
import Swimlane from './swimlane'

import './content.css'

let content =  () => <div id="main">
    <Swimlane title="Backlog">
        <Card></Card>
        <Card></Card>
    </Swimlane>
    <Swimlane title="In Progress">
        <Card></Card>
    </Swimlane>
    <Swimlane title="Done">
    </Swimlane>
</div>
export default content;