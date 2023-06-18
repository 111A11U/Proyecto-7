import { useParams } from "react-router-dom";
import "../stylesheets/Detail.css";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  let { nombre } = useParams();
  let { imagen } = useParams();  
  let { altura } = useParams();
  let { dimensiones } = useParams();
  let { material } = useParams();
  let { color } = useParams();
  let { linea } = useParams();

  const navigate = useNavigate();

  return (
    <>
    <nav></nav>
      <div className="detalles">
        
        <img
          src={require(`../images/${imagen}.jpg`)}
          alt={"foto de" + nombre}
        />
        <div className="contenido">
        <p>Altura: {altura}</p>
        <br></br>
        <p>Dimensiones: {dimensiones}</p>
        <br></br>
        <p>Material: {material}</p>
        <br></br>
        <p>Color: {color}</p>
        <br></br>
        <p>Línea: {linea}</p>
        <br></br>
        <a href="https://www.youtube.com/watch?v=QtPoQvBmns8" target="blank" class="boton">Ver video</a>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => navigate("/Listado")}> Back </button>
        </div>
        </div>
    </>
  );
};

export default Detail;
