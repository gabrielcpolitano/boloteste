import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bakery-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-orange-800 mb-6 leading-tight">
              Bolos Artesanais Feitos com Amor
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra o sabor único dos nossos bolos caseiros, preparados com ingredientes frescos e muito carinho.
            </p>
            <Button
              onClick={scrollToProducts}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Produtos
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Bolo artesanal com chocolate e frutas vermelhas"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
