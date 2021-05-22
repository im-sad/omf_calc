import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Panel from 'components/Panel'
import Modal from 'components/BaseModal'
import SubmitForm from 'components/SubmitForm'

import items from 'mocks/items'

const itemsUnique = items.map((item) => {
  item.id = uuidv4()
  return item
})

const Layout = () => {
  const [store, setStore] = useState([])
  const [modal, setModal] = useState(false)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    setStore(itemsUnique)
  }, [])


  useEffect(() => {
    if (store) {
      let newPrice = 0

      store.forEach((item) => item.active && (newPrice += item.price))
      setPrice(newPrice)
    }
  }, [store])

  return (
    <div className="page">
      <Header />
      <Main store={store} setStore={setStore} />
      <Footer />
      <Panel
        price={price}
        setOpen={setModal}
        store={store}
        setStore={setStore}
      />
      <Modal open={modal} setOpen={setModal} maxWidth={550}>
        <SubmitForm items={store} setModal={setModal} />
      </Modal>
    </div>
  )
}

export default Layout
