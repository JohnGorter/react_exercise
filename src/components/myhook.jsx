import { useState } from "react"

const useMyState = (function() {
    let _val // hold our state in module scope
    return {
      render(Component) {
        const Comp = Component()
        Comp.render()
        return Comp
      },
      useState(initialValue) {
        _val = _val || initialValue // assign anew every run
        function setState(newVal) {
          _val = newVal
        }
        return [_val, setState]
      }
    }
  })()


let MyHook = () => {
    const [count, setCounter] = useState(0);
 return <div onClick={() => { console.log("c"); debugger; setCounter(count + 1)}}>{ "counter:" + count }</div>
}



export default MyHook;