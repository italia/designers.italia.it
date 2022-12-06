import * as React from "react"
import Template from "../templates/tmpl-home"
import {Seo} from "../components/seo/seo"
import Highlight from "../components/highlight/highlight"
import SearchMain from "../components/search-main/search-main"
import ContentCollapse from "../components/content-collapse/contentCollapse"
import SectionIntro from "../components/section-intro/section-intro"
import HighlightCards from "../components/highlight-cards/highlight-cards"
import ImgFull from "../components/img-full/img-full"
import Testimonials from "../components/testimonials/testimonials"
import BannerTextCta from "../components/banner-text-cta/banner-text-cta"
import Numbers from "../components/numbers/numbers"
import ImageIcons from "../components/image-icons/image-icons"

import Pagedata from "./index.yaml"

const Home = ({ pageContext, location }) =>{
  return(
    <Template Pagedata={Pagedata} pageContext={pageContext} location={location}>
      <Highlight {...Pagedata.components.hero}>
        {Pagedata.components.hero.moreText && <ContentCollapse label={Pagedata.components.hero.moreButton} labelClose={Pagedata.components.hero.moreButtonClose}>
          {Pagedata.components.hero.moreText}
        </ContentCollapse>}
      </Highlight>
      {Pagedata.components.searchMain && <SearchMain {...Pagedata.components.searchMain}></SearchMain>}
      {Pagedata.components.sectionIntro && <SectionIntro {...Pagedata.components.sectionIntro}></SectionIntro>}
      {Pagedata.components.highLights && Pagedata.components.highLights.map((hl,index) => {
        return(
          <Highlight key={"hl-"+index} {...hl}/>
        )
      })}
      {Pagedata.components.highlightCards &&
        <HighlightCards {...Pagedata.components.highlightCards}></HighlightCards>
      }

      {Pagedata.components.imageIcons &&
        <ImageIcons {...Pagedata.components.imageIcons}></ImageIcons>
      }

      {Pagedata.components.sectionIntroImg &&
        <SectionIntro {...Pagedata.components.sectionIntroImg}>
          {Pagedata.components.sectionIntroImg.testimonials &&
            <div className="">
              <Testimonials {...Pagedata.components.sectionIntroImg.testimonials}></Testimonials>
            </div>
          }
        </SectionIntro>}
      {Pagedata.components.highlightCards2 &&
        <HighlightCards {...Pagedata.components.highlightCards2}></HighlightCards>
      }
      {Pagedata.components.bannerTextCta &&
          <BannerTextCta {...Pagedata.components.bannerTextCta}>
            {Pagedata.components.bannerTextCta.numbers &&
              <Numbers {...Pagedata.components.bannerTextCta.numbers}></Numbers>
            }
          </BannerTextCta>
      }
    </Template>
  )
}

export default Home;
export const Head = () => (
	<Seo
    title = {Pagedata.seo.name}
    description = {Pagedata.seo.description}
    image = {Pagedata.seo.image}
    twitterImage = {Pagedata.seo.twitterImage}
    pathname = {Pagedata.seo.pathname}
    canonical = {Pagedata.seo.canonical}
  >
  </Seo>
)
