import React from 'react'
import { BsSearch } from "react-icons/bs"
import style from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={`${style.searchbar} row  align-items-center`}>
      <BsSearch  className={`${style.icon} mx-3 `}/>
      <form className={`${style.icon} col-10 mx-0 pl-0 pr-3`} >
        <input className={`${style.input} py-0 my-0 pr-0`} type="text" placeholder="Find development,games,images APIs"/>
      </form>

    </div>
  )
}

export default SearchBar
