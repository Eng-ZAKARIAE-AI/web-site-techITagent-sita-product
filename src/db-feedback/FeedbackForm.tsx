import { useState } from 'react'
import { submitFeedback, FEEDBACK_CATEGORIES } from './feedbackService'
import './FeedbackForm.css'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface FeedbackFormProps {
  /** Called with the new Firestore doc ID on a successful submission. */
  onSuccess?: (docId: string) => void
  /** Optional className for the outer card element. */
  className?: string
}

const STAR_COUNT = 5

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.64 12 2 9.19 8.64 2 9.24 7.46 13.97 5.82 21z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function RatingInput({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  const [hover, setHover] = useState(0)
  const display = (star: number) => star <= (hover || value)

  return (
    <div className="fb-stars" role="radiogroup" aria-label="Rating">
      {Array.from({ length: STAR_COUNT }, (_, i) => {
        const star = i + 1
        return (
          <button
            key={star}
            type="button"
            className={`fb-star ${display(star) ? 'filled' : ''}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
          >
            <StarIcon filled={display(star)} />
          </button>
        )
      })}
      <span className="fb-hint">
        {value ? `${value} / ${STAR_COUNT}` : 'Select a rating'}
      </span>
    </div>
  )
}

function FeedbackForm({ onSuccess, className }: FeedbackFormProps) {
  const [rating, setRating] = useState(0)
  const [category, setCategory] = useState('')
  const [comment, setComment] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const reset = () => {
    setRating(0)
    setCategory('')
    setComment('')
    setEmail('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const docId = await submitFeedback({ rating, category, comment, email })
      setStatus('success')
      reset()
      onSuccess?.(docId)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to submit feedback.',
      )
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form className={`fb-card ${className ?? ''}`} onSubmit={handleSubmit} noValidate>
      <h2>TechIT Agent feedback</h2>
      <p fb-desc>
        Help us improve TechIT Agent. Share a bug, feature idea, or rating in
        seconds — your feedback goes straight to the team.
      </p>

      <div className="fb-field">
        <label className="fb-required">Your rating</label>
        <RatingInput value={rating} onChange={setRating} />
      </div>

      <div className="fb-field">
        <label className="fb-required">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isSubmitting}
          required
        >
          <option value="" disabled>
            Pick a category
          </option>
          {FEEDBACK_CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="fb-field">
        <label className="fb-required">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What would make TechIT Agent better for your Zabbix workflow?"
          disabled={isSubmitting}
          required
          minLength={5}
          rows={5}
        />
      </div>

      <div className="fb-field">
        <label>Email (optional)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={isSubmitting}
          autoComplete="email"
        />
      </div>

      <div className="fb-submit">
        <button
          type="submit"
          className="btn btn-primary fb-btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="fb-spinner" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            'Submit feedback'
          )}
        </button>
      </div>

      {status === 'success' && (
        <div className="fb-status fb-status-success" role="status">
          <span className="fb-status-icon" aria-hidden="true">
            <CheckIcon />
          </span>
          Thank you! Your feedback has been recorded.
        </div>
      )}

      {status === 'error' && (
        <div className="fb-status fb-status-error" role="alert">
          <span className="fb-status-icon" aria-hidden="true">
            <AlertIcon />
          </span>
          {errorMessage}
        </div>
      )}
    </form>
  )
}

export default FeedbackForm
