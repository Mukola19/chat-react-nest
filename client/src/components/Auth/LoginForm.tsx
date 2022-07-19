import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Checkbox, Form, Input, Button } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { LoginFormType } from '../../types/AuthTypes'
import { Block } from '../../commons/Block/Block'
import { LOGIN } from '../../api/auth/auth.mutation'
import './Auth.scss'

export const LoginForm: React.FC = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  useEffect(() => {
    console.log(data)
  }, [data])

  const [form] = Form.useForm()
  const onFinish = (values: LoginFormType) => {
    login({ variables: { input: values } })
  }

  return (
    <>
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="login"
            className="login-form"
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
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
              rules={[{ required: true, message: 'Ведіть ваш пароль' }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запам'яти мене</Checkbox>
              </Form.Item>

              <NavLink to={'/login'}>Забули пароль</NavLink>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: 280 }}>
                Війти
              </Button>
            </Form.Item>
            <Link to={'/register'} className="auth__registerLink">
              Зареєструватись
            </Link>

            <Link to={'/register'} className="auth__forgotLink">
              Forgot password
            </Link>
          </Form>
        </Block>
      </div>
    </>
  )
}
