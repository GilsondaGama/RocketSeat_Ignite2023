import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import camisa1 from '../assets/camisas/1.png'
import camisa2 from '../assets/camisas/2.png'
import camisa3 from '../assets/camisas/3.png'
import camisa4 from '../assets/camisas/4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Branca</strong>
          <span>R$ 129,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Branca</strong>
          <span>R$ 129,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Branca</strong>
          <span>R$ 129,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camisa4} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Branca</strong>
          <span>R$ 129,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
