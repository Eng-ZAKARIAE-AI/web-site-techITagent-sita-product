/**
 * Firestore "feedbacks" collection service.
 *
 * Exposes a single `submitFeedback` mutation and a list of category
 * options shared with the UI. All errors are normalized into clean,
 * UI-friendly messages so the form never leaks raw SDK internals.
 */
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export const FEEDBACK_COLLECTION = 'feedbacks'

export const FEEDBACK_CATEGORIES = [
  { value: 'ui_ux', label: 'UI/UX' },
  { value: 'zabbix_integration', label: 'Zabbix Integration' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature_request', label: 'Feature Request' },
] as const

export interface FeedbackInput {
  rating: number
  category: string
  comment: string
  email?: string
}

/**
 * Persists a feedback document to the "feedbacks" collection.
 * @returns The generated Firestore document ID.
 */
export async function submitFeedback({ rating, category, comment, email }: FeedbackInput): Promise<string> {
  if (!db) {
    throw new Error(
      'Firebase is not initialized. Verify your .env credentials and that ' +
        'VITE_FIREBASE_API_KEY / VITE_FIREBASE_PROJECT_ID are set at the ' +
        'project root.',
    )
  }

  // ---- client-side validation -------------------------------------------------
  if (!rating || rating < 1 || rating > 5) {
    throw new Error('Please select a rating between 1 and 5 stars.')
  }

  const commentTrimmed = (comment || '').trim()
  if (commentTrimmed.length < 5) {
    throw new Error('Please write a comment of at least 5 characters.')
  }

  // ---- persist to Firestore ---------------------------------------------------
  try {
    const docRef = await addDoc(collection(db, FEEDBACK_COLLECTION), {
      rating: Number(rating),
      category: category || '',
      comment: commentTrimmed,
      email: (email || '').trim(),
      createdAt: serverTimestamp(),
    })
    return docRef.id
  } catch (err) {
    throw normalizeFirestoreError(err)
  }
}

/**
 * Translate Firestore SDK errors into clean, user-facing strings.
 */
function normalizeFirestoreError(err: unknown): Error {
  const code = (err as { code?: string })?.code
  if (code === 'permission-denied') {
    return new Error(
      'Permission denied: your Firestore security rules do not allow feedback submission.',
    )
  }
  if (code === 'unavailable' || code === 'deadline-exceeded') {
    return new Error('Network error: unable to reach Firestore. Check your connection and try again.')
  }
  if (code === 'resource-exhausted') {
    return new Error('Too many requests. Please wait a moment and try again.')
  }
  if (code === 'invalid-argument' || code === 'failed-precondition') {
    return new Error('Invalid data was sent to the server. Please check your input and try again.')
  }
  const message = (err as Error)?.message
  return new Error(
    message
      ? `Failed to submit feedback: ${message}`
      : 'Failed to submit feedback. Please try again later.',
  )
}
