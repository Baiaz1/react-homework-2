import classes from "./Footer.module.css";


function Footer(){
    return(
       <footer className={classes.main}>
<ul>
    <li>г.Бишкек, ул.Каралаева 2/2</li>
    <li>+996 500 292 005 <br/>  +996 776 292 005</li>
    <li>bayaz.orozbekov@gmail.com</li>
</ul>
       </footer>

    )
}

export default Footer;