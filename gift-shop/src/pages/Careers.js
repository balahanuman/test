import React, { useState } from 'react'


const Careers = () => {
  const data=[
    {
      title:'1',
      desc:'Ai Robot Images',
      img : 'img/ai1.jpeg'
    },
     {
      title:'2',
      desc:'Cute robot working',
      img:'https://tse4.mm.bing.net/th?id=OIP.3gJu02LpCP7y_94J09p-9gHaEK&pid=Api&P=0&h=180'
    },
    {
      title:'3',
      desc:'Computer Automation images',
      img:'https://tse3.mm.bing.net/th?id=OIP.a63sONjpqBgTvxuSKx4tGwHaDt&pid=Api&P=0&h=180'
    },
    {
      title:'4',
      desc:'Robot Computer Images',
      img:'https://tse3.mm.bing.net/th?id=OIP.IpYbYRVhPp6EZxNLOIyLNgHaE8&pid=Api&P=0&h=180'
    },
    {
      title:'5',
      desc:'Robot Computer Images',
      img:'https://tse1.mm.bing.net/th?id=OIP.uft4gvXO8CRIDA-VZiUTvwHaE6&pid=Api&P=0&h=180'
    },
    {
      title:'6',
      desc:'Robot Computer Images',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREz5Tf9TDluLYMBgQYZd_Q2ZtBm2GoHxmzaQ&usqp=CAU'
    },
    {
      title:'7',
      desc:'Computer Automation',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmtwMnNryovZ6nq7s4aQ7WuJK8rAWAUKOVQ&usqp=CAU'
    },
    {
      title:'8',
      desc:'Robot with A Computer image',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZMVCdZRQuHZk7fwVBINNAJo-t4ZCBktzkQ&usqp=CAU'
    },
    {
      title:'9',
      desc:'Ai Robots',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQM-PI4GwSTLvRZywiwIc4XUBvW494sQCDEQ&usqp=CAU'
    },
    {
      title:'10',
      desc:'Robotic process automation banner',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdggbAgdJhOC2waub1mG_jrmW4rSsDKousLsk6MVbxFPHzKBatupQOcfp1g3W5WSSev4&usqp=CAU'
    },
    {
        title:'11',
        desc:'Rotot with A Computer Images',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIw7gFNMKACi8IjHUoUFUqoAlTHA4wGLZMnTVFUbEp74V78YLJFH6KtMgn9VBBWz9wIo&usqp=CAU'
      },
      {
        title:'12',
        desc:'Rotot with A Computer Images',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsqIBp9UwceU_xjRHzbDL6Ku8gMLZ8zwU8FzzHaC4F0K9GQbf7cmpdjbglXsv8nB9WjE&usqp=CAU'
      },
   
   
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
                      <img src={item.img} className='card-img-top' alt=''/> 
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

export default Careers;






