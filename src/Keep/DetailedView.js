import { createContext, useState,useEffect } from "react";
import axios from "axios"




 
/*let MyDatabase=axios.get('http://localhost:8080/').then(resp=>{
    const data=resp.data;
    console.log(data);
    return data;
   
})*/
let MyDatabase=[{
    id:'',
    image1:'',
    image2:'',
    image3:'',
    cost:'',
    name:'',
    description:'',
    contact:'',
    category:''
}]


const DetailedContext = createContext({
    detailed:{
        id:'8',
         title:'',
         description:'Click on Card!!',
         image:'',
         contact:'',
         cost:'',
         images:''
    },
    showDetailedview:(detailedproduct)=>{},
    fashions:[],
    filterResult:(catItem)=>{},
    searchItem:()=>{},
    getValue:(val)=>{}
});

export function DetailedviewProvider(props){
    const [clickedproduct,setclickproduct]=useState({});
    

    function clickedHandler(detailedproduct){
        setclickproduct(detailedproduct);
    };
    
    
    const [currentdata, setcurrentdata] = useState([{
        id:'',
        image1:'',
        image2:'',
        image3:'',
        cost:'',
        name:'',
        description:'',
        contact:'',
        category:''
    }]);
    let num=0;
    useEffect(()=>{
        fetch('http://localhost:8080/').then(resp=>{
            if(resp.ok){
                num=num+1;
                return resp.json();
            }
            
        }).then(data=>{
            
                MyDatabase=data;
                setcurrentdata(data);
                console.log(data);
              console.log(MyDatabase);
        })
        
    },[num])

    const[search,setsearch]=useState('');
   // const[flew,setflew]=useState([]);
    
     const getValue=(val)=>{
        setsearch(val);
     }

     useEffect(() => {
        console.log(search);
        
        let searched='';
         if(search !==''){
             searched= MyDatabase.filter((data)=>{
                 return data.name.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
                //  setcurrentdata(searched); 
              });
              setcurrentdata(searched);
             // setflew(searched);
         }
        else{
            setcurrentdata(MyDatabase);
        }
      //  console.log(flew);
     }, [search])
    /*const searchItem=()=>{
        
      
      
    };*/

    const filterResult=(catItem)=>{
        var result='';
        if(catItem==='all'){
            result=MyDatabase;
        }
        else{
            result=MyDatabase.filter((curdata)=>{
                return curdata.category===catItem ;
                  });
                }
    
        setcurrentdata(result);
    }

    const context={
        detailed:clickedproduct,
        showDetailedview:clickedHandler,
        fashions:currentdata,
        filterResult:filterResult,
     //   searchItem:searchItem,
        getValue:getValue
    };

    return(
        <DetailedContext.Provider value={context}>
           {props.children}
        </DetailedContext.Provider>
    );
};
export default DetailedContext