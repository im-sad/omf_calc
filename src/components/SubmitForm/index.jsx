import { useState, useEffect } from 'react'
import * as S from './styles'
import ResultBlock from 'components/ResultBlock'
import { makeStringFromArr } from 'helpers/functions'

const SubmitForm = ({ price, reset, setModal, items }) => {
  const [phone, setPhone] = useState(false)
  const [validate, setValidate] = useState(false)
  const [status, setStatus] = useState(false)
  const [sended, setSended] = useState(false)

  const [msgTitle, setMsgTitle] = useState(false)
  const [msgText, setMsgText] = useState(false)
  const [humanItems, setHumanItems] = useState(false)

  useEffect(() => {
    items.length && setHumanItems(makeStringFromArr(items))
  }, [items])


  const handlerSubmit = () => {
    setValidate(false)

    fetch('send.php', {
      method: 'POST',
      mode: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: phone,
        text: humanItems !== '' ? humanItems : false,
        price: price > 0 ? price.toLocaleString() : false
      })
    })
      .then((response) => {
        setStatus(response.status)

        if (response.status !== 200) {
          setMsgTitle(`Ошибка ${response.status}`)
          setMsgText('Произошла ошибка при отправке. Попробуйте позже.')
          return
        }

        response.json().then((data) => {
          setMsgTitle(data.title)
          setMsgText(data.message)
          setSended(data.sended)
        })
      })
      .catch((err) => {
        console.log('Fetch Error : ', err)
      })
  }

  const handlerChange = (e) => {
    let value = e.target.value
    setPhone(value)
    setValidate(value.replace(/•/g, '').trim().length >= 13)
  }

  useEffect(() => {
    if (status && setModal && reset) {
      let autoClose = setTimeout(() => {
        setModal(false)
        status === 200 && reset()
      }, 4500)

      return () => clearTimeout(autoClose)
    }
  }, [status, setModal, reset])

  return (
    <S.SubmitForm>
      {status ? (
        <S.Done>
          {status === 200 && sended ? <S.DoneIcn /> : <S.ErrIcn />}
          <S.DoneTitle>{msgTitle}</S.DoneTitle>
          <S.DoneText dangerouslySetInnerHTML={{ __html: msgText }} />
        </S.Done>
      ) : (
        <>
          <S.Head>
            <S.Title>Перезвоните мне сюда:</S.Title>
            <S.Form>
              <S.Input
                type="tel"
                mask="+7\ 999 999 99"
                maskChar="•"
                placeholder="+7 --- --- -- --"
                alwaysShowMask={true}
                onChange={(e) => handlerChange(e)}
                value={phone}
              />
              <S.Send
                disabled={!validate}
                mod="base"
                size="base"
                onClick={() => handlerSubmit()}
              >
                Отправить
              </S.Send>
            </S.Form>
          </S.Head>
          <S.Body>
            <S.Title>Список того что мне интересно:</S.Title>
            <ResultBlock items={items} />
          </S.Body>
        </>
      )}
    </S.SubmitForm>
  )
}

export default SubmitForm
