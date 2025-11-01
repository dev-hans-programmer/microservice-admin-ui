import { Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from 'antd';
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../components/icons/logo';

function LoginPage() {
   return (
      <Layout
         style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
      >
         <Space direction='vertical' align='center' size='large'>
            <Layout.Content
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <Logo />
            </Layout.Content>
            <Card
               variant='borderless'
               style={{
                  width: 300,
               }}
               title={
                  <Space
                     style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     }}
                  >
                     <LockFilled />
                     Sign In
                  </Space>
               }
            >
               <Form initialValues={{ remember: true }}>
                  <Form.Item
                     name='username'
                     rules={[
                        {
                           required: true,
                           message: 'Please input your username',
                        },
                     ]}
                  >
                     <Input prefix={<UserOutlined />} placeholder='Username' />
                  </Form.Item>
                  <Form.Item
                     name='password'
                     rules={[
                        {
                           required: true,
                           message: 'Please input your password',
                        },
                     ]}
                  >
                     <Input.Password
                        prefix={<LockOutlined />}
                        placeholder='Password'
                     />
                  </Form.Item>
                  <Flex justify='space-between'>
                     <Form.Item name='remember' valuePropName='checked'>
                        <Checkbox>Remember Me</Checkbox>
                     </Form.Item>
                     <a id='forgot-password-link' href=''>
                        Forgot password?
                     </a>
                  </Flex>

                  <Form.Item>
                     <Button
                        style={{ width: '100%' }}
                        type='primary'
                        htmlType='submit'
                     >
                        Log In
                     </Button>
                  </Form.Item>
               </Form>
            </Card>
         </Space>
      </Layout>
   );
}

export default LoginPage;
