import Layout from "@/components/layout/Layout";
import { Terminal, Database, Search, CheckCircle, ArrowRight, Lightbulb, Settings, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    icon: Terminal,
    title: "Consultancy for Development Teams",
    description: "We provide consultancy to In-house software and database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system.",
    features: ["Code Review & Best Practices", "Architecture Validation", "Process Improvement", "Team Training"],
    color: "blue"
  },
  {
    icon: Search,
    title: "System Analysis & Upgrade",
    description: "For those looking to implement new system or upgrade existing systems, we can analyse existing software/system and do gap analysis vis a vis the requirements in the modern environment.",
    features: ["Gap Analysis", "Modernization Strategy", "Migration Planning", "Risk Assessment"],
    color: "purple"
  },
  {
    icon: Database,
    title: "Database Performance",
    description: "We also provide database consultancy for enhancing the performance of existing systems. From schema optimization to query tuning, we ensure your data layer isn't the bottleneck.",
    features: ["Query Optimization", "Schema Design", "Performance Tuning", "Database Migration"],
    color: "cyan"
  }
];

const additionalServices = [
  {
    icon: Lightbulb,
    title: "Strategic IT Consulting",
    description: "Expert guidance on technology decisions and digital strategy"
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamlessly connect your applications and data sources"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Measure and improve your software system performance"
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-main relative z-10 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Expert Consultancy & Development Support
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl">
              We provide consultancy to In-house software / database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system. For those looking to implement new system or upgrade existing systems, we can analyse existing software / system and do gap analysis vis a vis the requirements in the modern environment. We also provide database consultancy for enhancing the performance of existing system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-main">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.color === 'blue' ? 'bg-blue-100' :
                    service.color === 'purple' ? 'bg-purple-100' :
                    'bg-cyan-100'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'blue' ? 'text-blue-600' :
                      service.color === 'purple' ? 'text-purple-600' :
                      'text-cyan-600'
                    }`} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-700">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          service.color === 'blue' ? 'bg-blue-100' :
                          service.color === 'purple' ? 'bg-purple-100' :
                          'bg-cyan-100'
                        }`}>
                          <CheckCircle className={`w-4 h-4 ${
                            service.color === 'blue' ? 'text-blue-600' :
                            service.color === 'purple' ? 'text-purple-600' :
                            'text-cyan-600'
                          }`} />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`relative h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden ${
                    service.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' :
                    service.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                    'bg-gradient-to-br from-cyan-500 to-cyan-700'
                  }`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-24 h-24 sm:w-32 sm:h-32 text-white/20" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm" />
                    <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">More Services</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900">Additional Expertise</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Let's discuss how our consultancy services can help optimize your development processes and systems.
            </p>
            <Link 
              href="/connect" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
