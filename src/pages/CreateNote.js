import {
  Button,
  Container,
  TextField,
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
const categories = ['travel', 'sport', 'style', 'city', 'other'];
const useStyles = makeStyles({
  form: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  submitBtn: {
    marginLeft: 'auto',
  },
});
const CreateNote = () => {
  const classes = useStyles();
  return (
    <Container>
      <form className={classes.form}>
        <TextField fullWidth variant='outlined' label='title' />
        <TextField fullWidth variant='outlined' label='description' multiline rows='4' />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Category</FormLabel>
          <RadioGroup row name='category'>
            {categories.map((category, index) => (
              <FormControlLabel
                key={index}
                value={category}
                label={category}
                control={<Radio color='primary' />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button className={classes.submitBtn} color='primary' variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
