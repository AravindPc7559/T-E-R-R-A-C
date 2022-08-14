import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { saveAs } from "file-saver";

const ViewCard = ({ data }) => {
  const [selectValue, setSelectValue] = useState('')
  const handleDownload = () => {
    saveAs(selectValue, data.title)
  }
  const handleSelect = (e) => {
    const { value } = e.target
    if (value === 'Select Quality') {
      setSelectValue('')
    } else {
      setSelectValue(value)
    }
  }
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="contain"
            boxSize="100%"
            backgroundColor="white"
            src={data.thumbnail}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={'lg'} fontFamily={'body'}>
            <Tooltip label={data.title}>
              {data.title.length > 40
                ? data.title.substr(0, 50 - 1) + '....'
                : data.title}
            </Tooltip>
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            Duration: {data.duration}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}
            >
              Source: {data.source}
            </Badge>
          </Stack>

          <Stack width={'100%'} mt={'2rem'} padding={2} alignItems={'center'}>
            <Select onChange={(e) => handleSelect(e)}>
              <option>Select Quality</option>
              {data.medias.map((data) => data.videoAvailable && data.audioAvailable === true && (
                <option key={data.url} value={data.url}>{data.quality}</option>
              ))}
            </Select>
            {
                selectValue.length > 0 ?
            <Button
              onClick={handleDownload}
              fontSize={'md'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              height="30px"
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Download
            </Button>
            :
            <Button
            isDisabled
            fontSize={'md'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            height="30px"
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            Download
          </Button>
            }
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default ViewCard
