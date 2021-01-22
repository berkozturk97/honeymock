import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { DatePicker } from 'rsuite';

function AddExperience() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  function handleSubmit(e) {
    e.preventDefault()
    
        //localStorage.setItem('userInformations', JSON.stringify(userInformations));
       
    }
  
  return (
    <>
      <Button ml={5} mt={10} variant="link" onClick={onOpen}>
        Add Experience
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen}  size={'4xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your professional experience</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email" mt={4}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  //value={email}
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" mt={4}>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  //value={password}
                  //onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" mt={4}>
                <DatePicker style={{zIndex: '1500000'}} format='YYYY-MM' />
                <DatePicker format='YYYY-MM' />
              </FormControl>

              <FormControl id="password" mt={4}>
                
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddExperience
