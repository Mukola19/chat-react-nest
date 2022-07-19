import React, { useEffect, useState } from 'react'
import { Result, Button, Spin } from 'antd'
import { Block } from '../../commons/Block/Block'
import { ResultStatusType } from 'antd/lib/result'

const renderTextInfo = ({ hash, verified }: any) => {
  if (hash) {
    if (verified) {
      return {
        status: 'success' as ResultStatusType,
        title: 'Готово!',
        message: 'Аккаунт успешно подтвержден!',
      }
    } else {
      return {
        status: 'error' as ResultStatusType,
        title: 'Ошибка',
        message: 'Вы указали несуществующий или неверный хеш.',
      }
    }
  } else {
    return {
      status: 'info' as ResultStatusType,
      title: 'Подтвердите почту',
      message: 'Ссылка с подтверждением аккаунта отправлена на E-Mail.',
    }
  }
}

export const CheckEmailInfo = ({ location, history }: any) => {
  const hash = location.search.split('hash=')[1]
  const [verified, setVerified] = useState(false)
  const [checking, setChecking] = useState(!!hash)
  const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }))

  const setStatus = ({ checking, verified }: any) => {
    setInfo(renderTextInfo({ hash, checking, verified }))
    setVerified(verified)
    setChecking(checking)
  }

  console.log({ info, checking, verified, hash })

  return (
    <div className="verify-block">
      <Block>
        {!checking ? (
          <Result
            status={info.status}
            title={info.title}
            subTitle={info.message}
            extra={
              info.status === 'success' &&
              verified && (
                <Button type="primary" onClick={() => history.push('/signin')}>
                  Войти
                </Button>
              )
            }
          />
        ) : (
          <div className="verify-block__loading">
            <Spin size="large" />
          </div>
        )}
      </Block>
    </div>
  )
}

