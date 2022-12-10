import React from "react"
import Link from "../link/link"
import Icon from "../icon/icon"
import ImageResponsive from "../image-responsive/image-responsive"
import "./header-center.scss"


const HeaderCenter = ({data}) => {

  //-search zone
  function search(boolean) {
    if (boolean) {
      return(
        <div className="it-search-wrapper">
          <Link className="search-link rounded-icon" aria-label={data.search.title} to={data.search.url}>
            <Icon icon={data.search.icon}/>
          </Link>
        </div>
      )
    }
  }


  //-socials zone
  function socials(boolean) {
    if (boolean) {
      return (
        <div className="it-socials d-none d-md-flex">
          <span>{data.socials.title}</span>
          <ul>
            {data.socials.items.map((value,index)=>{
              return(
                <li key={"social-item-"+index}>
                  <Link to={value.url} aria-label={value.title} target="_blank">
                    <Icon icon={value.icon}/>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  return (
    <div className="it-header-center-wrapper "> {/* it-small-header */}
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="it-header-center-content-wrapper">
              <div className="it-brand-wrapper">
                <Link to="/">
                  {/* <Icon icon="sprites.svg#it-designers-italia" hidden/> */}
                  <ImageResponsive src={data.logo} alt="" imgClassName="icon"/>
                  <div className="it-brand-text">
                    <div className="it-brand-title">{data.title}</div>
                  </div>
                </Link>
              </div>
              <div className="it-right-zone">
                {socials(data.socials)}
                {search(data.search)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCenter
