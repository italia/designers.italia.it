import { Node } from 'gatsby'
import React from 'react'
import { truncate } from "lodash"

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
    const content = node as unknown as ContentMetadata;
    const { name, description, pathname, image } = content.seo;
    // specify pathroot only below second level pages
    const pathnameSplitted = pathname.split('/');
    const pathroot = pathnameSplitted.slice(0, pathnameSplitted.length - 2).join('/'); // < xxx pathname must finish with "/" to be correct
    // remove handmade branding in title (if present), and cut at 86 characters long/about 4 rows max
    const nameSimplified = truncate(name.replace(' - Designers Italia', ''), {
      'length': 80,
    })

    const descriptionSimplified = truncate(description, {
      'length': 124
    })

    return (
      <div style={{ display: 'flex', height: '100%', width: '100%', backgroundColor: '#fff', }}>
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', color: '#212121', }}>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 924, paddingLeft: 32, paddingRight: 32, paddingTop: 32, paddingBottom: 32, }}>
              {pathroot ? <div style={{ display: 'flex', fontSize: 36, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, paddingBottom: 16, }}>
                {pathroot}
              </div> : ''}
              <div style={{ fontSize: 80, fontFamily: "tBold", fontWeight: 700, lineHeight: .9, }}>
                {nameSimplified}
              </div>
              <div style={{ fontSize: 28, fontFamily: "tRegular", fontWeight: 400, color: '#666', paddingRight: 50, display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: 8, }}>
                <p>{descriptionSimplified}</p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>            
              <img src="https://i.imgur.com/leSBUEC.png" width={180} height={180} style={{}} /> 
            </div>
          </div>
          {image ? <div style={{ display: 'flex', backgroundColor: '#06c'}}>
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
