import styled from 'styled-components/macro'
import { width, media } from 'helpers/vars'

export const Container = styled.div`
  width: 100%;
  max-width: ${width + 32 * 2}px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 32px;
  padding-left: 32px;
  flex: 0 0 auto;

  ${media.tablet} {
    padding-left: 24px;
    padding-right: 24px;
  }

  ${media.mobileL} {
    padding-left: 12px;
    padding-right: 12px;
  }
`
