"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { formSchema } from "./formSchema";
import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

export function Contactform() {
  const { toast } = useToast();
  const { pending } = useFormStatus();
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    emailjs
      .send("service_539m0ql", "template_fvjdgyv", values, "URwmFn2Vd7rVIWWeI")
      .then(
        (res) => {
          console.log(res);
          setLoading(false);
          toast({
            title: "Email Sent!",
            description: "Thank you!",
          });
          form.reset({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (err) => {
          console.log(err);
          toast({
            title: "Uh oh! Something went wrong.",
            description: err.message,
          });
        }
      );
  }

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Dela Cruz" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter your real name for identification purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your_email@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Kindly provide a working email address for communication.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full  md:w-1/3"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
