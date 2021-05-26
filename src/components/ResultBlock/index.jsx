import * as S from './styles'
import { cats } from 'mocks/cats'

const ResultBlock = ({ items = [] }) => {
  return (
    <S.Block>
      <S.Content>
        {cats.map((item, index) => {
          return (
            <S.List key={`cat-${index}`}>
              <S.Title>
                {index < 10 && `0`}{index + 1}. {item.title}
              </S.Title>

              <S.Sub>
                {items.map((sub, index) => {
                  if (sub.active && sub.cat === item.name) {
                    return (
                      <S.SubItem key={`result-${index}`}>{sub.name}</S.SubItem>
                    )
                  } else {
                    return false
                  }
                })}
              </S.Sub>
            </S.List>
          )
        })}
      </S.Content>
    </S.Block>
  )
}

export default ResultBlock
