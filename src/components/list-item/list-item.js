import * as React from "react"

const ListItem = ({
	url,
	children,

}) => {
	const styles = url ? false : "list-item"
	
	return(
		<li className={styles}>
			
		</li>
	)
}

export default ListItem