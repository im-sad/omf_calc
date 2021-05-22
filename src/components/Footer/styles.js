import styled, { css } from 'styled-components'
import { color, media } from 'helpers/vars'
import { rgba } from 'polished'
import { ReactComponent as IcnInst } from 'assets/icons/inst.svg'
import { ReactComponent as IcnVk } from 'assets/icons/vk.svg'
import { ReactComponent as IcnFb } from 'assets/icons/fb.svg'

export const Block = styled.footer`
  border-top: 1px solid ${color.border};
  margin-top: 100px;
  padding-top: 60px;
  padding-bottom: 60px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: column;
  }
`
export const Links = styled.div`
  flex: 0 0 auto;
`
export const Info = styled.div`
  flex: 0 0 auto;
  text-align: right;

  ${media.tablet} {
    text-align: center;
    margin-top: 40px;
  }
`
export const Title = styled.b`
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
  cursor: default;
`
export const Soc = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const SocItem = styled.li`
  margin-right: 20px;
`
export const SocLink = styled.a`
  display: inline-block;
  vertical-align: top;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

const stylesIcn = css`
  display: inline-block;
  vertical-align: top;
  width: 32px;
  height: 32px;
`
export const StyledInst = styled(IcnInst)`
  ${stylesIcn}
`
export const StyledVk = styled(IcnVk)`
  ${stylesIcn}
`
export const StyledFb = styled(IcnFb)`
  ${stylesIcn}
`

export const Tel = styled.a`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  border-bottom: 1px solid ${rgba(color.main, 0.4)};
  white-space: nowrap;

  &:hover {
    border-bottom: 1px solid ${rgba(color.accent, 0.4)};
  }
`
export const Address = styled.p`
  cursor: default;
  margin-top: 10px;
`