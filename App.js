import React from "react"
import Card from "./component/Card.js"
import Nav from "./component/Nav"
import data from "./data.js"

export default function App(){
    const Cardelements = data.map(item=>{
        return <Card item={item}/>
    })
    return <div><Nav/> {Cardelements}</div>

}