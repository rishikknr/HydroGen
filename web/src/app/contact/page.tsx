
// This page content has been reverted.
// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Navbar from "@/components/layout/navbar";
// import Footer from "@/components/layout/footer";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import Link from "next/link";
// import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"; 

export default function ContactPage() {
  return null;
  // return (
  //   <div className="flex flex-col min-h-screen bg-background text-foreground">
  //     <Navbar />
  //     <main className="flex-grow">
  //       <div className="container mx-auto px-4 md:px-6 py-6">
  //         <Breadcrumb>
  //           <BreadcrumbList>
  //             <BreadcrumbItem>
  //               <BreadcrumbLink asChild>
  //                 <Link href="/"><span>Home</span></Link> 
  //               </BreadcrumbLink>
  //             </BreadcrumbItem>
  //             <BreadcrumbSeparator />
  //             <BreadcrumbItem>
  //               <BreadcrumbPage>Contact Us</BreadcrumbPage>
  //             </BreadcrumbItem>
  //           </BreadcrumbList>
  //         </Breadcrumb>
  //       </div>

  //       <section className="py-12 md:py-16">
  //         <div className="container mx-auto px-4 md:px-6">
  //           <header className="text-center mb-12 md:mb-16">
  //             <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline">
  //               Get in <span className="text-glow-primary">Touch</span>
  //             </h1>
  //             <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
  //               We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
  //             </p>
  //           </header>

  //           <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
  //             <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism p-2">
  //               <CardHeader>
  //                 <CardTitle className="text-2xl font-semibold font-headline text-primary">Contact Information</CardTitle>
  //               </CardHeader>
  //               <CardContent className="space-y-6 text-foreground/90">
  //                 <div className="flex items-start gap-4">
  //                   <Mail size={24} className="text-accent mt-1 flex-shrink-0" />
  //                   <div>
  //                     <h3 className="font-semibold">Email</h3>
  //                     <a href="mailto:info@hydrogen.com" className="hover:text-primary transition-colors">info@hydrogen.com</a>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start gap-4">
  //                   <Phone size={24} className="text-accent mt-1 flex-shrink-0" />
  //                   <div>
  //                     <h3 className="font-semibold">Phone</h3>
  //                     <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start gap-4">
  //                   <MapPin size={24} className="text-accent mt-1 flex-shrink-0" />
  //                   <div>
  //                     <h3 className="font-semibold">Office Address</h3>
  //                     <p>123 Innovation Drive, Tech City, TX 75001</p>
  //                   </div>
  //                 </div>
  //                 <div className="mt-6 pt-6 border-t border-border/50">
  //                     <h3 className="font-semibold mb-2 text-primary">Business Hours</h3>
  //                     <p>Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
  //                     <p>Saturday - Sunday: Closed</p>
  //                 </div>
  //               </CardContent>
  //             </Card>

  //             <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism p-2">
  //               <CardHeader>
  //                 <CardTitle className="text-2xl font-semibold font-headline text-accent">Send us a Message</CardTitle>
  //               </CardHeader>
  //               <CardContent>
  //                 <form className="space-y-6">
  //                   <div className="grid sm:grid-cols-2 gap-6">
  //                     <div className="space-y-2">
  //                       <Label htmlFor="name">Full Name</Label>
  //                       <Input id="name" type="text" placeholder="John Doe" className="bg-background/70 focus:ring-accent focus:border-accent" />
  //                     </div>
  //                     <div className="space-y-2">
  //                       <Label htmlFor="email">Email Address</Label>
  //                       <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-background/70 focus:ring-accent focus:border-accent" />
  //                     </div>
  //                   </div>
  //                   <div className="space-y-2">
  //                     <Label htmlFor="company">Company (Optional)</Label>
  //                     <Input id="company" type="text" placeholder="Your Company Inc." className="bg-background/70 focus:ring-accent focus:border-accent" />
  //                   </div>
  //                   <div className="space-y-2">
  //                     <Label htmlFor="subject">Subject</Label>
  //                     <Input id="subject" type="text" placeholder="Regarding your services..." className="bg-background/70 focus:ring-accent focus:border-accent" />
  //                   </div>
  //                   <div className="space-y-2">
  //                     <Label htmlFor="message" className="flex items-center"><MessageSquare size={16} className="mr-2 text-muted-foreground"/> Your Message</Label>
  //                     <Textarea
  //                       id="message"
  //                       placeholder="Please type your message here..."
  //                       rows={5}
  //                       className="bg-background/70 focus:ring-accent focus:border-accent"
  //                     />
  //                   </div>
  //                   <div className="text-right">
  //                     <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground box-shadow-glow-accent group">
  //                       <span className="flex items-center">
  //                           Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
  //                       </span>
  //                     </Button>
  //                   </div>
  //                 </form>
  //               </CardContent>
  //             </Card>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Optional: Map Section */}
  //       {/* <section className="py-12 md:py-16 bg-background/50">
  //         <div className="container mx-auto px-4 md:px-6">
  //           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-headline">Find Us Here</h2>
  //           <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-border">
  //             <iframe
  //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0000000000005!2d-74.00000000000001!3d40.700000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  //               width="100%"
  //               height="100%"
  //               style={{ border:0 }}
  //               allowFullScreen={true}
  //               loading="lazy"
  //               referrerPolicy="no-referrer-when-downgrade"
  //               title="Google Maps Location"
  //             ></iframe>
  //           </div>
  //         </div>
  //       </section> */}
  //     </main>
  //     <Footer />
  //   </div>
  // );
}
