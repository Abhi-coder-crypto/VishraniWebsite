import Layout from "@/components/layout/Layout";
import { Terminal, Database, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Expert <span className="text-gradient">Services</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground">
            We don't just build software; we partner with you to optimize your entire digital ecosystem.
          </p>
        </div>

        <div className="space-y-24">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                <Terminal className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Consultancy for Development Teams</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We provide consultancy to In-house software and database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Code Review & Best Practices
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Architecture Validation
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <Search className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">System Analysis & Upgrade</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                For those looking to implement new system or upgrade existing systems, we can analyse existing software/system and do gap analysis vis a vis the requirements in the modern environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  Gap Analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  Modernization Strategy
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
                <Database className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">Database Performance</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We also provide database consultancy for enhancing the performance of existing systems. From schema optimization to query tuning, we ensure your data layer isn't the bottleneck.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 z-10" />
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef5209529422?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
