
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Building, User, Type } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 md:px-6 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-background/90 relative">
          <div className="hero-blur-circle bg-primary/20 w-80 h-80 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="hero-blur-circle bg-accent/20 w-72 h-72 top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <Mail className="w-16 h-16 mx-auto mb-6 text-glow-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-headline">
              Get in <span className="text-glow-primary">Touch</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              We're here to answer your questions, provide demos, or discuss how HydroGen can revolutionize your payment operations. Reach out to us!
            </p>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="py-16 md:py-24 bg-background/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-headline text-glow-accent">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out to us through any of the channels below. Our team is ready to assist you.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">
                        For general inquiries, support, or sales questions.
                      </p>
                      <a href="mailto:info@hydrogen.example.com" className="text-primary hover:underline">
                        info@hydrogen.example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-muted-foreground">
                        Our lines are open during business hours (9 AM - 5 PM UTC).
                      </p>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Our Office</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Drive, Tech City, TX 75001, USA
                      </p>
                       <div className="mt-2 rounded-md overflow-hidden border border-border/50">
                         <Image
                           src="https://placehold.co/600x300.png"
                           alt="Office Location Map Placeholder"
                           width={600}
                           height={300}
                           className="w-full h-auto"
                           data-ai-hint="map office"
                         />
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism p-6 md:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl md:text-3xl font-semibold font-headline">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center"><User size={16} className="mr-2 text-muted-foreground"/> Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-background/70 border-border focus:ring-accent focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center"><Mail size={16} className="mr-2 text-muted-foreground"/> Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background/70 border-border focus:ring-accent focus:border-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center"><Building size={16} className="mr-2 text-muted-foreground"/> Company (Optional)</Label>
                      <Input id="company" placeholder="Example Inc." className="bg-background/70 border-border focus:ring-accent focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center"><Type size={16} className="mr-2 text-muted-foreground"/> Subject</Label>
                      <Input id="subject" placeholder="Inquiry about HydroGen features" className="bg-background/70 border-border focus:ring-accent focus:border-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center"><MessageSquare size={16} className="mr-2 text-muted-foreground"/> Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please type your message here..."
                        rows={5}
                        className="bg-background/70 border-border focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground box-shadow-glow-primary focus:ring-primary">
                      <Send size={18} className="mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
