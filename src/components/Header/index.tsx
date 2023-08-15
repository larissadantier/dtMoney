import { ContainerSC, ContentSC, NewTransactionButtonSC } from './HeaderStyles'

import logoImg from '../../assets/svg/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from './parts/NewTransactionModal'

const Header = () => {
  return (
    <ContainerSC>
      <ContentSC>
        <img
          src={logoImg}
          alt="Logo com imagem de dois triângulos (o primeiro com a cor mais escura e com transparência) e o segundo da mesma cor e transparência que fica embaixo do primeiro mas com a sua ponta verde mais clara e sem transparência juntos na diagonal e do seu lado direito dssa logo está escrito DT-Money"
        />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButtonSC>Nova transação</NewTransactionButtonSC>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </ContentSC>
    </ContainerSC>
  )
}

export default Header
