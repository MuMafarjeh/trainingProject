import { Theme, createStyles, makeStyles, TextField, InputAdornment, MenuItem, InputLabel, Input, FormControl, FormHelperText, IconButton, Button, withStyles } from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import useStyles from "./style";
import { ThemeProvider } from "@material-ui/styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from "axios";



const ranges = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
];

interface State {
  email: string;
  first_name: string;
  last_name: string;
  Gender: string;
  location: string;
  password: string;

  showPassword: boolean;
}

export default function InputAdornments() {

  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: '',
    first_name: '',
    last_name: '',
    Gender: '',
    location: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmiting = (e: any) => {
    e.preventDefault();
    axios.post(`https://reqres.in/api/users`, { values }).then(response => {
      console.log(response);

    }).catch(error => {
      console.log(error);

    });
    console.log(values);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmiting} className={classes.root} >

        <TextField
          label="Pleas Enter First Name"
          id="simple-start-adornment"
          className={clsx(classes.margin, classes.kgField)}
          value={values.first_name}
          onChange={handleChange('first_name')}
          InputProps={{
            startAdornment: <InputAdornment position="start">FirstName:</InputAdornment>,
          }}
        />
        <TextField
          label="Please Enter Last Name"
          id="simple-start-adornment2"
          className={clsx(classes.margin, classes.kgField)}
          value={values.last_name}
          onChange={handleChange('last_name')}
          InputProps={{
            startAdornment: <InputAdornment position="start">LastName:</InputAdornment>,
          }}
        />


        <TextField
          select
          label="Please Choose Gender"
          className={clsx(classes.margin, classes.kgField)}
          value={values.Gender}
          onChange={handleChange('Gender')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Gender</InputAdornment>,
          }}
        >

          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <FormControl className={clsx(classes.kgField, classes.margin)}>
          <InputLabel htmlFor="adornment-amount">LocationDescription</InputLabel>
          <Input
            className={(classes.amountField)}
            id="adornment-amount"
            value={values.location}
            onChange={handleChange('location')}
          // startAdornment={<InputAdornment position="start">Location:</InputAdornment>}
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.kgField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" className={clsx(classes.margin, classes.btn)} >Submiting</Button>

      </form>
    </React.Fragment>
  );
}