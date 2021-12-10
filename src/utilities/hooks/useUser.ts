import { useGoogleAuth } from 'react-gapi-auth2'
import { useCallback, useEffect, useState } from 'react'
import ky from 'ky'

export interface User {
  displayName: string | undefined
  token: string | undefined
}

export function useUser(): readonly [User | undefined, ()=> void] {
  const { googleAuth } = useGoogleAuth()
  const [ token, setToken ] = useState<string | undefined>()
  const [ displayName, setDisplayName ] = useState<string | undefined>()

  useEffect(
    () => {
      const currentUser = googleAuth?.currentUser.get()

      if (currentUser) {
        setDisplayName(
          currentUser.getBasicProfile()
            .getName(),
        )
      }
    },
    [ googleAuth?.currentUser ],
  )

  const handleSignIn = useCallback(
    async () => {
      const currentUser = await googleAuth?.signIn()

      if (currentUser) {
        await currentUser.grantOfflineAccess()
          .then(({ code }) =>
            ky.post(
              'api/v1.0/auth/google',
              {
                json: { code },
                prefixUrl: process.env.SERVICE_API_URL,
              },
            ))
      }
    },
    [ googleAuth ],
  )

  return [
    {
      displayName,
      token,
    },
    handleSignIn,
  ] as const
}
