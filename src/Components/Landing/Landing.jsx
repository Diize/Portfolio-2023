import React from 'react'
import './Landing.scss';
import { MantineProvider, Title, Center, Text, Stack } from '@mantine/core';
import { BsArrowDown } from 'react-icons/bs';
import { FaArrowDown } from 'react-icons/fa';

import { Button, Container, Paper } from '@mantine/core';
const Landing = () => {
  return (
    <MantineProvider theme={{
        colorScheme: 'dark', colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }} withGlobalStyles withNormalizeCSS>
        <Center mx="auto" className="main">
          <Stack>
            <Title order={1} className="title" color="ocean-blue">Im Freddy, a software developer! 👋</Title>
            <Text>Welcome to my portfolio.</Text>
          </Stack>
          <div className='readmore'>
            <Text>Learn more about me..</Text>
            <FaArrowDown className='arrowdown' />
          </div>
        </Center>
      </MantineProvider>
  )
}

export default Landing