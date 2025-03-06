import './css/style.css';
import logo from './img/Shella logo.png';
import Twitter from './img/twitter.png';
import Instagram from './img/instagram.png';
import Linkedin from './img/linkedin.png';
import Facebook from './img/facebook.png';



function Footer(){
    return(
        <section className={"footer"}>
            <div className={"footer-logo-section"}>
                <div className={"footer-logo"}>
                    <div className={"footer-logo-img"}><img src={logo} alt={"Shella Logo"} /></div>
                    <div className={"footer-logo-title"}>
                        <p>شلة منشأة سعودية مرخصة من قبل وزارة التجارة لممارسة النشاط التسويقي للغير و بيع التجزئة والجملو للافراد والمنشئات بسجل تجاري رقم <span>1009128112</span> برأس مال 50 مليون ريال سعودي</p>
                    </div>
                </div>
                <div className={"footer-list-menu"}>
                    <p>الشركة </p>
                    <div className={"footer-list-item"}>
                        <ul>
                            <a href={"/"} rel={""}><li>عن شلة</li></a>
                            <a href={"/"} rel={""}><li>الوظائف</li></a>
                            <a href={"/"} rel={""}><li>اسئلة واجوبة</li></a>
                            <a href={"/"} rel={""}><li>الشريعة الاسلامية</li></a>

                        </ul>
                    </div>
                </div>
                <div className={"footer-list-menu"}>
                    <p>القانونية</p>
                    <div className={"footer-list-item"}>
                        <ul>
                            <a href={"/"} rel={""}><li>شروط قيدها</li></a>
                            <a href={"/"} rel={""}><li>سياسة الخصوصية</li></a>
                            <a href={"/"} rel={""}><li>الشروط والاحكام</li></a>
                            <a href={"/"} rel={""}><li>الإبلاغ عن المخالفات</li></a> 
                        </ul>
                    </div>
                </div>
                <div className={"footer-list-menu"}>
                    <p>التطبيق</p>
                    <div className={"footer-list-item"}>
                        <ul>
                            <a href={"/"} rel={""}><li>الإنضمام كعامل توصيل</li></a>
                            <a href={"/"} rel={""}><li>الانضمام كشريك تاجر</li></a>
                            <a href={"/"} rel={""}><li>الانضمام كمنفذ خدمة</li></a>
                            <a href={"/"} rel={""}><li>الانضمام كمستثمر معنا</li></a>
                        </ul>
                    </div>
                </div>
                <div className={"footer-list-menu"}>
                    <p>خدمة العملاء</p>
                    <div className={"footer-list-item"}>
                        <ul>
                            <a href={"/"} rel={""}><li>اقرارات العملاء</li></a>
                            <a href={"/"} rel={""}><li>تواصل معنا</li></a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"footer-copyright"}>
                <div className={"copyright"}>
                    <span>C</span>
                    <p>ShellaKsa 2024</p>
                </div>
                <div className={"footer-social"}>
                    <a href={"/"} rel={""}><img src={Twitter} alt={"Twitter"} /></a>
                    <a href={"/"} rel={""}><img src={Instagram} alt={"Instagram"} /></a>
                    <a href={"/"} rel={""}><img src={Linkedin} alt={"Linkedin"} /></a>
                    <a href={"/"} rel={""}><img src={Facebook} alt={"Facebook"} /></a>
                </div>
            </div>

        </section>
    );
}
export default Footer;