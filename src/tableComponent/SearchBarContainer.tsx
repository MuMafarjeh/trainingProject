import React, { useState, useContext, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { filterDataAction } from './connectComponent/action/allAction';
import SearchBar from './SearchBar';


export interface ISearchBarContainer {

  onChange: (column: any) => void;
  dataFilter:Array<any>
    
    
  
  }
  
export default function SearchContainer(props: ISearchBarContainer) {
    const {onChange,dataFilter} = props;
    const storeState =useSelector((state:any)=>state.data) ;
    const dispatch = useDispatch();


 
    return (<SearchBar 
        dataFilter={dataFilter}
        onChange={onChange}
        onFilterDispatch = {(filterData:any)=> dispatch(filterDataAction(filterData) )}
    />)
}