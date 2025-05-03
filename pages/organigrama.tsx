// pages/organigrama.tsx
'use client';

import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chart from '../components/Chart';

/**
 * El componente de la página del organigrama.
 */
export default function OrganigramaPage() {
  return (
    <>
      {/* Contenedor general con soporte light/dark */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <CustomNavbar />

        <main className="container mx-auto px-4 py-8">
          {/* Sección de visión */}
          <section
            className="
              bg-white dark:bg-gray-800
              rounded-lg shadow-md
              p-12 md:p-20
            "
          >
            <h2 className="text-6xl font-bold mb-6 text-black dark:text-gray-100">
              Nuestra Visión
            </h2>
            <p className="text-justify text-black dark:text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
              fringilla enim. Quisque semper leo non mollis pellentesque.
              Aliquam neque nisl, sollicitudin sit amet rhoncus quis, malesuada
              pretium eros. Suspendisse laoreet pretium enim vitae commodo. Nam
              eleifend, lectus ac condimentum auctor, risus eros condimentum
              est, in facilisis dui libero non enim. Morbi tristique elit eu
              augue cursus, vel tristique orci condimentum. Duis nec iaculis
              quam, at interdum odio. Suspendisse egestas rhoncus egestas. Morbi
              dignissim mauris ac laoreet tempus. Curabitur faucibus, augue ut
              imperdiet rutrum, nisl est aliquet tortor, et venenatis purus ante
              ac turpis. Aliquam varius lobortis justo, non venenatis nulla
              scelerisque sed. In in lorem maximus, tempor nisl vitae, rutrum
              ipsum. Nulla facilisi. Quisque condimentum ante turpis, sed
              pretium justo tincidunt quis. Praesent egestas dictum ipsum, vel
              euismod neque rutrum lacinia. In vitae ligula felis.
              <br />
              <br />
              Mauris vulputate ipsum gravida sem interdum, in porttitor augue
              dictum. Nulla facilisi. Etiam varius cursus diam, nec molestie
              ipsum lobortis ut. Donec erat lacus, vulputate at tortor
              ultricies, fermentum fringilla quam. Quisque ut risus et nibh
              dignissim hendrerit. Donec diam lorem, euismod et felis eu,
              aliquet sollicitudin risus. In et tempus leo, a aliquet urna.
              Suspendisse mattis a nisi vel tempus. In id pulvinar erat.
              Praesent sodales congue risus sollicitudin dignissim. Proin
              sodales hendrerit nulla, eget blandit nisi dignissim at. Sed eu
              tristique sapien, ut porta sem. Aliquam sollicitudin rutrum
              fringilla. Nulla pellentesque lacus turpis, nec condimentum dolor
              dignissim in. In aliquet vel nulla eu congue. Phasellus tempus vel
              elit vitae tristique.
            </p>
          </section>

          {/* Gráfico */}
          <div className="mt-12">
            <Chart />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
