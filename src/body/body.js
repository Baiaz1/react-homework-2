import classes from "./body.modules.css";


function Body(){
    return(
<div className={classes.main}>
     <h1>Поступление в школу</h1>
   <p>
       Открыта запись на тестирование kmsm - кыргызско шведскую математическую школу на 2021-2022 учебный год. <br/>
       Набор ведется в 1-9 классы <br/>
       Ученики принимаются по результатам тестирования. Школа оставляет за собой право отказать в приеме. <br/>
       Записатся на тестирование вы можете по <a href="#">cсылке</a> <br/>
       Обратная связь: <br/>
       +996 (500) 292 005      +996 (776) 292 005 <br/>
       ул.Каралиева 2/2 (район Ботанического сада)

   </p>

</div>
    )
}

export default Body;

