import useCountdown from "../../hooks/useCountdown ";

const Contador = () => {
    const time = useCountdown();

    return (
        <h1>
            {time}
        </h1>
    )
}

export default Contador;