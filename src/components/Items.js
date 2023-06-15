import { Link } from "react-router-dom";
import "../stylesheets/Items.css";

const Item = (props) => {
  return (
    <Link className="Link" to={"/detail/" + props.nombre + "/" + props.imagen + "/" + props.escala + "/" + props.dimensiones + "/" + props.material + "/" + props.color + "/" + props.linea} >
      <div className="contenedor-imagen">
        <article>
          <img
            className="imagen-1"
            src={require(`../images/${props.imagen}.jpg`)}
            alt={"Foto de " + props.nombre}
            />

          <img
            className="imagen-2"
            src={require(`../images/${props.imagen2}.jpg`)}
            alt={"Foto de " + props.nombre}
          />
        
        </article>
      </div>
    </Link>
  );
};
export default Item;
