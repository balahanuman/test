import React, { useState } from 'react'


const Computer = () => {
  const data=[
    {
      title:'1',
      desc:'Ai artificial intelligence technology',
      img:'data:image/jpeg;base64,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'
    }, {
      title:'2',
      desc:'Ai chatbot robot sitting',
      img:'data:image/jpeg;base64,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'
    },
    {
      title:'3',
      desc:'Ai artificial intelligence technology',
      img:'data:image/jpeg;base64,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'
    },
    {
      title:'4',
      desc:'Ai robot using computer',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNsZgsCXvG8J--mA4_AMV1oRGIH2G0h9yUA&usqp=CAU'
    },
    {
      title:'5',
      desc:'Ai chatbot robot',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsU6sBKonXjv1Gxz5Oi9B4_zSlHELmNI7kg&usqp=CAU'
    },
    {
      title:'6',
      desc:'Programming Robot images',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TbvON-uUOG7IeR4JaBpsPy--PyJ_NrnqkQ&usqp=CAU'
    },
    {
      title:'7',
      desc:'Ai Bots images',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQp_pOi-W5qo0syIvbp7txzV6qousK8jW30g&usqp=CAU'
    },
    {
      title:'8',
      desc:'Chatbot Photos',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHX6R3fzgPS2_-ayBAUfh4n4ViouKUjCd6hAzJlaCYymDUJ-t0BIS1Kmpgg_6swMocwE&usqp=CAU'
    },
    {
      title:'9',
      desc:'How TalentGree uses Ai Prompters',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCgKfp-gpoWBCPhI-1otk9jqxGDVEbYfYmw&usqp=CAU'
    },
    {
      title:'10',
      desc:'Chatgpt images',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqp4wyZXtzlvxjGMPCDVGQktPwUsRoiQMYf4EDMO99BB8zTBTvp0BSUaRQzDSnn-jPtQ&usqp=CAU'
    },
    {
        title:'11',
        desc:'Creating a Scalable Chatbot Prototype',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaA3hXwapNcdzByKWXSO_R3kzfb9gyw8-7g&usqp=CAU'
      },
      {
        title:'12',
        desc:'Computer Bot images',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4k9UVg6JsIzhai2p3NFZlbsonIGOAf-qPA&usqp=CAU'
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

export default Computer


