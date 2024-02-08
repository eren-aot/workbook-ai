"use client"
import React from 'react';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
    topics: z.string().min(2, { message: "Minimum 2 characters" })
})

const TopicsInput = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            topics: ""
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField
                        control={form.control}
                        name="topics"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter the topics" {...field} className='w-1/2'/>
                                </FormControl>
                                <FormDescription>
                                    Enter the topics you want to have the work book about
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Create Workbook</Button>
                </form>
            </Form>
        </div>
    )
}

export default TopicsInput