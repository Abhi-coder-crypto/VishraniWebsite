import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, History, Award, Cpu, Target, Heart, Rocket, CheckCircle, ArrowRight, Sparkles, TrendingUp, Shield, Code, Database } from "lucide-react";
import { Link } from "wouter";

const timeline = [
  { year: "2000", title: "Founded", desc: "Started with a vision for cost-effective IT solutions" },
  { year: "2010", title: "Digital Era", desc: "Transitioned to modern technologies" },
  { year: "2020", title: "Two Decades", desc: "20+ years of excellence" },
  { year: "2024", title: "Future Ready", desc: "Evolving with cutting-edge tech" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "To empower clients to deliver enhanced experiences to their customers and employees, gain competitive advantages, and improve internal efficiency.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Sparkles,
    title: "Vision",
    desc: "To be the trusted technology partner for businesses seeking digital transformation and sustainable growth through innovative software solutions.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Customer loyalty, technical excellence, continuous learning, and delivering consistent value that stands the test of time.",
    gradient: "from-cyan-500 to-cyan-600"
  },
];

const expertise = [
  { icon: Code, title: "Custom Software", desc: "Tailored solutions for unique business needs" },
  { icon: Database, title: "Database Solutions", desc: "MS SQL & Oracle expertise" },
  { icon: TrendingUp, title: "System Analysis", desc: "Gap analysis & modernization" },
  { icon: Shield, title: "Consultancy", desc: "Expert third-person perspective" },
];

export default function KnowUs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Building Digital Excellence Since <span className="text-cyan-400">2000</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                For over two decades, Vishrani Computech has been at the forefront of delivering innovative software solutions that transform businesses and drive growth.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">25+</div>
                  <div className="text-sm text-white/60">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-white/60">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm text-white/60">Client Retention</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {expertise.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-all"
                      >
                        <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - Compact */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Story Text - 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">Our Story</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
                A Legacy of Innovation & Trust
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2000, Vishrani Computech delivers full-cycle, end-to-end software development services. We specialise in customised business software, helping companies launch projects, transition to digital-first strategies, and grow their businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled professionals has evolved from DOS-based languages to modern Visual Studio .NET, providing solutions on MS SQL and Oracle databases. We take pride in our 95% client retention rate.
              </p>
            </motion.div>
            
            {/* Timeline - 2 columns, compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-2 gap-3">
                {timeline.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xs">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-white/10 text-cyan-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">What Drives Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">Our Core Philosophy</h2>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy & Expertise */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Custom Software", icon: Code, color: "blue" },
                  { label: "Database Solutions", icon: Database, color: "purple" },
                  { label: "System Analysis", icon: TrendingUp, color: "cyan" },
                  { label: "Consultancy", icon: Users, color: "green" },
                  { label: "MS SQL Server", icon: Database, color: "orange" },
                  { label: "Oracle", icon: Database, color: "red" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      item.color === 'blue' ? 'bg-blue-100' :
                      item.color === 'purple' ? 'bg-purple-100' :
                      item.color === 'cyan' ? 'bg-cyan-100' :
                      item.color === 'green' ? 'bg-green-100' :
                      item.color === 'orange' ? 'bg-orange-100' :
                      'bg-red-100'
                    }`}>
                      <item.icon className={`w-6 h-6 ${
                        item.color === 'blue' ? 'text-blue-600' :
                        item.color === 'purple' ? 'text-purple-600' :
                        item.color === 'cyan' ? 'text-cyan-600' :
                        item.color === 'green' ? 'text-green-600' :
                        item.color === 'orange' ? 'text-orange-600' :
                        'text-red-600'
                      }`} />
                    </div>
                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                Consultancy & Technical Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  In addition to software development, we provide consultancy services to in-house software and database development teams. For those looking to implement new systems or upgrade existing ones, we conduct thorough analyses and gap assessments to ensure modern requirements are met.
                </p>
                <p>
                  Our team consists of highly skilled and experienced professionals. We are constantly upgrading our skills to match the new technologies in software field. We have progressed from DOS based languages like Clipper and Foxpro to Windows based Visual Basic 6 to currently the latest version of Visual Studio Dot Net.
                </p>
                <p>
                  On the database front, we are providing solutions on robust databases like MS SQL and Oracle, ensuring your data is managed efficiently and securely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-12 md:py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
        
        <div className="container-main relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-white/10 text-cyan-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">Technology Stack</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Technology Evolution</h2>
              <p className="text-white/60 max-w-2xl mx-auto">From legacy systems to modern solutions, we've continuously evolved our technology stack</p>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Visual Studio .NET", featured: true },
              { name: "MS SQL Server", featured: true },
              { name: "Oracle Database", featured: true },
              { name: "C# / VB.NET", featured: false },
              { name: "ASP.NET", featured: false },
              { name: "Windows Forms", featured: false },
              { name: "Web Services", featured: false },
              { name: "REST APIs", featured: false },
              { name: "Cloud Solutions", featured: true },
              { name: "Enterprise Security", featured: false },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`px-6 py-3 rounded-full font-medium transition-all hover:scale-105 ${
                  tech.featured 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Join our growing family of satisfied clients and experience the Vishrani Computech difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/connect" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-semibold transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
