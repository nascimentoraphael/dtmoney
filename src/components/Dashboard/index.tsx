import { Summary } from '../Summary'
import { TrasactionsTable } from '../TransactionsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TrasactionsTable />
    </Container>
  )
}