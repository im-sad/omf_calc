import * as S from './styles'
import Zone from 'components/Zone'
import Grid from 'components/Grid'
import { cats } from 'mocks/cats'

const Main = ({ store =[], setStore }) => {
  return (
    <S.Main>
      {cats.map((item, index) => {
        return (
          <Zone
            num={index}
            mod={item.name}
            title={item.title}
            desc={item.desc}
            key={`zone-${index}`}
          >
            <Grid category={item.name} store={store} setStore={setStore} />
          </Zone>
        )
      })}
    </S.Main>
  )
}

export default Main