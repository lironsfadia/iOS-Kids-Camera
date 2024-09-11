import { useState } from 'react';
import { View } from 'react-native';

import { ErrorModalProps } from '../../components/types';
import { ButtonText } from '~/components/ui/button';
import { Center } from '~/components/ui/center';
import { Heading } from '~/components/ui/heading';
import { Icon, CloseIcon } from '~/components/ui/icon';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import {
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Modal,
} from '~/components/ui/modal';

const ErrorModal = ({ error, onPress }: ErrorModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Center>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}>
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Heading size="lg">Engage with Modals</Heading>
              <ModalCloseButton>
                <Icon as={CloseIcon} />
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Text>{error}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                className="mr-3"
                onPress={() => {
                  setShowModal(false);
                  onPress();
                }}>
                <ButtonText>OK</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </View>
  );
};
export default ErrorModal;
