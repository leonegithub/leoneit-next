"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import foto1 from '@/../public/foto-sito/Leone90_DSL-10.jpg';
import foto2 from '@/../public/foto-sito/Leone90_DSL-13.jpg';
import foto3 from '@/../public/foto-sito/Leone90_DSL-26.jpg';
import foto4 from '@/../public/foto-sito/Leone90_DSL-28.jpg';
import foto5 from '@/../public/foto-sito/Leone90_DSL-39.jpg';
import foto6 from '@/../public/foto-sito/Leone90_DSL-42 copia.jpg';
import foto7 from '@/../public/foto-sito/Leone90_DSL-60.jpg';
import foto8 from '@/../public/foto-sito/Leone90_DSL-68.jpg';
import foto9 from '@/../public/foto-sito/Leone90_DSL-69.jpg';
import foto10 from '@/../public/foto-sito/Leone90_stabilimento-4.jpg';
import foto11 from '@/../public/foto-sito/Leone90_stabilimento-14.jpg';
import foto12 from '@/../public/foto-sito/Leone90_stabilimento-35.jpg';
import foto13 from '@/../public/foto-sito/Leone90_stabilimento-67.jpg';
import foto14 from '@/../public/foto-sito/Leone90_stabilimento-72.jpg';
import foto15 from '@/../public/foto-sito/Leone90_stabilimento-88.jpg';
import foto16 from '@/../public/foto-sito/Leone90_stabilimento-92.jpg';
import foto17 from '@/../public/foto-sito/Leone90_stabilimento-97.jpg';
import foto18 from '@/../public/foto-sito/Leone90_stabilimento-101.jpg';

const images = [
  foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9,
  foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18
];

function ChiSiamoClient() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | StaticImageData | null>(null);

  function openModal(img: string | StaticImageData) {
    setSelectedImg(img);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setSelectedImg(null);
  }

  return (
    <>
      <div className="grid my-5 grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full  relative cursor-pointer" onClick={() => openModal(image)}>
            <Image
              src={image}
              alt={`immagine-${index}`}
              
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
  {open && selectedImg && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    onClick={closeModal}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="relative  rounded-lg max-w-4xl w-full"
      onClick={e => e.stopPropagation()} // Previene la chiusura se clicchi sulla modale
    >
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
        aria-label="Chiudi"
      >
        &times;
      </button>
      <div className="flex justify-center items-center">
        <Image
          src={selectedImg}
          alt="Immagine grande"
          width={3840}
          height={2160}
          className="rounded-lg"
          style={{ objectFit: "contain", maxHeight: "70vh", width: "auto" }}
        />
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default ChiSiamoClient;