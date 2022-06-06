export const searchSongs = async (searchValue: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.deezer.com/search?q=${searchValue}&output=json`,
  //       { headers: { 'Access-Control-Allow-Origin': '*' } }
  //     )

  //     const songsResults = response.json()
  //     return songsResults
  //   } catch (err) {
  //     console.log(err)
  //   }

  return {
    data: [
      {
        id: '1109731',
        readable: true,
        title: 'Lose Yourself (From "8 Mile" Soundtrack)',
        title_short: 'Lose Yourself',
        title_version: '(From "8 Mile" Soundtrack)',
        link: 'https://www.deezer.com/track/1109731',
        duration: '326',
        rank: '952888',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '916424',
        readable: true,
        title: 'Without Me',
        title_short: 'Without Me',
        title_version: '',
        link: 'https://www.deezer.com/track/916424',
        duration: '290',
        rank: '961431',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3',
        md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '103248',
          title: 'The Eminem Show',
          cover: 'https://api.deezer.com/album/103248/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
          tracklist: 'https://api.deezer.com/album/103248/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109737',
        readable: true,
        title: 'The Real Slim Shady',
        title_short: 'The Real Slim Shady',
        title_version: '',
        link: 'https://www.deezer.com/track/1109737',
        duration: '284',
        rank: '953631',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-d.dzcdn.net/stream/c-d28ee67c24d60e740866c7709d772f55-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '6461432',
        readable: true,
        title: 'Not Afraid',
        title_short: 'Not Afraid',
        title_version: '',
        link: 'https://www.deezer.com/track/6461432',
        duration: '248',
        rank: '921178',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-0.dzcdn.net/stream/c-04c2c479846725eec24a3f40e837d35e-16.mp3',
        md5_image: 'be682506145061814eddee648edb7c59',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '595243',
          title: 'Recovery',
          cover: 'https://api.deezer.com/album/595243/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg',
          md5_image: 'be682506145061814eddee648edb7c59',
          tracklist: 'https://api.deezer.com/album/595243/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '548348732',
        readable: true,
        title: 'Venom (Music From The Motion Picture)',
        title_short: 'Venom',
        title_version: '(Music From The Motion Picture)',
        link: 'https://www.deezer.com/track/548348732',
        duration: '269',
        rank: '892745',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-8.dzcdn.net/stream/c-8ad574e54c315bd9f89ba34deb2c7650-6.mp3',
        md5_image: 'bf74fc764097630ba58782ae79cfbee6',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '72000342',
          title: 'Kamikaze',
          cover: 'https://api.deezer.com/album/72000342/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/1000x1000-000000-80-0-0.jpg',
          md5_image: 'bf74fc764097630ba58782ae79cfbee6',
          tracklist: 'https://api.deezer.com/album/72000342/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109730',
        readable: true,
        title: 'Stan',
        title_short: 'Stan',
        title_version: '',
        link: 'https://www.deezer.com/track/1109730',
        duration: '404',
        rank: '934036',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-d.dzcdn.net/stream/c-dbbd5055e0b4b64397e939f75ca0662b-13.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109739',
        readable: true,
        title: 'Mockingbird',
        title_short: 'Mockingbird',
        title_version: '',
        link: 'https://www.deezer.com/track/1109739',
        duration: '251',
        rank: '874836',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '555640142',
        readable: true,
        title: 'Venom (Music From The Motion Picture)',
        title_short: 'Venom',
        title_version: '(Music From The Motion Picture)',
        link: 'https://www.deezer.com/track/555640142',
        duration: '269',
        rank: '883819',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-c2f1132eab78414f78402c5f3dd35f5b-6.mp3',
        md5_image: '566525f73a265ef3da415a8e1680727f',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '73301752',
          title: 'Venom (Music From The Motion Picture)',
          cover: 'https://api.deezer.com/album/73301752/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/566525f73a265ef3da415a8e1680727f/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/566525f73a265ef3da415a8e1680727f/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/566525f73a265ef3da415a8e1680727f/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/566525f73a265ef3da415a8e1680727f/1000x1000-000000-80-0-0.jpg',
          md5_image: '566525f73a265ef3da415a8e1680727f',
          tracklist: 'https://api.deezer.com/album/73301752/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '6461440',
        readable: true,
        title: 'Love The Way You Lie',
        title_short: 'Love The Way You Lie',
        title_version: '',
        link: 'https://www.deezer.com/track/6461440',
        duration: '263',
        rank: '920239',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3',
        md5_image: 'be682506145061814eddee648edb7c59',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '595243',
          title: 'Recovery',
          cover: 'https://api.deezer.com/album/595243/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/1000x1000-000000-80-0-0.jpg',
          md5_image: 'be682506145061814eddee648edb7c59',
          tracklist: 'https://api.deezer.com/album/595243/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109729',
        readable: true,
        title: 'My Name Is',
        title_short: 'My Name Is',
        title_version: '',
        link: 'https://www.deezer.com/track/1109729',
        duration: '268',
        rank: '847709',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-b.dzcdn.net/stream/c-b410ccaf3c000eeaa74025f558892638-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1757177397',
        readable: true,
        title: 'Jimmy, Brian and Mike',
        title_short: 'Jimmy, Brian and Mike',
        title_version: '',
        link: 'https://www.deezer.com/track/1757177397',
        duration: '201',
        rank: '100000',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-c6fa3ebb445ff754103b6a9fd6b57fcb-4.mp3',
        md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '320098917',
          title: 'The Eminem Show (Expanded Edition)',
          cover: 'https://api.deezer.com/album/320098917/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/1000x1000-000000-80-0-0.jpg',
          md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
          tracklist: 'https://api.deezer.com/album/320098917/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '72160314',
        readable: true,
        title: 'Rap God',
        title_short: 'Rap God',
        title_version: '',
        link: 'https://www.deezer.com/track/72160314',
        duration: '363',
        rank: '856062',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-2.dzcdn.net/stream/c-2a2a808c0966c0952aa4f6bae6fa98de-6.mp3',
        md5_image: '7c71224818ac99b16570357b2f98e041',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '7090505',
          title: 'The Marshall Mathers LP2 (Deluxe)',
          cover: 'https://api.deezer.com/album/7090505/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/1000x1000-000000-80-0-0.jpg',
          md5_image: '7c71224818ac99b16570357b2f98e041',
          tracklist: 'https://api.deezer.com/album/7090505/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '72160317',
        readable: true,
        title: 'The Monster',
        title_short: 'The Monster',
        title_version: '',
        link: 'https://www.deezer.com/track/72160317',
        duration: '250',
        rank: '876972',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-1.dzcdn.net/stream/c-19bb8452c0c5709dde021b7f92c98ab7-6.mp3',
        md5_image: '7c71224818ac99b16570357b2f98e041',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '7090505',
          title: 'The Marshall Mathers LP2 (Deluxe)',
          cover: 'https://api.deezer.com/album/7090505/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/1000x1000-000000-80-0-0.jpg',
          md5_image: '7c71224818ac99b16570357b2f98e041',
          tracklist: 'https://api.deezer.com/album/7090505/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '916426',
        readable: true,
        title: 'Sing For The Moment',
        title_short: 'Sing For The Moment',
        title_version: '',
        link: 'https://www.deezer.com/track/916426',
        duration: '339',
        rank: '797608',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-6.dzcdn.net/stream/c-6a0f240c7bd580e87697146ed3247ab5-8.mp3',
        md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '103248',
          title: 'The Eminem Show',
          cover: 'https://api.deezer.com/album/103248/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
          tracklist: 'https://api.deezer.com/album/103248/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '916445',
        readable: true,
        title: "'Till I Collapse",
        title_short: "'Till I Collapse",
        title_version: '',
        link: 'https://www.deezer.com/track/916445',
        duration: '297',
        rank: '934182',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-1.dzcdn.net/stream/c-12eca10f7e8e55f7f83c14b3552f1940-9.mp3',
        md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '103248',
          title: 'The Eminem Show',
          cover: 'https://api.deezer.com/album/103248/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
          tracklist: 'https://api.deezer.com/album/103248/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1176202',
        readable: true,
        title: 'The Real Slim Shady',
        title_short: 'The Real Slim Shady',
        title_version: '',
        link: 'https://www.deezer.com/track/1176202',
        duration: '284',
        rank: '736558',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-f.dzcdn.net/stream/c-fbbe73417ae16fce847141b923953c98-4.mp3',
        md5_image: '941c2d3c366affdc662956559e078a4e',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '125748',
          title: 'The Marshall Mathers LP',
          cover: 'https://api.deezer.com/album/125748/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/1000x1000-000000-80-0-0.jpg',
          md5_image: '941c2d3c366affdc662956559e078a4e',
          tracklist: 'https://api.deezer.com/album/125748/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109744',
        readable: true,
        title: "When I'm Gone",
        title_short: "When I'm Gone",
        title_version: '',
        link: 'https://www.deezer.com/track/1109744',
        duration: '281',
        rank: '779455',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-8.dzcdn.net/stream/c-8aaafada99fb0a10485ea594f664d917-13.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '916414',
        readable: true,
        title: "Cleanin' Out My Closet",
        title_short: "Cleanin' Out My Closet",
        title_version: '',
        link: 'https://www.deezer.com/track/916414',
        duration: '297',
        rank: '760166',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-f.dzcdn.net/stream/c-f052966abff92ac3ca9e29fbe62b50eb-8.mp3',
        md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '103248',
          title: 'The Eminem Show',
          cover: 'https://api.deezer.com/album/103248/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ec3c8ed67427064c70f67e5815b74cef',
          tracklist: 'https://api.deezer.com/album/103248/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1579904',
        readable: true,
        title: 'Lose Yourself (Soundtrack Version)',
        title_short: 'Lose Yourself',
        title_version: '(Soundtrack Version)',
        link: 'https://www.deezer.com/track/1579904',
        duration: '321',
        rank: '713869',
        explicit_lyrics: false,
        explicit_content_lyrics: 3,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-b.dzcdn.net/stream/c-bb112ef835b82f77ac3ca59fefad3d6f-5.mp3',
        md5_image: '6fa1402225904c274083a73f6618cdcf',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '162035',
          title: '8 Mile',
          cover: 'https://api.deezer.com/album/162035/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/6fa1402225904c274083a73f6618cdcf/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/6fa1402225904c274083a73f6618cdcf/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/6fa1402225904c274083a73f6618cdcf/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/6fa1402225904c274083a73f6618cdcf/1000x1000-000000-80-0-0.jpg',
          md5_image: '6fa1402225904c274083a73f6618cdcf',
          tracklist: 'https://api.deezer.com/album/162035/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '979041',
        readable: true,
        title: 'Smack That (Clean)',
        title_short: 'Smack That',
        title_version: '(Clean)',
        link: 'https://www.deezer.com/track/979041',
        duration: '212',
        rank: '807944',
        explicit_lyrics: false,
        explicit_content_lyrics: 3,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-c45ae335d3f89e153c37217f4495cefc-4.mp3',
        md5_image: 'bc4d98904d61661cc6d7dd53745340d0',
        artist: {
          id: '38',
          name: 'Akon',
          link: 'https://www.deezer.com/artist/38',
          picture: 'https://api.deezer.com/artist/38/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/38/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '108938',
          title: 'Konvicted',
          cover: 'https://api.deezer.com/album/108938/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/1000x1000-000000-80-0-0.jpg',
          md5_image: 'bc4d98904d61661cc6d7dd53745340d0',
          tracklist: 'https://api.deezer.com/album/108938/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '854914322',
        readable: true,
        title: 'Godzilla',
        title_short: 'Godzilla',
        title_version: '',
        link: 'https://www.deezer.com/track/854914322',
        duration: '210',
        rank: '913535',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 1,
        preview:
          'https://cdns-preview-d.dzcdn.net/stream/c-d5a91f3cf9c2b399c9734223623a3c67-6.mp3',
        md5_image: '4d00a7848dc8af475973ff1761ad828d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '127270232',
          title: 'Music To Be Murdered By',
          cover: 'https://api.deezer.com/album/127270232/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/1000x1000-000000-80-0-0.jpg',
          md5_image: '4d00a7848dc8af475973ff1761ad828d',
          tracklist: 'https://api.deezer.com/album/127270232/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1109727',
        readable: true,
        title: 'The Way I Am',
        title_short: 'The Way I Am',
        title_version: '',
        link: 'https://www.deezer.com/track/1109727',
        duration: '291',
        rank: '746256',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-6.dzcdn.net/stream/c-648abd8c64b8452a703bf48139b0ba64-12.mp3',
        md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '119606',
          title: 'Curtain Call: The Hits',
          cover: 'https://api.deezer.com/album/119606/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
          md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
          tracklist: 'https://api.deezer.com/album/119606/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1757177177',
        readable: true,
        title: 'White America',
        title_short: 'White America',
        title_version: '',
        link: 'https://www.deezer.com/track/1757177177',
        duration: '324',
        rank: '100000',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-8.dzcdn.net/stream/c-883314d5c6af0e05da8c801f0d815597-4.mp3',
        md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '320098917',
          title: 'The Eminem Show (Expanded Edition)',
          cover: 'https://api.deezer.com/album/320098917/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/1000x1000-000000-80-0-0.jpg',
          md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
          tracklist: 'https://api.deezer.com/album/320098917/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '2248423',
        readable: true,
        title: 'Lose Yourself (From "8 Mile" Soundtrack)',
        title_short: 'Lose Yourself',
        title_version: '(From "8 Mile" Soundtrack)',
        link: 'https://www.deezer.com/track/2248423',
        duration: '326',
        rank: '588504',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-c7182bbb95ce946f84272ea2dbc3f0b3-12.mp3',
        md5_image: '2d160b4c0d72272b4f5d7f55037d4864',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '224581',
          title: 'Curtain Call: The Hits (Deluxe Edition)',
          cover: 'https://api.deezer.com/album/224581/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/2d160b4c0d72272b4f5d7f55037d4864/1000x1000-000000-80-0-0.jpg',
          md5_image: '2d160b4c0d72272b4f5d7f55037d4864',
          tracklist: 'https://api.deezer.com/album/224581/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: '1757177187',
        readable: true,
        title: 'Business',
        title_short: 'Business',
        title_version: '',
        link: 'https://www.deezer.com/track/1757177187',
        duration: '251',
        rank: '100000',
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-e.dzcdn.net/stream/c-e15f393762853e10d6c12e7be3594fec-4.mp3',
        md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
        artist: {
          id: '13',
          name: 'Eminem',
          link: 'https://www.deezer.com/artist/13',
          picture: 'https://api.deezer.com/artist/13/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
          tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
          type: 'artist',
        },
        album: {
          id: '320098917',
          title: 'The Eminem Show (Expanded Edition)',
          cover: 'https://api.deezer.com/album/320098917/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/d6e14fe8e855c20db60b31a7b42eb007/1000x1000-000000-80-0-0.jpg',
          md5_image: 'd6e14fe8e855c20db60b31a7b42eb007',
          tracklist: 'https://api.deezer.com/album/320098917/tracks',
          type: 'album',
        },
        type: 'track',
      },
    ],
    total: 300,
    next: 'https://api.deezer.com/search?q=eminem&index=25',
  }
}
