import React from "react"
import ReactMarkdown from 'react-markdown'
import "./footer.scss"
import List from "../list/list"
import ListItem from "../list-item/list-item"
import FooterBrand from "../footer-brand/footer-brand"
import Icon from "../icon/icon"

const Footer = ({ data }) => {
  
  function sub(boolean){
    if(boolean) {
      return (
        <h3 className="d-none d-md-block">{boolean}</h3>
      )
    }
  }
  function text(boolean) {
    if(boolean) {
      return (
        <p><ReactMarkdown>{boolean}</ReactMarkdown></p>
      )
    }
  }
  function list(boolean,values) {
    if(boolean){
      return(
        <List isMenu={values.isMenu} customStyleUl={values.customStyleUl}>
          {values.items.map((item,index)=>{
            return (
              <ListItem ariaLabel={item.ariaLabel} key={"subitem-info-"+index} url={item.url}>{item.title}</ListItem>
            )
          })}
        </List>
      )
    }
  }
  function infoRow(boolean){
    if(boolean){
      return (
        <section className="py-4 border-white border-top">
          <div className="row">
            {data.footerMain.info.cols.map((value,index)=>{
              return (
                <div key={"voice-"+index} className="col-lg-4 col-md-4 pb-2">
                  <h4><a href={value.url} aria-label={`Vai alla pagina: ${value.title}`}>{value.title}</a></h4>
                  {text(value.text)}
                  {list(value.items,value)}
                  {socials(value.socials)}
                </div>
              )
            })}
          </div>
        </section>
      )
    }
  }
  function socials(boolean) {
    if (boolean) {
      return (
        <ul className="list-inline text-left social">
          {boolean.map((value,index)=>{
            return (
              <li className="list-inline-item">
                <a className="p-2 text-white" href={value.url} aria-label={value.title} target="_blank">
                  <Icon icon={value.icon.icon} size={value.icon.size} addonClasses={value.icon.addonClasses} color={value.icon.color}></Icon>
                </a>
              </li>
            )
          })}
        </ul>
      )
    }
  }
  return (
	<>
		<FooterBrand {...data.footerProject}/>
		<FooterBrand {...data.footerContribute}/>
		<footer className="it-footer">
			<div className="it-footer-main">
				<div className="container">
				<section>
				<div className="row clearfix">
					<div className="col-sm-12">
					<div className="it-brand-wrapper">
						<a href={data.footerMain.brand.url} data-focus-mouse="false">
						<img src={data.footerMain.brand.img} alt={data.footerMain.brand.title}/>
						<div className="it-brand-text">
							<h2>{data.footerMain.brand.title}</h2>
							{sub(data.footerMain.brand.subtitle)}
						</div>
						</a>
					</div>
					</div>
				</div>
				</section>
				<section>
						<div className="row">
				{data.footerMain.cols.map((value,index)=>{
					return(
					<div key={"item-"+index} className="col-lg-3 col-md-3 col-sm-6 pb-2">
						<h4>
						<a href={value.url} aria-label={`Vai alla pagina: ${value.title}`}>{value.title}</a>
						</h4>
						<List isMenu={value.isMenu} customStyleUl={value.customStyleUl}>
						{value.items.map((item,index)=>{
							return (
							<ListItem ariaLabel={item.ariaLabel} key={"subitem-"+index} url={item.url}>{item.title}</ListItem>
							)
						})}
						</List>
					</div>
					)
				})}
				</div>
				</section>
				{infoRow(data.footerMain.info)}
			</div>
			</div>
		</footer>
	</>
  )
}

export default Footer
