import './css/style.css';
import logo from './img/Shellalogo.png';
import Twitter from './img/twitter.png';
import Instagram from './img/instagram.png';
import Linkedin from './img/linkedin.png';
import Facebook from './img/facebook.png';

function Footer() {
    return (
        <section className="footer slideUp">
            <div className="footer-logo-section">
                <div className="footer-logo">
                    <div className="footer-logo-img">
                        <img src={logo} alt="Shella Company Logo" />
                    </div>
                    <div className="footer-logo-title">
                        <p>
                            شلة منشأة سعودية مرخصة من قبل وزارة التجارة لممارسة النشاط التسويقي للغير و بيع التجزئة والجملو للافراد والمنشئات بسجل تجاري رقم <span>1009128112</span> برأس مال 50 مليون ريال سعودي
                        </p>
                    </div>
                </div>
                <div className="footer-list-menu">
                    <p>الشركة</p>
                    <div className="footer-list-item">
                        <ul>
                            <a href="/" rel="noopener noreferrer"><li>عن شلة</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الوظائف</li></a>
                            <a href="/" rel="noopener noreferrer"><li>اسئلة واجوبة</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الشريعة الاسلامية</li></a>
                        </ul>
                    </div>
                </div>
                <div className="footer-list-menu">
                    <p>القانونية</p>
                    <div className="footer-list-item">
                        <ul>
                            <a href="/" rel="noopener noreferrer"><li>شروط قيدها</li></a>
                            <a href="/" rel="noopener noreferrer"><li>سياسة الخصوصية</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الشروط والاحكام</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الإبلاغ عن المخالفات</li></a> 
                        </ul>
                    </div>
                </div>
                <div className="footer-list-menu">
                    <p>التطبيق</p>
                    <div className="footer-list-item">
                        <ul>
                            <a href="/" rel="noopener noreferrer"><li>الإنضمام كعامل توصيل</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الانضمام كشريك تاجر</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الانضمام كمنفذ خدمة</li></a>
                            <a href="/" rel="noopener noreferrer"><li>الانضمام كمستثمر معنا</li></a>
                        </ul>
                    </div>
                </div>
                <div className="footer-list-menu">
                    <p>خدمة العملاء</p>
                    <div className="footer-list-item">
                        <ul>
                            <a href="/" rel="noopener noreferrer"><li>اقرارات العملاء</li></a>
                            <a href="/" rel="noopener noreferrer"><li>تواصل معنا</li></a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="copyright">
                    <div className={"copy-right"}><span></span><span className="letter">C</span></div>
                    <p>ShellaKsa 2024</p>
                </div>
                <div className="footer-social">
                    <a href="/" rel="noopener noreferrer" aria-label="Twitter">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="/" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="/" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src={Linkedin} alt="LinkedIn" />
                    </a>
                    <a href="/" rel="noopener noreferrer" aria-label="Facebook">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
