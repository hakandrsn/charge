import React from 'react'
import Modal from '../../modal/Modal'
import history from '../../history'
import ax from '../../ax'
import { useForm } from 'react-hook-form'
const NewUser = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        await ax.post("/users", {
            userid: "userid",
            cardid: "cardid",
            username: data.name + " " + data.surname,
            password: data.password,
            balance: 0,
            devices: data.device ? [data.device] : [],
            operations: [],
            site: data.site,
        }).then((res)=> console.log(res))
       
    }
    const renderContent = () => {
        return (
            <form className="row g-3" onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className="col-md-6">
                    <label htmlFor="ad" className="form-label">Ad</label>
                    <input name="name" {...register("name")} type="text" className="form-control" id="ad" placeholder='Hakan' />
                </div>
                <div className="col-md-6">
                    <label htmlFor="soyad" className="form-label">Soyad</label>
                    <input name="surname" {...register("surname")} type="text" className="form-control" id="soyad" placeholder='Pehlivan' />
                </div>
                <div className="col-12">
                    <label htmlFor="password" className="form-label">Şifre</label>
                    <input name="password" {...register("password")} type="password" className="form-control" id="password" placeholder="******" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="Site" className="form-label">Site</label>
                    <input name="site" {...register("site")} type="text" className="form-control" id="site" placeholder='CADDE54' />
                </div>
                <div className="col-12">
                    <label htmlFor="devices" className="form-label">Cihaz (Opsiyonel)</label>
                    <input name="device" {...register("device")} type="text" className="form-control" id="devices" placeholder="Cihaz (opsiyonel)" />
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Ekle</button>
                </div>
            </form>
        )
    }
    return (
        <Modal
            title="Yeni Kullanıcı"
            onDismiss={() => history.goBack()}
            content={renderContent()}

        />
    )
}

export default NewUser