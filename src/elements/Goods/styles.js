import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'
import { color, media } from 'helpers/vars'
import { lineClamp } from 'helpers/mixins'
import Image from 'elements/Image'

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.1;
  }

  40% {
    transform: scale(20);
    opacity: 0.4;
  }

  100% {
    opacity: 0;
    transform: scale(20);
  }
`

export const Block = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  text-align: center;

  .ripple {
    content: '';
    width: 10%;
    height: 10%;
    position: absolute;
    background: ${color.white};
    display: block;
    border-radius: 100%;
    opacity: 1;
    z-index: 3;
    animation: ${ripple} 0.6s linear 1 forwards;
  }

  ${media.mobileL} {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
`
export const Cover = styled.span`
  display: inline-block;
  width: 100%;
  border-radius: 50%;
  position: relative;

  ${media.mobileL} {
    max-width: 80px;
  }
`
export const CoverRadius = styled.span`
  overflow: hidden;
  border-radius: 50%;
  display: block;
  transform: scale(1);
  position: relative;
  background: ${color.muted};

  &::before {
    content: '';
    width: 100%;
    height: 0;
    display: block;
    padding-bottom: 100%;
  }
`
export const CoverImage = styled(Image)`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s ease;
  will-change: scale;
  pointer-events: none;
  z-index: 1;

  ${Block}:hover & {
    transform: scale(1.1);
  }
`
export const Radio = styled.span`
  position: absolute;
  left: -20px;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #eee;
  transition: background-color 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.ischecked &&
    css`
      background: ${rgba(color.main, 0.9)}
        url("data:image/svg+xml,%3Csvg version='1.1' viewBox='0 0 24 24' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='info' /%3E%3Cg id='icons'%3E%3Cpath fill='%23fff' d='M10,18c-0.5,0-1-0.2-1.4-0.6l-4-4c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2.1-0.8,2.8,0l2.6,2.6l6.6-6.6 c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8l-8,8C11,17.8,10.5,18,10,18z' id='check'/%3E%3C/g%3E%3C/svg%3E")
        no-repeat center center;
      background-size: 16px;
      box-shadow: 0 0 0 2px ${rgba(color.main, 0.2)};
    `}
`
export const Title = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 18px;

  ${media.mobileL} {
    width: calc(100% - 80px);
    margin-top: 0;
    align-self: center;
    text-align: left;
    padding-left: 20px;
  }
`
export const Desc = styled.span`
  font-size: 12px;
  color: #a2a2a2;
  display: block;
  margin-top: 5px;
  text-align: center;
  ${lineClamp(5)}

  ${media.mobileL} {
    flex: 0 0 auto;
    width: 100%;
    text-align: left;
  }
`
export const Price = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
  font-size: 18px;
  color: rgb(42, 167, 32);
`
export const Sale = styled.span`
  position: absolute;
  right: -10px;
  top: 10px;
  font-size: 10px;
  text-transform: uppercase;
  background: rgba(19, 195, 115, 0.8);
  padding: 2px 10px;
  border-radius: 5px;
  color: #fff;
  text-align: right;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);

  ${media.mobileL} {
    display: none;
    left: -32px;
    top: 0;
    right: auto;

    br {
      display: none;
    }
  }
`
