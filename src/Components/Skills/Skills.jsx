const Skills = () => {
  return (
    <div className='flex flex-col md:flex-row mx-2 my-4 text-white justify-between gap-4 md:gap-0'>
      {/* User Experience (UX) Design */}
      <div className='md:w-1/2 w-full bg-gradient-to-tr from-indigo-800 to-violet-900 rounded-2xl md:mr-4'>
        <h1 className='leading-relaxed font-semibold text-2xl md:text-3xl m-6 my-8'>
          User Experience (<span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">
          UX
          </span>) Design
        </h1>
        <p className='text-sm font-light m-6 md:mt-16 mt-4 leading-loose'>
          I possess a diverse range of skills in the field of User Experience (UX) design, allowing me to create impactful and user-centered digital experiences.
          With a strong foundation in design principles and a deep understanding of user behavior, I am adept at crafting seamless interactions that delight users and meet business goals.
        </p>
        <div>
          <button className='flex flex-row gap-2 mx-6 my-4 py-4 px-6 rounded-xl border border-white/50 hover:border-violet-700 hover:bg-white hover:text-black transition duration-300'>
            <span>More</span>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* User Interface (UI) Design */}
      <div className='md:w-1/2 w-full bg-gradient-to-tr from-indigo-900 to-violet-900 rounded-2xl md:ml-4'>
        <h1 className='leading-relaxed font-semibold text-2xl md:text-3xl m-6 my-8'>
          User Interface (<span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold">
          UI
          </span>) Design
        </h1>
        <p className='text-sm font-light m-6 md:mt-16 mt-4 leading-loose'>
          I possess a comprehensive skillset in User Interface (UI) design, enabling me to craft visually appealing and effective digital interfaces that enhance user experiences.
          With a keen eye for aesthetics and a deep understanding of design principles, I excel at translating concepts into captivating visual designs that resonate with users.
        </p>
        <div>
          <button className='flex flex-row gap-2 mx-6 my-4 py-4 px-6 rounded-xl border border-white/50 hover:border-violet-700 hover:bg-white hover:text-black transition duration-300'>
            <span>More</span>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
