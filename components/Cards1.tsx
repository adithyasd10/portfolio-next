import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import Image from 'next/image';

type CardsProps = {
  title:string
  description:string
  image:string
  link:string   
  link1:string 
}

const Cards1 = ({title,description,image,link,link1}: CardsProps) => {
  return (
    <div>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950 dark:border-white/[0.2] border-black/[0.1]   h-[590px] rounded-xl p-6 border  sm:p-8  m-1 w-full max-w-[700px] px-4 mx-auto ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-70 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className='flex flex-row justify-center items-center'>
              <Link href={link} className='p-2 hover:scale-110 hover:shadow-2xl hover:animate-pulse active:scale-95 transition-all duration-300 ease-in-out'>
                <Image src="/github.png" alt="github" width={70} height={70} className='flex justify-center items-center p-2 rounded-lg text-black'/>
            </Link>  
            <Link href={link1} className='p-2 hover:scale-110 hover:shadow-2xl hover:animate-pulse active:scale-95 transition-all duration-300 ease-in-out'>
                <Image src="/vercel.png" alt="vercel" width={80} height={80} className='flex justify-center items-center p-2 rounded-lg text-black'/>
            </Link> 
           </div>
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default Cards1
