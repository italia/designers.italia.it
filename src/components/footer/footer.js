import React from "react"
import "./footer.scss"
import List from "../list/list"
import ListItem from "../list-item/list-item"
import FooterBrand from "../footer-brand/footer-brand"
import FooterSmall from "../footer-small/footer-small"
import Button from "../button/button"
import Subscribe from "../subscribe/subscribe"

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
              <div key={"item-"+index} className="col-lg-3 col-md-6 col-lg-3 col-sm-6 pb-2 pb-lg-0">
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
				<section className="footer-utilities mt-5 pt-5">
          <div className="row">
            {footerMain.social &&
              <div className="col-12 col-md-6 col-lg-3">
                <h3 className="footer-title pb-4">{footerMain.social.title}</h3>
                {footerMain.social.buttons.map((button,index)=>{
                  return (
                    <Button key={"social-"+index} {...button}></Button>
                  )
                })}
              </div>
            }
            {footerMain.social &&
              <div className="col-12 col-md-6 col-lg-3">
                <h3 className="footer-title pb-4">{footerMain.community.title}</h3>
                {footerMain.community.buttons.map((button,index)=>{
                  return (
                    <Button key={"community-"+index} {...button}></Button>
                  )
                })}
              </div>
            }
            {footerMain.subscribe &&
              <div className="col-12 col-lg-6">
                <div className="title-wrapper d-flex justify-content-between">
                  <h3 className="footer-title pb-4">{footerMain.subscribe.title}</h3>
                  {footerMain.subscribe.link &&
                    <a className="text-white" href={footerMain.subscribe.link.url} target="_blank">{footerMain.subscribe.link.label}</a>
                  }
                </div>
                {footerMain.subscribe.subscribe &&
                  <div className="subscribe-wrapper mt-4">
                    <Subscribe {...footerMain.subscribe.subscribe}></Subscribe>
                  </div>
                }
              </div>
            }
          </div>
        </section>
			</div>
		</div>
		<FooterSmall {...footerSmall}/>
	</footer>
  )
}

export default Footer
