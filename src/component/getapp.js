import './css/style.css'
import appStore from './img/Badge1.png';
import playStore from './img/Badge2.png';
import appGallery from './img/Badge3.png';



function GetApp(){
    return(
        <section className={"getapp-section"}>
            <div className={"getapp-section-title"}>
                <h3>حمل التطبيق</h3>
                <p>احصل على كل ما تحتاجه من المطاعم والسوبر ماركت والمزيد مع الخدمات المميزة</p>
            </div>
            <div className={"getapp-section-links"}>
                <a href={"/"} rel={""}><img src={appStore} alt={"App Store"} /></a>
                <a href={"/"} re={""}><img src={playStore} alt={"Play Store"} /></a>
                <a href={"/"} rel={""}><img src={appGallery} alt={"App Gallery"} /></a>
            </div>
        </section>
    );
}
export default GetApp;