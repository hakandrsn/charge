import React, { useEffect, useState } from 'react'
import ax from '../../ax'
import history from '../../history'
import Modal from '../../modal/Modal'

const UserBalance = (props) => {
  const { site } = props.match.params
  const [balance, setBalance] = useState("")
  const [txt, setTxt] = useState("")
  const [userData, setUserData] = useState([])
  useEffect(() => {
    ax.get(`/users/${site}`).then(res => {
      setUserData(res.data[0])
    }).catch(err => {
      setTxt(err)
      console.log(err)
    })
    console.log(userData)
  },[balance])
  const updateBalance = async () => {
    if (balance > 0) {
      ax.put(`/users/${userData._id}`, {
        balance: Number(userData.balance) + Number(balance)
      }).finally(() => {
        setTxt(<div className='text-center my-4' style={{ color: "green" }}>İşlem başarılı</div>)
        setTimeout(() => {
          history.goBack()
          setTxt("")
        }, 1500);
      })
    }
    if (balance <= 0 || balance === "") setTxt(<div className='text-center my-4' style={{ color: "tomato" }}>Lütfen yüklemek istediğiniz tutarı giriniz</div>
    )
  }
  const renderContent = () => {
    return (
      <div className='py-2'>
        <label className='mb-2'>Mevcut kullanıcı bakiyesi : <strong>{userData.balance}</strong> </label>
        <div className="form-floating mb-3 d-flex">
          <input onChange={(e) => setBalance(e.target.value)} type="number" className="form-control" id="floatingInput" placeholder="976.34" />
          <label htmlFor="floatingInput">Yüklemek istediğiniz tutarı giriniz</label>
          <span className="input-group-text">.00</span>
          <span className="input-group-text">₺</span>
        </div>
        <div className='text-center my-4'>
          {txt}
        </div>
        <div className='d-flex justify-content-center my-4'>
          <button onClick={() => updateBalance()} className='border px-4 py-2 rounded'>Yükle</button>
        </div>
      </div>
    )
  }
  return (
    <Modal
      title="Bakiye Yükle"
      onDismiss={() => history.goBack()}
      content={renderContent()}
    />
  )
}

export default UserBalance