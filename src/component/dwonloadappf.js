import './css/style.css'
import appStore from './img/Badge1.png'
import googlePlay from './img/Badge2.png'
import appGallery from './img/Badge3.png'
import iphoneHand from './img/iPhone 12 Pro (Wooden Hands).png'



function AppDwonload(){
    return(
        <section classname={"under-hero"}>
            <div className={"under-hero-right"}>
                <h1>تطبيق الجوال </h1>
                <h3>حمل تطبيق شلة على جوالك واطلب بضغطة زر</h3>
                
                <div>
                    <button><img src={appStore}  alt={"Appstore"}/></button>
                    <button><img src={googlePlay}  alt={"GooglePlay"}/></button>
                    <button><img src={appGallery}  alt={"Appgallery"}/></button>
                </div>
            </div>
            <div className={"under-hero-left"}>
                <img src={iphoneHand}  alt={"iPhone 12 Pro (Wooden Hands)"}/>
                
            </div>

        </section>
        
    );
}
export default AppDwonload;