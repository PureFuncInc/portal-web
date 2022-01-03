import React, { useMemo } from 'react'
import { getTime } from 'date-fns'
import { styled } from '@/utilities/stitches'
import { formatDateTime, parseDateTime } from '@/utilities/DateTime'
import type { PropsWithClassname } from '@/utilities/PropsWithClassname'

export interface DateTimeDisplayProps {
  dateTime: Date | number | string | undefined | null
  form?: string | { format?: string; parse?: string }
}

export const DateTimeDisplay: React.FC<PropsWithClassname<DateTimeDisplayProps>> = ({
  dateTime,
  form,
  className,
}) => {
  const { format: formatForm, parse: parseForm } = useMemo(
    () => {
      if (!form) {
        return { format: undefined, parse: undefined }
      } else if (typeof form === 'string') {
        return { format: form, parse: form }
      }

      return form
    },
    [ form ],
  )

  const dateTimeEnsured = useMemo(
    () => {
      if (typeof dateTime === 'number') {
        return dateTime
      } else if (typeof dateTime === 'string') {
        return parseDateTime(
          dateTime,
          parseForm,
        )
      } else if (dateTime instanceof Date) {
        return getTime(dateTime)
      }

      return Date.now()
    },
    [ dateTime, parseForm ],
  )

  const formatted = useMemo(
    () => {
      return formatDateTime(
        dateTimeEnsured,
        formatForm,
      )
    },
    [ dateTimeEnsured, formatForm ],
  )

  return (
    <Container className={className}>
      {formatted}
    </Container>
  )
}

const Container = styled(
  'span',
  {},
)
