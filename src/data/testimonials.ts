// Somente depoimentos reais. Lista vazia = seção oculta.
export type Testimonial = { name: string; city?: string; text: string; rating: number; photo?: string };
export const testimonials: Testimonial[] = [];
