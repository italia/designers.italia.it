import React from "react"
import List from "../list/list"
import ListItem from "../list-item/list-item"
import Button from "../button/button"
import Subscribe from "../subscribe/subscribe"
import "./footer-main.scss"

const FooterMain = ({
  id,
  title,
  cols,
  social,
  community,
  subscribe
}) => {
  return (
    <div className="it-footer-main py-5" id={id}>
			<div className="container-xxl">
				<section>
          {title &&
            <div className="row clearfix pb-4">
              <div className="col-12">
                <h3 className="footer-title">{title}</h3>
              </div>
            </div>
          }
				</section>
				<section>
					<div className="row">
            {cols.map((value,index)=>{
              return(
              <div key={"item-"+index} className="col-12 col-md-6 col-lg-3 col-sm-6 pb-mb-2 pb-lg-0">
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
            {social &&
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h3 className="footer-title pb-4">{social.title}</h3>
                {social.buttons.map((button,index)=>{
                  return (
                    <Button key={"social-"+index} {...button}></Button>
                  )
                })}
              </div>
            }
            {community &&
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                <h3 className="footer-title pb-4">{community.title}</h3>
                {community.buttons.map((button,index)=>{
                  return (
                    <Button key={"community-"+index} {...button}></Button>
                  )
                })}
              </div>
            }
            {subscribe &&
              <div className="col-12 col-lg-6">
                <div className="title-wrapper d-flex justify-content-between">
                  <h3 className="footer-title pb-4">{subscribe.title}</h3>
                  {subscribe.link &&
                    <a className="text-white" href={subscribe.link.url} target="_blank">{subscribe.link.label}</a>
                  }
                </div>
                {subscribe.subscribe &&
                  <div className="subscribe-wrapper mt-4">
                    <Subscribe {...subscribe.subscribe}></Subscribe>
                  </div>
                }
              </div>
            }
          </div>
        </section>
			</div>
		</div>
  )
}

export default FooterMain
