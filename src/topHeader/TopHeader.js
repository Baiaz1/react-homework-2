import classes from "./TopHeader.module.css";


function TopHeader(){
    return(
        <div className={classes.header}>
            <ul className={classes.top}>
                <li>+996 500 292 005</li>
                <li>+996 776 292 005</li>
                  <li> bayaz.orozbekov@gmail.com  </li>

            </ul>

            <button className={classes.btn}>Войти</button>
        </div>
    )
}

export default TopHeader;