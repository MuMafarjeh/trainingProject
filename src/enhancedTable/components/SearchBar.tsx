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

  const handleInputBlur = () => {
    setopenSearchBarIcon(false);
  };

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className={classes.rootOfSearchBar}>

        <Paper >
          <SearchIcon
            onMouseEnter={handleInputFocus}
          // onMouseLeave={handleInputFocus}
          />

          {openSearchBarIcon && <InputBase
            className={classes.inputOfSearchBar}
            value={myValue}
            onChange={goDoFilter}
            //  onFocus={handleInputFocus}
            // onBlur={handleInputBlur}
            placeholder="Search "
            inputProps={{ 'aria-label': 'search ' }}
          />}

        </Paper>
      </div>
    </>
  );
}

