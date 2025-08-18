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
  if (node.internal.type === 'Content' && process.env.GATSBY_BUILD !== 'dev') {
    const content = node as unknown as ContentMetadata;
    const { name, description, pathname, image } = content.seo;
    // specify pathroot only below second level pages
    const pathnameSplitted = pathname.split('/');
    const pathroot = pathnameSplitted.slice(0, pathnameSplitted.length - 2).join('/'); // < xxx pathname must finish with "/" to be correct
    // remove handmade branding in title (if present)
    const nameSimplified = name.replace(' - Designers Italia', '')

    return (
      <div style={{ display: 'flex', height: '100%', width: '100%', backgroundColor: '#fff', }}>
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', color: '#212121', }}>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 924, paddingLeft: 32, paddingRight: 32, paddingTop: 32, paddingBottom: 32, }}>
              {pathroot ? <div style={{ display: 'flex', fontSize: 36, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, paddingBottom: 16, }}>
                {pathroot}
              </div> : ''}
              <div style={{
                fontSize: 72, fontFamily: "tBold", fontWeight: 700, lineHeight: .9,
                display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", textOverflow: "ellipsis"
              }}>
                {nameSimplified}
              </div>
              <div style={{
                marginTop: 16, fontSize: 32, fontFamily: "tRegular", fontWeight: 400, color: '#666',
                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", textOverflow: "ellipsis"
              }}>
                {description}
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <img src="https://designers.italia.it/images/logo-designers-italia-quad.png" width={180} height={180} style={{}} />
            </div>
          </div>
          {image ? <div style={{ display: 'flex', backgroundColor: '#06c' }}>
            <img style={{
              width: '100%',
              background: '#06c',
            }} src={image} />
          </div> : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', alignContent: 'flex-end' }}>
            <div style={{ display: 'flex', height: 32, width: '100%', backgroundColor: '#06c', }}>
              &nbsp;
            </div>
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
