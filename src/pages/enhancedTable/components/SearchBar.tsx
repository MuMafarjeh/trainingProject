import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useStylesSearchBar } from './style';
import { ISearchBarContainer } from './SearchBarContainer';
import { Theme, AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface IProps extends React.Props<ISearchBarContainer>, ISearchBarContainer {
  onChange: (column: any) => void;
}
export default function SearchBar(props: IProps) {
  const { onChange } = props;
  const [myValue, setMyValue] = useState("");
  const [openSearchBar, setopenSearchBar] = useState(false);
  const [openSearchBarIcon, setopenSearchBarIcon] = useState(false);
  const classes = useStylesSearchBar();


  const goDoFilter = (e: any) => {
    const v = e.target.value
    setMyValue(v)
    onChange(v);
  }
  const handleInputFocus = () => {
    setopenSearchBarIcon(!openSearchBarIcon);
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <div className={classes.rootOfSearchBar}>

      <Paper className={classes.prepar}>
        <div className={classes.searchIcon}>
          <SearchIcon
          // onClick={handleInputFocus}
          // onMouseEnter={handleInputFocus}
          //  onMouseLeave={handleInputBlur}
          //  onFocus={handleInputFocus}
          //  onBlur={handleInputBlur}

          />  </div>
        {/* className={classes.inputOfSearchBar} */}
        <div>
          <InputBase
            value={myValue}
            onChange={goDoFilter}
            placeholder="Search.............. "
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search ' }}
          />
        </div>
      </Paper>

    </div>

  );
}

