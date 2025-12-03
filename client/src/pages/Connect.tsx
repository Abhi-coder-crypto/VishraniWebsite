import Layout from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Connect() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We have received your message and will get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: FormData) {
    submitMutation.mutate(values);
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Let's <span className="text-gradient">Connect</span></h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind? Need to upgrade your legacy system? We are here to help you transform your business.
            </p>
            
            <div className="space-y-8">
               <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                 <div className="p-3 bg-primary/10 rounded-full text-primary">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-white mb-2">Headquarters</h3>
                   <p className="text-muted-foreground">
                     83 L. L. Shah Marg,<br />
                     Dana Bunder, Masjid (E),<br />
                     Mumbai 400 009, India
                   </p>
                 </div>
               </div>

               <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                 <div className="p-3 bg-accent/10 rounded-full text-accent">
                   <Mail className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                   <p className="text-muted-foreground mb-2">General Inquiries & Support</p>
                   <a href="mailto:support@vishrani.com" className="text-white hover:text-primary transition-colors font-medium">
                     support@vishrani.com
                   </a>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSubmitted(false)}
                    className="border-white/20 hover:bg-white/10"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Name" 
                                {...field} 
                                className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                                data-testid="input-name"
                              />
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
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                {...field} 
                                className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                                data-testid="input-email"
                              />
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
                            <FormLabel className="text-white">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project..." 
                                {...field} 
                                className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px]"
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base rounded-xl"
                        disabled={submitMutation.isPending}
                        data-testid="button-submit"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
