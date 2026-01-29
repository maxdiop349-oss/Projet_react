import { ImQuotesLeft } from "react-icons/im"
import { menuListes } from "./data/data"
import { Services } from "./data/service"


function App() {


  return (
    <>
    <body>
      <header className="text-white h-screen  py-2 bg-cover bg-center  bg-[url('oie.jpg')] brightness-100">
         <nav className="px-6 py-5  ">
<div className="max-w-7xl mx-auto flex items-center justify-between">
  <div >
   <img src="logo.svg" alt="logo" className="h-10 w-auto px-2"/></div>
   <div className="flex items-center gap-6 px-5">
<ul className="hidden md:flex gap-8 hover:text-gray-400 cursor-pointer ">
   {menuListes.map((liste,index)=>(

    <li key={index}><a href={liste.link}>{liste.titre}</a></li>
   ))}       
        </ul>
            <a href="tel:+221781484389" className="flex  border text-white px-4 py-3 rounded transition">           
            <span className="hidden sm:inline">+221 78 148 43 89</span>
          </a> 
   </div>
   </div>
   <div className="flex flex-col  p-15  ">
    <h1 className=" text-4xl font-bold text-center ">we all love</h1><span className="text-center text-9xl semi-bold  ">nature</span></div>
<p className="text-center p-7">Look deep into nature,and you will <br/>undestand everythink better</p>
<div className="text-center">
<button  className="border px-4  text-gray-500 rounded bg-yellow-300 py-2 "><a href="#">Get Started</a></button>
</div>
    </nav>
      </header>
      <section className="flex flex-col m-6">
        <h1 className="text-center p-7 text-green-900 text-4xl">Our Services</h1>
      <div className="mx-auto  h-1 w-20 bg-yellow-300"></div>
      <div className="grid grid-cols-3 gap-6 p-8 m-7">
        {Services.map((item,index) =>(
 <div key={index}>
           <img
          src={item.image}
          alt={item.titre}
          />
          <h1 className=" text-[#536941] text-2xl p-4">{item.titre}</h1>
          <p className="text-[#536941] p-4"> {item.description}.</p>
        </div>
      ))}
      </div>
      </section>
<section className="bg-[#5369411a] p-6 flex flex-col items-center  ">
<ImQuotesLeft className="size-15 text-[#536942e1]" />
<p className="buda text-3xl text-center text-[#536942e1] m-4">“Original and with an innate understanding of their<br/> customer’s needs, the team at Love Nature are
<br/> always a pleasure to work with.”</p>
<div>
  <img src="fem.png" className="block mx-auto w-15 p-2"/>
  <p className="text-center text-[#536942E1]">Jane Miller</p> 
</div>
  </section> 
  <section className="grid grid-cols-2  ">
    <div className="p-7 m-6">
     <h1 className="text-sm text-[#536942e1]">ABOUT US</h1> 
     <p className=" mt-4 gravitas text-4xl text-[#536942]">Tell website visitors who you<br/> are and why they should <br/>choose your business.</p>
    <p className="text-[#536942] mt-4">Because when a visitor first lands on your website, <br/>you're a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you're selling.</p>
    <button className="border mt-5 py-2 rounded p-4 text-[#536942]">Find out more</button>
    </div>
    <div className="p-7 m-6">
      <img src="leaf.jpg"className="w-90" />
    </div>
    </section>  
      <section className="bg-[url('eau.jpg')] h-100 bg-cover bg-center p-7">
        <h1 className="font text-3xl text-center text-[#536942] ">Q U E ST I O N S?</h1>
<p className="text-center text-[#536942] mt-3 text-2xl">Whether you’re curious about features, a free trial, or <br/>even press, we’re here to answer any questions.</p>
     <div className=" p-15 text-center">
      <button className="border p-3 cursor-pointer px-3 text-[#536942] rounded bg-yellow-300  "><a href="#">Let's Talk Now</a></button>
     </div>
      </section>
  <footer>
    <div className="p-2 grid grid-cols-3 items-center">
       <div className=" items-center  gap-4 px-2">
<ul className="hidden md:flex gap-8 mt-7 text-[#536942] ">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
            <a href="tel:+221781484389" className="flex  border text-white px-4 py-3 rounded transition">           
            <span className="hidden sm:inline">+221 78 148 43 89</span>
          </a> 
   </div>
   <div> <img src="logo-green.svg" alt="logo" className="block mx-auto w-15"/></div>
    
    <div className=" flex justify-end text-[#536942]"> <h1>Love Nature by Tyler Moore
</h1></div>
   </div >
  </footer>
  </body>
    </>
  )
}

export default App
