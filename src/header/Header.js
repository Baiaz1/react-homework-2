import classes from "./header.module.css";


function Header(){
    return(
        <div>
            <ul className={classes.header}>
                <li>Главная</li>
                <li>О нас</li>
                <li>Наши проекты</li>
                <li>Поступление в школу</li>
                <li>Школьная жизнь</li>
            </ul>
        </div>
    )
}

export default Header;

