import { createContext, useState, } from "react";



export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [dataContext,setDataContext] = useState([])
    const [cartData,setCartData] = useState(false)
    const [tongTien,setTongTien] = useState(0)
    const [amountCart,setAmountCart] = useState({})
    const [dataLogIn,setDataLogIn]  = useState(0)
    const [resInPost,setResInPost] = useState("")
    const [ dataDetail,setDataDetail] = useState('')
    
    const dataAmoutCart = dataContext.map(function(x){
        return (
            {name:x.name,sl:1}
        )
    })
    
  
    

    return <AppContext.Provider value={{dataContext,
                                       setDataContext,
                                       cartData,
                                       setCartData,
                                       tongTien,
                                       setTongTien,
                                       setAmountCart,
                                       amountCart,
                                       dataLogIn,
                                       setDataLogIn,
                                       resInPost,
                                       setResInPost,
                                       dataDetail,
                                       setDataDetail}}>
        {children}
    </AppContext.Provider>
}