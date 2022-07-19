import React from 'react'
import { EllipsisOutlined, FormOutlined, TeamOutlined } from '@ant-design/icons'
import Search from 'antd/lib/input/Search'
import dialogsJson from '../../dialogs.json'
import { DialogItem } from '../../commons/DialogItem/DialogItem'
import { Dialogs } from '../../commons/Dialogs/Dialogs'
import { Message } from '../../commons/Message/Message'
import { Status } from '../../commons/Status/Status'
import { Input } from 'antd'
import { ChatInput } from '../../commons/ChatInput/ChatInput'
import { Messages } from '../../commons/Messages/Messages'
import './Home.page.scss'

export const HomePage = () => {
  return (
    <section className="home">
      <div className="chat">


        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Список діалогів</span>
            </div>
            <FormOutlined />
          </div>

          <div className="chat__sidebar-search">
            <Search
              placeholder="Пошук серед контактів"
              onSearch={(value) => console.log(value)}
            />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs items={dialogsJson} userId={'2'} currentDialogId={'1'} />
          </div>
        </div>





        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Mykola Melnuk</b>
              <div className="chat__dialog-header-status">
                <Status online={false} />
              </div>
            </div>

            <EllipsisOutlined style={{ fontSize: 20 }} />
          </div>
          <div className="chat__dialog-messages">
            <Messages messages={[]} />
          </div>

          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>

      <>
        {/* <Message
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

<Dialogs
        items={[
          {
            id: String(Math.random()),
            text: 'asdsasadsda',
            isReaded: false,
            author: {
              id:'asd'
            },
            created_at: 'Fri Jun 24 2022 19:56:36 GMT+0300 ',
            partner: {
              id: String(Math.random()),
              fullName: 'pwoqwe asd',
              photoUrl: '',
              isOnline: true,
            },

            lastMessage: {
              unreaded: 0,
              text: 'Hello',
              attachments: [],
              user: {
                id: '34',
              },
            },
          },

          {
            id: String(Math.random()),
            text: 'asfAFSA',
            author: {
              id:'asd'
            },
            isReaded: false,
            created_at: 'Fri Jun 24 2022 18:56:36 GMT+0300 ',
            partner: {
              id: String(Math.random()),
              fullName: 'Mykola Melnuk',
              photoUrl: '',
              isOnline: false,
            },
            lastMessage: {
              unreaded: 0,
              text: 'Hello',
              attachments: [],
              user: {
                id: '34',
              },
            },
          },
        ]}
        userId={'1'}
        currentDialogId={'1'}
      /> */}

        {/* <Message
        userName="Mykola"
        date="Thu Jun 23 2022 14:46:45 GMT+0300"
        photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Photos_icon_%282020%29.svg/1200px-Google_Photos_icon_%282020%29.svg.png"
        isMe={false}
        audio={'https://bestringtones.net/music/guitar-tiktok.mp3'}

      /> */}
      </>
    </section>
  )
}
