import type { ImportMap, PayloadComponent } from 'payload'

import React from 'react'

import { RenderServerComponent } from '../../../../../ui/src/elements/RenderServerComponent/index.js'

export const OGImage: React.FC<{
  description?: string
  Fallback: React.ComponentType
  fontFamily?: string
  Icon: PayloadComponent
  importMap: ImportMap
  leader?: string
  title?: string
}> = ({
  description,
  Fallback,
  fontFamily = 'Arial, sans-serif',
  Icon,
  importMap,
  leader,
  title,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        fontFamily,
        height: '100%',
        justifyContent: 'space-between',
        padding: '100px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          fontSize: 50,
          height: '100%',
        }}
      >
        {leader && (
          <div
            style={{
              fontSize: 30,
              marginBottom: 10,
            }}
          >
            {leader}
          </div>
        )}
        <p
          style={{
            display: '-webkit-box',
            fontSize: 90,
            lineHeight: 1,
            marginBottom: 0,
            marginTop: 0,
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {title}
        </p>
        {description && (
          <p
            style={{
              display: '-webkit-box',
              flexGrow: 1,
              fontSize: 30,
              lineHeight: 1,
              marginBottom: 0,
              marginTop: 40,
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div
        style={{
          alignItems: 'flex-end',
          display: 'flex',
          flexShrink: 0,
          height: '38px',
          justifyContent: 'center',
          width: '38px',
        }}
      >
        <RenderServerComponent
          clientProps={{
            fill: 'white',
          }}
          Component={Icon}
          Fallback={Fallback}
          importMap={importMap}
        />
      </div>
    </div>
  )
}
