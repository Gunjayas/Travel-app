import React from "react"

export default function Card(props){
    return (<div className="cardss">
    <img src={props.item.imageUrl}/>
    <span class="caption"><bold>{props.item.location} <a href={props.item.googleMapsUrl}>View on Google Maps</a></bold></span>
    <div className="cont"> 
    <h2>{props.item.title}</h2>
    <pre><small>{props.item.startDate} - {props.item.endDate}</small></pre>
    <p> <br></br>{props.item.description}</p>
    </div> 
</div>)

}

