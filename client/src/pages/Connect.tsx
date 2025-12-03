import Layout from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Connect() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock PHP mail submission
    console.log("Sending to support@vishrani.com", values);
    
    toast({
      title: "Message Sent Successfully",
      description: "We have received your message and will get back to you soon.",
    });

    form.reset();
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
                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 focus:border-primary/50 h-12" />
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
                        <Input placeholder="your@email.com" {...field} className="bg-white/5 border-white/10 focus:border-primary/50 h-12" />
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
                        <Textarea placeholder="Tell us about your project..." {...field} className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base rounded-xl">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
