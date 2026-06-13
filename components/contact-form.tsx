"use client"

import { useState, type FormEvent } from "react"

interface ContactFormProps {
  agentName: string
}

export function ContactForm({ agentName }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-surface-soft rounded-md p-6 text-center space-y-2">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-6 text-primary"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-semibold text-ink">Terkirim!</p>
        <p className="text-sm text-muted">
          Pesan Anda telah terkirim ke {agentName}. Kami akan menghubungi Anda
          segera.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-[0.32px]"
        >
          Nama
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Nama lengkap"
          className="w-full h-14 px-3 rounded-sm border border-hairline bg-canvas text-ink text-base placeholder:text-muted-soft focus:border-ink focus:outline-none transition-colors"
          aria-required="true"
        />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-[0.32px]"
        >
          Email / Telepon
        </label>
        <input
          id="contact"
          type="text"
          required
          placeholder="email@example.com atau nomor telepon"
          className="w-full h-14 px-3 rounded-sm border border-hairline bg-canvas text-ink text-base placeholder:text-muted-soft focus:border-ink focus:outline-none transition-colors"
          aria-required="true"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-[0.32px]"
        >
          Pesan
        </label>
        <textarea
          id="message"
          required
          rows={3}
          placeholder="Tulis pesan Anda..."
          className="w-full px-3 py-3 rounded-sm border border-hairline bg-canvas text-ink text-base placeholder:text-muted-soft focus:border-ink focus:outline-none transition-colors resize-none"
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 bg-primary text-on-primary text-base font-medium rounded-sm hover:bg-primary-active transition-colors"
      >
        Kirim Pesan
      </button>
    </form>
  )
}
