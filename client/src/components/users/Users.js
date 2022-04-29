import React, { useEffect, useState } from 'react'
import ax from '../../ax'
import { Link } from "react-router-dom"
import { useAuth } from '../../context/AuthContext'
import image1 from "../../assets/images/charge2.png"
import { picons } from './userIcons'
const Users = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { path } = props.match
  const userSite = localStorage.getItem("site")
  useEffect(() => {
    (async () => {
      setLoading(true)
      ax.get(`${path}`).then(res => {
        setUsers(res.data)
      }).catch(err => {
        setError(err)
      }).finally(() => {
        setLoading(false)
      })
    })()
  }, [])
  const filteredUsers = users.filter((user)=>user.site === userSite)

  const renderUsers = () => {
    return users && filteredUsers.map((user, i) => {
      let randomIcon = Math.floor(Math.random()*picons.length)
      return (
        <div key={i} className='d-flex justify-content-between mb-4 border-bottom p-2 rounded align-items-center'>
          <div className='d-flex align-items-center'>
            <div>
              <img src={picons[randomIcon]} style={{ width: 80 }} alt='görsel' />
            </div>
            <div className='ms-3 text-capitalize'>
              <div className='' >
                <label style={{ width: 90 }}>Kullanıcı Adı</label>
                <label>: {user.username}</label>
              </div>
              <div>
                <label style={{width:90}}>Bakiye</label>
                <label>: {user.balance}</label>
              </div>
              <div>
                <label style={{width:90}}>Kart id</label>
                <label>: {user.cardid}</label>
              </div>
              <div>
                <label style={{width:90}}>Site</label>
                <label>: {user.site}</label>
              </div>
              <div>
                <label style={{width:90}}>Tarih</label>
                <label>: {user.date}</label>
              </div>
     
            </div>
          </div>
          <div className='d-flex flex-column'>
            <Link to={`/user/${user.site}/${user._id}`} style={{backgroundColor:"#f3f3f3", color:"black"}} className='mb-4 border px-4 py-1 rounded opacity-75 text-decoration-none text-center'>Bakiye Yükle</Link>
            <Link to={`/user/${user.site}`} style={{backgroundColor:"#f3f3f3", color:"black"}} className=' border px-4 py-1 rounded opacity-75 text-decoration-none text-center'>Detaylar</Link>
          </div>
        </div>
      )
    })

  }
  if (loading) return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
  return (
    <div className=''>
      <div className='text-center fs-3 '>Kullanıcılar</div>
      {renderUsers()}
    </div>
  )
}

export default Users