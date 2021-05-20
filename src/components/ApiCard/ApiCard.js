import React from 'react'

import Card from 'react-bootstrap/Card'
import Buttons from '../Buttons/Buttons'

import style from './ApiCard.module.css'
// import image from '../../assets/test.png'

function ApiCard( {item, apiCardList, setApiCardList} ) {
  const path = "test"

  return (
    <>
      <Card className={` ${style.card} col-xl-4 col-lg-4 col-md-6 col-sm-6 col-8 p-3`} style={{  }}>
        <Card.Body className={` ${style.body} `}>
          <div className="row">
            <div className="col-3">
              <img src= {`/img/${item.image}.png`} alt={`${item.title}`} />
              {/* <img src= {image} alt={`${item.title}`} /> */}
            </div>
            <div className="col-9">
              <Card.Title> { item.title } </Card.Title>
              <Card.Subtitle className={` mb-2 text-muted ${style.subtitle} `}> { item.category } </Card.Subtitle>
              <Card.Text className={` ${style.text} `}>
                { item.info }
          </Card.Text>
            </div>
          </div>
          <div className={`mt-3 row d-flex  justify-content-around`}>
            <Buttons item={item} apiCardList={apiCardList}  setApiCardList={setApiCardList} />
          </div>
        </Card.Body>
      </Card>
    </>
  )

}

export default ApiCard
