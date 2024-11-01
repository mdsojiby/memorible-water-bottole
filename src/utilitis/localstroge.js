const getStorecart=()=>{
    const localStore=localStorage.getItem('cart')

    if(localStore){
        return JSON.parse(localStore)

    }
    return[]
}


const getAdd=cart=>{
    const getAddCartTo=JSON.stringify(cart)
    localStorage.getItem('cart',getAddCartTo)
}

const addLocal=id=>{
    const cart=getStorecart()
    cart.push(id)
    getAdd(cart)
}

export{addLocal}