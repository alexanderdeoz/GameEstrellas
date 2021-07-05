import React from 'react';
import { useEffect } from 'react';

export const Reiniciar = props => {
    const jugador = {}
    useEffect(() => {
        jugador.usuario = props.nuevoJugador
        if (props.gameStatus === 'lost') {
            jugador.puntuacion = 0
        } else {
            jugador.puntuacion = 1
        }
        props.onSubmit(jugador)
    }, [])
    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
            >
                {props.gameStatus === 'lost' ? '😭😭😢PERDISTE😢😭😭' : '😁😁😎 GANASTE     😎😁😁'}
            </div>
            <button className="btn" onClick={props.onClick}>Jugar de nuevo</button>
        </div>
    );
}