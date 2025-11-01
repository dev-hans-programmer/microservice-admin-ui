import { Button, Card, Checkbox, Form, Input, Layout, Space } from 'antd';
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../components/icons/logo';

function LoginPage() {
   return (
      <>
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
                  <Form>
                     <Form.Item
                        name='username'
                        rules={[
                           {
                              required: true,
                              message: 'Please input your username',
                           },
                        ]}
                     >
                        <Input
                           prefix={<UserOutlined />}
                           placeholder='Username'
                        />
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
                     <Form.Item>
                        <Checkbox>Remember Me</Checkbox>
                        <a href=''>Forgot password?</a>
                     </Form.Item>
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
      </>
   );
}

export default LoginPage;
