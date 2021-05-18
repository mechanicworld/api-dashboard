import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import style from './Buttons.module.css'

function Buttons() {
  return (
    <>
      <Button className={`col-4 p-1 m-2 ${style.bookmarks}`} >Bookmarks</Button>
      <Button className={`col-4 p-1 m-2 ${style.allDocs}`} >All Docs</Button>
    </>
  )
}

export default Buttons
