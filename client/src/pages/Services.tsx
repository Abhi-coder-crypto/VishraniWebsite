import Layout from "@/components/layout/Layout";
import { Terminal, Database, Search, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Terminal,
    title: "Consultancy for Development Teams",
    description: "We provide consultancy to In-house software and database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system.",
    features: ["Code Review & Best Practices", "Architecture Validation", "Process Improvement"]
  },
  {
    icon: Search,
    title: "System Analysis & Upgrade",
    description: "For those looking to implement new system or upgrade existing systems, we can analyse existing software/system and do gap analysis vis a vis the requirements in the modern environment.",
    features: ["Gap Analysis", "Modernization Strategy", "Migration Planning"]
  },
  {
    icon: Database,
    title: "Database Performance",
    description: "We also provide database consultancy for enhancing the performance of existing systems. From schema optimization to query tuning, we ensure your data layer isn't the bottleneck.",
    features: ["Query Optimization", "Schema Design", "Performance Tuning"]
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              We provide consultancy to In-house software / database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system. For those looking to implement new system or upgrade existing systems, we can analyse existing software / system and do gap analysis vis a vis the requirements in the modern environment. We also provide database consultancy for enhancing the performance of existing system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="space-y-12 md:space-y-20">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""} h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden`}>
                  <div className={`w-full h-full bg-gradient-to-br ${
                    idx === 0 ? "from-blue-500 to-purple-600" :
                    idx === 1 ? "from-cyan-500 to-blue-600" :
                    "from-purple-500 to-pink-600"
                  } flex items-center justify-center`}>
                    <service.icon className="w-16 h-16 sm:w-20 sm:h-20 text-white/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
