import React, { useState } from "react"

import ComponentView from "../component-view/component-view"

import './component-view-select.scss'

const VARIANT_PREFIX = 'variant-'

const ComponentViewSelect = ({
  title,
	children,
  selected,
}) => {

  const [itemSelected, setItemSelected] = useState(!isNaN(selected) ?  VARIANT_PREFIX + selected : VARIANT_PREFIX + 0)

  const changeValue = (evt) => {
    setItemSelected(evt.currentTarget.value)
  }

  const variants = []
  React.Children.forEach(children, (child, idx) => {
    if (child.type === ComponentView) {
      variants.push({
        name: child.props.name,
        value: VARIANT_PREFIX + idx,
        component: child
      })
    } else {
      throw new Error('ComponentViewSelect accepts only ComponentView as its children')
    }
  })

  const selectedChild = variants.find((v) => itemSelected === v.value)

	return (
		<div>

      <h3>{title}</h3>

      <select value={itemSelected} onChange={changeValue} autoComplete="off">
        { variants.map((v, idx) => <option key={'opt-' + idx} value={v.value}>{v.name}</option>) }
      </select>

      { selectedChild && selectedChild.component }

		</div>
	)
}

export default ComponentViewSelect
