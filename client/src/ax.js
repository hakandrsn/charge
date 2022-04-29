import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:3000",
    // auth: {
    //     username: 'M.a.r.s.i.s',
    //     password: 'P.o.w.e.r.s.a.r.j'
    // },
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Allow-Credentials': 'true'
    //   }
})