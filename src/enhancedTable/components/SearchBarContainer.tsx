import React, { useState, useContext, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { filterDataAction } from '../duck/action/allAction';
import SearchBar from './SearchBar';


export interface ISearchBarContainer {

  onChange: (column: any) => void;
 
    
  
  }
  
export default function SearchContainer(props: ISearchBarContainer) {
    const {onChange} = props;
    const storeState =useSelector((state:any)=>state.data) ;
    const dispatch = useDispatch();


 
    return (<SearchBar 
        
        onChange={onChange}
       
    />)
}