export const BoasVindas = () => {

    function getBoasVindas() {
        const date = new Date();
        let horasDoDia = date.getHours()

        if (horasDoDia <= 11) {
            return "Bom dia, Rafael!"
        } else if (horasDoDia >= 12 && horasDoDia < 18) {
            return "Boa tarde, Rafael!"
        } else {
            return "Boa noite, Rafael!"
        }
    }

    setInterval(() => {
        getBoasVindas()
    }, 10000);

    return <h1>{getBoasVindas()}</h1>
}