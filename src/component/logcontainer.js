import './css/style.css';
import marketJob from './img/marketeq_job.png';
import carBox from './img/bx_car.png';
import moneyBag from './img/solar_money-bag-linear.png';
import employee from './img/clarity_employee-line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'




function RegesterContainer(){
    return(
        <section className={"register-container"}>
            <div className={"register-container-gray1"}>
                <div className={"register-container-img"}>
                    <img src={marketJob} alt={"marketJob"} />
                </div>
                {/* store & resturant part */}
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل مطعمك او متجرك</p>
                        <p className={"register-container-title-2"}>قم بتوسعة نشاطك بالوصول إلى عملاء اكثر , معنا</p>
                    </div>
                    <div className={"register-container-title-link"}>
                    <span><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '15px', color: '#2D3633'}}/></span>
                        <a href={"/"} rel={""}>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-white1"}>
                <div className={"register-container-img"}>
                    <img src={carBox} alt={" Car Box"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل كمندوب توصيل </p>
                        <p className={"register-container-title-2"}>كن مندوب توصيل واكسب دخلآ إضافيآ معنا , سجل الآن!</p>
                    </div>
                    <div className={"register-container-title-link"}>
                    <span><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '15px', color: '#2D3633'}}/></span>
                        <a href={"/"} rel={""}>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-white2"}>
                <div className={"register-container-img"}>
                    <img src={moneyBag} alt={"Money Bag"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل الآن كمستثمر في شلة</p>
                        <p className={"register-container-title-2"}>قم بالاستثمار في شركتنا وتعرف على مزايا الاستثمار</p>
                    </div>
                    <div className={"register-container-title-link"}>
                    <span><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '15px', color: '#2D3633'}}/></span>
                        <a href={"/"} rel={""}>سجل الآن</a>
                    </div>
                </div>
            </div>
            <div className={"register-container-gray2"}>
                <div className={"register-container-img"}>
                    <img src={employee} alt={"employee"} />
                </div>
                <div className={"register-container-title"}>
                    <div className={"register-container-title-p"}>
                        <p className={"register-container-title-1"}>سجل كمقدم خدمة</p>
                        <p className={"register-container-title-2"}>سجل حسب مهنتك معنا واكسب دخلآ اضافيآ معنا</p>
                    </div>
                    <div className={"register-container-title-link"}>
                    <span><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '15px', color: '#2D3633'}}/></span>
                    <a href={"/"} rel={""}>سجل الآن</a>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default RegesterContainer;