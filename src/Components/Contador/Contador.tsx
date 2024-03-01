import { useState } from "react";

const Contador = () => {
    const [time, setTime] = useState<string>();

    function updateCountdown() {
        const date = new Date();
        let year = date.getFullYear();
        const christmasDate = new Date(`March 31, ${year} 00:00:00`).getTime();
        const now = new Date().getTime();
        const timeRemaining = christmasDate - now;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTime(`${days}d - ${hours < 10 ? '0' : ''}${hours}h - ${minutes < 10 ? '0' : ''}${minutes}m - ${seconds < 10 ? '0' : ''}${seconds}s`);
        } else {
            setTime('Veio no código ver o que vai acontecer, né? Se farei o último commit próximo ao fim do contador hahahaha!!');
        }
    }

    setInterval(updateCountdown, 1000);

    return (
        <h1>
            {time}
        </h1>
    )
}

export default Contador;