import styled from 'styled-components'
import { color } from 'helpers/vars'
import {ReactComponent as IcnClose} from 'assets/icons/close.svg'

export const Block = styled.div`
  border-radius: 4px;
  background: ${color.modal};
  position: relative;
  width: 100%;
  flex: 0 0 auto;
  pointer-events: all;
  padding: 18px;
  overflow: visible;
`
export const Close = styled.button`
  position: absolute;
  right: -8px;
  top: -8px;
  cursor: pointer;
  color: ${color.text};
  background: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${color.accent};
  }
`
export const CloseIcn = styled(IcnClose)`
  display: inline-block;
  vertical-align: top;
  width: 24px;
  height: 24px;
`
export const Body = styled.div``
