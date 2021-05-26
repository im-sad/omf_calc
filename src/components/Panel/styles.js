import styled from 'styled-components'
import { rgba } from 'polished'
import { color, media } from 'helpers/vars'
import Button from 'elements/Button'
import AnimatedNumber from 'animated-number-react'

export const Block = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${rgba(color.main, 0.89)};
  z-index: 99;
  transform: translateY(101%);
  box-shadow: 0 -2px 10px ${rgba(color.black, 0.15)};
  transition: transform 0.3s ease;

  ${(props) => props.isvisible && `transform: translateY(0);`}
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.white};
  padding: 10px 0;
  cursor: default;

  ${media.laptop} {
    padding: 4px 0;
  }

  ${media.tablet} {
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
`
export const Info = styled.div`
  ${media.tablet} {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Label = styled.div`
  font-size: 16px;
  display: block;

  ${media.laptop} {
    span {
      display: none;
    }
  }
`
export const Num = styled(AnimatedNumber)`
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;

  ${media.laptop} {
    font-size: 20px;
    margin-left: 10px;
  }
`
export const Buttons = styled.div`
  ${media.tablet} {
    width: 100%;
    flex: 0 0 auto;
    text-align: center;
  }
`
export const Reset = styled(Button)`
  ${media.laptop} {
    font-size: 14px;
    padding: 14px 12px;
  }
`
export const Make = styled(Button)`
  ${media.laptop} {
    font-size: 14px;
    padding: 14px 12px;
  }
`