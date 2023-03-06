import { RefObject } from 'react'

import { Input } from '@/components/input'

interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
}

const CardSecurityCode = ({ securityCodeRef }: CardSecurityCodeProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input ref={securityCodeRef} type="password" maxLength={3} addtionalClassName="w-25" />
    </div>
  )
}

export default CardSecurityCode
