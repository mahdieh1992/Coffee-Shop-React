
import '../../App.css'
import Products from './Products'


export default function Main({dark}) {

    return (
        <main>
            <svg className="hidden">
                <symbol id='curve' viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" fill="#F3F4F6" />
                </symbol>


            </svg>
            <section className="bg-cover bg-Home-Mobile xs:aspect-[2/1] md:aspect-auto h-[200px] md:min-h-screen  md:bg-Home-Desktop bg-[center_top]  bg-no-repeat ">
                <div className="container  overflow-y-hidden relative h-full flex justify-end items-center ">
                    <div className="text-white">
                        <h2 className=" text-2xl md:text-6xl/[62px] font-Morabba-Light font-bold mb-2 ">قهوه عربیکا تانزانیا</h2>
                        <span className="text-xl md:text-5xl block">یک فنجان بالانس !</span>
                        <span className="block w-[100px]  h-px lg:h-0.5 bg-orange-300 my-8"></span>
                        <p className="max-w-[201px] md:max-w-[400px] text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>

                    </div>
                    <div className="circle absolute flex items-center justify-center w-[203px] h-[203px] translate-y-2/4 text-white/25 ">
                        <div className="circle w-[145px] h-[145px] flex items-center justify-center  text-white/50 ">
                            <div className="circle w-[90px] h-[90px]  text-white/50  ">

                            </div>
                        </div>
                    </div>

                </div>
                <svg className="absolute w-[100px] h-[22px] bottom-0 left-0 right-0 mx-auto text-gray-100 dark:text-gray-700">
                    <use href="#curve"></use>
                </svg>


            </section>

            <section className={`${dark ? 'product' : 'products'}`}>
                <Products />
            </section>

        </main>
    )

}