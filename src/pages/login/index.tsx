import {
   Alert,
   Button,
   Card,
   Checkbox,
   Flex,
   Form,
   Input,
   Layout,
   Space,
} from 'antd';
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../components/icons/logo';
import { useMutation } from '@tanstack/react-query';
import type { Credentials } from '../../types';
import { getErrorMessage } from '../../utils/response';
import { login } from '../../http/auth';

import './login.css';

async function loginUser(payload: Credentials) {
   const { data } = await login(payload);
   return data;
}

function LoginPage() {
   const { isPending, error, isError, mutate } = useMutation({
      mutationKey: ['login'],
      mutationFn: loginUser,
   });

   function onSubmit(values: Credentials) {
      console.log(values);
      mutate(values);
   }

   return (
      <Layout className='login-page'>
         <Space direction='vertical' align='center' size='large'>
            <Layout.Content className='login-page__header'>
               <Logo />
            </Layout.Content>
            <Card
               variant='borderless'
               className='login-page__card'
               title={
                  <Space className='login-page__title-space'>
                     <LockFilled />
                     Sign In
                  </Space>
               }
            >
               <Form
                  className='login-page__form'
                  initialValues={{ remember: true }}
                  onFinish={onSubmit}
               >
                  {isError && (
                     <Alert
                        className='login-page__alert'
                        type='error'
                        message={getErrorMessage(error)}
                     />
                  )}

                  <Form.Item
                     name='email'
                     rules={[
                        { required: true, message: 'Please input your email' },
                     ]}
                  >
                     <Input prefix={<UserOutlined />} placeholder='Email' />
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

                  <Flex
                     justify='space-between'
                     className='login-page__footer-row'
                  >
                     <Form.Item name='remember' valuePropName='checked'>
                        <Checkbox>Remember Me</Checkbox>
                     </Form.Item>
                     <a className='login-page__forgot' href=''>
                        Forgot password?
                     </a>
                  </Flex>

                  <Form.Item>
                     <Button
                        className='login-page__submit'
                        type='primary'
                        htmlType='submit'
                        loading={isPending}
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
