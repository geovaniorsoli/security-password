//component
import Input from "../components/Input";
//funcao
import { checkPassword } from "../function/password"
//state
import { useState, useEffect } from "react";
//style
import styles from '../styles/main.module.css'

export default function app() {

  const [password, setPassword] = useState('')

  const passwordRequire = checkPassword(password)
  const fullRequire = Object.values(passwordRequire).filter(Boolean).length
  const LevelsPassword = ['Muito Fraca', 'Fraca', 'Media', 'Forte', 'Muito Forte', 'Perfeita']
  const ResultLevelPassword = LevelsPassword[fullRequire]
  return (

    <>
    <div className={styles.containerGlobal}>
      <Input password={password} setPassword={setPassword} />

        <p className={styles.ResultPassword}>Força da Senha: {ResultLevelPassword}</p>



      <div className={styles.containerStart}>
        <div className="request"> 
        <ul>
          {Object.entries(passwordRequire).map(([key, value]) => (

            <p key={key} style={{ color: value ? 'green' : 'red' }}>
              {key}
            </p>

          ))}
        </ul>
        </div>
      </div>

        <h3 className={styles.subtitle}>
          Esse site não possui nada com que possa salvar sua senha, é serio.
        </h3>
      
      </div>
    </>
  )

}