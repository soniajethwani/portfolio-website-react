import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';
import {Tailwind} from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
  return (
    <Html>
      <Head/>
      <Preview>Message from your portfolio</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white border border-black my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>You received the following message from your contact form</Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>The sender's email is: {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
