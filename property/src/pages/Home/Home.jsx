import { useDisclosure } from "@nextui-org/react";
import SignInModal from "../../components/SignInModal/SignInModal";

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <SignInModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
  );
};

export default Home;
