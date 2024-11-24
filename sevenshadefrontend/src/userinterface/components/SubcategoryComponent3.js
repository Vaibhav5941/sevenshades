import { serverURL } from "../../services/FetchDjangoApiServices"
export default function SubcategoryComponent3(props)
{
    var socialitems=[ {id:'13',icon:'13.png'},
        {id:'14',icon:'14.png'},
        {id:'15',icon:'15.png'},]

    var payitems=[{id:'16',icon:'16.png'},
        {id:'17',icon:'17.png'},
        {id:'18',icon:'18.png'},
        {id:'19',icon:'19.png'},
        {id:'20',icon:'20.png'}]
    
    const showAllSocialItems=()=>{
        return socialitems.map((item)=>{
            return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{ borderRadius: '50%', overflow: 'hidden', width:45, height:45, marginBottom:1, backgroundColor: '#f2f2f2',margin:5  }}>
                    <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div> 
                    </div>
        })
    }
    const showAllPayItems=()=>{
        return payitems.map((item)=>{
            return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{ width:45 , height:45, marginBottom:1 ,backgroundColor: '#f2f2f2',margin:5}}>
                    <img src={`${serverURL}/static/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div> 
                    </div>
        })
    }    
    return (<div>
    <div style={{display: 'flex',flexWrap:'wrap',height:30}}>
        <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' ,width:'100%',height:'100%'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:'100%',marginLeft:200}}>
                {showAllSocialItems()}
                </div>
            <div style={{ borderLeft:'1px solid black', height:20, margin:10, alignItems: 'center' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between',width:'100%',marginRight:100}}>
                {showAllPayItems()}
                </div>
        </div>
        <div style={{ borderTop:'1px solid #ececec', height:20, margin:0.1 }}></div>
        </div>
        </div>
    )
}