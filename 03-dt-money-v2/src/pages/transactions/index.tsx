import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components'
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Sites</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>01/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Hambuerguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 40,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/08/2031</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
