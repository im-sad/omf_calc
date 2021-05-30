import * as S from './styles'
import Container from 'components/Container'
import { socials } from 'mocks/socials'

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <S.Wrapper>
          <S.Links>
            <S.Title>Мы в соц. сетях:</S.Title>

            <S.Soc>
              {socials.map((item, index) => {
                return (
                  <S.SocItem key={`soc-${index}`}>
                    <S.SocLink
                      href={item.href}
                      aria-label={item.desc}
                      rel="nofollow noopener"
                      target="_blank"
                    >
                      {item.name === 'inst' && <S.StyledInst />}
                      {item.name === 'vk' && <S.StyledVk />}
                      {item.name === 'fb' && <S.StyledFb />}
                    </S.SocLink>
                  </S.SocItem>
                )
              })}
            </S.Soc>
          </S.Links>

          <S.Info>
            <S.Tel href="tel:">+7 (812) 923 37 87</S.Tel>
            <S.Address>
              Санкт-Петербург, Красного Текстильщика 10-12 лит Ю
            </S.Address>
          </S.Info>
        </S.Wrapper>
      </Container>
    </S.Footer>
  )
}

export default Footer
