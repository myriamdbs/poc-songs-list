# How to run the project

### To Retrieve Project :

1. Clone the repository on your machine

```bash
git clone https://github.com/myriamdbs/poc-songs-list.git
```

2. Install Dependencies

```bash
yarn install
```

3. run the development server:

```bash
yarn start
or
yarn dev
```

4. Search for "Eminem", as example, in the search bar

---

# What I have achieve or not

## Achievements :

- Display search bar and a search button to submit artist research
- Create a service to manage API calls and separate concerns
- Display a table with artist's tracks list result
- Artist name result is clickable to redirect to the artist detail page

## Misses :

- Calls to Deezer API fall into CORS error and I didn't success to solve the issue.
- API data are mocked returning Eminem info details, so you can look for other artists for now
- Search bar and results table could be separated components to improve app scalability and separation of concerns.
- The artist page is very minimalist

The misses are in the order of importance as next steps to enhance the current app.
