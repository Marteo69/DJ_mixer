import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import '../css/PhotoSlider.css';

export default function PhotoSlider({ images }) {
  const safeImages = images ?? [];
  const [imgIndex, setImgIndex] = useState(0);

  if (!safeImages.length) {
    return null;
  }

  function showPrevImg() {
    setImgIndex(prev => (prev === 0 ? safeImages.length - 1 : prev - 1));
  }

  function showNextImg() {
    setImgIndex(prev => (prev === safeImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="PhotoSlider">
      <div className="img-slider-wrapper">
        <div
          className="img-slider-track"
          style={{ transform: `translateX(${-100 * imgIndex}%)` }}
        >
          {safeImages.map((image, index) => (
            <img
              src={image.url}
              key={`${image.url}-${index}`}
              className="img-slider-img"
              alt={image.alt ?? image.desc}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <button
          onClick={showPrevImg}
          className="img-slider-btn img-slider-btn-left"
          aria-label="Mostra la foto precedente"
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImg}
          className="img-slider-btn img-slider-btn-right"
          aria-label="Mostra la foto successiva"
        >
          <ArrowBigRight />
        </button>
      </div>
      <p className="img-slider-caption">{safeImages[imgIndex].desc}</p>
    </div>
  );
}

// TODO: rifare sta merda di codice e usare un div con tutte le foto in orizzontale
//       Ogni foto avra un gap gia presente tranne la prima e l'ultima
//       Il div si deve tutto spostare di un terzo ogni volta che si clicca la freccia cosi dovrebbe funzionare
export function PhotoSlider3({ images }) {
  const safeImages = images ?? [];

  if (!safeImages.length) {
    return null;
  }

  function showPrevImg() {

  }

  function showNextImg() {

  }
  
  return(
    <div className="PhotoSlider3">
      <div className="img-slider-3-wrapper">
        <div className="img-slider-3-track">
          {safeImages.map((image, index) => (
            <img 
              src={image.url} 
              key={`${image.url}-${index}`}
              className="img-slider-3-img"
              alt={image.alt ?? image.desc}
            />
          ))}
        </div>
        <div className="img-slider-3-btns">
          <button onClick={showPrevImg} className="img-slider-btn img-slider-btn-left">
            <ArrowBigLeft />
          </button>
          <button onClick={showNextImg} className="img-slider-btn img-slider-btn-right">
            <ArrowBigRight />
          </button>
        </div>
      </div>
    </div>
  )
}
