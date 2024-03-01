'use client'

import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const options = [
  { id: 1, desc: 'Игрушки, зона отдыха' },
  { id: 2, desc: 'Когтеточка, лоток' },
  { id: 3, desc: 'Видеонаблюдение' },
]
interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600'
  const bgColorLight = checked ? 'red.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'purple.500'
  const bgColorDark = checked ? 'purple.400' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          Оставить заявку
        </Button>
      </Stack>
    </Stack>
  )
}
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'2xl'}>
              Наши <Text color="red.400">Тарифы</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
            Мы предлагаем различные уютные 
            номера для вашего питомца: от стандартных до люксовых, 
            чтобы ваша кошка чувствовала себя как дома в нашем отеле.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Эконом'} typePlan="1800₽" options={options} />
        <Divider />
        <PackageTier
          title={'Комфорт+'}
          checked={true}
          typePlan="3200₽"
          options={options}
        />
        <Divider />
        <PackageTier title={'Бизнес'} typePlan="5000₽" options={options} />
      </Stack>
    </Box>
  )
}

export default ThreeTierPricingHorizontal