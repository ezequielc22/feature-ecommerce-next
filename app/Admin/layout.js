"use client"
import { useAuthContext } from "@/context/AuthContext";
import NotFound from "../not-found"

const AdminLayout = ({children}) => {
    const { user } = useAuthContext();

    return (
        <div>
            { user.logged ? children : <NotFound/> }
        </div>
    )
}

export default AdminLayout