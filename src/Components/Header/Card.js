




export default function Card() {

    return (
        <>

            {/* Header Card */}
            <div className="text-xs flex items-center justify-between">
                <span className="text-gray-300 ">مورد 1 </span>
                <a className="text-orange-300 flex">
                    <span>مشاهده سبد خرید</span>
                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </a>
            </div>

            {/* Body Card */}
           <div className="max-h-56 overflow-y-scroll">
                <div className="flex border-b gap-x-2.5 mt-5 border-gray-300">
                        <img className="w-30 h-30" src="images/products/p1.png"></img>
                        <div className="flex flex-col justify-between">
                            <h4 className="text-zinc-700 text-base font-DanaMedium dark:text-white">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <div className="mt-6">
                                <span className="block text-teal-600 dark:text-emerald-500 text-xs ">
                                    14.500 تومان تخفیف
                                </span>
                                <div className="text-zinc-700 dark:text-white text-xl font-DanaBold mb-6">
                                175,000
                                    <span className="text-sm dark:text-white"> تومان </span>
                                </div>
                            </div>
                        </div>


                 </div>
            </div>

            {/* Footer Card */}
            <div className="flex mt-4 justify-between">
                <div>
                    <span className="text-gray-300  text-xs">مبلغ پرداخت</span>
                    <div className="text-zinc-700 dark:text-white text-xl font-DanaBold">
                    350000
                        <span className="text-xs dark:text-white"> تومان </span>
                    </div>
                </div>
                <a className="w-36 h-14 bg-teal-600 dark:bg-emerald-500 text-white flex items-center justify-center rounded-xl">
                    ثبت سفارش
                </a>
            </div>


        </>
    )
}