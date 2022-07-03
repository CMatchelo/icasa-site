import React from 'react';
import './styles.css'
import BrasileiroSerieD from '../brasileiroSerieD/champ';
import Cearense2022 from '../cearense2022/cearense';

function Campeonatos() {

    return (
        <div className='campeonatosTable'>
            <div className='campeonatoBox'>
                <span className='campeonatoTitle'>Brasileiro Serie D 2022</span>
                <BrasileiroSerieD />
            </div>
            <div className='campeonatoBox'>
                <span className='campeonatoTitle'>Copa do Brasil 2022</span>
                <br/>
                <span className='campeonatoSubTitle'>Fase Pre-eliminar</span>
                <br/>
                <span className='campeonatoMatch'>Icasa 0 x 0 Tombense</span>
            </div>
            <div className='campeonatoBox'>
                <span className='campeonatoTitle'>Cearense 2022</span>
                <Cearense2022 />
            </div>

        </div>
    )
}

export default Campeonatos;