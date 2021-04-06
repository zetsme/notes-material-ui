import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Delete, SportsBasketball, Explore, Style, LocationCity, Create } from '@material-ui/icons';
import { pink, blue, green, deepOrange, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  pink: {
    backgroundColor: pink[500],
  },
  blue: {
    backgroundColor: blue[500],
  },
  green: {
    backgroundColor: green[500],
  },
  orange: {
    backgroundColor: deepOrange[500],
  },
  grey: {
    backgroundColor: blueGrey[500],
  },
});
const NoteCard = ({ note, handleNoteDelete }) => {
  const classes = useStyles();
  const avatars = {
    city: <Avatar className={classes.pink} children={<LocationCity />} />,
    travel: <Avatar className={classes.blue} children={<Explore />} />,
    style: <Avatar className={classes.green} children={<Style />} />,
    sport: <Avatar className={classes.orange} children={<SportsBasketball />} />,
    other: <Avatar className={classes.grey} children={<Create />} />,
  };
  const { title, description, image, date, category, id } = note;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar children={avatars[category]} />}
        action={
          <IconButton onClick={() => handleNoteDelete(id)}>
            <Delete color='error' />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      {image && <CardMedia className={classes.media} title={title} image={image} />}
      <CardContent>
        <Typography color='textSecondary' component='p' variant='body2'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default NoteCard;
