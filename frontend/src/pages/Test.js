import React, { useContext } from "react"
import { AppContext } from "../contex/AppContext"

function Test() {
  const {dataContext} = useContext(AppContext)
    return(
        <div>
            <div>Test</div>
            <div>{dataContext}</div>
            
        </div>
        
    )
}

export default Test