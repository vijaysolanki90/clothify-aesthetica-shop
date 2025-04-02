
import React from "react";
import { Link } from "react-router-dom";

const CollectionsPage = () => {
  const collections = [
    {
      id: "women",
      title: "WOMEN COLLECTION",
      tagline: "HOT LIST",
      cta: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/collections/women"
    },
    {
      id: "men",
      title: "MEN COLLECTION",
      tagline: "HOT LIST",
      cta: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/collections/men"
    },
    {
      id: "kids",
      title: "KIDS COLLECTION",
      tagline: "HOT LIST",
      cta: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1519238859601-5b3f1d9dfa3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/collections/kids"
    },
    {
      id: "gifts",
      title: "E-GIFT CARDS",
      tagline: "SURPRISE SOMEONE WITH THE",
      cta: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1563639266589-4a88755828a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/collections/gifts",
      description: "GIFT THEY REALLY WANT."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-serif font-bold mb-10 text-center">Our Collections</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link 
              to={collection.link} 
              key={collection.id}
              className="overflow-hidden relative group block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-8">
                <div className="bg-white/90 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-brand-gold mb-2">{collection.tagline}</p>
                  <h3 className="text-3xl font-serif font-bold mb-2">{collection.title}</h3>
                  {collection.description && (
                    <p className="mb-4 font-medium">{collection.description}</p>
                  )}
                  <div className="inline-block border-b-2 border-brand-gold font-medium pb-1">
                    {collection.cta}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
