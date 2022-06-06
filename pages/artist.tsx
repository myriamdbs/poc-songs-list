import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getArtistDetails } from '../services'
import styles from '../styles/ArtistPage.module.css'
import { tArtist } from '../types/ArtistDetails'

const ArtistPage: NextPage = () => {
  const router = useRouter()
  const [artistDetails, setArtistDetails] = useState<tArtist | null>(null)

  useEffect(() => {
    if (router.query?.id) {
      const artistQueryParams = router.query.id.length
        ? router.query.id[0].toString()
        : router.query.id.toString()
      const artistDetails = getArtistDetails(artistQueryParams)
      setArtistDetails(artistDetails)
    }
  }, [router.query.id])

  return (
    <div className={styles.container}>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Get details on the artist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {artistDetails && (
          <Box>
            <h1 className={styles.title}>{artistDetails.name}</h1>
          </Box>
        )}
      </main>
    </div>
  )
}

export default ArtistPage
