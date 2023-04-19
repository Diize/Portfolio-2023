import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useWindowSize } from '../../Utils/usewindowsize';
import './Header.scss';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
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

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

}));


export function HeaderAction() {

  const deviceWidth = useWindowSize().width;
  const isMobile = deviceWidth < 767;
  // const isTablet = deviceWidth >= 600 && deviceWidth < 960;



  const links = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Projects',
      link: '/'
    },
    {
      label: 'Contact',
      link: '/contact'
    },
    {
      label: 'Test',
      link: '/'
    },
  ]

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].label);
  const { classes } = useStyles();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.label);
        // close();
      }}
    >
      {
        active === link.label ?
          <Button variant="light" fullWidth={isMobile? true: false}>
            {link.label}
          </Button> :
          <Button variant="light" color="gray" fullWidth={isMobile? true: false}>
            {link.label}
          </Button>
      }
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <div className="logo"><b>F<span>L</span></b></div>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
