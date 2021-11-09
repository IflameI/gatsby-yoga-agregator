import * as React from "react"

const InternalItem = ({ data }) => {
  return (
    <div className="internal__item">
      <h1 className="internal__title">
        {data.allMongodbYogasYoga.edges[0].node.title}
      </h1>
      <p className="internal__desc">
        {data.allMongodbYogasYoga.edges[0].node.description}
      </p>
      <div className="internal__cost">
        <span className="internal__dec">Средняя стоимость:</span>
        {data.allMongodbYogasYoga.edges[0].node.price}
      </div>
      <div className="internal__info">
        <div className="internal__info-title">Контактная информация</div>
        <div className="internal__address">
          <span className="internal__dec">Адрес:</span>
          {data.allMongodbYogasYoga.edges[0].node.address}
        </div>
        <div className="internal__телефон">
          <span className="internal__dec">Телефон:</span>
          {data.allMongodbYogasYoga.edges[0].node.tel}
        </div>
        <div className="internal__address">
          <span className="internal__dec">Сайт:</span>
          <a href={data.allMongodbYogasYoga.edges[0].node.site}>
            {data.allMongodbYogasYoga.edges[0].node.site}
          </a>
        </div>
      </div>
    </div>
  )
}

export default InternalItem
