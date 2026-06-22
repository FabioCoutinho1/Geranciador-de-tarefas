import { useContext } from "react"
import {TaskContext} from "../context/TaskContext"
import {userService} from "../services/userService"

export const useUser = () => {
    const {setUserName} = useContext(TaskContext)

    const getUserInfo = async () => {
        try {
            const userInfo = await userService.getInfoUser();
            console.log(userInfo);
            setUserName(userInfo.userName)
        } catch (err) {
            console.log(err);
        }
    }

    return {getUserInfo}
}