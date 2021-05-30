import styled from 'styled-components/macro'
import { media } from 'helpers/vars'

export const Header = styled.header`
  text-align: center;
  padding: 100px 0;
  cursor: default;

  ${media.tablet} {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  ${media.mobileL} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`
export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: 500;

  ${media.tablet} {
    font-size: 28px;
    margin-bottom: 20px;
  }

  ${media.mobileL} {
    font-size: 20px;
  }
`
export const Text = styled.div`
  font-size: 18px;
  line-height: 1.6;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;

  p {
    margin-top: 10px;
  }

  ${media.tablet} {
    font-size: 16px;
  }
`