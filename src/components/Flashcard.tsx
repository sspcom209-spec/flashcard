import type { Flashcard as FlashcardType } from '../data/flashcards'
import styles from './Flashcard.module.css'

type Props = {
  card: FlashcardType
  flipped: boolean
  onFlip: () => void
}

/** Single flip card: shows Spanish (front) or English (back). Click to flip. */
export default function Flashcard({ card, flipped, onFlip }: Props) {
  return (
    <button
      type="button"
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      onClick={onFlip}
      aria-label={flipped ? `Back: ${card.spanish}` : `Front: ${card.spanish}`}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          <span className={styles.text}>{card.spanish}</span>
        </div>
        <div className={styles.back}>
          <span className={styles.text}>{card.english}</span>
        </div>
      </div>
    </button>
  )
}
