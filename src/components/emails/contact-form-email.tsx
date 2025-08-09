import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  company?: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const ContactFormEmail = ({
  name,
  company,
  phone,
  email,
  subject,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission: {subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Contact Form Submission</Heading>
        <Section>
          <Text style={paragraph}>You have received a new message from your website contact form.</Text>
          <Text style={label}>Name:</Text>
          <Text style={value}>{name}</Text>

          {company && (
            <>
              <Text style={label}>Company:</Text>
              <Text style={value}>{company}</Text>
            </>
          )}

          <Text style={label}>Email Address:</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Phone Number:</Text>
          <Text style={value}>{phone}</Text>

          <Text style={label}>Subject:</Text>
          <Text style={value}>{subject}</Text>

          <Text style={label}>Message:</Text>
          <Text style={messageStyles}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
  padding: '0 20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#484848',
  padding: '0 20px',
};

const label = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#484848',
    padding: '0 20px',
    margin: '0',
}

const value = {
    fontSize: '16px',
    color: '#484848',
    padding: '0 20px',
    margin: '0 0 20px 0',
}

const messageStyles = {
    fontSize: '16px',
    color: '#484848',
    padding: '10px 20px',
    margin: '0',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
} as const;
