import React from "react"

const Section = ({
  background,
  bgImage,
  whiteText,
  describedBy,
  children
}) => {
  let sectionnStyles = 'section'
		+ `${background ? ' section-'+background : ''}`   // muted, primary, neutral
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
