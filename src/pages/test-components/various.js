import * as React from "react"
import Template from "../../templates/tmpl-base"
import Icon from "../../components/icon/icon"
import Button from "../../components/button/button"
import Section from "../../components/section/section"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs"
import Dropdown from "../../components/dropdown/dropdown"
import List from "../../components/list/list"
import ListItem from "../../components/list-item/list-item"
import Chip from "../../components/chip/chip"
import Tag from "../../components/tag/tag"
import NavPreFooter from "../../components/nav-pre-footer/nav-pre-footer"
import ResourceList from "../../components/resource-list/resource-list"
import Pagedata from "./various.yaml"



const HomePage = () => {
	return (
	  <Template>
      <Tag url="#">Registrazione</Tag>
      { Pagedata.components.chips.map((chip,index) => {
          return(
            <Chip key={"chip-"+index} {...chip}/>
          )
        })}
      <Section>

      <Button {...Pagedata.components.button}></Button>
      <Dropdown {...Pagedata.components.dropdown}>
        <List {...Pagedata.components.dropdown.list}></List>
      </Dropdown>
			<Dropdown
				btnId="dropdownMenuButton"
				dropStart
				button = {
          {
            btnStyle:"dropdown dropdown-toggle",
            iconRight : true,
            icon : {
              icon:"sprites.svg#it-expand",
              color:"primary",
              size:"sm",
              addonClasses:"icon-expand",
              iconRounded: false
            },
            children:"Apri Dropdown",
        }}
        >
				<List isMenu>
					<ListItem url="#" isDropdown>Azione 1</ListItem>
					<ListItem url="#" isDropdown>Azione 2</ListItem>
					<ListItem url="#" isDropdown>Azione 3</ListItem>
				</List>
			</Dropdown>
			<Dropdown
				btnId="dropdownMenuButton2"
        button = {
          {
            btnStyle: "primary",
            addonStyle:"dropdown dropdown-toggle",
            icon : {
              color:"primary",
              size:"sm",
              icon:"sprites.svg#it-expand",
              addonClasses:"icon-expand"
            },
            children:"Apri Dropdown",
            iconRight: true,
          }
        }>
				<List isMenu>
					<ListItem url="#" isDropdown>Azione 1</ListItem>
					<ListItem url="#" isDropdown>Azione 2</ListItem>
					<ListItem url="#" isDropdown>Azione 3</ListItem>
				</List>
			</Dropdown>
			<Breadcrumbs
				separator="/"
				//dark={true}
				//icon="sprites.svg#it-link"
			/>
        <h1>Page content</h1>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. Mauris eros massa, blandit eget tortor ac, ornare pellentesque ante. Ut pretium accumsan elit, at ultrices nisl. Quisque pulvinar nibh nisi, id elementum sem faucibus nec. Vivamus commodo placerat elit, ac dignissim nibh sodales ac. Pellentesque consectetur nisi erat, vel dignissim elit eleifend feugiat. Pellentesque enim eros, convallis id ante quis, iaculis vulputate enim.</p>
      </Section>
      <Section
        background="muted"
      >
        <h2>Section muted</h2>
        <Icon icon="sprites.svg#it-tool" size="lg" bg="light" color="success"></Icon>
        <Button
          btnStyle="primary"
          iconLeft
          icon="sprites.svg#it-tool"
          iconSize="sm"
          iconColor="light"
          >

          Label del bottone con icona a sinistra
        </Button>
        <Button
          btnStyle="primary"
          iconRight
          icon="sprites.svg#it-tool"
          iconSize="sm"
          iconColor="light"
          >
          Label del bottone con icona a destra
        </Button>
        <Button
          btnStyle="primary"
          size="lg"
          iconRounded
          iconLeft
          icon="sprites.svg#it-tool"
          iconSize="sm"
          iconColor="primary"
          >
          Label del bottone con icona stondata a sinistra
        </Button>
        <Button
          btnStyle="primary"
          iconRounded
          srOnly="Testo per screen reader"
          iconLeft
          icon="sprites.svg#it-tool"
          iconSize="sm"
          iconColor="primary"
          >
        </Button>
        <Button
          role="button"
          url="#"
          btnStyle="secondary">
            Label del link
        </Button>
      </Section>
      <Section
        background="neutral"
        whiteText={true}
      >
        <h2>Section neutral</h2>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. </p>
      </Section>
      <Section
        bgImage="https://picsum.photos/1280/720?image=811"
        whiteText={true}
      >
        <h2>Section with background image</h2>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. </p>
      </Section>

      <ResourceList {...Pagedata.components.resourceList}/>

      <NavPreFooter {...Pagedata.components.navPreFooter}/>

	  </Template>
	)
 }
 export default HomePage
