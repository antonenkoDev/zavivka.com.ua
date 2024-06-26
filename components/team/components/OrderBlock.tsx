import { Button } from '@/shared/buttons'
import React from 'react'

const OrderBlock = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center px-5 text-[16px] md:text-[24px] xl:justify-center gap-5 md:gap-[50px] xl:gap-[100px] font-banner border border-grey-light rounded-lg py-[34px]'>
        <Button className="text-black bg-white w-full sm:w-1/2">Запис на консультацію</Button>
        <a href="https://beautyprosoftware.com/b/877643" target="_blank" className='w-full sm:w-1/2'>
            <Button className='w-full'>Запис онлайн</Button>
        </a> 
    </div>
  )
}

export default OrderBlock
