import React from 'react'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PageTitle } from '@/components/common/PageTitle'
import { EveryoneDisplay } from '@/components/about-us/EveryoneDisplay'

const PeoplePage: React.FC = () => {
  return (
    <SimpleLayout title='人物'>
      <PageTitle>
        人物
      </PageTitle>

      <EveryoneDisplay />
    </SimpleLayout>
  )
}

export default PeoplePage
