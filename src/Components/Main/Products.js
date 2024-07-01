

export default function Products(){
    return (
        <div className="container">
            <svg className="hidden">
            <symbol id="chevron-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </symbol>

            </svg>
            <div className="product-header pt-48">
                <div>
                    <h5 className="product-title">جدیدترین محصولات</h5>
                    <h4 className="product-subtitle">فرآوری شده از دانه قهوه</h4>
                </div>
                <a className="product-link">مشاهده همه محصولات
                    <svg className="w-5 h-5">
                        <use href="#chevron-left"></use>
                    </svg>
                </a>
            </div>

        </div>
    )

}