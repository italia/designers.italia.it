import React from "react"
import ReactMarkdown from 'react-markdown'
import "./footer.scss"
import List from "../list/list"
import ListItem from "../list-item/list-item"
import FooterBrand from "../footer-brand/footer-brand"
import FooterSmall from "../footer-small/footer-small"
import Icon from "../icon/icon"

const Footer = ({
  footerProject,
  footerContribute,
  footerMain,
  footerSmall,
}) => {

  return (
	<footer className="it-footer">
		<FooterBrand {...footerProject}/>
		<FooterBrand {...footerContribute}/>
		<div className="it-footer-main py-5" id= {footerMain.id}>
			<div className="container-xxl">
				<section>
          {footerMain.title &&
            <div className="row clearfix pb-4">
              <div className="col-12">
              <h3 className="footer-title">{footerMain.title}</h3>
              </div>
            </div>
          }
				</section>
				<section>
					<div className="row">
            {footerMain.cols.map((value,index)=>{
              return(
              <div key={"item-"+index} className="col-lg-3 col-md-3 col-sm-6 pb-2 pb-lg-0">
                <List {...value}>
                {value.items.map((item,index)=>{
                  return (
                  <ListItem {...item} key={"subitem-"+index}></ListItem>
                  )
                })}
                </List>
              </div>
              )
            })}
					</div>
				</section>
				
			</div>
		</div>
		<FooterSmall {...footerSmall}/>
	</footer>
  )
}

export default Footer
