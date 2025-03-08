import './css/style.css';
import datePart from './img/date 1.png';

function DateCalculation() {
    return( 
        <section className="date-calculation">
            <div className="date-calculation-part1 slide-right">
                <div>
                    <h2>مع قيدها</h2>
                    <h3>لا تحسب كم باقي على الراتب</h3>
                    <p>شوف كم ناقصك في بيتك مقاضي واحنا نعطيك علي الراتب!</p>
                    <a href="/" rel="noopener noreferrer" aria-label="سجل الآن للحصول على المزيد من التفاصيل">سجل الآن</a>
                </div>
            </div>
            {/* Calendar image */}
            <div className="date-calculation-part2 slide-left">
                <img src={datePart} alt="تقويم يوضح جزء من التاريخ" />
            </div>
        </section>
    );
}

export default DateCalculation;
