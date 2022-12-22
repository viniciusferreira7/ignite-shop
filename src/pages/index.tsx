import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'
import camisetaExplore from '../assets/2_explorer-t-shirt 1.png'
import camisetaMarotana from '../assets/Camisa-Maratona 1.png'
import camisetaIgniteLab from '../assets/IgniteLab.png'
import camisetaIgniterAboard from '../assets/Igniter-abord.png'

export default function Home() {
  console.log(camisetaIgniterAboard)

  return (
    <HomeContainer>
      <Product>
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
      <Product>
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
      {/* <Product>
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
      <Product>
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
      </Product> */}
    </HomeContainer>
  )
}
