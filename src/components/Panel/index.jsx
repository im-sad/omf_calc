import * as S from './styles'
import Container from 'components/Container'

const Panel = ({ store = [], setStore, setOpen, price = 0 }) => {
  const formatValue = (value) => {
    const roundValue = +value.toFixed(0)
    return `${roundValue.toLocaleString()} ₽`
  }

  const handlerReset = () => {
    setStore(
      store.map((item) => {
        if (item.active) {
          return {
            ...item,
            active: false
          }
        }
        return item
      })
    )
  }

  return (
    <S.Block isvisible={price}>
      <Container>
        <S.Wrapper>
          <S.Info>
            <S.Label>
              Ориентировочная стоимость<span> свадьбы</span>:
            </S.Label>
            <S.Num value={price} formatValue={formatValue} duration={300} />
          </S.Info>

          <S.Buttons>
            <S.Reset mod="hollow" size="base" onClick={() => handlerReset()}>
              Сбросить
            </S.Reset>
            <S.Make mod="base" size="base" onClick={setOpen}>
              Сделайте мне такую!
            </S.Make>
          </S.Buttons>
        </S.Wrapper>
      </Container>
    </S.Block>
  )
}

export default Panel
