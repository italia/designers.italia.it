import React, { useState } from "react"

import ContentSelectItem from "./components/content-select-item/content-select-item"

import './content-select.scss'

const VARIANT_PREFIX = 'variant-'

const ContentSelect = ({
  title,
	children,
  selectedIdx,
}) => {

  const [itemSelected, setItemSelected] = useState(!isNaN(selectedIdx) ?  VARIANT_PREFIX + selectedIdx : VARIANT_PREFIX + 0)

  const changeValue = (evt) => {
    setItemSelected(evt.currentTarget.value)
  }

  const variants = []
  React.Children.forEach(children, (child, idx) => {
    if (child.type === ContentSelectItem) {
      variants.push({
        name: child.props.name,
        value: VARIANT_PREFIX + idx,
        component: child
      })
    } else {
      throw new Error('ContentSelect accepts only ContentSelectItem as its children')
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

export default ContentSelect
