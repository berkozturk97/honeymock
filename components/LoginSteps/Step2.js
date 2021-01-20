import React from 'react'

import {
  Box,
  Button,
  Flex,
  Checkbox,
  Stack,
  Input,
  Text,
  Select
} from '@chakra-ui/react'
import { Radio, RadioGroup } from 'rsuite'
function Step2() {
    const [value, setValue] = React.useState("1")
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
    false,
    false
  ])

  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return (
    <>
      <Text ml={5} color="#979EA7" fontSize="3xl">
        Some practical questions..
      </Text>
      <hr />
      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
        What type of employment are you looking for? *
      </Text>

      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Permanent (full-time)
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Part-time
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[2]}
          onChange={(e) => setCheckedItems([checkedItems[2], e.target.checked])}
        >
          Contract / Freelance
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[3]}
          onChange={(e) => setCheckedItems([checkedItems[3], e.target.checked])}
        >
          Intern
        </Checkbox>
      </Stack>

      <Text ml={5} fontWeight="bold" mt={10} fontSize="xl">
      Where would you like to work? *
      </Text>

      <Checkbox
      ml={5} 
        border="#555555"
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) =>
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked
          ])
        }
      >
        Select all cities
      </Checkbox>
      <Stack pl={6} mt={1} ml={5}  spacing={1}>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Seattle
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          New York
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[2]}
          onChange={(e) => setCheckedItems([checkedItems[2], e.target.checked])}
        >
          San Fransisco
        </Checkbox>
        <Checkbox
          border="#555555"
          isChecked={checkedItems[3]}
          onChange={(e) => setCheckedItems([checkedItems[3], e.target.checked])}
        >
          Washington D.C.
        </Checkbox>
      </Stack>

      <Text ml={5} fontWeight="bold"  mt={10} fontSize="xl">
        Do you have an USA work permit? *
      </Text>

      <Select placeholder="--select--" w={300} ml={5} mt={5}>
        <option value="option1">Yes</option>
        <option value="option2">No</option>
      </Select>

      <Text ml={5} fontWeight="bold"  mt={10} fontSize="xl">
        When can you start? *
      </Text>

      <RadioGroup onChange={setValue} mt={10}  value={value}>
      <Stack ml={5} direction="column">
        <Radio value="1">Now</Radio>
        <Radio value="2">Upon completing notice period</Radio>
        <Radio value="3">After a specific date</Radio>
      </Stack>
    </RadioGroup>

      <Button bg="#7DB0E4" color="white" _hover="none" ml={5} mt={5}>
        Click And Save
      </Button>
    </>
  )
}

export default Step2
