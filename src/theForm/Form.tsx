import { Theme, createStyles, makeStyles, TextField, InputAdornment, MenuItem, InputLabel, Input, FormControl, FormHelperText, IconButton, Button } from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';



const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 10,
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis: 200,
    },
    btn: {
      backgroundColor: '#555555',
    },

    kgField:{
      marginLeft: 50,

    },
    amountField:{
       width:400,
    },
  }),
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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

  const submiting = (e: any) => {
    e.preventDefault();
    console.log(values);

  }

  return (
    <div >
      <form onSubmit={submiting}  className={classes.root} >
        <TextField
          label="With normal TextField"
          id="simple-start-adornment"
          className={clsx( classes.textField, classes.kgField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />
        <TextField
          select
          label="With Select"
          className={clsx(classes.margin, classes.textField)}
          value={values.weightRange}
          onChange={handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={(classes.margin)}>
          <InputLabel  htmlFor="adornment-amount">Amount</InputLabel>
          <Input
           className={( classes.amountField)}
            id="adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
         inputProps={{
          'aria-label': 'weight',
        }}
            id="adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="weight-helper-text"
           
          />
          {/* <FormHelperText id="weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
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
                  {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" className={classes.btn} >Submiting</Button>

      </form>
    </div>
  );
}