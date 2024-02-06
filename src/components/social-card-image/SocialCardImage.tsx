import { Node } from 'gatsby'
import React from 'react'

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
    const content = node as ContentMetadata;
    const { name, description, pathname, image } = content.seo;
    const nameSimplified = name.replace(' - Designers Italia', '') // remove handmade branding in title if present
    const pathnameSplitted = pathname.split('/');
    const pathroot = pathnameSplitted.slice(0,pathnameSplitted.length-2).join('/');

    return (
      <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff', }}>
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', color: '#212121', }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 900, paddingLeft: 64, paddingRight: 48, paddingTop: 64, paddingBottom: 48, }}>
              <div style={{ display: 'flex', fontSize: 28, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, paddingBottom: 8, }}>
                {pathroot}
              </div>
              <div style={{ fontSize: 64, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, }}>
                {nameSimplified}
              </div>
              <div style={{ fontSize: 28, fontFamily: "tRegular", fontWeight: 400, color: '#666', paddingRight: 50, display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: 8, }}>
                <p>{description}</p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <img src="https://pbs.twimg.com/profile_images/869985002385231876/q2gatbqh_400x400.jpg" width={172} height={172} style={{}} /> {/* XXX logo image to host ourself on designers*/}
            </div>
          </div>
          <div style={{ display: 'flex', height: '640', backgroundColor: '#06c' }}>
            {image ? <img style={{
              width: '100%',
              background: '#06c',
            }} src={image} /> : ''
            }
          </div>
        </div>
      </div >
    )
  } else {
    return (
      <div>Default OG image</div>
    )
  }
}
