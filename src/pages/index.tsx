import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

import camisetaExplore from '../assets/2_explorer-t-shirt 1.png'
import camisetaMarotana from '../assets/Camisa-Maratona 1.png'
import camisetaIgniteLab from '../assets/IgniteLab.png'
import camisetaIgniterAboard from '../assets/Igniter-abord.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width:768px)': {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src={camisetaExplore}
          width={520}
          height={480}
          alt="Camiseta da Rocketseat"
        />
        <footer>
          <strong>Camiseta Explore</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src={camisetaMarotana}
          width={520}
          height={480}
          alt="Camiseta da Rocketseat"
        />
        <footer>
          <strong>Camiseta Marotana</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src={camisetaIgniteLab}
          width={520}
          height={480}
          alt="Camiseta da Rocketseat"
        />
        <footer>
          <strong>Camiseta Ignite Lab</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image
          src={camisetaIgniterAboard}
          width={520}
          height={480}
          alt="Camiseta da Rocketseat"
        />
        <footer>
          <strong>Camiseta Ignite Aboard</strong>
          <span>R$ 79.99</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
