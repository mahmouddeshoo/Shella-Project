import './css/style.css';
import logo from './img/Shella logo.png';
import Twitter from './img/twitter.png';
import Instagram from './img/instagram.png';
import Linkedin from './img/linkedin.png';
import Facebook from './img/facebook.png';



function Footer(){
    return(
        <section>
            <div className={""}>
                <div>
                    <div><img src={logo} alt={"Shella Logo"} /></div>
                    <div>
                        <p>شلة منشأة سعودية مرخصة من قبل وزارة التجارة لممارسة النشاط التسويقي للغير و بيع التجزئة والجملو للافراد والمنشئات بسجل تجاري رقم <span>1009128112</span> برأس مال 50 مليون ريال سعودي</p>
                    </div>
                </div>
                <div>
                    <p>الشركة </p>
                    <div>
                        <ul>
                            <li>عن شلة</li>
                            <li>الوظائف</li>
                            <li>اسئلة واجوبة</li>
                            <li>الشريعة الاسلامية</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>القانونية</p>
                    <div>
                        <ul>
                            <li>شروط قيدها</li>
                            <li>سياسة الخصوصية</li>
                            <li>الشروط والاحكام</li>
                            <li>الإبلاغ عن المخالفات</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>التطبيق</p>
                    <div>
                        <ul>
                            <li>الإنضمام كعامل توصيل</li>
                            <li>الانضمام كشريك تاجر</li>
                            <li>الانضمام كمنفذ خدمة</li>
                            <li>الانضمام كمستثمر معنا</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>خدمة العملاء</p>
                    <div>
                        <ul>
                            <li>اقرارات العملاء</li>
                            <li>تواصل معنا</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <div>
                    <apan>C</apan>
                    <p>ShellaKsa 2024</p>
                </div>
                <div>
                    <a href={"https://www.google.com/"} rel={""}><img src={Twitter} alt={"Twitter"} /></a>
                    <a href={"https://www.google.com/"} rel={""}><img src={Instagram} alt={"Instagram"} /></a>
                    <a href={"https://www.google.com/"} rel={""}><img src={Linkedin} alt={"Linkedin"} /></a>
                    <a href={"https://www.google.com/"} rel={""}><img src={Facebook} alt={"Facebook"} /></a>
                </div>
            </div>

        </section>
    );
}
export default Footer;