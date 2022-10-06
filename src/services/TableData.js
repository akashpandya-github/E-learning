const TableBody = (props) => {

    const { charData, removeCharacter } = props

    const rows = charData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => removeCharacter(index)}>Delete</button></td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  export default TableBody