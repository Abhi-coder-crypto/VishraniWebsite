import Layout from "@/components/layout/Layout";
import { ArrowRight, Code, Database, Globe, CheckCircle, Users, Award } from "lucide-react";
import heroBg from "@assets/generated_images/professional_blue_tech_hero_background.png";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60" />
        </div>

        <div className="container-main relative z-10 py-20 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Get Perfect <span className="text-cyan-400">Software Solutions</span> That Empowers Businesses
              </h1>
              
              <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Since 2000, Vishrani Computech has been providing full-cycle, end-to-end software development services. We help companies launch their projects, switch to digital-first strategies, and grow their businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link 
                  href="/connect" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-colors"
                  data-testid="link-hero-contact"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-semibold transition-colors"
                  data-testid="link-hero-products"
                >
                  Our Solutions
                </Link>
              </div>
            </motion.div>
            
            {/* Stats Cards - Desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, number: "100+", label: "Clients Served" },
                { icon: Award, number: "20+", label: "Years Experience" },
                { icon: Code, number: "50+", label: "Solutions Built" },
                { icon: CheckCircle, number: "95%", label: "Client Retention" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Mobile */}
      <section className="lg:hidden bg-blue-900 py-8">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "100+", label: "Clients" },
              { number: "20+", label: "Years" },
              { number: "50+", label: "Solutions" },
              { number: "95%", label: "Retention" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center py-4">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Software is Critical for Every Organisation
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Till the beginning of this century, software's use within organisations was largely confined to big transactional systems in the data centre. Now, it applies to nearly every function in every industry, touching every department. 
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We empower our clients to deliver improved experiences to their customers and employees, gain competitive advantages and enhance internal efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by businesses across industries for over two decades</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                desc: "Tailored software solutions built specifically for your unique business requirements."
              },
              {
                icon: Database,
                title: "Database Consultancy",
                desc: "Expert optimization and architecture for high-performance data management."
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                desc: "Modernize your business with cutting-edge digital strategies and solutions."
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-8 card-shadow hover:card-shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-main text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals with our proven expertise.
          </p>
          <Link 
            href="/connect" 
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base font-semibold transition-colors"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
