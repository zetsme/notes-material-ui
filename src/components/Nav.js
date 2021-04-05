import { AppBar, Button, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core';
import { AddRounded, NoteOutlined } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
  };
});
const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            to='/'
            component={RouterLink}
            edge='start'
            className={classes.logo}
            color='inherit'
            aria-label='menu'
          >
            <NoteOutlined />
          </IconButton>
          <Typography className={classes.title} component='h1' variant='h4'>
            Notes
          </Typography>
          <Button
            component={RouterLink}
            to='/create'
            variant='contained'
            endIcon={<AddRounded color='primary' />}
          >
            <Typography color='primary'>New</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Nav;
