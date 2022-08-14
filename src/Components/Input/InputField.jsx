import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ViewCard from '../ViewCard/ViewCard'
const axios = require('axios')

const InputField = () => {
  const [text, setText] = React.useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [noVideo, setNoVideo] = useState(false)
  const handleClick = () => {
    setData({})
    setLoading(true)
    setNoVideo(false)
    const options = {
      method: 'GET',
      url: 'https://yt-downloader1.p.rapidapi.com/api',
      params: {
        url: text,
        key: '5145f7563cd789876e861e2dba4d15763501c84256ae3ac182116233173acaf0',
      },
      headers: {
        'X-RapidAPI-Key': 'b9399fd5a3msh9a53c41a6288184p15643ejsnf1506ea37f29',
        'X-RapidAPI-Host': 'yt-downloader1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        setNoVideo(true)
        setLoading(false)
      })
  }
  return (
    <div>
      <Center w="100%" mt={30} textColor="white">
        <InputGroup size="lg">
          <Input
            size="lg"
            type="url"
            borderColor={noVideo && 'red'}
            placeholder="Paste Your Video Link.."
            onChange={(e) => setText(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              textColor="white"
              colorScheme="green"
              h="1.75rem"
              size="sm"
              ml="-10px"
              onClick={handleClick}
              isDisabled={text === ''}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
      {loading ? (
        <Center mt={10}>
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      ) : Object.keys(data).length > 0 ? (
        <ViewCard data={data} />
      ) : null}
      {noVideo && (
        <Flex color="white" mt={10}>
          <Box flex="1">
            <Text textAlign="center" color="red">
              File not found. File has either been deleted, or you entered the
              wrong URL.
            </Text>
          </Box>
        </Flex>
      )}
    </div>
  )
}

export default InputField
