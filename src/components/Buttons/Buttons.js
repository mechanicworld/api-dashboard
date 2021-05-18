import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import style from './Buttons.module.css'

function Buttons() {
  return (
    <div>
      <Col>
        <Row>
          <Button className={style.bookmarks} >Bookmarks</Button>
          <Button className={style.allDocs} >All Docs</Button>

        </Row>
      </Col>
    </div>
  )
}

export default Buttons
