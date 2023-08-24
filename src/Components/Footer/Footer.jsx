

const Footer = () => {
  return (
    <div className="bg-[#1E0044] flex flex-col mx-2 my-8 rounded-2xl text-white/90">
      <div className="flex flex-row justify-between m-6">
        <span>
          <img src='https://s6.uupload.ir/files/navbar_brand_a7ix.png' alt='' className='w-[100px] h-[32px]'/>
        </span>
        <div className="lg:flex lg:flex-row gap-8 hidden">
          <a href='#' className=' flex flex-row items-center'>
            <h1>LINKEDIN</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
          <a href='#' className=' flex flex-row items-center'>
            <h1>TWITTER</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
          <a href='#' className=' flex flex-row items-center'>
            <h1>DRIBBLE</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-16 justify-center items-center text-center my-12">
        <h1 className="lg:text-7xl md:5xl text-5xl font-medium mx-64 lg:leading-relaxed">Interested in working together?</h1>
        <span>
          <img src="https://s6.uupload.ir/files/image5_iqr5.png" alt="" className='animate-bounce sm:w-[80px] sm:h-[80px] w-[70px] h-[70px]'/>
        </span>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-0 justify-center items-center md:justify-between m-6">
        <h1><span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">© 2023</span> – All Rights Reserved</h1>
        <h1>Available for freelance work</h1>
      </div>
    </div>
  )
}

export default Footer