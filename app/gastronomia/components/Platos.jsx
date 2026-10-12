import Image from "next/image";
import Link from "next/link";
import styles from "./Platos.module.css";
import { platos } from "../data/platosdata";

export default function Platos() {
  return (
    <section id="platos" className={styles.seccionPlatos}>
      <div className={styles.encabezado}>
        <span>Platos y productos regionales</span>

        <h2>Gastronomía Tradicional</h2>

        <p>
          Conoce algunas de las preparaciones y productos más apreciados en
          Celendín y la región Cajamarca.
        </p>
      </div>

      <div className={styles.grid}>
        {platos.map((plato) => (
          <article className={styles.tarjeta} key={plato.slug}>
            <div className={styles.imagenContenedor}>
              <Image
                src={plato.imagen}
                alt={plato.nombre}
                fill
                className={styles.imagen}
              />

              <span className={styles.categoria}>{plato.categoria}</span>
            </div>

            <div className={styles.contenido}>
              <h3>{plato.nombre}</h3>

              <p>{plato.descripcion}</p>

              <Link
                href={`/gastronomia/${plato.slug}`}
                className={styles.botonReceta}
              >
                Ver receta
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}