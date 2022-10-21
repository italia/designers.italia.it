import * as React from "react"
import "./kangaroo.scss"
import Icon from "../icon/icon"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"

const Kangaroo = ({
  id,
	title,
	icon,
	chips,
	dropdown,
	color
}) =>{

	let colorStyle = `${color ? ' text-'+color : ''}`
	return(
		<section className="kangaroo" aria-labelledby={id}>
			<div className="kangaroo-wrapper py-4 d-lg-flex justify-content-between align-items-center">
				<div className="pills-wrapper d-md-flex align-items-center">
					{title &&
						<div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0 text-uppercase">
							<Icon {...icon} addonClasses="me-2"></Icon>
							<h2 className={colorStyle} id={id}>{title}</h2>
						</div>
					}
					{
						chips &&
						<div className="chips  ms-md-3 mb-2 mb-lg-0">
							{chips.map((chip,index)=>{
								return(
									<Chip key={'chip-' + index} {...chip}></Chip>
								)
							})}
						</div>
					}
				</div>
				{dropdown &&
					<div className="dropdwon-zone">
						<Dropdown {...dropdown}></Dropdown>
					</div>
				}
			</div>
		</section>
	)
}

export default Kangaroo
