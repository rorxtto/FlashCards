import "./LandingPage.css";
import Botao from "../Botao/Botao";

const LandingPage = () => {
  const estiloBotao = {
    width: "8rem",
    height: "3.75rem",
    background:
      "conic-gradient(from 90deg at 50% 100%, #FFFFFF 0deg, #FFFFFF 360deg)",
    boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
    borderRadius: "80px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "22px",
    lineHeight: "33px",
    letterSpacing: "0.02em",
    color: "#5B5B5B",
    border: "none",
    margin: "20px",
    marginRight: "0px",
  };

  const estiloBotao1 = {
    width: "8rem",
    height: "3.75rem",
    background: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
    borderRadius: "80px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "33px",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    border: "none",
    margin: "20px",
  };

  const estiloBotao2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 30px",
    gap: "10px",
    width: "192px",
    height: "49px",
    background: "#C7F2ED",
    borderRadius: "30px",
    border: "none",
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#03451E',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  }

  return (
    <div>

      <section className="topSection">
        <header>
          <nav
            style={{ backgroundColor: "#81DAD0" }}
            className="navbar navbar-expand-lg"
          >
            <div className="container-fluid d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "48px",
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                    padding:"20px"
                  }}
                >
                  Logo FlashCards
                </h1>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                  <a className="nav-link" href="#">
                    Sobre
                  </a>
                  <a className="nav-link" href="#">
                    Contato
                  </a>
                  {/* Passando o estiloBotao como prop para ambos os botões */}
                  <Botao
                    className="button-Page"
                    botao="Login"
                    estilo={estiloBotao}
                  />
                  <Botao
                    className="button-Page"
                    botao="Cadastrar"
                    estilo={estiloBotao1}
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="container-top" >
          <div className="wrap-container-top" >
            <h1 className="title-container-top"><span className="highlight-container-top">Sua aprovação</span> agora é muito mais fácil</h1>
            <p className="text-container-top">Preparação Dinâmica, Avaliação Interativa: Sua Jornada para o Revalida!</p>
            <Botao botao="Acessar" estilo={estiloBotao2}/>
          </div>
        </div>
      </section>















      <section className="topSection1"></section>
    </div>
  );
};

export default LandingPage;
