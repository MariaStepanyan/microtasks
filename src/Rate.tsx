type CurrentMoneyType = {
  banknote: string
  nominal: number
  number: string
}

type RatePropsType = {
  onClickFilterHandler: Function
  currentMoney: Array<CurrentMoneyType>
}

export const Rate = (props: RatePropsType) => {
  const {onClickFilterHandler, currentMoney} = props
  return (
    <>
      <ul>
        {currentMoney.map((objFromMoneyArr: CurrentMoneyType, index: number) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span> {objFromMoneyArr.nominal}</span>
              <span> {objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <button onClick={() => onClickFilterHandler('all')}>all</button>
      <button onClick={() => onClickFilterHandler('dollars')}>dollars</button>
      <button onClick={() => onClickFilterHandler('rubles')}>rubles</button>
    </>
  )
}
