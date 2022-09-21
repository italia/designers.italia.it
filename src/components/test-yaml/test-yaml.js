import * as React from "react"
import Section from "../section/section"

const TestYaml = ({
  title,
}) => {
	return (
		<div className="test">
			<Section>
				<h1>{title}</h1>
			</Section>
		</div>
	)
}

export default TestYaml
