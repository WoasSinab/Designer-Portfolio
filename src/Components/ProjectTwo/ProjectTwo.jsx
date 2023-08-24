const ProjectTwo = () => {
  return (
    // Project one 1
    <div className='flex md:flex-row flex-col-reverse bg-Two mx-2 my-8 rounded-2xl text-white/90'>
      {/* Contents  */}
      <div className='md:w-1/2 flex flex-col justify-between w-full'>
        <div className='m-6'>
          <p className='text-white/60 mt-4'>UI | UX Design</p>
          <h1 className='font-semibold text-5xl my-6'>Golestan ReDesign</h1>
          <div className='flex gap-2 my-4 text-xs'>
            <button className='p-4 border border-white py-2 rounded-full hover:bg-purple-600 hover:border-purple-500 transition duration-300 hover:text-white'>Web Design</button>
            <button className='p-4 border border-white py-2 rounded-full hover:bg-purple-600 hover:border-purple-500 transition duration-300 hover:text-white'>Uneversity</button>
          </div>
        </div>

        <div className='m-6'>
          <p className='leading-loose md:pr-32'>At our design studio, we are excited to share our recent endeavor in revamping the User Interface (UI) and User Experience (UX) design of the Sistan and Baluchestan University website. Our team embarked on this project with a dedication to enhancing the online journey of students, faculty, and visitors</p>
          <button className='p-4 border border-white py-3 rounded-xl my-8 hover:bg-purple-600 hover:border-purple-500 transition duration-300 hover:text-white'>See Project</button>
        </div>
      </div>

      {/* img  */}
      <div className='md:w-1/2 flex md:justify-end w-full'>
        <img src='https://s6.uupload.ir/files/image3_tlh.png' alt='' className='p-8' />
      </div>
    </div>
  );
};

export default ProjectTwo;
