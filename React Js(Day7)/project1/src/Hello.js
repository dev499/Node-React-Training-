import React from "react";

export const Hello = (props) => {
    return <div>
    <h3>Hello {props.name}!! Your profile is {props.role}</h3>
    {props.children}
    </div>
}