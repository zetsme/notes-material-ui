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
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postNewNote } from '../fetchRequests';
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
  const history = useHistory();
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    category: 'other',
    image: '',
    date: new Date().toLocaleDateString(),
  });
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const onChangeHandle = ({ target: { name, value } }) => setInputs({ ...inputs, [name]: value });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setDescriptionError(false);
    if (!inputs.title) setTitleError(true);
    if (!inputs.description) setDescriptionError(true);
    if (inputs.title && inputs.description) {
      await postNewNote(inputs);
      history.push('/');
    }
  };
  return (
    <Container>
      <form noValidate onSubmit={onSubmitHandle} className={classes.form}>
        <TextField
          color='primary'
          required
          value={inputs.title}
          onChange={(e) => onChangeHandle(e)}
          name='title'
          fullWidth
          variant='outlined'
          label='enter your title'
          error={titleError}
        />
        <TextField
          color='primary'
          required
          value={inputs.description}
          onChange={(e) => onChangeHandle(e)}
          name='description'
          fullWidth
          variant='outlined'
          label='enter your note'
          multiline
          rows='4'
          error={descriptionError}
        />
        <TextField
          color='primary'
          value={inputs.image}
          onChange={(e) => onChangeHandle(e)}
          name='image'
          fullWidth
          variant='outlined'
          label='Enter image url'
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Category</FormLabel>
          <RadioGroup
            value={inputs.category}
            onChange={(e) => onChangeHandle(e)}
            row
            name='category'
          >
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
        <Button type='submit' className={classes.submitBtn} color='primary' variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
