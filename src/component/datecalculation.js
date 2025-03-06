  import datePart from './img/date 1.png'

  function DateCalculation(){
        return( 
        <section className={"date-calculation"}>
            <div className={"date-calculation-part1"}>
                <div>
                    <h1>مع قيدها </h1>
                    <h2>لا تحسب كم باقي على الراتب </h2>
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