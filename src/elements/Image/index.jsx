import styled from 'styled-components/macro'

const StyledImg = styled.img`
  user-select: none;
  max-width: 100%;
  height: auto;
`

const Image = ({ src, srcset, alt, className }) => {
  return src ? (
    <StyledImg
      className={className}
      src={src}
      srcSet={srcset}
      alt={alt || ''}
    />
  ) : null
}

export default Image
