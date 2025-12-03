import Layout from "@/components/layout/Layout";
import { Terminal, Database, Search, CheckCircle, ArrowRight, Lightbulb, Settings, BarChart3, Code, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  {
    icon: Terminal,
    title: "Consultancy for Development Teams",
    description: "We provide consultancy to In-house software and database development teams. While your in-house team may be in the best position to know the user requirement, we provide a Third Person view on the overall process and provide inputs to enhance the system.",
    features: ["Code Review & Best Practices", "Architecture Validation", "Process Improvement", "Team Training"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Search,
    title: "System Analysis & Upgrade",
    description: "For those looking to implement new system or upgrade existing systems, we can analyse existing software/system and do gap analysis vis a vis the requirements in the modern environment.",
    features: ["Gap Analysis", "Modernization Strategy", "Migration Planning", "Risk Assessment"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Database,
    title: "Database Performance",
    description: "We also provide database consultancy for enhancing the performance of existing systems. From schema optimization to query tuning, we ensure your data layer isn't the bottleneck.",
    features: ["Query Optimization", "Schema Design", "Performance Tuning", "Database Migration"],
    gradient: "from-cyan-500 to-cyan-600"
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Services - Compact Cards */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Our Services</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Expert Consultancy & Development Support
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide consultancy to in-house software and database development teams, offering a fresh perspective to enhance your systems and processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features as tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIdx) => (
                    <span 
                      key={fIdx} 
                      className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Expertise - Dark Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-white/10 text-cyan-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">More Services</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">Additional Expertise</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Lightbulb, 
                title: "Strategic IT Consulting", 
                desc: "Expert guidance on technology decisions and digital strategy to align your IT with business goals",
                gradient: "from-amber-500 to-orange-500",
                features: ["Technology Roadmap", "Digital Strategy", "IT Governance"]
              },
              { 
                icon: Settings, 
                title: "System Integration", 
                desc: "Seamlessly connect your applications and data sources for unified operations",
                gradient: "from-blue-500 to-indigo-500",
                features: ["API Integration", "Data Sync", "Workflow Automation"]
              },
              { 
                icon: BarChart3, 
                title: "Performance Analytics", 
                desc: "Measure and improve your software system performance with data-driven insights",
                gradient: "from-emerald-500 to-teal-500",
                features: ["System Monitoring", "Bottleneck Analysis", "Optimization Reports"]
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-xl group-hover:from-white/10 transition-all" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">{item.desc}</p>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx}
                        className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover glow */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Our Process</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">How We Work With You</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understand your needs and challenges", icon: Search },
              { step: "02", title: "Analysis", desc: "Deep dive into your systems", icon: BarChart3 },
              { step: "03", title: "Strategy", desc: "Create actionable roadmap", icon: Lightbulb },
              { step: "04", title: "Execution", desc: "Implement and optimize", icon: Zap },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center group"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                
                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-purple-100 text-purple-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
                Experience That Delivers Results
              </h2>
              <p className="text-gray-600 mb-6">
                With over two decades of experience, we bring a unique combination of technical expertise and business understanding to every engagement.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Third-Party Perspective", desc: "Fresh eyes on your challenges" },
                  { title: "Proven Methodologies", desc: "Best practices from 25+ years" },
                  { title: "Technology Agnostic", desc: "Solutions that fit your stack" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "25+", label: "Years Experience", color: "blue" },
                { number: "100+", label: "Projects Delivered", color: "purple" },
                { number: "95%", label: "Client Retention", color: "cyan" },
                { number: "50+", label: "Happy Clients", color: "green" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <div className={`text-3xl font-bold mb-1 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'purple' ? 'text-purple-600' :
                    stat.color === 'cyan' ? 'text-cyan-600' :
                    'text-green-600'
                  }`}>{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Optimize Your Systems?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our consultancy services can help your team succeed.
            </p>
            <Link 
              href="/connect" 
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
