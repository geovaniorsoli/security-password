import styles from '../styles/main.module.css'
export default function Input({ password, setPassword }) {

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <>

            <div  className={styles.container}>
                <div  className={styles.title}>
                    <h1>senha segura</h1>
                </div>

                <input type="text"
                    value={password}
                    placeholder="Digite sua senha."
                    onChange={handlePasswordChange}
                    className={styles.input}
                />

               
            </div>
        </>

    )
}