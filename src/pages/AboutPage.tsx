
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
            alt="About Clothify"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
              <p className="text-lg text-white/90 mb-6">
                Passionate about style, committed to quality, and dedicated to sustainable fashion since 2010.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-brand-gray-500">
              At Clothify, we believe in creating timeless pieces that combine quality craftsmanship, 
              sustainable practices, and contemporary design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-gray-100 p-8 rounded-lg">
              <div className="bg-brand-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-brand-gray-500">
                We source the finest materials and work with skilled artisans to create pieces that stand the test of time.
              </p>
            </div>

            <div className="bg-brand-gray-100 p-8 rounded-lg">
              <div className="bg-brand-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-brand-gray-500">
                Our commitment to the environment drives every decision, from material selection to packaging and shipping.
              </p>
            </div>

            <div className="bg-brand-gray-100 p-8 rounded-lg">
              <div className="bg-brand-gold/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Design</h3>
              <p className="text-brand-gray-500">
                We blend timeless aesthetics with contemporary trends to create versatile pieces for the modern wardrobe.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg mb-4">
                Founded in 2010, Clothify began as a small boutique in New York with a vision to create clothing that combines quality, style, and ethical production.
              </p>
              <p className="text-brand-gray-500 mb-6">
                Over the years, we've grown into a global brand loved for our commitment to craftsmanship and sustainable practices. What hasn't changed is our dedication to creating pieces that are designed to last, both in style and durability.
              </p>
              <p className="text-brand-gray-500">
                Today, our team of designers and artisans work together to bring you collections that reflect our values and meet the needs of our diverse and discerning customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Clothify team" 
                className="rounded-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Clothify workshop" 
                className="rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-black text-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="mb-6">
                Shop our latest collections and become part of a community that values quality, style, and sustainability.
              </p>
              <div className="flex gap-4">
                <Link to="/products">
                  <Button className="bg-brand-gold text-brand-black hover:bg-brand-gold/90">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Join us" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
