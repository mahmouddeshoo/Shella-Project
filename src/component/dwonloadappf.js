import './css/style.css';
import appStore from './img/Badge1.png';
import googlePlay from './img/Badge2.png';
import appGallery from './img/Badge3.png';

import godotIcon from './img/godot.png';


function AppDwonload(){
    return(
        <section className={"underhero"}>
            <div className={"under-hero-right"}>
                <h2>تطبيق الجوال </h2>
                <h3>حمل تطبيق شلة على جوالك واطلب بضغطة زر</h3>
                
                <div className={"under-hero-right-links"}>
                <a href={"https://www.google.com/"} rel={""}><img src={appStore} alt={"App Store"} /></a>
                <a href={"https://www.google.com/"} re={""}><img src={googlePlay} alt={"Play Store"} /></a>
                <a href={"https://www.google.com/"} rel={""}><img src={appGallery} alt={"App Gallery"} /></a>
                </div>
            </div>
            <div className={"under-hero-left"}>
                <img src={godotIcon}  alt={"godot icon"} className={"under-hero-left-img2"}/>
            </div>

        </section>
        
    );
}
export default AppDwonload;