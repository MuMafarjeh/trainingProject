import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './style';
import { ISearchBarContainer } from './SearchBarContainer';


interface IProps extends React.Props<ISearchBarContainer>,ISearchBarContainer {
  
  onFilterDispatch:(data:any)=>void;
}
export default function SearchBar(props: IProps) {
  const { onFilterDispatch} = props;
  const [myValue, setMyValue] = useState("");
  const [data, setData] = useState(props.dataFilter);

  

  const goDoFilter =  (e: any) => {
    const v = e.target.value
    props.onChange(v);
    setMyValue(v)
    onFilterDispatch(props.dataFilter);
  }
  useEffect(()=>{
    setData(props.dataFilter);
     console.log(data,"searchedData");
    
  },[props.dataFilter])

  

  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  return (
    <Paper className={classes.rootSrearchBar}>
      <InputBase
        value={myValue}
        onChange={goDoFilter}
        className={classes.inputSearchBar}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />

    </Paper>
  );
}