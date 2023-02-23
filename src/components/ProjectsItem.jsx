import React from 'react'

const ProjectsItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#CD8668] to-[#374a5c]'>
     <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
     <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <a href="/">
            <p className='text-center p-3 bg-white text-gray-700 rounded-lg font-bold cursor-pointer text-lg' >More</p>
        </a>
     </div>
    </div>
  )
}

export default ProjectsItem
