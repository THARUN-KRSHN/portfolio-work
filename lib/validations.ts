import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    enquiryType: z.enum(['Booking', 'Collaboration', 'Press', 'Other']),
    message: z.string().min(20, 'Message must be at least 20 characters'),
    honeypot: z.string().max(0, 'Bot detected'),
})

export type ContactFormData = z.infer<typeof contactSchema>