import {
  AudioOutlined,
  CameraOutlined,
  SendOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import { Form, Input } from 'antd'
import React, { useState } from 'react'
import './ChatInput.scss'

type InputHandlerType = (
  a: React.ChangeEventHandler<HTMLInputElement> | undefined
) => any

export const ChatInput = () => {
  const [value, setValue] = useState<string>('')

  const onfinish = (value: any) => {
    console.log(value)
  }

  return (
    <Form onFinish={onfinish} className="chat-input">
      <div className="chat-input__smile-btn">
        <SmileOutlined />
      </div>
      <Input
        placeholder="Ведіть текст повідомлення"
        size="large"
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="chat-input__actions">
        <CameraOutlined />

        {value ? <SendOutlined type="submit" /> : <AudioOutlined />}
      </div>
    </Form>
  )
}
