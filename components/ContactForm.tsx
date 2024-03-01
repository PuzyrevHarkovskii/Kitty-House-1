'use client'

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react'

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://i.pinimg.com/originals/d7/66/bf/d766bf93576a7ea6497e37daa24b0345.jpg',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://i.pinimg.com/236x/7f/af/e7/7fafe7c7cdae656f99506b1035dbbc3f.jpg',
  },
  {
    name: 'Kent Dodds',
    url: 'https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-9.jpg',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://external-preview.redd.it/XIoUxFZScaDVjbXwqKzyfmtBA833rmynBzZBevhFmu4.jpg?width=640&crop=smart&auto=webp&s=489479029b9a621f577c9db7341b9ebaab2183ad',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://pets-society.com/wp-content/uploads/2023/02/Toyger-cat-profile.jpg',
  },
]

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  )
}

export default function ContactForm() {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Дом для{' '}
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              ваших
            </Text>{' '}
            Пушистых любимцев
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              ВАШ
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Оставить {' '}
              <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
               заявку
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Оставьте заявку прямо сейчас для бронирования места. 
            Наш менеджер свяжется с вами для подтверждения брони. 
            </Text>
          </Stack>
          <Box as={'form'} mt={2}>
            <Stack spacing={4}>
            <Input
                placeholder="Имя"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                type = "name"
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="Имя питомца"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                type = "fname"
                _placeholder={{
                  opacity: 0.4, color: 'tomato'
                }}
              />
              
              <Input
                placeholder="name@mail.ru"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                  
                }}
              />
              <Text mb='2px' opacity={0.5}>Заезд: </Text>
                <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                
                />
                <Text mb='2px' opacity={0.5}>Выезд: </Text>
                <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                />
              <Input
                placeholder="+7 (___) __-___-___"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                  
                }}
                
              />
              
              
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}>
              Отправить
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  )
}