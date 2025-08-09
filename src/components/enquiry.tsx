'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionWrapper from './section-wrapper';
import { Card, CardContent } from './ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

export default function Enquiry() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you'd send this to a server
    toast({
      title: 'Enquiry Sent!',
      description: 'Thank you for your message. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <SectionWrapper id="enquiry" className="bg-secondary/50 dark:bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Get in Touch</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Have a question or want to get started? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      <Card className="max-w-2xl mx-auto p-6 md:p-8 shadow-lg">
        <CardContent className='p-0'>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="How can we help you?" {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" size="lg" className="w-full text-primary-foreground font-semibold bg-gradient-to-r from-[#0056b3] to-[#003d80] hover:shadow-lg hover:opacity-90 transition-all">
                Send Message
                </Button>
            </form>
            </Form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
