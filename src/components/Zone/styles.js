import styled, { css } from 'styled-components/macro'
import { rgba } from 'polished'
import { color, media } from 'helpers/vars'

export const Section = styled.section`
  padding: 0 0 40px;
  position: relative;
`
export const Head = styled.div`
  width: 100%;
  padding: 150px 0;
  color: ${color.white};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-shadow: 1px 1px 2px ${rgba(color.black, 0.8)};
  margin-bottom: 60px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: ${color.black};
    opacity: 0.4;
  }

  // MODS
  ${(props) =>
    props.mod === 'welcome' &&
    css`
      background-image: url('/img/bg/welcome.jpg');
    `}

  ${(props) =>
    props.mod === 'table' &&
    css`
      background-image: url('/img/bg/table.jpg');
    `}

  ${media.tablet} {
    padding: 70px 0;
    margin-bottom: 40px;
  }

  ${media.mobileL} {
    padding: 40px 0;
    margin-bottom: 20px;
  }
`
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  position: relative;
  z-index: 1;
  cursor: default;

  ${media.tablet} {
    font-size: 30px;
  }

  ${media.mobileL} {
    font-size: 20px;
  }
`
export const Num = styled.span`
  opacity: 0.6;
`
export const Desc = styled.div`
  margin-top: 20px;
  font-size: 16px;
  position: relative;
  z-index: 1;
  cursor: default;
`
export const Body = styled.div``
