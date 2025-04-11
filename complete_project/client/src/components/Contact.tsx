import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  subject: z.string().min(5, "L'oggetto deve contenere almeno 5 caratteri"),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // GitHub Pages is static, so we'll simulate form submission
      // In a real app with a backend, you'd send this data to your server or a form service like Formspree
      console.log("Form data:", data);
      
      // Simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Messaggio inviato",
        description: "Grazie per il tuo messaggio. Ti risponderò al più presto!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Errore",
        description: "Invio del messaggio fallito. Per favore riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contattami</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Sentiti libero di contattarmi per collaborazioni, domande o semplicemente per fare due chiacchiere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Informazioni di Contatto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-md text-primary mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Località</h4>
                      <p className="text-muted-foreground">Torino, Italia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-md text-primary mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Email</h4>
                      <p className="text-muted-foreground">alessiosor1304@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-md text-primary mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Telefono</h4>
                      <p className="text-muted-foreground">+39 123 456 7890</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-base font-medium mb-4">Seguimi sui Social</h4>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.instagram.com/alessio_sorrentino_/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://it.linkedin.com/in/alessio-sorrentino-005b43274" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-muted h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      Seguimi sui social per rimanere aggiornato sui nuovi articoli del blog, 
                      contenuti esclusivi e per entrare in contatto diretto con me.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Inviami un Messaggio</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Il tuo Nome</FormLabel>
                            <FormControl>
                              <Input placeholder="Mario Rossi" {...field} />
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
                            <FormLabel>La tua Email</FormLabel>
                            <FormControl>
                              <Input placeholder="esempio@dominio.it" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Oggetto</FormLabel>
                          <FormControl>
                            <Input placeholder="Richiesta di collaborazione" {...field} />
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
                          <FormLabel>Messaggio</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ciao! Ti contatto perché..." 
                              className="min-h-[120px] resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto gap-2"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                      {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
