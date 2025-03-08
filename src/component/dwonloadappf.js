import './css/style.css';
import appStore from './img/Badge1.png';
import googlePlay from './img/Badge2.png';
import appGallery from './img/Badge3.png';
import godotIcon from './img/godot.png';

function AppDownload() {
    return (
        <section className="underhero slideUp">
            <div className="under-hero-right">
                <h2>تطبيق الجوال</h2>
                <h3>حمل تطبيق شلة على جوالك واطلب بضغطة زر</h3>

                <div className="under-hero-right-links">
                    <a href="/" rel="noopener noreferrer" aria-label="تحميل من App Store">
                        <img src={appStore} alt="App Store Badge" />
                    </a>
                    <a href="/" rel="noopener noreferrer" aria-label="تحميل من Google Play">
                        <img src={googlePlay} alt="Google Play Badge" />
                    </a>
                    <a href="/" rel="noopener noreferrer" aria-label="تحميل من App Gallery">
                        <img src={appGallery} alt="App Gallery Badge" />
                    </a>
                </div>
            </div>
            <div className="under-hero-left">
                <img src={godotIcon} alt="Godot Engine Icon" className="under-hero-left-img2" />
            </div>
        </section>
    );
}

export default AppDownload;

