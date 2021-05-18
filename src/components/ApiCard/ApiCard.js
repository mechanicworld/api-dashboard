import React from 'react'

import Card from 'react-bootstrap/Card'
import Buttons from '../Buttons/Buttons'
import test from '../../assets/test.png'
import style from './ApiCard.module.css'

function ApiCard() {
  return (
    <div>
      <Card style={{ width: '24rem' }}>
        <Card.Body className={` ${style.body} `}>
          <div className="row">
            <div className="col-3">
              <img src={test} />
            </div>
            <div className="col-9">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className={` mb-2 text-muted ${style.subtitle} `}>Card Subtitle</Card.Subtitle>
              <Card.Text className={` ${style.text} `}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
          </Card.Text>
            </div>
          </div>
          <div className={`mt-3 row d-flex  justify-content-around`}>
            <Buttons />
          </div>


        </Card.Body>
      </Card>
    </div>
  )

}

export default ApiCard
