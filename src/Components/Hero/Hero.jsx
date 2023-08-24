const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-between bg-[#1E0044] mx-2 my-4 rounded-2xl text-white'>
      {/* Navbar  */}
      <div className='flex flex-row justify-between sm:text-lg '>
        {/* Logo  */}
        <span className='m-4'>
          <img src='https://s6.uupload.ir/files/navbar_brand_a7ix.png' alt='' className='w-[100px] h-[32px]' />
        </span>
        {/* Main Navbar Contents  */}
        <div className='md:flex md:flex-row hidden '>
          <a href='#' className='m-6 flex flex-row items-center'>
            <h1>LINKEDIN</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
          <a href='#' className='m-6 flex flex-row items-center'>
            <h1>TWITTER</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
          <a href='#' className='m-6 flex flex-row items-center'>
            <h1>DRIBBLE</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-4 h-4'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
              </svg>
            </span>
          </a>
        </div>
        {/* Talk Button  */}
        <div className='sm:text-md text-sm m-4 '>
          <button className='p-6 py-2 border border-purple-700 rounded-full shadow-md shadow-purple-600/30 hover:bg-purple-700 transition duration-300'>Let’s Talk</button>
        </div>
      </div>

      {/* Main Text  */}
      <div className='flex flex-col items-center text-center my-20 gap-6 mx-4 '>
        <h1 className='sm:text-6xl md:text-6xl lg:text-7xl text-5xl font-medium leading-relaxed'>
          I Create <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold'>Beautiful</span> Experiences
        </h1>
        <p className='text-xs md:text-sm lg:text-lg font-thin '>I work with people all over the world to create tailor-made Webflow experiences</p>
      </div>

      {/* Scroll Down  */}
      <div>
        <span className='flex md:justify-between justify-center items-center mx-6'>
          <div className='flex'>
            <div className="">
              <span class='relative flex h-3 w-3'>
                <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
                <span class='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
              </span>
            </div>
            <p className='md:block hidden'>Available for freelance work</p>
          </div>
          <img src='https://s6.uupload.ir/files/image_kpou.png' alt='' className='animate-bounce sm:w-[80px] sm:h-[80px] w-[70px] h-[70px]' />
        </span>
      </div>
    </div>
  );
};

export default Hero;
