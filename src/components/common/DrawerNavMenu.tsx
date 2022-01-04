import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { styled, theme } from '@/utilities/stitches'
import { NavMenu } from '@/components/common/NavMenu'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export const DrawerNavMenu: React.FC<PropsWithClassname> = ({
  className,
}) => {
  const [ isOpen, setOpen ] = useState(false)

  return (
    <>
      <ToggleButton
        type='button'
        className={className}
        onClick={() => setOpen(!isOpen)}>
        <ToggleButtonIcon icon={faBars} />
      </ToggleButton>

      <Drawer
        onClick={() => setOpen(false)}
        visibility={isOpen ? 'show' : 'hide'}>
        <Nav />

        <ToggleButton
          type='button'
          shape='contained'
          onClick={() => setOpen(false)}>
          <ToggleButtonIcon
            size='large'
            icon={faTimesCircle} />
        </ToggleButton>
      </Drawer>
    </>
  )
}

const ToggleButton = styled(
  'button',
  {
    background: 'transparent',
    border: 'none',
    variants: {
      shape: {
        contained: {
          padding: '$littler',
          backgroundColor: theme.background.plain,
          borderRadius: '$rounded',
        },
      },
    },
  },
)

const ToggleButtonIcon = styled(
  FontAwesomeIcon,
  {
    color: '$text',
    fontSize: '1.5em',
    variants: {
      size: {
        large: {
          fontSize: '3em',
        },
      },
    },
  },
)

const Drawer = styled(
  'div',
  {
    backdropFilter: 'blur(6px)',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    fixedFilled: 0,
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 600ms ease-in-out',
    variants: {
      visibility: {
        show: {
          opacity: 1,
        },
        hide: {
          display: 'none',
          opacity: 0,
        },
      },
    },
    defaultVariants: {
      visibility: 'hide',
    },
  },
)

const Nav = styled(
  NavMenu,
  {
    backgroundColor: theme.background.plain,
    marginBottom: '$great',
  },
)
