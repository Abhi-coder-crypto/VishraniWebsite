import Layout from "@/components/layout/Layout";
import { 
  TrendingUp, 
  Scissors, 
  GraduationCap, 
  BookOpen, 
  Film, 
  Warehouse, 
  Briefcase, 
  ShoppingCart, 
  FileText,
  Factory,
  Truck,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  { icon: TrendingUp, title: "Back-office for Stock Broker" },
  { icon: Scissors, title: "Back-office for Handkerchief Manufacturer" },
  { icon: GraduationCap, title: "Students Performance Tracking" },
  { icon: BookOpen, title: "Question Bank for Coaching Institutes" },
  { icon: Film, title: "Resource Management for Post Production Studios" },
  { icon: Warehouse, title: "Warehouse Management System" },
  { icon: Briefcase, title: "Back-office for Finance Broker" },
  { icon: ShoppingCart, title: "GST Invoicing for Trader / Shop keeper" },
  { icon: FileText, title: "Task Management for Insurance Agent" },
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
      {/* Solutions */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-white">
        <div className="container-main">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 md:mb-12"
          >
            <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Our Products</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
              Solutions Designed & Developed
            </h1>
            <p className="text-gray-600 max-w-2xl">We specialise in providing customised business software for our clients. Our diverse portfolio is a testimony of our technical capacity and customer satisfaction.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <sol.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3">
              Verticals We Cater To
            </h2>
            <p className="text-gray-600">Some of the verticals that we cater to are</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {verticals.map((ver, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-4 md:p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <ver.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <span className="font-medium text-gray-900 text-xs sm:text-sm">{ver.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
