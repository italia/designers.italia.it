import * as React from "react"
import "./kangaroo.scss"
import Icon from "../icon/icon"
import Chip from "../chip/chip"
import Dropdown from "../dropdown/dropdown"

const Kangaroo = ({
	title,
	icon,
	chips,
	dropdown,
	color
}) =>{

	let colorStyle = `${color ? ' text-'+color : ''}`
	return(
		<div className="kangaroo">
			<div className="kangarro-wrapper py-4 d-lg-flex justify-content-between align-items-center">
				<div className="pills-wrapper d-md-flex align-items-center">
					{title &&
						<div className="d-flex title-wrapper align-items-center mb-2 mb-lg-0">
							<Icon {...icon} addonClasses="me-2"></Icon>
							<span className={colorStyle}>{title}</span>
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
		</div>
	)
}

export default Kangaroo