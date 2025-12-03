import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Scissors, 
  GraduationCap, 
  BookOpen, 
  Film, 
  Warehouse, 
  TrendingUp, 
  ShoppingCart, 
  FileText, 
  CheckCircle2,
  Building2,
  Factory,
  Truck
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  { icon: TrendingUp, title: "Back-office for Stock Broker", desc: "Comprehensive management for trading and equity." },
  { icon: Scissors, title: "Back-office for Handkerchief Manufacturer", desc: "Production tracking and inventory control." },
  { icon: GraduationCap, title: "Students Performance Tracking", desc: "Analytics and progress reports for education." },
  { icon: BookOpen, title: "Question Bank for Coaching Institutes", desc: "Digital repository and exam generation." },
  { icon: Film, title: "Resource Management for Studios", desc: "Scheduling and asset tracking for post-production." },
  { icon: Warehouse, title: "Warehouse Management System", desc: "Logistics, stock, and dispatch efficiency." },
  { icon: Briefcase, title: "Back-office for Finance Broker", desc: "Client portfolio and transaction management." },
  { icon: ShoppingCart, title: "GST Invoicing for Trader", desc: "Compliant billing and tax reporting." },
  { icon: FileText, title: "Task Management for Insurance", desc: "Lead tracking and policy workflow." },
];

const verticals = [
  { icon: TrendingUp, title: "Stock Market" },
  { icon: Briefcase, title: "Finance Broker" },
  { icon: GraduationCap, title: "Coaching Institute" },
  { icon: Film, title: "Post Production Studio" },
  { icon: Factory, title: "Garment Manufacturing" },
  { icon: Truck, title: "Logistics & Warehouse" },
];

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Our <span className="text-gradient">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We specialise in providing Customised Business Softwares for our clients. With more than two decades of experience, 
            Vishrani Computech offers diverse custom software development services tailored to your business needs. 
            Our diverse portfolio is a testimony of our technical capacity and customer satisfaction.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="mb-24">
          <h2 className="text-2xl font-heading font-bold mb-10 flex items-center gap-3">
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            Solutions Designed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="glass-card border-white/5 hover:border-primary/50 transition-colors h-full group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <sol.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{sol.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{sol.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verticals Grid */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-10 flex items-center gap-3">
            <div className="h-1 w-10 bg-accent rounded-full"></div>
            Verticals Catered To
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {verticals.map((ver, idx) => (
               <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-colors border-white/5 hover:border-accent/50 cursor-default"
              >
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <ver.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-sm">{ver.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
