import React from "react"
import "./footer.scss"
import List from "../list/list"
import ListItem from "../list-item/list-item"

const Footer = ({ data }) => {
  function sub(boolean){
    if(boolean) {
      return (
        <h3 className="d-none d-md-block">{boolean}</h3>
      )
    }
  }
  return (
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
			        <div class="row">
              {data.footerMain.cols.map((value,index)=>{
                return(
                  <div key={"item-"+index} class="col-lg-3 col-md-3 col-sm-6 pb-2">
                    <h4>
                      <a href={value.url} aria-label={`Vai alla pagina: ${value.title}`}>{value.title}</a>
                    </h4>
                    <List isMenu={value.isMenu} customStyleUl={value.customStyleUl}>
                      {value.items.map((item,index)=>{
                        return (
                          <ListItem ariaLabel={item.ariaLabel} key={"item-"+index} url={item.url}>{item.title}</ListItem>
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
    </footer>
  )
}

export default Footer
