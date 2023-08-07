import { Node } from 'gatsby'

interface ContentMetadata  {
  seo: {
    name: string
    description: string
    pathname: string
    image?: string
  }
}

export default function(node: Node) {
  if (node.internal.type === 'Content') {
    const content = node as ContentMetadata
    const { name, description, pathname, image } = content.seo

    return (
      <div
        style={{
          display: 'flex',
          padding: 48,
          height: '100%',
          backgroundColor: '#2e3440',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: 'white',
            color: '#000000d1',
            padding: 48,
            borderRadius: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontSize: 64, maxWidth: 1000, fontWeight: 600 }}>{name}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: 16, gap: 16 }}>
              {description}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
            <div style={{ fontSize: 48, fontWeight: 400, display: 'flex', alignItems: 'center' }}>
              <img
                src="https://designers.italia.it/images/designers-italia-logo-quad.svg"
                width={72}
                height={72}
                style={{ borderRadius: '50%', marginRight: 16 }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>Default OG image</div>
    )
  }
}
