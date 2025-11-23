import "./footer.scss";

function Footer() {
    return (
        <footer>
            <nav>
                <h4>ATENDIMENTO</h4>
                <ul>
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
            </nav>
            <div className="pagamento">
                <h4>FORMAS DE PAGAMENTO</h4>
                <figure>
                    <img src="mastercard.png" alt="mastercard" />
                    <img src="visa.png" alt="visa" />
                    <img src="pix.png" alt="pix" />
                    <img src="boleto.png" alt="boleto" />
                </figure>
            </div>
            <div className="redes">
                <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                <figure>
                    <img src="instagram.png" alt="Instagram" />
                    <img src="facebook.png" alt="Facebook" />
                    <img src="youtube.png" alt="Youtube" />
                    <img src="twitter.png" alt="Twitter" />
                </figure>
            </div>
        </footer>
    );
}

export default Footer