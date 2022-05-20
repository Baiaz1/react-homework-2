import classes from "./BottomHeader.module.css";


function BottomHeader(){
    return(
        <div className={classes.header}>
      <ul className={classes.bottom}>
          <li>Главнвя</li>
          <li>Поступление в школу</li>
      </ul>
        </div>
    )
}

export default BottomHeader;