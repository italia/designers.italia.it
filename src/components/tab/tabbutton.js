import React from "react"
import { useEffect } from "react";
import { Tab as TabBI } from "bootstrap-italia"

const TabButton = (props) => {
    let instance;
    useEffect(() => {
        instance = new TabBI(document.getElementById(props.id))
    });
    return (
        <a {...props} onClick={() => {instance.show()}}>{props.children}</a>
    )
}

export default TabButton
