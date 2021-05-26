import styled from 'styled-components'
import Goods from 'elements/Goods'
import { media } from 'helpers/vars'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 60px 80px;
  padding-left: 32px;

  ${media.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 50px;
  }

  ${media.tablet} {
    padding-left: 24px;
  }

  ${media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 32px;
  }
`
export const Item = styled.li`
  display: block;
`
export const StyledGoods = styled(Goods)``