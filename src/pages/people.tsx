import React from 'react'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'

const PeoplePage: React.FC = () => {
  return (
    <SimpleLayout title='人物'>
      <PageTitle>
        人物
      </PageTitle>
    </SimpleLayout>
  )
}

export default PeoplePage
