import * as S from './styles'
import Container from 'components/Container'

const Header = () => {
  return (
    <S.Block>
      <Container>
        <S.Title>
          Свадебный калькулятор
          {` `}
          <i>OhMyFlowers</i>.
        </S.Title>

        <S.Text>
          <p>
            Предлагаем Вам воспользоваться нашим свадебным калькулятором. После
            заполнения информации о свадьбе, мы сделаем расчет стоимости
            свадебного оформления. Расчет и более подробная информация будет
            предоставлена в оперативные сроки.
          </p>
          <p>Благодарим за интерес к нашей работе :)</p>
        </S.Text>
      </Container>
    </S.Block>
  )
}

export default Header