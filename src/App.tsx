
import { useState } from 'react';
import styles from './App.module.css';
import LOGO from './assets/powered.png'
import { calculateImc, Level, levels } from './helpers/imc'
import  GridItem  from './components/GridItem/GridItem.component'

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

   const handleCalculateButton = ()=> {
        if(heightField && weightField){
        const showItem: Level | null = calculateImc(heightField, weightField)
           setToShow(showItem);
        }else {
          alert('Digite todos os campos')
        }
   }

  return (
    <div className={styles.main}>
     <header className={styles.headerContainer}>
       <div>
          <img src={LOGO} alt="Logo do site" width={70} />
       </div>
     </header>
     <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro <br/>
           adotado pela Organização Mundial de Saúde para <br/>
           calcular o peso ideal de cada pessoa.
          </p>
          <input 
             type="number"
             placeholder='Digite a sua altura Ex: 1.5 (em metros)'
             value={heightField > 0 ? heightField: ''}
             onChange={e => setHeightField(parseFloat(e.target.value))}
            />
            <input 
             type="number"
             placeholder='Digite a seu peso Ex: 75.3 (em kg)'
             value={weightField > 0 ? weightField: ''}
             onChange={e => setWeightField(parseFloat(e.target.value))}
            />
            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          { !toShow  &&
           <div className={styles.grid}>
                {levels.map((itens, key)=> 
                  <GridItem key={key} item={itens}/>
                ) }
            </div>
            }
            {
              toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow}>
                  <GridItem item={toShow}/>
                </div>
              </div>
            }
        </div>
     </div>
    </div>
  )
}

export default App
