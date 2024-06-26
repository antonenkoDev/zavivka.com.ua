"use client";

import React from 'react';
import { LinkBoxProps } from './type';
import type {FC} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkBox: FC<LinkBoxProps> = ({linksFooter}) => {
  const pathname = usePathname();

  return (
    <>
      {linksFooter.map(linkFooter => (
        <div key={linkFooter.title}>
            {linkFooter.link && 
            <Link 
              className={`inline-block mb-3 ${pathname === linkFooter.link ? 'border-b font-bold border-orange' : ''}`} 
              href={linkFooter.link}
            >
                <p className='hover:font-bold'>{linkFooter.title}</p></Link>}
            {!linkFooter.link && <p className='mb-3'>{linkFooter.title}</p>}
        </div>
      ))}
    </>
  )
}

export default LinkBox
