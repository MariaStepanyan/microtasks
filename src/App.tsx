import React, { useState } from 'react'
import { Rate } from './Rate'

type FilterType = 'all' | 'dollars' | 'rubles'

function App() {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: 'a123456789' },
    { banknote: 'dollar', nominal: 50, number: 'b123456789' },
    { banknote: 'ruble', nominal: 100, number: 'c123456789' },
    { banknote: 'dollar', nominal: 100, number: 'd123456789' },
    { banknote: 'dollar', nominal: 50, number: 'e123456789' },
    { banknote: 'ruble', nominal: 100, number: 'f123456789' },
    { banknote: 'dollar', nominal: 50, number: 'j123456789' },
    { banknote: 'ruble', nominal: 50, number: 'h123456789' },
  ])

  const [filter, setfilter] = useState<FilterType>('all')
  let currentMoney = money
  if (filter === 'rubles') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'ruble'
    )
  }
  if (filter === 'dollars') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'dollar'
    )
  }
  const onClickFilterHandler = (buttonName: FilterType) => {
    setfilter(buttonName)
  }
  return (
    <>
      <Rate onClickFilterHandler = {onClickFilterHandler} currentMoney = {currentMoney}/>
    </>
  )
}

export default App

// microtask for useState

// function App() {
//   let [a, setA] = useState(1)
//   const onClickHandler = () => {
//     setA(++a)
//   }

//   const onClickHandlerReset = () => {
//     setA(a=0)
//   }

//   return (
//     <div className="App">
//       <h1>{a}</h1>
//       <button onClick={onClickHandler}>number</button>
//       <button onClick={onClickHandlerReset}>0</button>
//     </div>
//   )
// }

// export default App

//microtask for button

// function App() {
//   const foo1 = () => {
//     console.log(100200)
//   }
//   const foo2 = (num: number) => {
//     console.log(num)
//   }
//   return (
//     <div className="App">
//       <button onClick={foo1}>1</button>
//       <button onClick={(event) => foo2(100200)}>2</button>
//     </div>
//   )
// }

// export default App

//microtask for NewComponent

// import React, {useState} from 'react';
// import { NewComponent } from './NewComponent';

// function App() {
//     const [students, setStudents] = useState([
//             {id: 1, name: "James", age: 8},
//             {id: 2, name: "Robert", age: 18},
//             {id: 3, name: "John", age: 28},
//             {id: 4, name: "Michael", age: 38},
//             {id: 5, name: "William", age: 48},
//             {id: 6, name: "David", age: 58},
//             {id: 7, name: "Richard", age: 68},
//             {id: 8, name: "Joseph", age: 78},
//             {id: 9, name: "Thomas", age: 88},
//             {id: 10, name: "Charles", age: 98},
//             {id: 11, name: "Christopher", age: 100},
//         ]
//     )
//     return (
//         <NewComponent students={students}/>
//     );
// }

// export default App;
