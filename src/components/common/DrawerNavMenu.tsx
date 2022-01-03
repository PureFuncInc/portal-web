import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

      <Drawer visibility={isOpen ? 'show' : 'hide'}>
        <Nav />
      </Drawer>
    </>
  )
}

const ToggleButton = styled(
  'button',
  {
    background: 'transparent',
    border: 'none',
    width: '1.5em',
    height: '1.5em',
  },
)

const ToggleButtonIcon = styled(
  FontAwesomeIcon,
  {
    color: '$text',
    fontSize: '1.5em',
  },
)

const Drawer = styled(
  'div',
  {
    backdropFilter: 'blur(6px)',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    fixedFilled: 0,
    zIndex: 100,
    variants: {
      visibility: {
        show: {
          display: 'flex',
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
    position: 'absolute',
    bottom: '5vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.background.plain,
  },
)
