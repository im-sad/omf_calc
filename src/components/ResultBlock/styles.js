import styled from 'styled-components'
import { color } from 'helpers/vars'

export const Block = styled.div`
  background: #eee;
  padding: 16px 20px;
  cursor: default;
`
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
`
export const SubItem = styled.li`
  list-style: disc;
  margin-left: 18px;
`
export const Title = styled.b`
  display: block;
`