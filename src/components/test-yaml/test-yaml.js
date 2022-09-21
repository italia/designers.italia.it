import * as React from "react"
import Section from "../section/section"

const TestYaml = ({
  title,
  subtitle,
  text
}) => {
	return (
		<div className="test">
			<Section>
				<h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
			</Section>
		</div>
	)
}

export default TestYaml
