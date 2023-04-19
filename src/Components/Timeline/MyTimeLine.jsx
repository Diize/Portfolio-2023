import React from 'react'
import { RiComputerLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import './MyTimeLine.scss'
import { useWindowSize } from '../../Utils/usewindowsize';
import { MantineProvider, Text, Timeline, Center, Title, Box, Image } from '@mantine/core';

const MyTimeLine = () => {


  const deviceWidth = useWindowSize().width;
  const isMobile = deviceWidth < 767;
  const isTablet = deviceWidth >= 600 && deviceWidth < 960;



  const renderTimeLine = () => {
    return (
      <Timeline active={3} bulletSize={24} lineWidth={2} mt="xl" className='timeline'>
        <Timeline.Item bullet={<RiComputerLine size={15} color={'white'} />} title="Introduced to IT" style={{ color: 'white' }}>
          <Text color="dimmed" size="sm">I first got introduced to IT by gaming.</Text>
          <Text size="xs" mt={4}>Year 2005</Text>
        </Timeline.Item>

        <Timeline.Item bullet={<FaUserGraduate size={15} color={'white'} />} title="Graduated from Secondary Highschool" style={{ color: 'white' }}>
          <Text color="dimmed" size="sm">After graduating highschool i did not have a clear path of what i wanted to do in life.</Text>
          <Text size="xs" mt={4}>Year 2013</Text>
        </Timeline.Item>

        <Timeline.Item title="Introduced to programming" bullet={<FaCode size={15} color={'white'} />} lineVariant="dashed" style={{ color: 'white' }}>
          <Text color="dimmed" size="sm">I first got introduced to programming by scripting in FiveM (gaming community)</Text>
          <Text size="xs" mt={4}>Year 2020</Text>
        </Timeline.Item>

        <Timeline.Item title="Graduated from college" bullet={<FaUserGraduate size={15} color={'white'} />} style={{ color: 'white' }}>
          <Text color="dimmed" size="sm">I graduated as a software developer... I learned a ton!</Text>
          <Text size="xs" mt={4}>Year 2022</Text>
        </Timeline.Item>
      </Timeline>
    )
  }

  return (
    <MantineProvider>
      <Center>
        <div className='timelineMain'>
          <Image
            radius="md"
            src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/240454324_10223267281982626_2831493444717198091_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Bq8kZJNs2aEAX-ZjxzG&_nc_ht=scontent-arn2-1.xx&oh=00_AfAgHQVl31RbtqYUDjt864lZeBieUa4i7je55UaXmEcKww&oe=644336D3"
            alt="me.jpg"
            height={!isMobile? 500: 430}
            width={!isMobile? 400: 330}
            className='image'
            mx={!isMobile? 35: 25}
          />
          {renderTimeLine()}
        </div>
      </Center>
    </MantineProvider>
  );
}

export default MyTimeLine