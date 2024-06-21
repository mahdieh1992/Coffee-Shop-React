

export default function Nav({ id, title,subMenu }) {
   
    return (
        <>
            {/* Link Item */}
            <li  className={`${id==1 ? 'text-orange-200 font-bold' :'text-gray-300 hover:text-orange-300  relative group   '}`}>
            {subMenu &&(
             
               
                <div className="bg-white absolute p-6 w-52  text-base dark:bg-zinc-700 text-zinc-700  dark:text-white child:leading-[56px] tracking-normal rounded-2xl border-t-[3px] border-orange-300 child:inline-block child-hover:text-orange-300 top-full opacity-0 group-hover:opacity-100  transition-all ">

                    {subMenu.map(subMenu=>(
                        <a href="#" key={subMenu.id}>{subMenu.title}</a>
                    ))}
                    
                </div>
              
            )}
             
           <a href="">{title}</a></li>

      
        </>
    )
}