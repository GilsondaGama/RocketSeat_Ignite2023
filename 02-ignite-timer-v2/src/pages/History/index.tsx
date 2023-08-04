import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContest'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicia</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>{cycle.startedAt.toDateString()}</td>
                  <td>
                    {cycle.finishedAt && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptedAt && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {cycle.finishedAt && !cycle.interruptedAt && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
