import {Modal} from 'react-bootstrap'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

export default function ModalComp() {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(false)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(true)}
      />
    </>
  );
}