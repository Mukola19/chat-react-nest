import React from 'react'
import { Empty } from 'antd'
import { Message } from '../Message/Message'

type TypeProps = {
  messages: any[]
}

export const Messages: React.FC<TypeProps> = ({ messages }) => {
  if (messages.length === 0) {
    return <Empty className='chat__dialog-messages-' description={'Немає повідомлень'}  />
  }

  return (
    <>
      <Message
        userName="Mykola"
        date="Thu Jun 23 2022 14:46:45 GMT+0300"
        text="asdasdkasmfokmsnakfnkosnf asf asf sa saf sa  ojsankonadsvknv  , mmasfmAAAAAAAAAAAAAAAAAAAAAAAAS"
        photoUrl="https://lh3.googleusercontent.com/k3vUYOX8j08lSaA9iVxolAb9YXaVi2fT4cveo8L7UyZ4YMzLbaJc01PZ_wEuKo6fUjEvkCdCjcq0lWkhN6tMIMtIC8HMEvjrRmll4OFrXJ0XXx4fXfkjxE47kajeETbCzLMw9XhzixrcbSgFpTQ096LVdXRwLWA4V9Ttv2YMO4HbQ_nTZKD2qugQiWKAfBP0_TpS8c8MouO753cWl56Q5ySBbTGO6zd4GYJKdWA3xoli0XO6qy-MLrROMz6vJXg1RHYBZVG706_Du40pbhWVEXqczvAHanLyFWqGHRdG8KIgpUhnZCWMr8zsbcj4-nAq0WRVAXdUMKDqThuEx1XPsPwTgyjuOLdUskW8NtGECnOoJ_N6Sg2c-ndXW6e0T0q6wq30Dqf5W6UnQoUTFyuQNNi-jYYmjEfLGesAt50_TOXCvyZLsSY1HD1xP2wLSZ0ywQu2whqVCPWIshLm0e04CD0Vw6mZHbXMS06_CF2mNSg_f1_3UdqlcCerwLYvONMYhAUvRRL99gLDyuT0oXpaOCxrrH2mIlYj6pg8CfHkUkYZ8VfmZm9_rnZcFWVkghR9WhFJFRDpxRAZkc9lQ1Q343vk82pWIZXF6Vkhk4chew8GY8AtQlDNmxNm3UoEcIHtnqxwKlddx8TFOvJ2vMJxky7rS7soI9_99igrHDHr8LwsXFqhr-dhWq3L7z5-Sh9J8yTlt4tdK0o-yfBLCHVqKrklDH0ABkpB5j7kV8iNAvrn56xUulVm7cy-Z1SCxQ=w709-h948-no?authuser=0"
        isMe={false}
        attachments={[
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
        ]}
      />
      <Message
        userName="Mykola"
        date="Thu Jun 23 2022 14:46:45 GMT+0300"
        text="asdasdkasmfokmsnakfnkosnf asf asf sa saf sa  ojsankonadsvknv  , mmasfmAAAAAAAAAAAAAAAAAAAAAAAAS"
        photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png"
        isMe={true}
      />
      <Message
        userName="Mykola"
        date="Thu Jun 23 2022 14:46:45 GMT+0300"
        text="asdasdkasmfokmsnakfnkosnf asf asf sa saf sa  ojsankonadsvknv  , mmasfmAAAAAAAAAAAAAAAAAAAAAAAAS"
        photoUrl="https://lh3.googleusercontent.com/k3vUYOX8j08lSaA9iVxolAb9YXaVi2fT4cveo8L7UyZ4YMzLbaJc01PZ_wEuKo6fUjEvkCdCjcq0lWkhN6tMIMtIC8HMEvjrRmll4OFrXJ0XXx4fXfkjxE47kajeETbCzLMw9XhzixrcbSgFpTQ096LVdXRwLWA4V9Ttv2YMO4HbQ_nTZKD2qugQiWKAfBP0_TpS8c8MouO753cWl56Q5ySBbTGO6zd4GYJKdWA3xoli0XO6qy-MLrROMz6vJXg1RHYBZVG706_Du40pbhWVEXqczvAHanLyFWqGHRdG8KIgpUhnZCWMr8zsbcj4-nAq0WRVAXdUMKDqThuEx1XPsPwTgyjuOLdUskW8NtGECnOoJ_N6Sg2c-ndXW6e0T0q6wq30Dqf5W6UnQoUTFyuQNNi-jYYmjEfLGesAt50_TOXCvyZLsSY1HD1xP2wLSZ0ywQu2whqVCPWIshLm0e04CD0Vw6mZHbXMS06_CF2mNSg_f1_3UdqlcCerwLYvONMYhAUvRRL99gLDyuT0oXpaOCxrrH2mIlYj6pg8CfHkUkYZ8VfmZm9_rnZcFWVkghR9WhFJFRDpxRAZkc9lQ1Q343vk82pWIZXF6Vkhk4chew8GY8AtQlDNmxNm3UoEcIHtnqxwKlddx8TFOvJ2vMJxky7rS7soI9_99igrHDHr8LwsXFqhr-dhWq3L7z5-Sh9J8yTlt4tdK0o-yfBLCHVqKrklDH0ABkpB5j7kV8iNAvrn56xUulVm7cy-Z1SCxQ=w709-h948-no?authuser=0"
        isMe={false}
        attachments={[
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
        ]}
      />
      <Message
        userName="Mykola"
        date="Thu Jun 23 2022 14:46:45 GMT+0300"
        text="asdasdkasmfokmsnakfnkosnf asf asf sa saf sa  ojsankonadsvknv  , mmasfmAAAAAAAAAAAAAAAAAAAAAAAAS"
        photoUrl="https://lh3.googleusercontent.com/k3vUYOX8j08lSaA9iVxolAb9YXaVi2fT4cveo8L7UyZ4YMzLbaJc01PZ_wEuKo6fUjEvkCdCjcq0lWkhN6tMIMtIC8HMEvjrRmll4OFrXJ0XXx4fXfkjxE47kajeETbCzLMw9XhzixrcbSgFpTQ096LVdXRwLWA4V9Ttv2YMO4HbQ_nTZKD2qugQiWKAfBP0_TpS8c8MouO753cWl56Q5ySBbTGO6zd4GYJKdWA3xoli0XO6qy-MLrROMz6vJXg1RHYBZVG706_Du40pbhWVEXqczvAHanLyFWqGHRdG8KIgpUhnZCWMr8zsbcj4-nAq0WRVAXdUMKDqThuEx1XPsPwTgyjuOLdUskW8NtGECnOoJ_N6Sg2c-ndXW6e0T0q6wq30Dqf5W6UnQoUTFyuQNNi-jYYmjEfLGesAt50_TOXCvyZLsSY1HD1xP2wLSZ0ywQu2whqVCPWIshLm0e04CD0Vw6mZHbXMS06_CF2mNSg_f1_3UdqlcCerwLYvONMYhAUvRRL99gLDyuT0oXpaOCxrrH2mIlYj6pg8CfHkUkYZ8VfmZm9_rnZcFWVkghR9WhFJFRDpxRAZkc9lQ1Q343vk82pWIZXF6Vkhk4chew8GY8AtQlDNmxNm3UoEcIHtnqxwKlddx8TFOvJ2vMJxky7rS7soI9_99igrHDHr8LwsXFqhr-dhWq3L7z5-Sh9J8yTlt4tdK0o-yfBLCHVqKrklDH0ABkpB5j7kV8iNAvrn56xUulVm7cy-Z1SCxQ=w709-h948-no?authuser=0"
        isMe={false}
        attachments={[
          {
            filename: 'Feri',
            url: 'https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&quality=85&auto=format&fit=max&s=ea0bee8bde5d31ed3c9d97f5158cf207',
          },
        ]}
      />
      <Message
        userName="Mykola"
        photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png"
        isTyping
      />
    </>
  )
}
