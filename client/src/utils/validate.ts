import { FormInstance } from 'antd'
import { RuleObject } from 'antd/lib/form'

export const validTwoPassword = ({ getFieldValue }: any):any => ({
  validator(_: RuleObject, value: any) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Паролі не співпадають!'))
  },
})
