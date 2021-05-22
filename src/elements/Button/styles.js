import styled, { css } from 'styled-components'
import { color } from 'helpers/vars'

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;

  &:active {
    transform: translateY(1px);
  }

  // SIZE
  ${(props) =>
    props.size === 'base' &&
    css`
      padding: 20px 50px;
    `}

  // MOD
  ${(props) =>
    props.mod === 'base' &&
    css`
      background: ${color.accent};
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      color: ${color.white};
      transition: opacity 0.3s ease, background 0.3s ease;
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.15);

      &:disabled {
        filter: grayscale(100%);
        opacity: 0.2;
      }

      &:hover {
        background: ${color.accentHover};
      }
    `}

  ${(props) =>
    props.mod === 'hollow' &&
    css`
      border-radius: 4px;
      color: #fff;
      background: transparent;
      transition: opacity 0.3s ease;

      &:hover {
        text-decoration: underline;
      }
    `}
`
