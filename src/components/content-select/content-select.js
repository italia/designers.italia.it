import React, { useState } from "react"

import ContentSelectItem from "./components/content-select-item/content-select-item"

import './content-select.scss'

const VARIANT_PREFIX = 'variant-'

const ContentSelect = ({
  id,
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
    <section className="container-xxl pb-5 pb-lg-6" aria-labelledby={id}>
      <div className="row">
        <div className="col-12 mb-5">
          <h2 id={id} className="px-3 px-md-0">{title}</h2>
        </div>
        <div className="col-12 col-md-6 col-lg-5 mb-4">
          <div class="select-wrapper px-3 px-md-0">
            <label for={id+"-select"}>Etichetta</label>
            <select value={itemSelected} onChange={changeValue} autoComplete="off" id={id+"-select"}>
              { variants.map((v, idx) => <option key={'opt-' + idx} value={v.value}>{v.name}</option>) }
            </select>
          </div>
        </div>
        <div className="col-12">
          { selectedChild && selectedChild.component }
        </div>
      </div>
		</section>
	)
}

export default ContentSelect
