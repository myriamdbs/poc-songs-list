import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, FormEvent, useState } from 'react'
import { searchSongs } from '../services'
import Script from 'next/script'
import { tSearchResults } from '../types/searchResults'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import { useRouter } from 'next/router'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const Home: NextPage = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [searchResults, setSearchResults] = useState<tSearchResults>({
    data: [],
    total: 0,
    next: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    setBtnDisabled(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setBtnDisabled(true)
    const songsData = await searchSongs(searchValue)
    setSearchResults(songsData)
  }

  return (
    <div className={styles.container}>
      <Script
        id="deezer"
        src="https://e-cdn-files.dzcdn.net/js/min/dz.js"
      ></Script>
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

        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="song-search"
            label="Search a song or an artist"
            variant="outlined"
            placeholder="ex : Eminem, ..."
            onChange={handleChange}
          />
          <Button variant="contained" disabled={btnDisabled} type="submit">
            <SearchIcon />
          </Button>
        </form>

        {searchResults.data.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className={styles.tableHeader}>
                <TableRow>
                  <TableCell className={styles.textHeader}>Artist</TableCell>
                  <TableCell className={styles.textHeader} align="center">
                    {"Track's title"}
                  </TableCell>
                  <TableCell className={styles.textHeader} align="right">
                    {"Album's title"}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => {
                        router.push({
                          pathname: '/artist',
                          query: { id: row.artist.id },
                        })
                      }}
                      className={styles.artistCell}
                    >
                      {row.artist.name}{' '}
                      <span className={styles.helpIcon}>
                        <HelpOutlineIcon />
                      </span>
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="right">{row.album.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </main>
    </div>
  )
}

export default Home
