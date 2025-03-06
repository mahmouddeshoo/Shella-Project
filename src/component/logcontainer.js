import './css/style.css';
import marketJob from './img/marketeq_job.png';
import carBox from './img/bx_car.png';
import moneyBag from './img/solar_money-bag-linear.png';
import employee from './img/clarity_employee-line.png';
import registerIcon from './img/registericon.png';


function RegesterContainer(){
    return(
        <section className={"register-container"}>
            <div className={"register-container-gray"}>
                <div className={"register-container-img"}>
                    <img src={marketJob} alt={"marketJob"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل مطعمك او متجرك</p>
                        <p className={"register-container-title-2"}>قم بتوسعة نشاطك بالوصول إلى عملاء اكثر , معنا</p>
                    </div>
                    <div className={"register-container-title-link"}>
                        <a href={"https://www.google.com/"} rel={""}><span><img src={registerIcon} alt={"register icon"} /></span>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-white"}>
                <div className={"register-container-img"}>
                    <img src={carBox} alt={" Car Box"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل كمندوب توصيل </p>
                        <p className={"register-container-title-2"}>كن مندوب توصيل واكسب دخلآ إضافيآ معنا , سجل الآن!</p>
                    </div>
                    <div className={"register-container-title-link"}>
                        <a href={"https://www.google.com/"} rel={""}><span><img src={registerIcon} alt={"register icon"} /></span>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-gray"}>
                <div className={"register-container-img"}>
                    <img src={moneyBag} alt={"Money Bag"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل الآن كمستثمر في شلة</p>
                        <p className={"register-container-title-2"}>قم بالاستثمار في شركتنا وتعرف على مزايا الاستثمار</p>
                    </div>
                    <div className={"register-container-title-link"}>
                        <a href={"https://www.google.com/"} rel={""}><span><img src={registerIcon} alt={"register icon"} /></span>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-white"}>
                <div className={"register-container-img"}>
                    <img src={employee} alt={"employee"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل كمقدم خدمة</p>
                        <p className={"register-container-title-2"}>سجل حسب مهنتك معنا واكسب دخلآ اضافيآ معنا</p>
                    </div>
                    <div className={"register-container-title-link"}>
                        <a href={"https://www.google.com/"} rel={""}><span><img src={registerIcon} alt={"register icon"} /></span>سجل الآن</a>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default RegesterContainer;