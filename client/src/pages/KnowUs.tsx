import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Users, History, Award, Cpu, Target, Heart } from "lucide-react";

export default function KnowUs() {
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
              Know Us
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Get to know the team and vision behind Vishrani Computech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <History className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Vishrani Computech was founded in 2000 with the aim of providing cost-effective IT solutions and services to customers with projects ranging from small to medium to large. Since its inception, Vishrani Computech has been delivering full-cycle, end-to-end software development services. We assist companies in launching their projects, transitioning to digital-first strategies, and growing their businesses. Our mission is to empower clients to deliver enhanced experiences to their customers and employees, gain competitive advantages, and improve internal efficiency.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                We specialise in providing customised business software tailored to our clients' specific needs. Vishrani Computech offers a wide range of custom software development services, ensuring the delivery of the right solutions to meet our clients' unique requirements. We take pride in our customer loyalty and retention.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                In addition to software development, we provide consultancy services to in-house software and database development teams. For those looking to implement new systems or upgrade existing ones, we conduct thorough analyses and gap assessments to ensure modern requirements are met. Our database consultancy services focus on enhancing the performance of existing systems.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our team consists of highly skilled and experienced professionals. We are constantly upgrading our skills to match the new technologies in software field. We have progressed from DOS based languages like Clipper and Foxpro to Windows based Visual Basic 6 to currently the latest version of Visual Studio Dot Net. On the database front, we are providing solution on robust databases like Ms Sql and Oracle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 card-shadow"
            >
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Our Expertise</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We specialise in providing customised business software tailored to our clients' specific needs. We ensure the delivery of the right solutions to meet unique requirements.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 card-shadow"
            >
              <Heart className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Customer Loyalty</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We take pride in our customer loyalty and retention. Our clients stay with us because we deliver consistent value and support over decades.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 md:p-8 card-shadow"
            >
              <Cpu className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Skilled Team</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our team consists of highly skilled professionals constantly upgrading skills to match new technologies, from DOS to the latest .NET stacks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Technology Evolution
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                We have progressed from DOS based languages to Visual Basic 6 to latest Visual Studio .NET. We work on SQL & Oracle databases.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {["Visual Studio .NET", "SQL Server", "Oracle", "Cloud Architecture", "Modern Web", "Enterprise Security"].map((tech, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gray-100 p-4 rounded-lg text-center text-sm font-medium text-gray-700"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
