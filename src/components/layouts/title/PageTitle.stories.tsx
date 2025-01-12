import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BackButton } from '@/components/button'

import PageTitle from './PageTitle'

export default {
  title: '페이먼츠 미션/Components/Layout/Title',
  component: PageTitle,
  args: {
    title: '카드 추가',
    buttonElement: <BackButton />,
  },
} as ComponentMeta<typeof PageTitle>

const Template: ComponentStory<typeof PageTitle> = (props) => (
  <div className="root">
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle {...props} />
      </div>
    </div>
  </div>
)

export const basic = Template.bind({})

export const type1 = Template.bind({})
type1.args = {
  title: '보유 카드',
  buttonElement: <BackButton />,
}

export const type2 = Template.bind({})
type2.args = {
  title: '카드등록이 완료되었습니다.',
  buttonElement: <BackButton />,
}

export const type3 = Template.bind({})
type3.args = {
  title: '카드 추가',
  buttonElement: <BackButton />,
  addtionalClassName: 'mb-10',
}

export const type4 = Template.bind({})
type4.args = {
  title: '보유 카드',
  buttonElement: <BackButton />,
  addtionalClassName: 'mb-10',
}

export const type5 = Template.bind({})
type5.args = {
  title: '카드등록이 완료되었습니다.',
  buttonElement: <BackButton />,
  addtionalClassName: 'mb-10',
}

export const type6 = Template.bind({})
type6.args = {
  title: '카드 추가',
  buttonElement: <button>Back</button>,
  addtionalClassName: 'mb-10',
}
