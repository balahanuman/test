import React, { useState } from 'react'


const CuteRobot = () => {
  const data=[
    {
      title:'1',
      desc:'Artificial intelligence robot working',
      img:'img/ai6.jpeg'
    },
     {
      title:'2',
      desc:'Ai humanoid robot',
      img:'img/ai7.jpg'
    },
    {
      title:'3',
      desc:'Futuristic ai robot',
      img:'img/ai12.jpeg'
    },
    {
      title:'4',
      desc:'technology concept robot',
      img:'img/ai8.jpg'
    },
    {
      title:'5',
      desc:'Computer robo',
      img:'https://tse3.mm.bing.net/th?id=OIP.G7xXV8ZFcMehUJHgNCF-XwHaE8&pid=Api&P=0&h=180'
    },
    {
      title:'6',
      desc:'Ai robo',
      img:'https://tse1.mm.bing.net/th?id=OIP.S9_oXd8Vg2CXuBFDCe03BQHaEo&pid=Api&P=0&h=180'
    },
    {
      title:'7',
      desc:'Ai inteligence robo',
      img:'https://tse4.mm.bing.net/th?id=OIP.hxeyVhDb_Rc7lBBdruaw5AHaFj&pid=Api&P=0&h=180'
    },
    {
      title:'8',
      desc:'Computer robo',
      img:'https://tse1.mm.bing.net/th?id=OIP.EqNo_Xwatr-16VSx7iOlcQHaEP&pid=Api&P=0&h=180'
    },
    {
      title:'9',
      desc:'AI-generated images',
      img:'https://tse2.mm.bing.net/th?id=OIP.y_jqaK9oZW93G2w0jNMF-gHaE8&pid=Api&P=0&h=180'
    },
    {
      title:'10',
      desc:'Artificial intelligence AI robot',
      img:'https://tse3.mm.bing.net/th?id=OIP.jOzEGHakUwJwrHRJrvtyngHaE8&pid=Api&P=0&h=180'
    },
    {
      title:"11",
      desc:'Ai worke Images',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMzHj4usKiuR8b6MFFWp7AhBME41-_JlNfB8uFejxHM59g-JZHLPBotcKPEaWiCRl1M0&usqp=CAU'
    },
     {
      title:"12",
      desc:'Programmable robotics',
      img:'img/ai11.jpeg'
    }
   
   
  ]
  const[search,setSearch]=useState('')
 const searchText=(e)=>{
  setSearch(e.target.value)
 }

    
  
  return (
    <section className='py-4 cotainer'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-5'>
            <div  className='mb-3 col-4 max-auto text-center'>
            <lebal className='form-lable h4'>Search</lebal>  
              <input type='text'className='form-control' value={search} onChange={ searchText} placeholder='Enter Number 1-12'/>

              
            </div>
          </div>
            {data.filter(item=>item.title.toString().toLowerCase().includes(search.toString().toLowerCase())).map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                      <img src={item.img} className='card-img-top'/> 
                      <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='card-text'>{item.desc}</p>
                        </div> 
                    </div>
                    </div>
                )
            })

            }
       
        </div>

    </section>
  )
}

export default CuteRobot;



