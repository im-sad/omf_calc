import styled, { css } from 'styled-components/macro'
import Button from 'elements/Button'
import { color } from 'helpers/vars'
import { rgba } from 'polished'
import InputMask from 'react-input-mask'
import { ReactComponent as IcnOk } from 'assets/icons/done.svg'
import { ReactComponent as IcnErr } from 'assets/icons/error.svg'

export const SubmitForm = styled.div`
  width: 100%;
`
export const Head = styled.div`
  margin-bottom: 40px;
`
export const Body = styled.div``
export const Title = styled.b`
  font-weight: 300;
  margin-bottom: 10px;
  display: block;
  font-size: 22px;
  cursor: default;
`
export const Form = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 50px;
`
export const Input = styled(InputMask)`
  width: 100%;
  flex: 0 1 auto;
  border: 1px solid ${color.border};
  border-radius: 2px;
  font-size: 30px;
  font-weight: 700;
  padding-left: 16px;
  padding-right: 16px;
  color: ${color.text};
  outline: none !important;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: ${color.main};
    box-shadow: 0 0 0 2px ${rgba(color.main, 0.5)};
  }
`
export const Send = styled(Button)`
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 20px;
  flex: 0 0 auto;
`
export const Done = styled.div`
  text-align: center;
`
const stylesIcn = css`
  width: 64px;
  height: 64px;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 20px;
`
export const DoneIcn = styled(IcnOk)`
  ${stylesIcn}
`
export const ErrIcn = styled(IcnErr)`
  ${stylesIcn}
`
export const DoneTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`
export const DoneText = styled.div`

`