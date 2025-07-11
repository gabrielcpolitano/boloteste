'use client'

import { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-orange-800 hover:text-orange-600 transition-colors">
              <span className="text-orange-500 mr-2 text-3xl">🎂</span>
              <span className="text-3xl">Doce Encanto</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Início
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Produtos
            </a>
            <a href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contato
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-orange-600">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative text-gray-700 hover:text-orange-600"
            >
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:text-orange-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Início
              </a>
              <a href="/products" className="text-gray-700 hover:text-orange-600 transition-colors">
                Produtos
              </a>
              <a href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                Sobre
              </a>
              <a href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
