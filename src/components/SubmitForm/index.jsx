import { useState, useEffect } from 'react'
import * as S from './styles'
import ResultBlock from 'components/ResultBlock'
import axios from 'axios'
import { makeStringFromArr } from 'helpers/functions'

const SubmitForm = ({ setModal, items }) => {
  const [phone, setPhone] = useState(false)
  const [validate, setValidate] = useState(false)
  const [sended, setSended] = useState(false)
  let itemsForHuman
  


  useEffect(() => {
    if (items.length > 0) {
      itemsForHuman = makeStringFromArr(items)
    }
  }, [items])

  const handlerSubmit = (e) => {
    e.preventDefault()

    axios({
      method: 'post',
      url: 'send.php',
      headers: { 'content-type': 'application/json' },
      data: {
        phone: phone,
        text: itemsForHuman
      },
      validateStatus: (status) => {
        return true
      }
    })
      .then((result) => {
        console.log(result)
        setSended(true)
      })
      .catch((error) => {
        console.log(error)
        setSended(false)
      })
  }

  const handlerChange = (e) => {
    let value = e.target.value
    setPhone(value)

    setValidate(value.replace(/•/g, '').trim().length >= 13)
  }

  useEffect(() => {
    sended &&
      setModal &&
      setTimeout(() => {
        setModal(false)
      }, 4500)
  }, [sended, setModal])

  return (
    <S.Block>
      {sended ? (
        <S.Done>
          <S.DoneIcn />
          <S.DoneTitle>Приняли!</S.DoneTitle>
          <S.DoneText>
            <p>Мы получили Вашу заявку и передали её менеджерам.</p>
            <p>Скоро свяжемся с Вами :)</p>
          </S.DoneText>
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
                onClick={(e) => handlerSubmit(e)}
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
    </S.Block>
  )
}

export default SubmitForm
