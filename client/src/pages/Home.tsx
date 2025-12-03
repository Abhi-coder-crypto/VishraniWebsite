import Layout from "@/components/layout/Layout";
import { ArrowRight, Code, Database, Globe, CheckCircle, Users, Award, Zap, Shield, Clock } from "lucide-react";
import heroBg from "@assets/generated_images/professional_blue_tech_hero_background.png";
import heroIllustration from "@assets/generated_images/tech_hero_illustration.png";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] h-[calc(100vh-72px)] mt-[72px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-cyan-900/80" />
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-main relative z-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Trusted Since 2000</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Get Perfect <span className="text-cyan-400">Software Solutions</span> That Empowers Businesses
              </h1>
              
              <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Since 2000, Vishrani Computech has been providing full-cycle, end-to-end software development services. We help companies launch their projects, switch to digital-first strategies, and grow their businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link 
                  href="/connect" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  data-testid="link-hero-contact"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all"
                  data-testid="link-hero-products"
                >
                  Our Solutions
                </Link>
              </div>
            </motion.div>
            
            {/* Right - Hero Image and Stats */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative mb-3 max-w-sm mx-auto">
                <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <img 
                  src={heroIllustration} 
                  alt="Software Solutions" 
                  className="relative w-full rounded-xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
                {[
                  { number: "100+", label: "Clients" },
                  { number: "25+", label: "Years" },
                  { number: "50+", label: "Solutions" },
                  { number: "95%", label: "Retention" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-md p-1.5 text-center border border-white/10"
                  >
                    <span className="text-xs font-bold text-cyan-400 block">{stat.number}</span>
                    <span className="text-white/70 text-[9px] leading-tight block">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Stats - Mobile */}
      <section className="lg:hidden py-8 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { number: "100+", label: "Clients" },
              { number: "25+", label: "Years" },
              { number: "50+", label: "Solutions" },
              { number: "95%", label: "Retention" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          {/* Centered heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">About Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900">
                Software is Critical for Every Organisation
              </h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Till the beginning of this century, software's use within organisations was largely confined to big transactional systems in the data centre. Now, it applies to nearly every function in every industry, touching every department. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We empower our clients to deliver improved experiences to their customers and employees, gain competitive advantages and enhance internal efficiency.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { number: "25+", label: "Years" },
                  { number: "100+", label: "Clients" },
                  { number: "50+", label: "Projects" },
                  { number: "95%", label: "Retention" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-lg" />
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-1">
                  <div className="bg-white rounded-[22px] p-6">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative">
                      {/* Abstract tech illustration */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                      <div className="absolute top-8 left-8 w-20 h-20 bg-blue-500/20 rounded-2xl rotate-12" />
                      <div className="absolute bottom-12 right-12 w-16 h-16 bg-cyan-500/20 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-blue-500/20 rounded-3xl rotate-45" />
                      <div className="relative z-10 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                          <Code className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-blue-900 font-bold text-lg">Innovation Since 2000</p>
                        <p className="text-blue-600 text-sm">Trusted Technology Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />
        </div>
        
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Trusted by Businesses Across Industries</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">For over two decades, we've been helping businesses transform with technology and innovation</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                desc: "Tailored software solutions built specifically for your unique business requirements and growth objectives.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Database,
                title: "Database Consultancy",
                desc: "Expert optimization and architecture for high-performance data management and scalability.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                desc: "Modernize your business with cutting-edge digital strategies and innovative solutions.",
                gradient: "from-cyan-500 to-cyan-600"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Robust security implementations to protect your business data and maintain compliance.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                desc: "Speed up your systems with our expert performance tuning and optimization services.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Round-the-clock technical support to ensure your systems run smoothly at all times.",
                gradient: "from-red-500 to-red-600"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient}`} />
                
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                
                {/* Hover effect circle */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with our proven expertise and decades of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/connect" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-all"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
