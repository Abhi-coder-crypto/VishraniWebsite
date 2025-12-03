import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ChevronRight } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_hero_background.png";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Futuristic Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent md:via-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Innovating Since 2000
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Get Perfect <span className="text-gradient">Software Solutions</span> That Empowers Businesses.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Vishrani Computech provides full-cycle, end-to-end software development services. 
              We help companies launch projects, switch to digital-first strategies, and grow their businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/connect">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 hover:text-white rounded-full px-8 h-12 text-base backdrop-blur-sm">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right side visual - floating cards effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative h-[500px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass-card p-6 rounded-2xl max-w-[280px] z-20"
            >
              <Code className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-white mb-1">Custom Development</h3>
              <p className="text-xs text-muted-foreground">Tailored software solutions built for your specific needs.</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 glass-card p-6 rounded-2xl max-w-[280px] z-30 border-primary/30"
            >
              <Database className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-white mb-1">Database Consultancy</h3>
              <p className="text-xs text-muted-foreground">Optimization and architecture for high-performance data.</p>
            </motion.div>

            <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-8 rounded-2xl z-10 w-[320px] border-accent/30"
            >
               <Globe className="h-10 w-10 text-purple-400 mb-4" />
               <h3 className="font-bold text-xl text-white mb-2">Digital Transformation</h3>
               <p className="text-sm text-muted-foreground">
                 From transactional systems to modern digital functions across every industry.
               </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Software is critical for performance</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Till the beginning of this century, software's use within organisations was largely confined to big transactional systems in the data centre. Now, it applies to nearly every function in every industry. We help you stay ahead.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "100+", label: "Projects Delivered" },
              { number: "95%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-xl">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
