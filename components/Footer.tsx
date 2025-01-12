// components/Footer.tsx
import React from 'react';

/**
 * Componente de pie de página.
 * @returns {JSX.Element} El componente de pie de página renderizado.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">
          Sociedad Científica Venezolana de Obesología (SCVO)
        </p>
        <p className="mt-2">
          Dirección: Calle Falsa 123, Caracas, Venezuela - Correo:
          contacto@scvo.org.ve - Teléfono: +58 123-4567890
        </p>
        <p className="mt-4">
          SCVO es una organización sin fines de lucro. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
