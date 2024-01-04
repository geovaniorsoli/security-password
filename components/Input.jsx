export default function Input({ password, setPassword }) {

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <>

            <div className="container">
                <div className="title">
                    <h1>senha segura</h1>
                </div>

                <input type="text"
                    value={password}
                    placeholder="Digite sua senha."
                    onChange={handlePasswordChange}
                    className="input"
                />

               
            </div>
        </>

    )
}