import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card';


const book1 ={
  id: 1,
  title: "An Object of Beauty",
  subject: "fiction",
  summary: "Lacey is young, captivating, and ambitious enough to take the NYC art world by storm. Groomed at Sotheby's adn hungry to keep climbing the social and career ladders put before her. Lacey charms men and women, old and young, richa nd even richer with her magnetic charisma and liveliness.",
  pages: 295, 
  img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654096919/41QbBB8dtRL_jskqvt.jpg",
  author_first: "Steve",
  author_last: "Martin"
}

const book2 ={
  id: 2,
  title: "Egghead",
  subject: "Poetry",
  summary: "A book of poetry or 'you can't make money on ideas alone'",
  pages: 240, 
  img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654096997/GUEST_642c77c2-5016-4ac1-a964-e9bb38e32e57_tmbh7f.jpg",
  author_first: "Bo",
  author_last: "Burnham"
}

const book3 ={
  id: 3,
  title: "Bossypants",
  subject: "non-fiction",
  summary: "Autobiographical comedic essays about the highs and lows of Tina Fey's life and career",
  pages: 277, 
  img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654097211/51w8J4Gc4XL_pzgtru.jpg",
  author_first: "Tina",
  author_last: "Fey"
}

const book4 ={
  id: 4,
  title: "Naked",
  subject: "non-fiction",
  summary: "David Sedaris mines the exceedingly rich terrain of his life, his family, and his unique worldview. ",
  pages: 304, 
  img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654097380/4138_jfxgss.jpg",
  author_first: "David",
  author_last: "Sedaris"
}

const book5 ={
    id: 5,
    title: "Yes, Please",
    subject: "non-fiction",
    summary: "Amy Poehler shares big juicy stew of personal storeis",
    pages: 329, 
    img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654121085/514FVxjwwGL_zfrowq.jpg",
    author_first: "Amy",
    author_last: "Poehler"
  }

  const book6 ={
    id: 6,
    title: "One More Thing",
    subject: "fiction",
    summary: "Short fantastical stories",
    pages: 272, 
    img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654121216/7101-HAlNXL_caam6w.jpg",
    author_first: "B.J.",
    author_last: "Novak"
  }
const books = [book1, book2, book3, book4, book5, book6]



export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {books.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card book = {book}/>


          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

