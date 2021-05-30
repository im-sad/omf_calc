import * as S from './styles'
import { useState, useEffect } from 'react'

const Goods = ({
  id,
  image,
  name,
  desc,
  price,
  sale,
  active,
  store,
  setStore
}) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 600)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  const handlerClick = (id) => {
    setStore(
      store.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            active: !item.active
          }
        }
        return item
      })
    )
  }

  const handlerRipple = (e) => {
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <S.Goods onClick={() => handlerClick(id)}>
      <S.Cover onClick={(e) => handlerRipple(e)}>
        <S.CoverRadius>
          <S.CoverImage
            src={`./img/content/${image}.jpg`}
            srcset={`./img/content/${image}.jpg 2x`}
          />
          {isRippling ? (
            <span
              className="ripple"
              style={{
                left: coords.x,
                top: coords.y
              }}
            />
          ) : (
            ''
          )}
        </S.CoverRadius>

        <S.Radio ischecked={active} />
      </S.Cover>

      <S.Title>{name}</S.Title>
      <S.Desc>{desc}</S.Desc>
      <S.Price>{price && `~${price.toLocaleString()}₽`}</S.Price>
      {sale && (
        <S.Sale>
          Аренда <br /> бесплатно
        </S.Sale>
      )}
    </S.Goods>
  )
}

export default Goods
