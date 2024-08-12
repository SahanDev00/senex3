import React from 'react'

const NewsPaper = () => {
  return (
    <div className='w-full h-[100px] mt-10 mb-10'>
        <div className='w-[80%] h-full mx-auto'>
            <h1 className='text-xl text-white font-mono text-center'>REGISTER YOUR EMAIL FOR EXCLUSIVE NEW, OFFERS AND GIVEAWAYS!</h1>
            <form className='mt-5 flex items-center justify-center'>
                <input type="text" placeholder='Your email address' className='w-[70%] rounded-l py-3 px-4'/>
                <button type='submit' className='py-3 px-6 font-semibold text-white font-mono bg-red-600 rounded-r'>SUBSCRIBE</button>
            </form>
        </div>
    </div>
  )
}

export default NewsPaper