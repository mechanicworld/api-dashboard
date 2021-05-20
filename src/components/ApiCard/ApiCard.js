import React from 'react'
import Card from 'react-bootstrap/Card'
import Buttons from '../Buttons/Buttons'
import style from './ApiCard.module.css'

function ApiCard({ item, apiCardList, setApiCardList }) {
  return (
    <>
      <Card className={`p-0 m-1 ${style.card} col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8 `} style={{}}>
        <Card.Body className={` ${style.body} `}>
          <div className="row">
            <div className="col-3">
              <img src={`/img/${item.image}.png`} alt={`${item.title}`} />
            </div>
            <div className="col-9 mt-2 pl-4">
              <Card.Title> {item.title} </Card.Title>
              <Card.Subtitle className={` mb-2 text-muted ${style.subtitle} `}> {item.category} </Card.Subtitle>
              <Card.Text className={` ${style.text} mt-4`}>
                {item.info}
              </Card.Text>
            </div>
          </div>
          <div className={`row justify-content-around align-items-center   ${style.buttonWrapper}`}>
            <Buttons item={item} apiCardList={apiCardList} setApiCardList={setApiCardList} />
          </div>
        </Card.Body>
      </Card>
    </>
  )

}

export default ApiCard
