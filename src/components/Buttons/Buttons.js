import React from 'react'
import Button from 'react-bootstrap/Button'
import style from './Buttons.module.css'

function Buttons({ item, apiCardList, setApiCardList }) {

  const updateApiList = () => {
    fetch(`http://localhost:5000/apis/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify({ ...item, bookmarked: !item.bookmarked }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      
      })
  }

  const updateApiState = () => {
    const updatedApiState = apiCardList.map((each) => {

      if (each.id === item.id) {
        each.bookmarked = !item.bookmarked
        return each
      }
      return each
    })
    setApiCardList(updatedApiState)
  }

  const bookmarkHandler = () => {
    
    updateApiList()
    updateApiState()

  }
  return (
    <>
      <Button onClick={bookmarkHandler} className={`col-4 p-1 m-2 ${style.bookmarks}`} >Bookmarks</Button>
      <Button className={`col-4 p-1 m-2 ${style.allDocs}`} >All Docs</Button>
    </>
  )
}

export default Buttons
