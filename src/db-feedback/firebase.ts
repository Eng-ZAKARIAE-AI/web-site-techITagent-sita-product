/**
 * Firebase App + Firestore initialization.
 *
 * Uses the Firebase Web SDK v9+ modular API. Configuration is loaded
 * safely from Vite environment variables (prefixed with VITE_FIREBASE_).
 *
 * NOTE: Vite only reads env vars from the project root `.env` / `.env.local`
 * files. Copy `src/db-feedback/.env.example` values into `<root>/.env`.
 */
import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Validate that the minimum required credentials are present before
// initializing. initializeApp throws an opaque error otherwise, so we
// fail fast with a clear, actionable message.
const requiredKeys = ['apiKey', 'projectId', 'appId']
const missing = requiredKeys.filter((key) => !firebaseConfig[key as keyof typeof firebaseConfig])

let app: FirebaseApp | null = null
let db: Firestore | null = null

if (missing.length > 0) {
  console.error(
    `[firebase] Missing required VITE_FIREBASE_* environment variables: ` +
      missing.join(', ') +
      `. Copy src/db-feedback/.env.example to <project-root>/.env and fill ` +
      `in your Firebase project credentials.`,
  )
} else {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
  } catch (err) {
    console.error('[firebase] Failed to initialize Firebase:', err)
  }
}

export { app, db }
export default app
