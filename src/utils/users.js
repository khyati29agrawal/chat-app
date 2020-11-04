const users = []
//adduser,removeuser,getuser,userinaroom

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate
    if (!username|| !room) {
        return {
            error:'Username and Room are provided'
        }
    }
    const exitingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    if (exitingUser) {
        return {
            error:'Username is already used'
        }
    }
    //store user
    const user = { id, username, room }
    users.push(user)
    console.log(users)
    return { user }
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )
    if (index !== -1)
        return users.splice(index,1)[0]
}

//getUser

const getUser = (id) => {
    const user = users.find((user) => user.id === id)
    console.log(user)
    return user
 }

//getUsersInRoom

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => user.room === room)
    return usersInRoom
}
module.exports = {
    getUser,
    removeUser,
    getUsersInRoom,
    addUser
}