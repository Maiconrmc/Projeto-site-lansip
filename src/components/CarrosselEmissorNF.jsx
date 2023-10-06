import React, { Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import EmissorNF1 from '../arquivos/imgs/emissor/01.png';
import EmissorNF2 from '../arquivos/imgs/emissor/02.png';
import EmissorNF3 from '../arquivos/imgs/emissor/03.png';
import EmissorNF4 from '../arquivos/imgs/emissor/04.png';

function CarrosselEmissorNF(props){
    const tooltipEmissorNF1 = <Tooltip id='EmissorNF1'><span>Softphone VoiP</span></Tooltip>
    const tooltipEmissorNF2 = <Tooltip id='EmissorNF2'><span>Interface Grafica</span></Tooltip>
    const tooltipEmissorNF3 = <Tooltip id='EmissorNF3'><span>Monitor de filas</span></Tooltip>
    const tooltipEmissorNF4 = <Tooltip id='EmissorNF4'><span>Relatórios</span></Tooltip>

    return (
        <>
        <Carousel fade variant='dark'>
            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipEmissorNF1}>
                    <img className="d-block w-100 img-fluid cursorPointer" src={EmissorNF1} 
                        alt='Emissor Nota Fiscal' onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipEmissorNF2}>
                    <img src={EmissorNF2} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Tela de clientes" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipEmissorNF3}>
                    <img src={EmissorNF3} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Tela de produtos" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>
            
            <Carousel.Item>
                <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={tooltipEmissorNF4}>
                    <img src={EmissorNF4} className="d-block w-100 img-fluid cursorPointer" 
                        alt="Tela de relatórios" onClick={props.click} />
                </OverlayTrigger>
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default CarrosselEmissorNF;