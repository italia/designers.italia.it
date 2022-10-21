import React from "react"

const Section = ({
  bgColor,
  bgImage,
  whiteText,
  describedBy,
  children
}) => {
  let sectionnStyles = 'section'
		+ `${bgColor ? ' section-'+bgColor : ''}`   // muted, primary, neutral
		+ `${bgImage ? ' section-image' : ''}`      // url
    + `${whiteText ? ' white-color' : ''}`      // boolean for white text

  return (

    <section
      className={sectionnStyles}
      aria-describedby={describedBy}
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section
