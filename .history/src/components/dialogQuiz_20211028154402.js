import { useModal } from "react-simple-modal-provider";

export default Quiz () => {
          const { open: openModal } = useModal("BasicModal");

          return <button onClick={openModal}>Open</button>;
};