import styled from 'styled-components/macro'
import { color } from 'helpers/vars'

export const Result = styled.div`
  background: ${color.muted};
  padding: 16px 20px;
  cursor: default;
`
export const Content = styled.div``
export const List = styled.ul`
  color: ${color.textMuted};
`
export const Item = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`
export const Sub = styled.ul`
  list-style: disc;
  margin-left: 18px;

  &:empty {
    display: none;
  }
`
export const SubItem = styled.li`
  list-style: disc;
  margin-left: 18px;
`
export const Title = styled.b`
  display: block;
  font-weight: 500;
`