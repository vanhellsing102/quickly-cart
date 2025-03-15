import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cream from '../../assets/slider/cream-Photoroom.png';
import femaledress from '../../assets/slider/femaledress-Photoroom.png';
import food from '../../assets/slider/food-Photoroom.png';
import jeans from '../../assets/slider/jeans-Photoroom.png';
import perfume from '../../assets/slider/perfume-Photoroom.png';
import phone from '../../assets/slider/phone.png';
import robot from '../../assets/slider/robot-Photoroom.png';
import virtual from '../../assets/slider/vartual-Photoroom.png';

const Banner = () => {
  
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {
          slideData.map((data, index) =>
            <div key={index } className="keen-slider__slide number-slide1">
              <div className={`bg-gradient-to-l ${data.bgStart} ${data.bgEnd} flex flex-col lg:flex-row justify-center items-center gap- py-7 rounded-sm`}>
                  <div className='text-center'>
                    <h4 className='text-2xl font-light'>{data.name}</h4>
                    <h2 className='text-7xl font-bold text-slate-500 tracking-[12px] uppercase'>{data.title}</h2>
                    <p className='mt-6 text-3xl font-thin'>{data.description}</p>
                  </div>
                  <img className='w-72 h-72' src={data.image} alt="" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
const slideData = [
  {
    name: "Cream",
    title: "Glow Essence",
    bgStart: "to-pink-100",
    bgEnd: "from-pink-500",
    image: cream,
    description: " A natural skincare cream that enhances radiance and smoothness."
  },
  {
    name: "Short",
    title: "Elegance Attire",
    bgStart: "to-blue-100",
    bgEnd: "from-blue-500",
    image: femaledress,
    description: "Trendy and stylish dresses that enhance elegance and confidence."
  },
  {
    name: "Pizza",
    title: "Yummy Delight",
    bgStart: "to-orange-100",
    bgEnd: "from-orange-500",
    image: food,
    description: "A paradise for delicious and healthy food with a variety of cuisines."
  },
  {
    name: "Jeans",
    title: "Denim Vibe",
    bgStart: "to-violet-100",
    bgEnd: "from-violet-500",
    image: jeans,
    description: "Stylish and comfortable denim wear for everyday fashion."
  },
  {
    name: "Perfume",
    title: "Luxe Essence",
    bgStart: "to-stone-100",
    bgEnd: "from-emerald-500",
    image: perfume,
    description: "A captivating and mysterious fragrance for a lasting impression."
  },
  {
    name: "Samsung",
    title: "Gadget Zone",
    bgStart: "to-cyan-100",
    bgEnd: "from-cyan-500",
    image: phone,
    description: " A premium collection of smartphones and accessories."
  },
  {
    name: "Robots",
    title: "FutureBot",
    bgStart: "to-fuchsia-100",
    bgEnd: "from-fuchsia-500",
    image: robot,
    description: "AI-powered robots with intelligent features and capabilities."
  },
  {
    name: "Virtual",
    title: "Dream Reality",
    bgStart: "to-green-100",
    bgEnd: "from-green-500",
    image: virtual,
    description: "A gateway to the metaverse and immersive virtual experiences."
  }
]
export default Banner;