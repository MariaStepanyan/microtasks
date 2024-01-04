type StudentType = {
  id: number
  name: string
  age: number
}

type NewComponentPropsType = {
  students: Array<StudentType>
}

export const NewComponent = (props: NewComponentPropsType) => {
  const topCars = [
    { manufacturer: 'BMW', model: 'X5' },
    { manufacturer: 'Mersedes', model: 'MLS' },
    { manufacturer: 'Audi', model: 'Q7' },
  ]
  return (
    <>
      <ul>
        {props.students.map((student, index) => {
          debugger
          return (
            <li key={student.id}>
              <span>{student.name}</span>
              <span> age: {student.age}</span>
            </li>
          )
        })}

        <table>
          {topCars.map((item, index) => {
            return (
              <tr key={index}>
                <th>{++index}</th>
                <td>{item.manufacturer}</td>
                <td> model: {item.model}</td>
              </tr>
            )
          })}
        </table>
      </ul>
    </>
  )
}
