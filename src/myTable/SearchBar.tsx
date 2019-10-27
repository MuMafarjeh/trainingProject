import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);
interface IProps {
  onChange: (column: any) => void;
}
export default function SearchBar(props: IProps) {
  const { onChange } = props;
  const [myValue, setMyValue] = useState("");

  const goDoFilter = (e: any) => {
    const v = e.target.value
    onChange(v);
    setMyValue(v)

  }

  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  return (
    <Paper className={classes.root}>
      <InputBase
        value={myValue}
        onChange={goDoFilter}
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />

    </Paper>
  );
}