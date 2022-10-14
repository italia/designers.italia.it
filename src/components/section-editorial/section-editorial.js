import * as React from "react"
import './section-editorial.scss'
import Highlight from "../highlight/highlight"

const SectionEditorial = ({
  title,
  components,
}) => {

  let SwitchComponents;
  return(
    <section className="section-editorial">
        {components.map((item,index) => {
          SwitchComponents = {
            highlight : Highlight
          }
          console.log(item.name)
          const Switcher = SwitchComponents[item.name]
          return(
            <Switcher {...item}/>
          )
        })}
    </section>
  )
}

export default SectionEditorial
