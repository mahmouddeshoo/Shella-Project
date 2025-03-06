 import './css/style.css';
 import datePart from './img/date 1.png';

  function DateCalculation(){
        return( 
        <section className={"date-calculation"}>
            <div className={"date-calculation-part1"}>
                <div>
                    <h2>مع قيدها </h2>
                    <h3>لا تحسب كم باقي على الراتب </h3>
                    <p>شوف كم ناقصك في بيتك مقاضي واحنا نعطيك علي الراتب!</p>
                    <a href={"https://www.google.com/"} rel={"#"}>سجل الآن</a>
                </div>
            </div>
            <div className={"date-calculation-part2"}>
                <img src={datePart} alt={"Date Part"} />
            </div>
        </section>
        );

  }
  export default DateCalculation;