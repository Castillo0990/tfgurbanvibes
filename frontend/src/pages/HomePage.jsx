import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
    { href: "/Madrid", name: "Madrid", imageUrl: "/Gran-Via.jpg" },
    { href: "/Alicante", name: "Alicante", imageUrl: "/Alicante.jpg" },
    { href: "/Castellon", name: "Castellón", imageUrl: "/Castellon.jpg" },
    { href: "/Barcelona", name: "Barcelona", imageUrl: "/Barcelona.jpg" },
    { href: "/Asturias", name: "Asturias", imageUrl: "/Asturias.jpg" },
    { href: "/Cadiz", name: "Cádiz", imageUrl: "/cadiz.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
				 Vive la magia de los mejores festivales del año
				</h1>
		<p className='text-center text-xl text-gray-300 mb-12'>
                  ¡Bienvenido al Festival Más Épico del Año!<br/><br/>
                  Vive la experiencia musical más explosiva con los mejores artistas de reggaeton, pop, latino y más.<br/><br/>
                   Artistas internacionales y escenarios increíbles 🎤<br/>
                  📅 Fechas exclusivas | 📍 Ciudades emblemáticas | 🔊 Sonido que hará vibrar tu cuerpo<br/><br/>
                  ¿Listo para el mejor festival?<br/>
                  🎟️ Consigue tus entradas antes de que se agoten ⏳<br/><br/>
                  👉 Explora los lineups, ubicaciones y experiencias únicas que solo encontrarás aquí.
            </p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
