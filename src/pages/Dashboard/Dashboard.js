import React, { useEffect, useState } from 'react'
import ApiCard from '../../components/ApiCard/ApiCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Dashboard.module.css'

function Dashboard() {

  const [apiCardList, setApiCardList] = useState([]);
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => {
    fetchApiCards()
  }, [])

  const fetchApiCards = () => {
    fetch("http://localhost:5000/apis")
      .then(response => response.json())
      .then(data => {
        setApiCardList(data)
      })

  }

  return (
    <div className="container mt-5 mb-5">
      <div className={`row d-flex justify-content-center `}>
        <div className={` col-6 `}>
          <p className={`${style.title}  text-center mb-4`}>A collective list of freee APIs for use in software and web development</p>
        </div>
      </div>
      <div className={`row justify-content-center mb-5 `}>
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} className={`col-12`} />
      </div>
      <div>
        <p className={`${style.subtitle} mb-5`}>Featured APIs of this week</p>
        <div className={`row d-flex  justify-content-center `}>
          {apiCardList.filter((each) => {
            let regex = new RegExp(`${searchInput}`)
            if (regex !== "" && regex.test(each.title.toLowerCase())) {
              console.log(regex)
              return 1
            }
            return 0
          }).map((item) => {
            return <ApiCard apiCardList={apiCardList} setApiCardList={setApiCardList} item={item} key={item.id} />
          })}
        </div>
      </div>

      <div className={` my-4`}>
        <p className={`${style.subtitle} my-4`}>Your Bookmarks</p>
        <div className={`row d-flex  justify-content-center `}>
          {apiCardList.filter((item) => {
            if (item.bookmarked === true) {
              return item
            }
            return 0
          }).map((item) => {
            return <ApiCard apiCardList={apiCardList} setApiCardList={setApiCardList} item={item} key={item.id} />
          })}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
