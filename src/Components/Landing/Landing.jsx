import React, { useEffect } from 'react'
import './Landing.scss';
import { MantineProvider, Title, Center, Text, Stack, Button, Image } from '@mantine/core';
import { FaArrowDown } from 'react-icons/fa';
import { HeaderAction } from '../Header/Header';
import { useWindowSize } from '../../Utils/usewindowsize';
import MyTimeLine from '../Timeline/MyTimeLine';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect/dist/core';
import VerticalSocials from '../VerticalSocials/VerticalSocials';


const Landing = () => {
  const deviceWidth = useWindowSize().width;
  const isMobile = deviceWidth < 767;
  // const isTablet = deviceWidth >= 600 && deviceWidth < 960;

  var app = document.getElementById('typewriterdiv');
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  useEffect(() => {
    typewriter
      .pauseFor(1500)
      .typeString('<span style="color: #01e1ff;">if(anxious) { <strong>code();<strong/> }</span>')
      .pauseFor(300)
      .deleteChars(24)
      .typeString('<span style="color: #01e1ff;">if(bored) { <strong>code();<strong/> }</span>')
      .deleteChars(23)
      .typeString('<span style="color: #ff0901;"> { setTimeout(() => {<strong>repeat();<strong/>}, 8h) }.</span>')
      .pauseFor(1000)
      .start();
  })

  return (
    <MantineProvider theme={{
      colorScheme: 'dark', colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }} withGlobalStyles withNormalizeCSS>
      <HeaderAction />
      <div className='main'>
        {!isMobile && <VerticalSocials />}
        <Center>
          <Title order={1} className="title">I'm <span style={{ color: '#7AD1DD' }}>Freddy</span>, a software developer! <span className='emoji'>👋</span></Title>
          <div id="typewriterdiv" style={{ position: 'absolute' }} />
        </Center>
        <Stack align="center" spacing="lg">
          <Image maw={550} mx="auto" radius="md" mt={50} src="https://i.imgur.com/F2TPAIi.gif" alt="Intro Pic" className="programmerphoto" />
          <Text className='subtext'>This is my personal space where i share my experiences, my knowledge, my prior projects and everything in between! Click below to find out more about me! 👇</Text>
          <Link to="mytimelineWrapper" smooth={true} duration={1000} offset={!isMobile ? -300 : -100}>
            <Button variant="outline" radius="xs" size="md" rightIcon={<FaArrowDown />} sx={{ color: '#7AD1DD', borderColor: 'white' }} >
              Learn more about me.
            </Button>
          </Link>
        </Stack>
      </div>
      <div id="mytimelineWrapper">
        <MyTimeLine />
      </div>
    </MantineProvider>
  )
}

export default Landing