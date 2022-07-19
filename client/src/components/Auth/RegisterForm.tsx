import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Checkbox } from 'antd'
import _ from 'lodash'
import { RegisterFormType } from '../../types/AuthTypes'
import { Block } from '../../commons/Block/Block'
import { validTwoPassword } from '../../utils/validate'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../api/auth/auth.mutation'
import { AUTH_ME } from '../../api/auth/auth.query'

import './Auth.scss'

type RegisterType = {
  _id: string
  accessToken: string
  email: string
}

export const RegisterForm: React.FC = () => {
  const [form] = Form.useForm()

  const [register, { data, loading, error }] = useMutation<RegisterType>(
    REGISTER,
    { refetchQueries: [{ query: AUTH_ME }] }
  )

  const onFinish = (values: RegisterFormType) => {
    register({ variables: { input: _.omit(values, ['confirm']) } })
  }

  return (
    <>
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
          <Form
            name="register"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: 'Ведіть ваше прізвище' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Прізвище"
              />
            </Form.Item>

            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Ведіть ваше ім'я" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ім'я"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Ведіть вашу пошту', type: 'email' },
              ]}
            >
              <Input
                size="large"
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Ведіть ваш пароль!',
                },
              ]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Повторіть ваш пароль!',
                },
                validTwoPassword,
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запам'яти мене</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 280 }}>
                Зареєструватись
              </Button>
            </Form.Item>
          </Form>

          <Link to={'/login'} className="auth__registerLink">
            Війти
          </Link>
        </Block>
      </div>
    </>
  )
}
