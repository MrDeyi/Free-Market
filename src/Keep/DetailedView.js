import { createContext, useState,useEffect } from "react";

const MyDatabase=[
    {id:'1',
     image:'download.jpg',
     cost:'R 350.00',
     name:'headset',
     description:"Specifications: -Bluetooth wireless,Version:5.0,FM Radio,Aux Input,FHz:2.402-2.480GHz",
     contact:"volkano@gmail.com ",
     category:'electronics'
    },
    {id:'2',
     image:'1.png',
     cost:'R 12.00',
     name:'heart',
     description:"get this heart in form of a pillow",
     contact:"heart@gmail.com ",
     category:'fashion'
    },
    {id:'3',
     image:'jean_jacket.png',
     cost:'R 578.00',
     name:'jean jacket',
     description:"Warm jean jacket at affordable price, get one and use the code:fkg43 to get discount",
     contact:"LisaCull@gmail.com ",
     category:'fashion'
    },
    {id:'4',
     image:'power_outfit.png',
     cost:'R 656.00',
     name:'Power OutFit',
     description:"Power_Outfit made by power, trouser length:165cm, t-shirt lenght:150cm, t-shirt chest:40cm,short sleves",
     contact:"PowerWear@gmail.com ",
     category:'fashion'
    },
    {id:'5',
     image:'track_suit.png',
     cost:'R 434.00',
     name:'Track Suit',
     description:"very warm suit, best colors and they fit with everything, ",
     contact:"PopaOnce@gmail.com ",
     category:'fashion'
    },
    {id:'6',
     image:'t-shirt.png',
     cost:'R 203.00',
     name:'t-shirt',
     description:"Designed by Lennon jayed, Design: sleveless ,mid-colar,color:black and white,length:170cm, chest:60cm",
     contact:"LennonJayed@gmail.com ",
     category:'fashion'
    },
    {id:'7',
     image:'trouser.png',
     cost:'R 778.00',
     name:'jean G',
     description:"high level of fashion styled by Karen Dedonn, length:160cm, model: slim skinny, color:lightBlue ",
     contact:"KarenDedonn@gmail.com ",
     category:'fashion'
    },
    {
        id:'8',
        image:'Bedset.jpg',
        cost:'R 5798.00',
        name:'BedSet',
        description:"It is made with one of the most expensive febrics,the headbroad is 6.5 inches height,5 inche width, with 2 month warranty",
        contact:'BestBeds@gmail.com',
        category:'furniture'
    },
    {
        id:'9',
        image:'jarses.jpg',
        cost:'R 1599.00',
        name:'Latin Comfort',
        description:"sleves 64cm long , chest 43cm, body 67cm long, brand new",
        contact:'LatinWear@gmail.com',
        category:'fashion'
    }, {
        id:'10',
        image:'Telefunken.jpg',
        cost:'R 5499.00',
        name:'Telefunken 55FHD',
        description:"Resolution:1920x1080,Smart LED TV,HDMI:x2,USB:x2,1 year warranty",
        contact:'SiphoMasi@gmail.com',
        category:'electronics'
    },
    {
        id:'11',
        image:'yellowBed.jpg',
        cost:'R 3699.00',
        name:'Celeste wingback',
        description:"Celeste upholstered wingback sleigh bed three quarter/grey",
        contact:'ShannenLiving@gmail.com',
        category:'furniture'
    },
    {
        id:'12',
        image:'app1.jpg',
        cost:'R 23000.00',
        name:'Mac book 5.4vp',
        description:"12GB RAM,500GB storage ,screan:12x12 inches, fast loading ,silver cover",
        contact:'LuthoSopu@gmail.com',
        category:'electronics'
    },
    {
        id:'13',
        image:'normalbed.jpg',
        cost:'R 4023.00',
        name:'doublesuit bed',
        description:"Celeste upholstered wingback sleigh bed three quarter/grey",
        contact:'Mzoybb@gmail.com',
        category:'furniture'
    },
    {
        id:'14',
        image:'poloneck.jpg',
        cost:'R 670.00',
        name:'upperneck ',
        description:"Good for winter, can fit good with any blazer",
        contact:'lisajali@gmail.com',
        category:'fashion'
    },
    {
        id:'15',
        image:'Hisense.jpg',
        cost:'R 4999.00',
        name:'Hisense 40 FHD TV',
        description:"Hisense 40 inche, FHD TV, 40A5200, Screen:1239x1344, Smart LED",
        contact:'LungeloM@gmail.com',
        category:'electronic'
    },
    {
        id:'16',
        image:'fullbedset.jpg',
        cost:'R 6934.03',
        name:'master set',
        description:"Charcoal grey deep buttoned wing headboard, base and linenbox.",
        contact:'SiyaWorx@gmail.com',
        category:'furniture'
    },
    {
        id:'17',
        image:'LGTV.jpg',
        cost:'R 7293.00',
        name:'LG 80 Series',
        description:"LG 80 Series 43inche UHD 4K, SMART TV-43UP8000PUA",
        contact:'Carlosjaca@gmail.com',
        category:'electronics'
    },
    {
        id:'18',
        image:'app3.jpg',
        cost:'R 53522.53',
        name:'MacBook 8 pro',
        description:"Super fast loading, better download speed , 20GB RAM, 1TB storage, high quality graphics card",
        contact:'SolobJason@gmail.com',
        category:'electronics'
    },
    {
        id:'19',
        image:'blackjacket.jpg',
        cost:'R 543.00',
        name:'Premium jacket',
        description:"Premium zip pockets jacket, color:black",
        contact:'Manchnni@gmail.com',
        category:'fashion'
    },
    {
        id:'20',
        image:'app2.jpg',
        cost:'R 4242',
        name:'MacBook 4.3vp',
        description:"Second hand , Still in good condition , the price is negotiatable",
        contact:'LyinJacobs@gmail.com',
        category:'electronics'
    },
]

const DetailedContext = createContext({
    detailed:{
        id:'8',
         title:'',
         description:'Click on Card!!',
         image:'',
         contact:'',
         cost:''
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
    
    const [currentdata, setcurrentdata] = useState(MyDatabase);
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