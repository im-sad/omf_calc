import * as S from "./styles"

const Grid = ({ store = [], setStore, category }) => {
  const itemsCat = store.filter((item) => category === item.cat)

  return (
    <S.List>
      {itemsCat.map((item, index) => {
        return (
          <S.Item key={`item-${index}`}>
            <S.StyledGoods
              id={item.id}
              pseudo={item.name}
              name={item.name}
              desc={item.desc}
              price={item.price}
              image={item.image}
              sale={item.sale}
              active={item.active}
              store={store}
              setStore={setStore}
            />
          </S.Item>
        )
      })}
    </S.List>
  )
}

export default Grid