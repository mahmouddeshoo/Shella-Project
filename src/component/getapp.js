import './css/style.css'
import appStore from './img/Badge1.png';
import playStore from './img/Badge2.png';
import appGallery from './img/Badge3.png';



function GetApp(){
    return(
        <section>
            <div>
                <p>حمل التطبيق</p>
                <p>احصل على كل ما تحتاجه من المطاعم والسوبر ماركت والمزيد مع الخدمات المميزة</p>
            </div>
            <div>
                <a href={"https://www.google.com/"} rel={""}><img src={appStore} alt={"App Store"} /></a>
                <a href={"https://www.google.com/"} re={""}><img src={playStore} alt={"Play Store"} /></a>
                <a href={"https://www.google.com/"} rel={""}><img src={appGallery} alt={"App Gallery"} /></a>
            </div>
        </section>
    );
}
export default GetApp;