import { CardCollectors } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";


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

const collectors = [
    {
        image: Thumb12,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
    {
        image: Thumb10,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
    {
        image: Thumb08,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },

    {
        image: Thumb06,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
    {
        image: Thumb04,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },

    {
        image: Thumb02,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
    {
        image: Thumb11,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
    {
        image: Thumb09,
        name:'Lorem Ipsum',
        percent:'+20%',
        value_btc:'0.721'
    },
]

export function SectionCollectors (){
    return (
        <section className='py-10 @desktop:py-28'>
            <ContainerGrid>
                <TitleSection
                subtitle='Colecionadores em foco'
                title='Principais colecionadores'
                
                />
                <div className='grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4'>
                    {
                        collectors.map(({image, name, percent, value_btc}, index) =>(
                            <CardCollectors 
                            key={index}
                            position={index + 1}
                            image={image}
                            name={name}
                            percent={percent}
                            value_btc={value_btc}
                    
                    />

                        ))
                    }
                    
                </div>
            </ContainerGrid>
        </section>
    )
}