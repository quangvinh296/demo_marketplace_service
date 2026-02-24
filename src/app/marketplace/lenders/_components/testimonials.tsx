interface TestimonialsProps {
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What Loan Officers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-[#16213E] shadow-lg rounded-2xl p-6 transition-shadow hover:shadow-xl border border-transparent dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F36F20] to-[#FBBF24] flex items-center justify-center text-white font-bold">
                {testimonial.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-3 pl-8">{testimonial.content}</p>
            <div className="flex items-center gap-1 pl-8">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#FBBF24] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
