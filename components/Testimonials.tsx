'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>О нас говорят</Heading>
          <Text>Отзывы наших клиентов о Kitty House:</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Очень уютно</TestimonialHeading>
              <TestimonialText>
              Отель Kitty House - место, где ваш кот будет царем! 
              Удивительный сервис, заботливый персонал и радушная атмосфера. Обязательно вернемся снова!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbeA0VYvJNPlIiVn3ikDpPK83cee2NKXPvA&usqp=CAU'
              }
              name={'Мария А.'}
              title={''}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Кот доволен</TestimonialHeading>
              <TestimonialText>
              В Kitty House мой кот нашел свой дом вдали от дома. 
              Профессиональный персонал, игровые зоны и внимание к деталям делают этот отель идеальным выбором для кошачьего отдыха.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://static.sobaka.ru/images/image/00/93/44/95/_normal.jpg?v=1517261117'
              }
              name={'Дмитрий Х.'}
              title={''}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Удобное решение</TestimonialHeading>
              <TestimonialText>
              Kitty House - лучший отель для кошек! Моя пушистая подруга была в восторге от пребывания здесь. Спасибо за заботу и уютные номера!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://vokrug.tv/pic/news/4/5/7/1/4571109b4893a2bfc11307b7066a9076.jpg'
              }
              name={'Артемий Л.'}
              title={''}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}