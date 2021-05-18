import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import style from './Buttons.module.css'

function Buttons({ item, setApiCardList }) {

  const [bookmarked, setBookmarked] = useState(item.bookmarked)

  const updateApiList = () => {
    fetch(`http://localhost:5000/apis/${item.id}`, {
      method:'PUT',
      body: JSON.stringify({ ...item, bookmarked:bookmarked }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const updateApiStatus = () => {
    // TODO
  }

  const bookmarkHandler = async () => {
    await setBookmarked(!bookmarked)   
    await updateApiList()

    // console.log(item.id)
    // console.log(item.bookmarked)
    // console.log({ ...item, bookmarked:bookmarked })
  }
  return (
    <>
      <Button onClick={bookmarkHandler} className={`col-4 p-1 m-2 ${style.bookmarks}`} >Bookmarks</Button>
      <Button className={`col-4 p-1 m-2 ${style.allDocs}`} >All Docs</Button>
    </>
  )
}

export default Buttons
