import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'

import { useCardInfo } from '@/pages/hooks'

import CardSecurityCode from './CardSecurityCode'

export default {
  title: '페이먼츠 미션/Pages/CardAdd/CardForm/CardSecurityCode',
  component: CardSecurityCode,
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = () => {
  const { handleSecurityCode } = useCardInfo()
  const securityCodeRef = useRef<HTMLInputElement>(null)
  return (
    <div className="root">
      <div className="app">
        <CardSecurityCode securityCodeRef={securityCodeRef} handleChange={handleSecurityCode} />
      </div>
    </div>
  )
}

export const basic = Template.bind({})