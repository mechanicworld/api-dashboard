import React from 'react'
import ApiCard from '../../components/ApiCard/ApiCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Dashboard.module.css'

function Dashboard() {
  return (
    <div className="container">
      <div className={`row d-flex justify-content-center `}>
        <div className={` col-6 `}>
          <p className={` text-center`}>A collective list of freee APIs for use in software and web development</p>
        </div>
      </div>
      <div className={`row justify-content-center `}>
        <SearchBar className={`col-12`} />
      </div>
      <div>
        <p>Featured APIs of this week</p>
        <ApiCard />
      </div>
      <div>
        <p>YourBookmarks</p>
        <ApiCard />
      </div>

    </div>
  )
}

export default Dashboard
