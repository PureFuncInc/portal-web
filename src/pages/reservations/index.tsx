import React from 'react'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { useUser } from '@/utilities/hooks/useUser'

const ReservationsIndexPage: React.FC = () => {
  const [ currentUser, signIn ] = useUser()

  const handleSignIn = () => {
    signIn()
  }

  return (
    <SimpleLayout title='Reservations'>

      <button
        type='button'
        onClick={handleSignIn}>
        Sign In
      </button>

      <pre>
        {currentUser?.token}
      </pre>
    </SimpleLayout>
  )
}

export default ReservationsIndexPage
