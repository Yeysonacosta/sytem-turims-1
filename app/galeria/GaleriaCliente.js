"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./galeria.module.css";

const imagenes = [
  {
    src: "/images/galeria/langascocha.jpg",
    titulo: "langascocha",
    categoria: "Naturaleza",
  },
  {
    src: "/images/galeria/plaza_celendin.jpg",
    titulo: "Plaza de Armas",
    categoria: "Ciudad",
  },
  {
    src: "/images/galeria/iglesia_celendina.jpg",
    titulo: "Catedral de Celendín",
    categoria: "Arquitectura",
  },
  {
    src: "/images/galeria/alameda.jpg",
    titulo: "La alameda",
    categoria: "Turismo",
  },
  {
    src: "/images/galeria/pamapa_grande.jpg",
    titulo: "Pampa Grande",
    categoria: "Historia",
  },
  {
    src: "/images/galeria/sombrero1.jpg",
    titulo: "el sombrero",
    categoria: "Parques",
  },
  {
    src: "/images/galeria/san_isidro.jpg",
    titulo: "san isidro",
    categoria: "Ciudad",
  },
  {
    src: "/images/galeria/antiguo.jpg",
    titulo: "Celendín antiguo",
    categoria: "Memoria histórica",
  },
];

export default function GaleriaCliente() {
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [seleccionada, setSeleccionada] = useState(null);

  const visibles = mostrarTodas ? imagenes : imagenes.slice(0, 6);

  const reemplazarImagen = (evento) => {
    evento.currentTarget.src = "/fondocelendin.png";
  };

  return (
    <main className={styles.pagina}>
      <section className={styles.cabecera}>
        <span>Galería fotográfica</span>
        <h1>Descubre la belleza de Celendín</h1>
        <p>
          Una colección de paisajes, plazas, calles y construcciones que
          forman parte de la identidad de la provincia.
        </p>
      </section>

      <section className={styles.galeria}>
        {visibles.map((imagen, indice) => (
          <button
            type="button"
            className={styles.tarjeta}
            key={imagen.src}
            onClick={() => setSeleccionada(imagen)}
            aria-label={`Abrir ${imagen.titulo}`}
          >
            <Image
              src={imagen.src}
              alt={imagen.titulo}
              width={500}
              height={350}
              priority={indice < 3}
              />
            <div className={styles.capa}>
              <span>{imagen.categoria}</span>
              <h2>{imagen.titulo}</h2>
              <strong>Ver fotografía ↗</strong>
            </div>
          </button>
        ))}
      </section>

      <div className={styles.acciones}>
        <button
          type="button"
          className={styles.verMas}
          onClick={() => setMostrarTodas((estado) => !estado)}
        >
          {mostrarTodas ? "Ver menos" : "Mostrar más imágenes"}
        </button>
      </div>

      {seleccionada && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={seleccionada.titulo}
          onClick={() => setSeleccionada(null)}
        >
          <button
            type="button"
            className={styles.cerrar}
            onClick={() => setSeleccionada(null)}
            aria-label="Cerrar fotografía"
          >
            ×
          </button>

          <div
            className={styles.modalContenido}
            onClick={(evento) => evento.stopPropagation()}
          >
            <Image
              src={seleccionada.src}
              alt={seleccionada.titulo}
              width={900}
              height={600}
              />
            <div className={styles.modalTexto}>
              <span>{seleccionada.categoria}</span>
              <h2>{seleccionada.titulo}</h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}