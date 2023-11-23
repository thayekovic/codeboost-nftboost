import Image from 'next/image'
import { TitleSection } from '@/components/title-section'
import { CardNFT } from '@/components/card-nft'
import { ContainerGrid } from '@/components/container'
import { SectionHero } from '@/components/section-hero'


import ImageNft01 from '@/assets/img-neft/01.jpg'
import ImageNft02 from '@/assets/img-neft/02.jpg'

import { CardCollectors } from '@/components/card-collectors'
import { SectionCarrousel } from '@/components/section-carrousel'
import { SectionCollectors } from '@/components/section-collectors'
import { SectionBanner } from '@/components/section-banner'
import { SectionFaq } from '@/components/section-faq'

import Thumb01 from '@/assets/img-neft/01.jpg'
import Thumb02 from '@/assets/img-neft/02.jpg'
import Thumb03 from '@/assets/img-neft/03.jpg'
import Thumb04 from '@/assets/img-neft/04.jpg'
import Thumb05 from '@/assets/img-neft/05.jpg'
import Thumb06 from '@/assets/img-neft/06.jpg'
import Thumb07 from '@/assets/img-neft/07.jpg'
import Thumb08 from '@/assets/img-neft/08.jpg'
import Thumb09 from '@/assets/img-neft/09.jpg'
import Thumb10 from '@/assets/img-neft/10.jpg'
import Thumb11 from '@/assets/img-neft/11.jpg'
import Thumb12 from '@/assets/img-neft/12.jpg'






const featuredCollections = [
  {
    name: 'Cat #221',
    thumbnail: Thumb01,
    value:'0.0721',
    value_brl:'602,02', 

  },
  {
    name:'Snike #2331',
    thumbnail: Thumb02 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Skull Hatter #2311',
    thumbnail: Thumb03 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Nox #2611',
    thumbnail: Thumb04 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Craxy Monkey #131',
    thumbnail: Thumb05 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Alien Shooter #2211',
    thumbnail: Thumb06 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Yordlee #1221',
    thumbnail: Thumb07 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb08 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb09 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb10 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb11 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb12 ,
    value:'0.0721',
    value_brl:'602,02',

  }

]

const featuredMonth = [
  {
    name: 'Cat #221',
    thumbnail: Thumb01,
    value:'0.0721',
    value_brl:'602,02', 

  },
  {
    name:'Snike #2331',
    thumbnail: Thumb02 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Skull Hatter #2311',
    thumbnail: Thumb03 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Nox #2611',
    thumbnail: Thumb04 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Craxy Monkey #131',
    thumbnail: Thumb05 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Alien Shooter #2211',
    thumbnail: Thumb06 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Yordlee #1221',
    thumbnail: Thumb07 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb08 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb09 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb10 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb11 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb12 ,
    value:'0.0721',
    value_brl:'602,02',

  }

]

const tendencies = [
  {
    name: 'Cat #221',
    thumbnail: Thumb01,
    value:'0.0721',
    value_brl:'602,02', 

  },
  {
    name:'Snike #2331',
    thumbnail: Thumb02 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Skull Hatter #2311',
    thumbnail: Thumb03 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Nox #2611',
    thumbnail: Thumb04 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Craxy Monkey #131',
    thumbnail: Thumb05 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Alien Shooter #2211',
    thumbnail: Thumb06 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Yordlee #1221',
    thumbnail: Thumb07 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb08 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb09 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb10 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb11 ,
    value:'0.0721',
    value_brl:'602,02',

  },
  {
    name:'Dragon Cannon #4401',
    thumbnail: Thumb12 ,
    value:'0.0721',
    value_brl:'602,02',

  }

]


export default function Home() {
  return (
  <>
   <SectionHero/>
   
   <SectionCarrousel 
     subtitle='Destaque em coleções'
     title='Coleções notáveis'
     data={featuredCollections}
   />
   <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/>
   
   <SectionCarrousel
    subtitle='Seleção Mensal'
    title='Destaque do Mês'
    data={featuredMonth}
     />
    
    <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/>


    <SectionCollectors/>

    <hr className='border-t border-white border-opacity-5 max-w-grid mx-auto'/>
   
   <SectionCarrousel
    subtitle='Em Tendência'
    title='Tendências'
    data={tendencies}
    />

    <SectionBanner />
    <SectionFaq />
  </>

  )
}
