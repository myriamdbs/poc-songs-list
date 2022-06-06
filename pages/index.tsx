import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useState } from 'react'

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    setBtnDisabled(false)
  }

  const handleSubmit = () => {
    // call to Deezer API
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Music App</title>
        <meta
          name="description"
          content="Search a song and get details on the artist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Which song are you looking for ?</h1>
        <Box>
          <form className={styles.wrapper} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="song-search"
              label="Search a song or an artist"
              variant="outlined"
              placeholder="ex : Eminem, ..."
              onChange={handleChange}
            />
            <Button variant="contained" disabled={btnDisabled}>
              <SearchIcon />
            </Button>
          </form>
        </Box>
      </main>
    </div>
  )
}

export default Home
