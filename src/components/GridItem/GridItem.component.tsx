import { Level } from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png' 

type Props = {
     item: Level
}


const GridItem = ({item}: Props)=> {
     return(
          <div className={styles.main} style={{ backgroundColor:item.color}}>
             <div className={styles.gridIcon}>
               {/* {item.icon === 'up' &&  <img src={upImage} alt="imagem Up" width={30} /> } */}
               <img src={item.icon === 'down'? downImage : upImage} alt="imagem Down" width={30} />
             </div>
              {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m² </div>

              } 

             <div className={styles.gridTitle}>{item.title}</div>
             <div className={styles.gridInfo}>
               <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
               </>
             </div>
          </div>

         )
}

export default GridItem;