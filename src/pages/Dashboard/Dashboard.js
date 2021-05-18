import React, { useEffect, useState } from 'react'
import ApiCard from '../../components/ApiCard/ApiCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Dashboard.module.css'

function Dashboard() {

  const [apiCardList, setApiCardList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    fetchApiCards()
  }, [])

  const fetchApiCards = () => {
    fetch("http://localhost:5000/apis")
      .then(response => response.json())
      .then(data => {
        setApiCardList(data)
        setBookmarkList()
      
      })

  }

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
        <div className={`row d-flex  justify-content-center `}>
          {apiCardList.filter((item) => {
            if (item.bookmarked) {
              console.log(item)
              return item
            }
          }).map((item) => {
            return <ApiCard item={item} />
          })}
        </div>
      </div>

      <div>
        <p>Your Bookmarks</p>
        <div className={`row d-flex  justify-content-center `}>
          {apiCardList.filter((item) => {
            if (!item.bookmarked) {
              console.log(item)
              return item
            }
          }).map((item) => {
            return <ApiCard item={item} />
          })}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
