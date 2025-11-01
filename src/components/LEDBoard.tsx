import { useEffect, useRef } from 'react'
import './LEDBoard.css'

interface LEDBoardProps {
  text?: string
  duration?: number
}

export default function LEDBoard({
  text = "INOURED IN THE FINANCIAL MARKET",
  duration = 20
}: LEDBoardProps) {
  const boardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.style.setProperty('--duration', duration.toString())
    }
  }, [duration])

  return (
    <div className="led-board-wrapper" ref={boardRef}>
      <div className="board-container">
        <div className="board">
          <div className="board__content">
            <div className="text-track">
              <div className="text">{text}</div>
              <div className="text">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
