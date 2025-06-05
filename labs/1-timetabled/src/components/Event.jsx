import React from "react";

export default function Event(props){
    return (
        <td className={'Event ' + props.color}>
            <h5>{props.event}</h5>
            <h6>{props.location}</h6>
        </td>
    )
}