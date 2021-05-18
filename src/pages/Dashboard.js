import React from 'react'
import ApiCard from '../components/ApiCard/ApiCard'
import SearchBar from '../components/SearchBar/SearchBar'

function Dashboard() {
  return (
    <div>

      <div>
        <p>A collective list of freee APIs for use in software and web development</p>
        <SearchBar />
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
