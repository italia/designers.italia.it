import { Node } from 'gatsby'

interface ContentMetadata {
  seo: {
    name: string
    description: string
    pathname: string
    image?: string
  }
}

export default function (node: Node) {
  if (node.internal.type === 'Content') {
    const content = node as ContentMetadata
    const { name, description, pathname, image } = content.seo

    return (
      <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff', }}>
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', color: '#212121', }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 900, paddingLeft: 64, paddingRight: 48, paddingTop: 64, paddingBottom: 48, }}>
              <div style={{ fontSize: 64, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, }}>
                {name}
              </div>
              <div style={{ fontSize: 28, fontFamily: "tRegular", fontWeight: 400, color: '#666', paddingRight: 50, display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: 16, gap: 16, }}>
                <p>{description}</p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <img src="https://pbs.twimg.com/profile_images/869985002385231876/q2gatbqh_400x400.jpg" width={172} height={172} style={{}} /> {/* XXX logo image to host ourself on designers*/}
            </div>
          </div>
          {image ? <div style={{
            display: 'flex',
            width: 1200,
            height: 600,
            backgroundColor: '#06c',
            backgroundImage: `url(${image})`,
            // backgroundRepeat: 'no-repeat', 
            backgroundSize: 'contain',
            backgroundPosition: 'left top',
          }}></div> : <div style={{ height: 480, backgroundColor: '#06c', display: 'flex' }}>
            &nbsp;
          </div>
          }
        </div>
      </div >
    )
  } else {
    return (
      <div>Default OG image</div>
    )
  }
}
