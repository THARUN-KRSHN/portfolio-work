'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    contactSchema,
    type ContactFormData,
} from '@/lib/validations'
import clsx from 'clsx'

const inputClass = `
w-full bg-transparent 
border-0 border-b border-red-500/70
text-white font-ui text-sm
py-4
placeholder:text-neutral-500
focus:outline-none
focus:border-red-500
transition-all duration-300
`

export default function ContactForm() {
    const [submitted, setSubmitted] =
        useState(false)

    const [loading, setLoading] =
        useState(false)

    const [serverError, setServerError] =
        useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver:
            zodResolver(contactSchema),
    })

    const onSubmit = async (
        data: ContactFormData
    ) => {
        setLoading(true)
        setServerError('')

        try {
            const res = await fetch(
                '/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json',
                    },
                    body: JSON.stringify(
                        data
                    ),
                }
            )

            if (res.ok) {
                setSubmitted(true)
            } else {
                setServerError(
                    'Something went wrong.'
                )
            }
        } catch {
            setServerError(
                'Network error.'
            )
        } finally {
            setLoading(false)
        }
    }

    /* SUCCESS SCREEN */

    if (submitted) {
        return (
            <div className="relative overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-neutral-950 via-black to-red-950/20 py-24 px-12 text-center">

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-red-500/20 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                    <span className="font-ui text-xs tracking-[0.35em] uppercase text-red-500 block mb-6">
                        Message Sent
                    </span>

                    <h3 className="font-display text-6xl font-bold text-white mb-6 leading-none">
                        Thank
                        <span className="text-red-500">
                            {' '}
                            You.
                        </span>
                    </h3>

                    <p className="font-ui text-neutral-300 text-lg leading-relaxed max-w-md mx-auto">
                        Your enquiry has
                        been received.
                        We’ll get back to
                        you within 48
                        hours.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            noValidate
            className="flex flex-col gap-8"
        >
            {/* Hidden honeypot */}
            <input
                type="text"
                {...register(
                    'honeypot'
                )}
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
            />

            {/* Name */}
            <div>
                <input
                    {...register('name')}
                    placeholder="Your Name"
                    className={inputClass}
                />

                {errors.name && (
                    <p className="text-red-500 text-xs mt-2">
                        {
                            errors.name
                                .message
                        }
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <input
                    {...register(
                        'email'
                    )}
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                />

                {errors.email && (
                    <p className="text-red-500 text-xs mt-2">
                        {
                            errors.email
                                .message
                        }
                    </p>
                )}
            </div>

            {/* Select */}
            <div>
                <select
                    {...register(
                        'enquiryType'
                    )}
                    className={clsx(
                        inputClass,
                        'cursor-pointer bg-black text-white'
                    )}
                    defaultValue=""
                >
                    <option
                        value=""
                        disabled
                        className="bg-black text-neutral-500"
                    >
                        Enquiry Type
                    </option>

                    <option className="bg-black text-white">
                        Booking
                    </option>

                    <option className="bg-black text-white">
                        Collaboration
                    </option>

                    <option className="bg-black text-white">
                        Press
                    </option>

                    <option className="bg-black text-white">
                        Other
                    </option>
                </select>

                {errors.enquiryType && (
                    <p className="text-red-500 text-xs mt-2">
                        {
                            errors
                                .enquiryType
                                .message
                        }
                    </p>
                )}
            </div>

            {/* Message */}
            <div>
                <textarea
                    {...register(
                        'message'
                    )}
                    placeholder="Your Message"
                    rows={5}
                    className={clsx(
                        inputClass,
                        'resize-none'
                    )}
                />

                {errors.message && (
                    <p className="text-red-500 text-xs mt-2">
                        {
                            errors.message
                                .message
                        }
                    </p>
                )}
            </div>

            {serverError && (
                <p className="text-red-500 text-sm">
                    {serverError}
                </p>
            )}

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="
                mt-4
                w-full
                py-5
                text-white
                font-ui
                text-sm
                tracking-[0.3em]
                uppercase
                hover:bg-red-600
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
            "
            >
                {loading
                    ? 'Sending...'
                    : 'Send Message'}
            </button>
        </form>
    )
}