import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


// const book1 ={
//   id: 1,
//   title: "An Object of Beauty",
//   subject: "fiction",
//   summary: "Lacey is young, captivating, and ambitious enough to take the NYC art world by storm. Groomed at Sotheby's adn hungry to keep climbing the social and career ladders put before her. Lacey charms men and women, old and young, richa nd even richer with her magnetic charisma and liveliness.",
//   pages: 295, 
//   img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654096919/41QbBB8dtRL_jskqvt.jpg",
//   author_first: "Steve",
//   author_last: "Martin"
// }

// const book2 ={
//   id: 2,
//   title: "Egghead",
//   subject: "Poetry",
//   summary: "A book of poetry or 'you can't make money on ideas alone'",
//   pages: 240, 
//   img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654096997/GUEST_642c77c2-5016-4ac1-a964-e9bb38e32e57_tmbh7f.jpg",
//   author_first: "Bo",
//   author_last: "Burnham"
// }

// const book3 ={
//   id: 3,
//   title: "Bossypants",
//   subject: "non-fiction",
//   summary: "Autobiographical comedic essays about the highs and lows of Tina Fey's life and career",
//   pages: 277, 
//   img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654097211/51w8J4Gc4XL_pzgtru.jpg",
//   author_first: "Tina",
//   author_last: "Fey"
// }

// const book4 ={
//   id: 4,
//   title: "Naked",
//   subject: "non-fiction",
//   summary: "David Sedaris mines the exceedingly rich terrain of his life, his family, and his unique worldview. ",
//   pages: 304, 
//   img: "https://res.cloudinary.com/dentfkaun/image/upload/v1654097380/4138_jfxgss.jpg",
//   author_first: "David",
//   author_last: "Sedaris"
// }

// const  = [book1, book2, book3, book4]

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({book}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 506 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={book.title}
        subheader={book.author_first + " " +book.author_last}/>
      <CardMedia
        component="img"
        height="194"
        image={book.img}
        alt="Book1"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {book.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to my booklist">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
