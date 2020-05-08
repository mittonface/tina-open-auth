import {
  useCMS,
  Modal,
  ModalPopup,
  ModalHeader,
  ModalBody,
  ModalActions,
} from 'tinacms'
import { TinaReset } from '@tinacms/styles'
import { AsyncButton } from './AsyncButton'

export function ContentfulAuthModal() {
  const cms = useCMS()
  return (
    <ModalBuilder
      title="Contentful Authorization"
      message="To save edits, Tina requires Contentful authorization. On save, changes will get commited to Contentful using your account."
      close={() => {}}
      actions={[
        {
          name: 'Continue to Contentful',
          action: async () => {
            await cms.api.contentful.authenticate()
          },
          primary: true,
        },
      ]}
    />
  )
}

interface ModalBuilderProps {
  title: string
  message: string
  error?: string
  actions: any[]
  close(): void
}

export function ModalBuilder(modalProps: ModalBuilderProps) {
  return (
    <TinaReset>
      <Modal>
        <ModalPopup>
          <ModalHeader close={modalProps.close}>{modalProps.title}</ModalHeader>
          <ModalBody padded>
            <p>{modalProps.message}</p>
          </ModalBody>
          <ModalActions>
            {modalProps.actions.map((action: any) => (
              <AsyncButton {...action} />
            ))}
          </ModalActions>
        </ModalPopup>
      </Modal>
    </TinaReset>
  )
}
