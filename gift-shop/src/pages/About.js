import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/About.css'

const About = () => {
 const navItems3=[
  {
    path:"/robot",
    name:"Robot",
    price:'Budget 1-10$'
  },
  {
    path:"/computer",
    name:"House-Hold",
    price:'20-30$'
  },
  {
    path:"/use",
    name:"Gifts",
    price:'Budget 30-40$'
  },
  {
    path:"/products",
    name:"Products",
    price:'40-50$'
  },
  {
    path:"/careers",
    name:"Loptops",
    price:'Budget 50-60$'
  },
  {
    path:"/atomation",
    name:"AI-Aplicance",
    price:'60-70$'
  },
  ]
  return (
    <div>
      <h6 style={{color:'white',textAlign:'center' ,marginTop:'50px',position:'relative'}}>AI-Gift Ideas Generator</h6>
       <h1 style={{color:'white',textAlign:'center'}}>Gift Assistant</h1>

       <div className='main'>

<div className='subtop'>
       <label style={{color:'white',width:'350px', height:'50px',border:'1px solid white',display:'flex',justifyContent:'center',alignItems:'center',margin:'30px'}}>Who for ? : &nbsp;&nbsp;<select >
  
        <option value='Man'>Man</option>
        <option>Woman</option>
        <option>Boy</option>
        <option>Girl</option>
        <option>Baby boy</option>
        <option>Baby Girl</option>
        <option>Couple</option>
       </select></label>
        

       <label style={{color:'white',width:'350px', height:'50px',border:'1px solid white',display:'flex',margin:'30px',alignItems:'center',justifyContent:'center'}}>Age :&nbsp; <select>
          
          <option>1-10</option>
          <option>10-20</option>
          <option>20-30</option>
          <option>30-40</option>
          <option>40-50</option>
          <option>50-60</option>
          <option>60-70</option>
          <option>70-80</option>
          <option>80 above</option>
          

          

        </select></label>
        <label style={{color:'white',width:'350px', height:'50px',border:'1px solid white',display:'flex',alignItems:'center',justifyContent:'center',margin:'30px'}}> Budget  : &nbsp;&nbsp;<select >
       
        
        <option value='Man'>1-10$</option>
        <option>10-20$</option>
        <option>20-30$</option>
        <option>30-40$</option>
        <option>40-50$</option>
        <option>50-60$</option>
        <option>60-70$ & Above</option>
       </select></label>
       </div>
       <div className='top'>
        <span style={{color:'yellow'}}>Click Belo Links</span>
         {
           navItems3.map((item,index)=>(<NavLink to={item.path} key={index} className='line'activeclassName='active'>
           <div className='links'> {item.name}&nbsp;&nbsp;{item.price}</div></NavLink>))
   
            }
            </div>
            <div className='img1'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEp84D9KvDZorYPuV2RKLam7SnuKv2qODRA&usqp=CAU'alt='' />
</div>
            </div>

            </div>
  )
}

export default About
