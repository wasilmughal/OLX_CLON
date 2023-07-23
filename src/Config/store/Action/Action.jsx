const uid = (user)=>{
    return((dispatch)=>{
        dispatch({
            type:"uid",
            data:user
        })
    })
}
export {uid}