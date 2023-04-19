import React from 'react'
import './Contact.scss'
import { MantineProvider } from '@mantine/core'
import { TextInput, Checkbox, Button, Group, Box, Title, Input } from '@mantine/core';
import { FaPencilAlt } from 'react-icons/fa';
import { useForm } from '@mantine/form';
import { HeaderAction } from '../Header/Header';
const Contact = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });





  return (
    <MantineProvider theme={{
      colorScheme: 'dark', colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#f7f7f7', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }} withGlobalStyles withNormalizeCSS>
      <HeaderAction/>
      <div className='contact-main'>
        <Box w={345} mb={55} ml={15}>
          <Title order={1} className="title">Send me a <span style={{ color: '#7AD1DD' }}>email</span>! 📧</Title>
        </Box>
        <Box w={300} mx="auto" >
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              radius="xs"
              {...form.getInputProps('email')}
            />

            <TextInput
              icon={<FaPencilAlt />}
              placeholder="Your message.."
              radius="xs"
              mt={25}
              size="xl"
            />

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      </div>
    </MantineProvider>
  )
}

export default Contact