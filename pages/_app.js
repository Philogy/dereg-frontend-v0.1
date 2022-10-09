import React from 'react'
import 'antd/dist/antd.css'
import '/styles/globals.css'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
const { Header, Footer, Content } = Layout

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/create">Create App</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default MyApp
