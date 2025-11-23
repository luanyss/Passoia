//hooks são funções especiais do react;
//useState controla os estados de algo na interface
import { useState } from "react";
import "./style.scss"

//IMPORT DAS IMAGENS:
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";

import batom from "../../assets/kit_3_batom_em_bala_oceane_edition_1 1";
import gloss from "../../assets/gloss";
import batomLiquido from "../../assets/kit_batom_liquido_vermelho_batom_liquido_nude_batom_liquido_rosa_oceane_edition_1 1";
import avaliacao from "../../assets/five-stars-rating-icon-png 2";

import bolaVermelho from "../../assets/Ellipsevermelho";
import bolaRosa from "../../assets/Ellipserosa";
import bolaMarrom from "../../assets/Ellipsemarrom";
import bolaBase from "../../assets/Ellipsebase";

function Lancamentos() {
    //estado inicial
    //cor e variavel inicial, setCor a função atualizadora
    const [cor, setCor] = useState(vermelho);

    return (
        <section className="Principal" id="lancamento">
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            <div className="lançamentos">
                <div className="container-lançamentos">
                    <figure>
                        <img src={Batons} alt="Tipos de batons" />
                        <img src={Batom} alt="Batons com tampa" />
                        <img src={BatonsSemTampa} alt="Batons sem tampas" />
                    </figure>
                </div>

                <img className="modelo" src={cor} alt="Teste do Batom" />

                <section className="vitrine">
                    <img src={Estrelas} alt="estrelas de avaliação" />
                    <h4>Matte Premium</h4>
                    <p>Cores Disponíveis</p>
                    <div className="cores">
                        <img src={circAzul} onMouseOver={() => setCor(azul)} alt="batom azul" />
                        <img src={circVermelho} onMouseOver={() => setCor(vermelho)} alt="batom vermelho" />
                        <img src={circMarrom} onMouseOver={() => setCor(marrom)} alt="batom marrom" />
                        <img src={circBase} onMouseOver={() => setCor(base)} alt="batom nude" />
                    </div>
                    <h4>Descrição</h4>
                    <p>
                        O Batom Matte possui uma fórmula inovadora desenvolvida para
                        entregar o máximo de cor na primeira aplicação com um deslize suave
                        e macio. Tem acabamento matte aveludado e manteiga de manga que
                        ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
                        na hidratação dos lábios, textura fina e macia que não pesa nos
                        lábios.
                    </p>
                </section>
            </div>
            <h2 id="novidade">Novidades para você</h2>
        </section>


    )

}
export default Lancamentos;