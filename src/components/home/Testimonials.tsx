import { Star, Quote } from 'lucide-react';

export default function  Testimonials () {
  
  const testimonials = [
    {
      quote: "Since using Coraly, I've gone from 8 listings to 24 listings without working longer hours. The AI handles everything I used to spend weekends doing.",
      name: "Sarah Chen",
      title: "Independent Agent, Dubai",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: "3x more listings"
    },
    {
      quote: "Our team's productivity increased 300% in the first month. Agents focus on clients while Coraly handles the marketing. Game-changer.",
      name: "Ahmed Al-Rashid",
      title: "Agency Owner, Abu Dhabi",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: "300% productivity increase"
    },
    {
      quote: "I was skeptical about AI, but Coraly feels like having a marketing team in my pocket. My listings look professional and sell 40% faster.",
      name: "James Morrison",
      title: "Luxury Specialist, London",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
      stats: "40% faster sales"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Real Estate Professionals
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

