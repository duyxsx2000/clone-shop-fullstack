import React, { useContext } from "react"
import { AppContext } from "../contex/AppContext"
import Test from "./Test"

function New() {
  const {dataContext} = useContext(AppContext)
    return(
        <div>
            <div>NEW</div>
            <div>{dataContext}</div>
            <Test></Test>
            <a href="./Test.js">test</a>
        </div>
        
    )
}

export default New