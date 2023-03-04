import { Link } from 'react-router-dom'

import { PageTitle } from '@/components/layouts'
import { useCardList } from '@/pages/card-list/hooks'

/**
 * Todo: 카드 종류 추가하고 나서 카드 컴포넌트 분리하기
 */
function CardList() {
  const { cardList, onClickCard } = useCardList()

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle addtionalClassName="mb-10" title="보유 카드" />
        </div>
        {cardList?.map((card) => {
          const {
            cardNumbers: { first, second, third, fourth },
            owner,
            name,
            nickname,
            expiredMonth,
            expiredYear,
          } = card
          return (
            <div key={card.nickname} onClick={() => onClickCard(card)}>
              <div className="card-box">
                <div className="small-card">
                  <div className="card-top">
                    <span className="card-text">{name}</span>
                  </div>
                  <div className="card-middle">
                    <div className="small-card__chip" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom__number">
                      <span className="card-text">{`${first} - ${second} - ${third} - ${fourth}`}</span>
                    </div>
                    <div className="card-bottom__info">
                      <span className="card-text">{owner}</span>
                      <span className="card-text">{`${expiredMonth} / ${expiredYear}`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="card-nickname">{nickname}</span>
            </div>
          )
        })}
        <Link to="/card-add" style={{ textDecoration: 'none' }}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardList
