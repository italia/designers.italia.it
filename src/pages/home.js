import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Icon from "../components/icon/icon"
import Button from "../components/button/button"

const HomePage = () => {
	return (
	  <Template>
      <h1>Page content</h1>
      <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. Mauris eros massa, blandit eget tortor ac, ornare pellentesque ante. Ut pretium accumsan elit, at ultrices nisl. Quisque pulvinar nibh nisi, id elementum sem faucibus nec. Vivamus commodo placerat elit, ac dignissim nibh sodales ac. Pellentesque consectetur nisi erat, vel dignissim elit eleifend feugiat. Pellentesque enim eros, convallis id ante quis, iaculis vulputate enim.</p>
		<Icon icon="sprites.svg#it-tool" size="lg" bg="light" color="success"></Icon>
		<Button
			style="primary"
			iconLeft={
				<Icon icon="sprites.svg#it-tool" size="sm" color="light"/>
			}>
			Label del bottone con icona a sinistra
		</Button>
		<Button
			style="primary"
			iconRight={
				<Icon icon="sprites.svg#it-tool" size="sm" color="light"/>
			}>
			Label del bottone con icona a destra
		</Button>
		<Button
			style="primary"
			size="lg"
			iconRounded
			iconLeft={
				<Icon icon="sprites.svg#it-tool" size="sm" color="primary"/>
			}>
			Label del bottone con icona stondata a sinistra
		</Button>
		<Button
			style="primary"
			iconRounded
			srOnly="Testo per screen reader"
			iconLeft={
				<Icon icon="sprites.svg#it-tool" size="sm" color="primary"/>
			}>
		</Button>
		<Button role="button" url="#" style="secondary">Label del link</Button>
	  </Template>
	)
 }
 export default HomePage

 export const Head = () => (
	<Seo
    title = "Designers Italia | Il punto di riferimento per la progettazione dei servizi pubblici digitali"
    description = "Il punto di riferimento per la progettazione dei servizi pubblici digitali">
  </Seo>
 )
