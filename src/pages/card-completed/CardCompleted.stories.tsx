import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'

import CardCompleted from './CardCompleted'
import { useCardCompleted } from './hooks'

/**
 * onClickDeleteButton, handlePreNavigation도 테스트하려면?
 */
export default {
  title: '페이먼츠 미션/Pages/CardCompleted',
  component: CardCompleted,
  decorators: [withKnobs],
} as ComponentMeta<typeof CardCompleted>

const Template: ComponentStory<typeof CardCompleted> = () => {
  const { nicknameRef } = useCardCompleted()

  const cardNumbers = text('name', '1111-2222-3333-4444')
  const cardExpiredDate = text('expiredDate', '12/31')
  const cardOwner = text('owner', '리액트')
  const cardNickname = text('nickname', 'TDD')
  const cardName = text('name', '클린코드')

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드등록이 완료되었습니다." />
        </div>
        <BigCard
          cardNumbers={cardNumbers}
          cardName={cardName}
          cardOwner={cardOwner}
          cardExpiredDate={cardExpiredDate}
        />
        <div className="input-container flex-center w-100">
          <input
            ref={nicknameRef}
            defaultValue={cardNickname}
            className="input-underline w-75"
            type="text"
            placeholder="카드 별칭 (선택)"
            maxLength={10}
          />
        </div>
        <NavigationTextButton additionalClassNames="mt-50" to="/" text="다음" />
      </div>
    </div>
  )
}

export const basic = Template.bind({})
