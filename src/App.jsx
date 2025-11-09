import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import home from './assets/home.png';
import plant1 from './assets/plant-1.png';
import plant2 from './assets/plant-2.png';
import leaf3 from './assets/leaf-3.png';
import leaf4 from './assets/leaf-4.png';
import leaf2 from './assets/leaf-2.png';
import cart1 from './assets/cart-1.png';
import cart2 from './assets/cart-2.png';
import cart3 from './assets/cart-3.png';
import cart4 from './assets/cart-4.png';
import floral1 from './assets/floral-1.png';
import review1 from './assets/review-1.jpg';
import review2 from './assets/review-2.jpg';
import review3 from './assets/review-3.jpg';
import review4 from './assets/review-4.jpg';
import { Facebook, Linkedin, Instagram, Twitter, Copy,} from "lucide-react";
import { Leaf } from 'lucide-react';
import { Flower } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Sprout } from "lucide-react";
import { Coins } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Quote } from "lucide-react";
import { SendHorizonal } from "lucide-react";
import { Copyright } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Menu, X } from "lucide-react";
import FullStarRating from "./FullStarRating";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const [open,setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showToast, setShowToast] = useState({
    c1:false,
    c2:false,
    c3:false,
    c4:false,
  });
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleScrollToTop = () => {
    if (activeSection) {
      const section = document.getElementById(activeSection);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setToast({ show: true, type: "error", message: "Please enter your email." });
    } else {
      setToast({ show: true, type: "success", message: "Successfully subscribed!" });
      setEmail("");
    }
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 2000);
  };

  useEffect(()=>{
    const handleActiveSection=()=>{
      let current = "home";
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section)=>{
        const scrollTop = section.offsetTop-150;
        if(window.scrollY >= scrollTop){
          current = section.getAttribute("id");
        }
      })
      setActiveSection(current);
    }
    window-addEventListener("scroll",handleActiveSection);
    return ()=>window.removeEventListener("scroll",handleActiveSection);
  },[]);

  useEffect(()=>{
    const handleScroll = ()=>{
      const currentScrollY=window.scrollY;
      if(currentScrollY > lastScrollY && currentScrollY > 100){
        setShowNavBar(false)
      }else{
        setShowNavBar(true);
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[lastScrollY]);

  const handleAddToCart = (cardId)=>{
    setShowToast((prev)=>({ ...prev, [cardId]:true}));
    setTimeout(() => {
      setShowToast((prev)=>({ ...prev, [cardId]:false}));
    }, 2000);
  };

  return (
    <>
    <header className={`fixed bg-green-950 w-screen border-b-2 border-gray-400 z-50 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="md:flex justify-between items-center text-start w-full">
        <div className='flex justify-around md:mx-24 text-2xl mb-5 md:mb-0 font-extrabold pt-5 md:pt-0 md:my-5'>
          <h1 className='font-[Pacifico]'>landorPlants.</h1>
          <div className=''><span className='text-white md:hidden' onClick={()=>setOpen(!open)}>{open ? <X size={32}/>:<Menu size={32}/>}</span></div>
        </div>
        

        <ul className='hidden md:flex gap-6 mx-34 my-5 font-extrabold'>
          <li>
            <a href="#home" className={`text-lg ${activeSection ==="home" ?"text-yellow-500 border-b-2 border-yellow-500 hover:text-yellow-300":"text-white hover:text-yellow-300"}`}>Home</a>
          </li>
          <li>
            <a href="#about" className={`text-lg ${activeSection ==="about" ?"text-yellow-500 border-b-2 border-yellow-500 hover:text-yellow-300":"text-white hover:text-yellow-300"}`}>About</a>
          </li>
          <li>
            <a href="#popular" className={`text-lg ${activeSection ==="popular" ?"text-yellow-500 border-b-2 border-yellow-500 hover:text-yellow-300":"text-white hover:text-yellow-300"}`}>Popular</a>
          </li>
          <li>
            <a href="#review" className={`text-lg ${activeSection ==="review" ?"text-yellow-500 border-b-2 border-yellow-500 hover:text-yellow-300":"text-white hover:text-yellow-300"}`}>Review</a>
          </li>
        </ul>

        <div className={`md:hidden w-full absolute top-16 left-0 transition-all duration-300 ease-in-out bg-green-900/90 text-white font-bold ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}>
          <ul className='px-4 py-3 font-extrabold text-center'>
          <li className='pb-3'>
            <a href="#home" onClick={()=>setOpen(false)}>Home</a>
          </li>
          <li className='pb-3'>
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
          </li>
          <li className='pb-3'>
            <a href="#popular" onClick={()=>setOpen(false)}>Popular</a>
          </li>
          <li className='pb-3'>
            <a href="#review" onClick={()=>setOpen(false)}>Review</a>
          </li>
        </ul>
        </div>
      </nav>
    </header>

    <section id='home' className='bg-linear-to-r from-green-950 via-green-900 to-green-950 w-screen h-screen md:flex justify-center items-center gap-x-5 px-10 z-20 pt-20'>
      <motion.div 
        className='mx-10'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className='text-2xl md:text-4xl font-extrabold md:w-2/3 py-3'><span className='text-yellow-500'>Plants</span> makes a positive <span className='text-yellow-500'>impact</span> on your enviroment</h1>
        <p className='text-sm font-[Orbitron] text-gray-300 py-5 md:mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora iusto error nemo aspernatur, saepe fugit magni ullam adipisci nisi quas? Minus deserunt architecto hic unde ullam possimus deleniti provident commodi.</p>
        <div className='flex gap-5'>
          <a href="#popular"><button className='w-20 text-sm md:text-[15px] md:w-35 flex gap-2  bg-yellow-500 py-2 px-3 border-2 border-gray-500 rounded-2xl cursor-pointer font-semibold'>Shop Now <span><Leaf size={18}/></span></button></a>
          <a href="#about"><button className='w-20 text-sm md:text-[15px] md:w-35 flex gap-2 hover:bg-yellow-500 py-2 px-3 border-2 border-gray-500 rounded-2xl cursor-pointer font-semibold'>Know More <span><Leaf size={18}/></span></button></a>
        </div>
        <p className='text-xs mx-2 my-2 italic'>you will get 30 days free trail</p>
        <div className='flex flex-row flex-wrap gap-x-5 text-white md:mt-0 -mt-2'>
          <a href="https://facebook.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black dark:text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-105 flex gap-1 py-4"><Facebook size={18} className='md:size-5'/></a>
          <a href="https://twitter.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black dark:text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-105 flex gap-1 py-4"><Twitter size={18} className='md:size-5'/></a>
          <a href="https://instagram.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black dark:text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-105 flex gap-1 py-4"><Instagram size={18} className='md:size-5'/></a>
          <a href="https://linkedin.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-black dark:text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-105 flex gap-1 py-4"><Linkedin size={18} className='md:size-5'/></a>
        </div>       
      </motion.div>
      <motion.div 
        className='hidden md:block'
        initial={{ opacity: 0, scale:0.9 }}
        whileInView={{ opacity: 1, scale:1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      >
        <img src={home} alt="homeimg" className='md:w-6xl'/>
        <motion.span className='md:absolute top-26 left-200 text-gray-400' animate={{rotate:360}} transition={{repeat:Infinity,duration:10,ease:'linear'}}><Leaf size={28}/></motion.span>
        <motion.span className='md:absolute top-130 left-190 text-gray-400' animate={{rotate:360}} transition={{repeat:Infinity,duration:10,ease:'linear'}}><Flower size={28}/></motion.span>
      </motion.div>
    </section>

    {/*services*/}
    <div className='bg-white text-green-800 px-25 py-16 md:flex justify-center items-center gap-5 md:gap-8'>
      <motion.div className='border-2 border-gray-400/40 md:mb-0 mb-3 py-4 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' initial={{opacity:0,y:-70}} whileInView={{opacity:1,y:0}} viewport={{ once: false }} transition={{duration:1,ease:"easeOut"}}>
        <div className='flex gap-3 font-extrabold mb-4'>
          <span><Truck size={28}/></span>
          <h1>Fast Delivery</h1>
        </div>
        <p className='text-sm font-[Dancing]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas modi numquam neque ad corrupti nihil et soluta! Cupiditate minus qui, ipsam sed placeat eos unde praesentium earum iure dolorum?</p>
      </motion.div>

      <motion.div className='border-2 border-gray-400/40 py-4 md:mb-0 mb-3 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' initial={{opacity:0,y:-70}} whileInView={{opacity:1,y:0}} viewport={{ once: false }} transition={{delay:0.2,duration:1,ease:"easeOut"}}>
        <div className='flex gap-3 font-extrabold mb-4'>
          <span><Headset size={28}/></span>
          <h1 className='text-nowrap'>Great Service</h1>
        </div>
        <p className='text-sm font-[Dancing]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas modi numquam neque ad corrupti nihil et soluta! Cupiditate minus qui, ipsam sed placeat eos unde praesentium earum iure dolorum?</p>
      </motion.div>

      <motion.div className='border-2 border-gray-400/40 py-4 md:mb-0 mb-3 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' initial={{opacity:0,y:-70}} whileInView={{opacity:1,y:0}} viewport={{ once: false }} transition={{delay:0.3,duration:1,ease:"easeOut"}}>
        <div className='flex gap-3 font-extrabold mb-4'>
          <span><Sprout size={28}/></span>
          <h1>Original Plants</h1>
        </div>
        <p className='text-sm font-[Dancing]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas modi numquam neque ad corrupti nihil et soluta! Cupiditate minus qui, ipsam sed placeat eos unde praesentium earum iure dolorum?</p>
      </motion.div>

      <motion.div className='border-2 border-gray-400/40 py-4 md:mb-0 mb-3 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' initial={{opacity:0,y:-70}} whileInView={{opacity:1,y:0}} viewport={{ once: false }} transition={{delay:0.4,duration:1,ease:"easeOut"}}>
        <div className='flex gap-3 font-extrabold mb-4'>
          <span><Coins size={28}/></span>
          <h1>Affordable Price</h1>
        </div>
        <p className='text-sm font-[Dancing]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas modi numquam neque ad corrupti nihil et soluta! Cupiditate minus qui, ipsam sed placeat eos unde praesentium earum iure dolorum?</p>
      </motion.div>
    </div>

    <section id="about" className='bg-green-950 w-screen h-full relative'>
      <motion.div className='flex justify-end absolute -top-3 md:right-1 -right-2' initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
        <img src={leaf3} alt="leaf" className='w-24 opacity-55'/>
      </motion.div>
      
      <motion.div className='text-center pb-4 py-10 md:py-20' initial={{opacity:0,y:-60}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
        <h1 className='text-yellow-500 text-3xl font-extrabold font-[Playfair_Display] italic pb-2' >About Us</h1>
        <p className='text-sm font-light'>Follow instruction for more</p>
      </motion.div> 

      <div className='md:flex justify-center items-center md:gap-16 md:mx-42 my-12'>
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
          <img src={plant1} alt="plant" className='md:w-250 w-[200px]  mx-27 md:mx-0'/>
        </motion.div>

        <motion.div className='mx-10 md:mx-0 text-center md:text-start' initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{delay:0.2,duration:1,ease:"easeOut"}}>
          <h1 className='md:text-3xl text-xl py-4'>Make your <span className='text-yellow-500'>organic</span> garden</h1>
          <p className='md:text-sm text-xs font-[Quicksand]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsam quod unde at vero sapiente facere voluptates ipsum, repudiandae, laudantium porro deserunt laborum fugit placeat, distinctio error temporibus labore! Officia?</p>
        </motion.div>
      </div>

      <div className='hidden md:flex justify-center items-center gap-16 mx-32 my-12 mb-10'>
        <motion.div className='text-center md:text-start' initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{delay:0.2,duration:1,ease:"easeOut"}}>
          <h1 className='text-3xl py-4'>Come with us  <span className='text-yellow-500'>grow your plant</span> plant</h1>
          <p className='text-sm  font-[Quicksand]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsam quod unde at vero sapiente facere voluptates ipsum, repudiandae, laudantium porro deserunt laborum fugit placeat, distinctio error temporibus labore! Officia?</p>
        </motion.div>

        <motion.div className='my-0' initial={{opacity:0,x:50}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
          <img src={plant2} alt="plant" className='w-250 mx-0'/>
        </motion.div>

      </div>

       <div className='md:hidden my-12 pb-10 mb-10'>
        <div className='my-5'>
          <img src={plant2} alt="plant" className='w-[200px]  mx-27'/>
        </div>
        <div className='mx-10 text-center'>
          <h1 className='text-xl py-4'>Come with us  <span className='text-yellow-500'>grow your plant</span> plant</h1>
          <p className='text-xs font-[Quicksand]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsam quod unde at vero sapiente facere voluptates ipsum, repudiandae, laudantium porro deserunt laborum fugit placeat, distinctio error temporibus labore! Officia?</p>
        </div>
      </div>
    </section>
    
    <section id="popular" className='bg-green-900 w-screen h-full -mt-10'>
      <motion.div className='text-center md:pt-24 pt-10 md:pb-4' initial={{opacity:0,y:-70}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
        <h1 className='text-yellow-500 text-4xl font-extrabold font-[Quicksand] italic pb-2' >Your choice plant</h1>
        <p className='text-sm font-light'>Follow instruction for more</p>
      </motion.div>

      <div className='md:flex justify-center items-center gap-x-8 my-24 md:pb-0 pb-3'> 
        <motion.div className='relative bg-green-950/90 mb-26 mx-10 md:mx-0 group' initial={{opacity:0,y:-80}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
          <img src={cart1} alt="cartplant" className='w-40 absolute -top-23 md:left-6 left-3 md:group-hover:scale-105 transition-transform duration-300'/>
          <div className='md:text-center text-start py-8 px-8'>
            <h3 className='pt-10 text-xs font-light text-gray-300 italic text-start'>Netrolopis exalata</h3>
            <h1 className='text-2xl font-extrabold font-[Playfair_Display] '>Bosten Fern</h1>
            <div>
              <FullStarRating rating={4}/>
            </div>
            <div className='flex gap-5 justify-between mt-5 font-extrabold'>
              <h2>$5</h2>
              <div className='bg-amber-400 w-8 cursor-pointer font-extrabold px-2 py-1 hover:bg-amber-400/70 hover:scale-105 transition-all duration-300' onClick={()=>handleAddToCart("c1")}>
                <span><ShoppingCart size={14} color="white" className="fill-white"/></span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showToast.c1 && (
              <motion.div
                className="absolute bottom-0 left-10 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: "easeOut" }} 
              >
                ✅ Added to Cart
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <motion.div className='relative bg-green-950/90 mb-26 mx-10 md:mx-0 group' initial={{opacity:0,y:-80}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.5,duration:1,ease:"easeOut"}}>
          <img src={cart2} alt="cartplant" className='w-40 absolute -top-23 md:left-6 left-3 md:group-hover:scale-105 transition-transform duration-300'/>
          <div className='md:text-center text-start py-8 px-8'>
            <h3 className='pt-10 text-xs font-light text-gray-300 italic text-start'>Flus exalaca</h3>
            <h1 className='text-2xl font-extrabold font-[Playfair_Display] '>Rubber Plant</h1>
            <div>
              <FullStarRating rating={3.5}/>
            </div>
            <div className='flex gap-5 justify-between mt-5 font-extrabold'>
              <h2>$5</h2>
              <div className='bg-amber-400 w-8 cursor-pointer font-extrabold px-2 py-1 hover:bg-amber-400/70 hover:scale-105 transition-all duration-300' onClick={()=>handleAddToCart("c2")}>
                <span><ShoppingCart size={14} color="white" className="fill-white"/></span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showToast.c2 && (
              <motion.div
                className="absolute bottom-0 left-10 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: "easeOut" }} 
              >
                ✅ Added to Cart
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <motion.div className='relative bg-green-950/90 mb-26 mx-10 md:mx-0 group' initial={{opacity:0,y:-80}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.5,duration:1,ease:"easeOut"}}>
          <img src={cart3} alt="cartplant" className='w-40 absolute -top-23 md:left-6 left-3 md:group-hover:scale-105 transition-transform duration-300'/>
          <div className='md:text-center text-start py-8 px-9'>
            <h3 className='pt-10 text-xs font-light text-gray-300 italic text-start'>Spahtifullum wallise</h3>
            <h1 className='text-2xl font-extrabold font-[Playfair_Display] '>Peace Lily</h1>
            <div>
              <FullStarRating rating={2.5}/>
            </div>
            <div className='flex gap-5 justify-between mt-5 font-extrabold'>
              <h2>$5</h2>
              <div className='bg-amber-400 w-8 cursor-pointer font-extrabold px-2 py-1 hover:bg-amber-400/70 hover:scale-105 transition-all duration-300' onClick={()=>handleAddToCart("c3")}>
                <span><ShoppingCart size={14} color="white" className="fill-white"/></span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showToast.c3 && (
              <motion.div
                className="absolute bottom-0 left-10 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: "easeOut" }} 
              >
                ✅ Added to Cart
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <motion.div className='relative bg-green-950/90 md:mb-26 mb-36 mx-10 md:mx-0 group' initial={{opacity:0,y:-80}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.5,duration:1,ease:"easeOut"}}>
          <img src={cart4} alt="cartplant" className='w-40 absolute -top-23 md:left-6 left-3 md:group-hover:scale-105 transition-transform duration-300'/>
          <div className='md:text-center text-start py-8 px-8'>
            <h3 className='pt-10 text-xs font-light text-gray-300 italic text-start'>Adumem obsum</h3>
            <h1 className='text-2xl font-extrabold font-[Playfair_Display] '>Desert Rose</h1>
            <div>
              <FullStarRating rating={4.5}/>
            </div>
            <div className='flex gap-5 justify-between mt-5 font-extrabold'>
              <h2>$5</h2>
              <div className='bg-amber-400 w-8 cursor-pointer font-extrabold px-2 py-1 hover:bg-amber-400/70 hover:scale-105 transition-all duration-300' onClick={()=>handleAddToCart("c4")}>
                <span><ShoppingCart size={14} color="white" className="fill-white"/></span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showToast.c4 && (
              <motion.div
                className="absolute bottom-0 left-10 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1, ease: "easeOut" }} 
              >
                ✅ Added to Cart
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>

    <section id="review" className='bg-green-950 -mt-36 relative'>
      <motion.div className='text-center pt-24' initial={{opacity:0,y:-80}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
        <h1 className='text-yellow-500 text-4xl font-extrabold font-[Quicksand] italic pb-2' >Customer Review</h1>
        <p className='text-sm font-light'>Follow instruction for more</p>
      </motion.div>

      <motion.div className='md:flex justify-center items-center md:mt-20 mt-14 my-10 mx-20 gap-x-10 md:mb-30 mb-20' initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.5,duration:1,ease:"easeOut"}}>

        <div className='bg-green-800/40  py-4 px-5 md:mb-0 mb-10 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300'>
          <p className='font-[Pacifico] text-[10px] font-semibold pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum vel molestias numquam fugit quam tempore quis. Ex commodi odit voluptate vel ratione modi minima assumenda natus magnam. Debitis, saepe.</p>
          <div className='flex justify-between items-center gap-x-4'>
            <div className='flex gap-x-2 justify-center items-end'>
              <img src={review1} alt="customer" className='w-10 h-10 rounded-full'/>
              <div>
                <h1 className='text-yellow-600/70 text-xs font-bold text-nowrap'>MARIN DOE</h1>
                <h3 className='text-[10px] font-bold'>Designer</h3>
              </div>
            </div>
            <div>
                <span><Quote size={16} className='fill-white'/></span>
            </div>
          </div>
        </div>

        <div className='bg-green-800/40  py-4 px-5 md:mb-0 mb-10 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300'>
          <p className='font-[Pacifico] text-[10px] font-semibold pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum vel molestias numquam fugit quam tempore quis. Ex commodi odit voluptate vel ratione modi minima assumenda natus magnam. Debitis, saepe.</p>
          <div className='flex justify-between items-center gap-x-4'>
            <div className='flex gap-x-2 justify-center items-end'>
              <img src={review2} alt="customer" className='w-10 h-10 rounded-full'/>
              <div>
                <h1 className='text-yellow-600/70 text-xs font-bold text-nowrap'>JOHN DACK</h1>
                <h3 className='text-[10px] font-bold'>Farmer</h3>
              </div>
            </div>
            <div>
                <span><Quote size={16} className='fill-white'/></span>
            </div>
          </div>
        </div>

        <div className='bg-green-800/40  py-4 px-5 md:mb-0 mb-10 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300'>
          <p className='font-[Pacifico] text-[10px] font-semibold pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum vel molestias numquam fugit quam tempore quis. Ex commodi odit voluptate vel ratione modi minima assumenda natus magnam. Debitis, saepe.</p>
          <div className='flex justify-between items-center gap-x-4'>
            <div className='flex gap-x-2 justify-center items-end'>
              <img src={review3} alt="customer" className='w-10 h-10 rounded-full'/>
              <div>
                <h1 className='text-yellow-600/70 text-xs font-bold text-nowrap'>LORIN MARK</h1>
                <h3 className='text-[10px] font-bold'>Model</h3>
              </div>
            </div>
            <div>
                <span><Quote size={16} className='fill-white'/></span>
            </div>
          </div>
        </div>

        <div className='bg-green-800/40  py-4 px-5 md:mb-0 mb-2 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300'>
          <p className='font-[Pacifico] text-[10px] font-semibold pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum vel molestias numquam fugit quam tempore quis. Ex commodi odit voluptate vel ratione modi minima assumenda natus magnam. Debitis, saepe.</p>
          <div className='flex justify-between items-center gap-x-4'>
            <div className='flex gap-x-2 justify-center items-end'>
              <img src={review4} alt="customer" className='w-10 h-10 rounded-full'/>
              <div>
                <h1 className='text-yellow-600/70 text-xs font-bold text-nowrap'>CATRIN LEE</h1>
                <h3 className='text-[10px] font-bold'>Designer</h3>
              </div>
            </div>
            <div>
                <span><Quote size={16} className='fill-white'/></span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className='bg-green-800 md:mx-50 mx-10 md:px-7 px-4 md:py-3 py-2 z-50 md:absolute top-118 -left-4 md:w-4/5 w-5/6 mb-10'>
        <h1 className='text-start font-bold md:text-xl text-md mb-4'><span className='text-yellow-400/80'>Subscribe</span> to our newsletter</h1>
        <div className='md:flex justify-start items-start gap-x-3'>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email address.. ' className='md:w-5/6 bg-white text-gray-900 py-1 px-3 mb-4'/>
          <div>
            <button onClick={handleSubscribe} className='bg-black text-white md:py-2 py-1 md:px-2 px-1.5 text-sm flex gap-x-1 cursor-pointer items-center hover:text-gray-300'>
              <span className='font-semibold'>Subscribe</span>
              <span><SendHorizonal size={14} className="fill-white md:size-5 size-3"/></span>
            </button>
          </div>
        </div>

        <AnimatePresence>
        {toast.show &&(
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`absolute md:-bottom-3 bottom-140 left-14 transform  px-4 py-2 rounded-xl text-white text-sm z-50 shadow-md ${
              toast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      </div>
      
      <motion.div className='absolute md:-top-3 -top-4 md:-left-10 -left-12' initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:false}} transition={{delay:0.2,duration:1,ease:"easeOut"}}>
        <img src={leaf4} alt="leaf" className='w-36 opacity-45'/>
      </motion.div>

    <footer className='bg-amber-100 text-black z-30 md:pt-35 pt-15 relative -mb-10'>
      <motion.div className='flex gap-6 text-black justify-center' initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:1,ease:"easeOut"}}>
        <div className="w-4xl h-0.5 bg-gray-700 ml-3 mt-5 my-4"></div>
          <a href="https://facebook.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400 transition-transform transform hover:scale-110 flex gap-1 py-4"><Facebook size={14}/></a>
          <a href="https://twitter.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-black  hover:text-blue-400 transition-transform transform hover:scale-110 flex gap-1 py-4"><Twitter size={14}/></a>
          <a href="https://instagram.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-400 transition-transform transform hover:scale-110 flex gap-1 py-4"><Instagram size={14}/></a>
          <a href="https://linkedin.com/landorPlants"  target="_blank" rel="noopener noreferrer" className="text-black  hover:text-blue-400 transition-transform transform hover:scale-110 flex gap-1 py-4"><Linkedin size={14}/></a>
        <div className="w-4xl h-0.5 bg-gray-700 mr-3 mt-5 my-4"></div>
      </motion.div>
      
      <motion.div className='flex justify-between items-start md:gap-x-10 gap-x-3 md:mx-28 mx-5 my-6 md:my-6 flex-wrap'initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.3,duration:1,ease:"easeOut"}}>
        <div>
          <img src={leaf2} alt="leaf" className='md:w-10 w-6 mx-6'/>
          <div className='md:text-2xl text-md font-extrabold my-1 text-green-700'>
            <h1 className='font-[Pacifico]'>landorPlants.</h1>
          </div>
        </div>

        <div>
          <h1 className='font-extrabold md:text-lg text-sm mb-4 text-center text-nowrap'>Quick Link</h1>
          <ul className='text-center text-gray-700 font-light'>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Plants</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Flowers</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Gardening</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Seeds</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Shipping</a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className='font-extrabold md:text-lg text-sm mb-4 text-center text-nowrap'>Popular Services</h1>
          <ul className='text-center text-gray-700 font-light'>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Tree Planting</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Grass Cutting</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Weeds Control</a>
            </li>
            <li className='py-1 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">Project</a>
            </li>
          </ul>
        </div>

        <div className=' px-20 py-5 md:py-0 md:px-0'>
          <h1 className='font-extrabold md:text-lg text-sm mb-4 text-center'>Contact Us</h1>
          <ul className='text-center text-gray-700 font-light'>
            <li className='py-1 text-xs md:text-lg'>
             +88 367 43 123
            </li>
            <li className='py-1 mb-4 text-xs md:text-lg hover:text-gray-950'>
              <a href="#">landorPlants@gmail.com</a>
            </li>
          </ul>
          <div className='text-center text-gray-700 font-light'>
            <h3 className='py-1 text-xs md:text-lg'>1234 Comminity Ave, NewYork City</h3>
            <h3 className='py-1 text-xs md:text-lg'>Liberity 2345, USA</h3>
          </div>
        </div>

      </motion.div>
      <motion.p className='my-10 pb-3 flex justify-center items-center text-xs md:text-sm text-gray-700 font-light space-x-3' initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{delay:0.3,duration:1,ease:"easeOut"}}>Copyright <span><Copyright size={10}  className='text-gray-700 font-light mx-1' /></span> 2025 landorPlants. All rights reserved</motion.p>
      <img src={floral1} alt="leaf" className='w-80 absolute md:top-46 top-56 left-0 opacity-40' />
    </footer>
  </section>
  <button className='hidden md:block fixed top-130 z-60 right-5 bg-amber-500 py-1 px-1 cursor-pointer' onClick={handleScrollToTop}><span className='text-white font-bold'><ArrowUp size={16}/></span></button>


    
    </>
  )
}

export default App
