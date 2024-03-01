'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
  return (
    <Flex
      minH={'60vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
      <Heading pb = {6}>Часто задаваемые вопросы</Heading>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Нужен ли ветеринарный паспорт?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Животное должно быть привито. Паспорт нужен, но не обязателен. Если у вас нет паспорта, то в качестве подтверждения достаточно справки или чека. Для заселение необходима ежегодная вакцинация питомца или иммунная сыворотка, сделанная накануне заселения. Сыворотка это альтернатива вакцине с действием на 2-3 недели, проводиться для защиты и повышения иммунитета питомца. Обязательна обработка животного от блох. Можем сделать при заселении.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Что нужно взять с собой?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
             С собой котику будут нужны:
<li> лоток+совочек,</li>
<li>2 миски,</li>
<li>лежанка (коврик, полотенце)</li>
<li>по желанию: игрушки, когтеточка, домик, корм, наполнитель,
 вкусности, </li>
 * также котика необходимо передавать в переноске.

              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Условия в номерах</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                <li>- Предоставляете ли вы лоток, совок, миски?</li>
Да, на платной основе.

<li>-Можно ли поселить двух котиков в 1 номер?</li>
Да, мы заселяем двух котиков в один номер, доплата за второго котика 50% от стоимости номера.

<li>- Как часто вы меняете наполнитель и воду?</li>
Воду меняем утром и вечером, а также следим в течение дня, чтобы она всегда была.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Еще что-то</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Блаблабалаблалабала
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}