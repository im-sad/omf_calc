import * as S from './styles'
import { Modal } from 'react-responsive-modal'

const BaseModal = ({ open, setOpen, maxWidth, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      showCloseIcon={false}
      center={true}
      classNames={{ modal: `default-modal` }}
      styles={maxWidth && { modal: { maxWidth: `${maxWidth}px` } }}
    >
      <S.Block>
        <S.Close onClick={() => setOpen(false)} type="button" aria-label="Закрыть">
          <S.CloseIcn />
        </S.Close>

        <S.Body>{children}</S.Body>
      </S.Block>
    </Modal>
  )
}

export default BaseModal
