import React, { useEffect, useRef, useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import cl from 'classnames'
import locale from 'date-fns/locale/uk'
import waveSvg from '../../assets/img/wave.svg'
import pauseSvg from '../../assets/img/pause.svg'
import playSvg from '../../assets/img/play.svg'
import './Message.scss'
import { IconReaded } from '../IconReaded/IconReaded'
import convertCurrentTime from '../../utils/helpers/convertCurrentTime'

type TypeProps = {
  userName: string
  date?: string
  photoUrl: string
  text?: string
  isMe?: boolean
  attachments?: AttachmentType[]
  isTyping?: boolean
  audio?: string
}

type AttachmentType = {
  url: string
  filename: string
}

type TypePropsAudio = {
  audio: string
}

const MessageAudio: React.FC<TypePropsAudio> = ({ audio }) => {
  const audioElem = useRef<HTMLAudioElement>(null)
  const [isPlaing, setIsPlaing] = useState<boolean>(false)
  const [progress, setProgess] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    audioElem.current?.addEventListener('playing', () => {
      setIsPlaing(true)
    })
    audioElem.current?.addEventListener('ended', () => {
      setProgess(0)
      setCurrentTime(0)
      setIsPlaing(false)
    })

    audioElem.current?.addEventListener('pause', () => {
      setIsPlaing(false)
    })
    audioElem.current?.addEventListener('timeupdate', () => {
      const duration = audioElem.current?.duration || 0
      const currentTime = audioElem.current?.currentTime
      if (currentTime) {
        setCurrentTime(currentTime)
        setProgess((currentTime / duration) * 100)
      }
    })
  }, [])

  const audioHandler = () => {
    if (isPlaing) {
      audioElem.current?.pause()
    } else {
      audioElem.current?.play()
    }
  }

  return (
    <div className="message__audio">
      <audio src={audio} ref={audioElem} preload={'sd'} />
      <div
        className="message__audio-progress"
        style={{ width: progress + '%' }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={audioHandler}>
            {!isPlaing ? (
              <img src={playSvg} alt="Play svg" />
            ) : (
              <img src={pauseSvg} alt="Pause svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  )
}

export const Message: React.FC<TypeProps> = ({
  date,
  userName,
  photoUrl,
  text,
  isMe,
  attachments,
  isTyping,
  audio,
}) => {
  return (
    <div
      className={cl(
        'message',
        { 'message--isme': isMe },
        { 'message--is-typing': isTyping },
        { 'message--is-audio': audio },
        { 'message--image': attachments?.length === 1 }
      )}
    >
      <div className="message__content">
        <div className="message__avatar">
          <img className="avatar" src={photoUrl} alt={`User` + userName} />
        </div>

        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && <MessageAudio audio={audio} />}
            </div>
          )}

          <IconReaded isMe={isMe || false} isReaded={true} />
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          {date && (
            <span className="message__date">
              {formatDistanceToNow(new Date(date), { addSuffix: true, locale })}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

