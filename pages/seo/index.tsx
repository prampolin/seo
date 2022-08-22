import React, { useState, useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'

const Seo: NextPage = () => {
  const [photo, setPhoto] = useState<any>()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then((response) => response.json())
      .then((json) => setPhoto(json))
  }, [])

  return (
    <>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content={photo?.title} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="some description" />
        <meta property="og:image" content={photo?.url} />
      </Head>
      <h2>{photo?.title}</h2>
    </>
  )
}

export default Seo

export const getServerSideProps = async () => {
  let photo = null
  await fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response) => response.json())
    .then((json) => {
      photo = json
    })

  return {
    props: {
      photo,
    },
  }
}
