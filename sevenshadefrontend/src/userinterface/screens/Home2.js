import Header from "../components/Header"
import SubcategoryComponent4 from "../components/SubcategoryComponent4"
import SubSubcategoryComponent from '../components/SubSubcategoryComponent'
import { useLocation } from "react-router-dom"
import { postData } from "../../services/FetchDjangoApiServices"
import { useEffect,useState } from "react"
import SubcategoryComponent3 from "../components/SubcategoryComponent3"
export default function Home2(props)
{   var location=useLocation()
    console.log('LLOOCCAATTTION:',location)
    const [productList,setProductList]=useState([])
    var pageview=location.state.pageview
    var products=location.state.products
    const setPageView=async()=>{ 
        
        if(pageview=='SubcategoryComponent2')
        {
          var result=await postData('user_products_maincategory',{maincategoryid:products.id})
          console.log("RRRRESSS:",result)
          setProductList(result.data)
        }
}
useEffect(function(){
    setPageView()
},[])

    return(<div style={{position:'relative'}}>
     <Header /> 
     <div style={{display:'flex',width:'99%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{marginTop:30,width:'98%',display:'flex',justifyContent:'center'}}>
     <SubSubcategoryComponent category={products?.maincategoryname} data={productList} />
    </div>
    <div style={{ borderTop:'1px solid #ececec', height:20, margin:0.1 }}></div>
    <div style={{margin:10,width:'98%',display:'flex',justifyContent:'center'}}>
     <SubcategoryComponent3 />
    </div>
    <div style={{backgroundColor: '#ececec',width:'98%',display:'flex',justifyContent:'space-between',padding:0,marginLeft:0,marginRight:0}} >
     <SubcategoryComponent4/>
    </div>
    </div>   
    </div>)
    
}