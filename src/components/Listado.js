import Item from "./Items";
import "../stylesheets/Listado.css";

const Listado = () => {
  return (
    <div className="imagen-listado">
      <div className="app-listado">
        <nav></nav>
      </div>
      <div className="contenedor-listado">
        <Item
          nombre="Tyrant Mecha 01"
          imagen="m01"
          imagen2="itm-entrar1"
          imagen3="mm01"
          escala="1.18 pulg."
          dimensiones="12.99 pulg. - 33cm"
          material="Polipropileno ABS PVC"
          color="White Olive"
          linea="Battle for the Stars"
        />
        <Item
          nombre ="New Zeus Mecha 02"
          imagen ="m02"
          imagen2 ="itm-entrar1"
          imagen3="m02"
          escala="1.18 pulg."
          dimensiones="12.6 pulg. - 32cm"
          material="Polipropileno ABS PVC"
          color="Python green"
          linea="Battle for the Stars"
        />
        <Item
          nombre="Fear VI Mecha 09"
          imagen="m03"
          imagen2="itm-entrar1"
          imagen3="m03"
          escala="1.18 pulg."
          dimensiones="12.6 pulg. - 32cm"
          material="Polipropileno ABS PVC"
          color="Warfare"
          linea="Battle for the Stars"
        />
        <Item
          nombre="Fear V Mecha 09"
          imagen="m04"
          imagen2="itm-entrar1"
          imagen3="m04"
          escala="1.18 pulg."
          dimensiones="12.6 pulg. - 32cm"
          material="Polipropileno ABS PVC"
          color="Airborne gray"
          linea="Battle for the Stars"
        />
        <Item
          nombre="Sorrow Tyrant Mecha 02"
          imagen="m05"
          imagen2="itm-entrar1"
          imagen3="m05"
          escala="1.18 pulg."
          dimensiones="12.99 pulg. - 33cm"
          material="Polipropileno ABS PVC"
          color="Pitch Black"
          linea="Battle for the Stars"
        />
        <Item
          nombre="Steel Bone Mecha H02"
          imagen="m06"
          imagen2="itm-entrar1"
          imagen3="m06"
          escala="1.18 pulg."
          dimensiones="12.6 pulg. - 32cm"
          material="Polipropileno ABS PVC"
          color="Russian tree"
          linea="Source"
        />
        <Item
          nombre="Iron Wrecker Mecha 04"
          imagen="m07"
          imagen2="itm-entrar1"
          imagen3="m07"
          escala="1.18 pulg."
          dimensiones="12.99 pulg. - 33cm"
          material="Polipropileno ABS PVC"
          color="Sandstorm"
          linea="Source"
        />
        <Item
          nombre="Iron Wrecker Urban Mecha 03"
          imagen="m08"
          imagen2="itm-entrar1"
          imagen3="m08"
          escala="1.18 pulg."
          dimensiones="12.99 pulg. - 33cm"
          material="Polipropileno ABS PVC"
          color="Warfare"
          linea="Source"
        />
        <Item
          nombre="Tiekui Dual Mecha 01"
          imagen="m09"
          imagen2="itm-entrar1"
          imagen3="m09"
          escala="1.23 pulg."
          dimensiones="12.99 pulg. - 30cm"
          material="Polipropileno ABS PVC"
          color="Dark Decoy"
          linea="Source"
        />
      </div>
    </div>
  );
};
export default Listado;
