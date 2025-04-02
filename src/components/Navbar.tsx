
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif font-bold text-2xl tracking-wider">
          <span className={`${isScrolled ? "text-brand-black" : "text-white"}`}>Elite</span>
          <span className={`${isScrolled ? "text-brand-gold" : "text-brand-gold"}`}>Wear</span>
          <span className={`${isScrolled ? "text-brand-gold" : "text-brand-gold"} text-3xl`}>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-brand-gold font-bold"
                  : isScrolled
                  ? "text-brand-black hover:text-brand-gold"
                  : "text-white font-semibold hover:text-brand-gold bg-black/20 px-3 py-1 rounded-md"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative bg-white/80 hover:bg-white" asChild>
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative bg-white/80 hover:bg-white" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-brand-gold text-white text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-black bg-white/80 p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden animate-fade-in">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium py-2 ${
                      location.pathname === link.path
                        ? "text-brand-gold font-bold"
                        : "text-brand-black hover:text-brand-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex space-x-6 pt-4 border-t border-gray-100">
                  <Link to="/wishlist" className="flex items-center text-sm">
                    <Heart className="h-5 w-5 mr-2" />
                    Wishlist
                  </Link>
                  <Link to="/cart" className="flex items-center text-sm">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart ({getCartCount()})
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
