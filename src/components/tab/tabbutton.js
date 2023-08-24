import React, { useEffect } from "react"

import { Tab as TabBI } from "bootstrap-italia"

function TabButton(props) {
    let instance;
    useEffect(() => {
        instance = new TabBI(document.getElementById(props.id))
    });
    return (
        <a {...props} onClick={(e) => {e.preventDefault(); instance.show()}}>{props.children}</a>
    )
}

export default TabButton
