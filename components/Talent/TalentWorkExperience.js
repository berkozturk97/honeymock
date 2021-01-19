import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'

function TalentWorkExperience() {
  return (
    <Box>
      <Text justifySelf="center" fontSize="3xl">
        Work Experience
      </Text>

      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w={750}
        h={50}
      >
        <Text fontSize="2xl">Positon</Text>
        <Text color="#1f2228" fontWeight="400px">
          1-2 Years
        </Text>
      </Flex>
      <Text color="#1f2228" fontWeight="400px">
        Company name
      </Text>

      <Container centerContent mt={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        consequatur, aperiam aliquid eaque eius saepe, inventore aspernatur
        suscipit porro, est molestiae ullam unde dolore illo corporis sapiente
        delectus possimus cumque. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Saepe quos numquam doloremque aperiam harum libero
        iusto non? Quam, alias eveniet? Repudiandae harum dolore delectus a illo
        incidunt quisquam iusto quo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis reprehenderit dolore pariatur temporibus
        aliquid natus quo veniam, earum ea culpa quidem qui voluptates commodi
        ipsum adipisci dolores impedit eos cum.
      </Container>
    </Box>
  )
}

export default TalentWorkExperience
