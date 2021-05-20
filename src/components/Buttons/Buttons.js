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
      <Button onClick={bookmarkHandler} className={`${style.bookmarks} col-4`} >Bookmarks</Button>
      <Button className={` ${style.allDocs} col-4  `} >All Docs</Button>
    </>
  )
}

export default Buttons
