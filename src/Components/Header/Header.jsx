import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaPencilAlt } from 'react-icons/fa';
import { TbSunHigh } from 'react-icons/tb';
import './Header.scss';
import React from 'react'


const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));


export function HeaderAction() {

  const links = [
    {
      link: 'www.google.se',
      label: 'Home',
    },
    {
      link: 'Blog Space',
      label: 'Blog Space',
      icon: <FaPencilAlt/>,
    },
    {
      link: 'www.google.se',
      label: 'My Projects'
    },
    {
      link: '/contact',
      label: 'Contact Me'
    },
  ]
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links?.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
       {link.label} <span className='icon'>{link.icon && link.icon}</span>
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <div class="logo"><b>F<span>L</span></b></div>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button radius="xl" h={30}>
          <TbSunHigh/>
        </Button>
      </Container>
    </Header>
  );
}