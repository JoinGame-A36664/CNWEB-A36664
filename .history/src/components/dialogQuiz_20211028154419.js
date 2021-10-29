import { ModalProvider } from "react-simple-modal-provider";
import BasicModal from "./BasicModal";
import ConsumePage from "./ConsumePage";

export default () => {
          return (
                    <ModalProvider value={[BasicModal, ...]}>
                              <ConsumePage />
                              <ConsumePage />
                              ...
                    </ModalProvider>
          );
};