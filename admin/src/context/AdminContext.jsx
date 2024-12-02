import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()
const AdminContextProvider = (props) =>{

    const [atoken,setAtoken] = useState(localStorage.getItem('atoken')? localStorage.getItem('atoken') : '')
    const [doctors,setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctor = async ()=>{
        try{
            const {data} = await axios.post(backendUrl + '/api/admin/all_doctor',{},{headers:{atoken}})
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }else{
                toast.error(data.message)
            }

        }
        catch(error){
            toast.error(error.message)

        }
    }

    const changeAvailablity = async (docId) =>{
        try{
            const {data} = await axios.post(backendUrl + '/api/admin/change_availablity',{docId},{headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                getAllDoctor()
            }else{
                toast.error(data.message)
            }

        }
        catch(e){
            toast.error(e.message)
        }
    }

    const value = {
        atoken,setAtoken,
        backendUrl,doctors,
        getAllDoctor,changeAvailablity

    }
    return (
        <AdminContext.Provider value = {value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider