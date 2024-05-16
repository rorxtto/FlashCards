import PropTypes from "prop-types";

const Botao = ({ botao, estilo }) => {
  return (
    <button style={estilo}>{botao}</button>
  )
}

Botao.propTypes = {
  botao: PropTypes.string.isRequired,
  estilo: PropTypes.object, // Objeto de estilo
};

export default Botao;