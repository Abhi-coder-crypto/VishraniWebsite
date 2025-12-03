import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, History, Award, Cpu } from "lucide-react";

export default function KnowUs() {
  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-6"
          >
            <History className="w-6 h-6" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-8"
          >
            About <span className="text-gradient">Vishrani Computech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Vishrani Computech was founded in 2000 with the aim of providing cost-effective IT solutions and services to customers with projects ranging from small to medium to large.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl border-l-4 border-l-primary"
          >
            <Award className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Our Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              We specialise in providing customised business software tailored to our clients' specific needs. We ensure the delivery of the right solutions to meet unique requirements.
            </p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl border-l-4 border-l-accent"
          >
             <Users className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-3">Customer Loyalty</h3>
            <p className="text-muted-foreground leading-relaxed">
              We take pride in our customer loyalty and retention. Our clients stay with us because we deliver consistent value and support over decades.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500"
          >
             <Cpu className="w-10 h-10 text-purple-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Skilled Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team consists of highly skilled professionals. We are constantly upgrading our skills to match new technologies, progressing from DOS to the latest .NET stacks.
            </p>
          </motion.div>
        </div>

        {/* History/Tech Stack Section */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-heading font-bold mb-6">Evolution of Technology</h2>
               <p className="text-muted-foreground mb-6 leading-relaxed">
                 We have witnessed and adapted to the entire evolution of the modern software industry. From the early days of DOS-based languages to Visual Basic 6, and now to the latest Visual Studio .NET ecosystems.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                 We work extensively on SQL & Oracle databases, ensuring robust data management for enterprise-grade applications.
               </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
               {["Visual Studio .NET", "SQL Server", "Oracle", "Cloud Architecture", "Modern Web", "Enterprise Security"].map((tech, i) => (
                 <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/10 text-center text-sm font-medium text-white/80">
                   {tech}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
