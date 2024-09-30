import { ref } from "vue"

interface INotification {
    id:number,
    message:string
}
const notifications = ref<INotification[]>([])

const addNotification = (message :string) =>{
    const id = Date.now();
    notifications.value.push({
        id,
        message
    })
    setTimeout(()=> removeNotification(id),3000)
}

const removeNotification = (id:number)=>{
    notifications.value = notifications.value.filter((notification)=>notification.id !==id)
}
export function useNotifications() {
    return {
        notifications,
        addNotification,
        removeNotification
    }
}