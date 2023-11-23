import Image from "next/image";
import Link from "next/link";
import { ContainerGrid } from "./container";
import Logo from '@/assets/logo.svg'
import IconHamburger from '@/assets/icon-hamburger.svg'

const itemsNav =[
    'Download',
    'NFTs',
    'Rank',
    'FAQ'
]


export function Header (){
    return (
        <header className='absolute top-0 left-0 py-6 w-full @laptop:py-5'>
            <ContainerGrid className='flex items-center justify-between'> 
                <Image 
                src={Logo}
                alt='Logo NFTBoost'
                className='max-w-logo-size-mb'
                />
                <div className='hidden @laptop:flex flex-1 max-w-nav-header items-center
                justify-between'>
                    <nav className='flex gap-12'>
                        {itemsNav.map((item, index) => (
                             <Link 
                             key={index}
                             href='#'
                             className='font-medium font-inter hover:text-blue-primary 
                             transition-colors ease-linear' 
                             >
                                
                            {item}</Link>
                        )
                        
                         
                         )}
                           
                        
                    </nav>
                    <button className='bg-blue-primary py-4 px-7 rounded-full font-medium
                     hover:bg-blue-900 transition-all ease-linear'>Conectar carteira</button>
                </div>
                <button className='w-10 h-10 flex items-center justify-center border border-white 
                border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden'>
                    <Image 
                    src={IconHamburger}
                    alt='Menu Mobile'
                    />
                </button>

            </ContainerGrid>
        </header>
    )
}