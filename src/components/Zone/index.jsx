import * as S from './styles'
import Container from 'components/Container'

const Zone = ({ num, title, desc, mod, className, children }) => {
  const newNum = num + 1

  return (
    <S.Section mod={mod} className={className}>
      <S.Head mod={mod}>
        <Container>
          <S.Title>
            <S.Num>{newNum < 10 ? `0${newNum}` : newNum}.</S.Num>
            &nbsp;
            {title}
          </S.Title>

          <S.Desc>{desc}</S.Desc>
        </Container>
      </S.Head>

      <S.Body>
        <Container>{children}</Container>
      </S.Body>
    </S.Section>
  )
}

export default Zone
