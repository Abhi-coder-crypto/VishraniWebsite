import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_blue_tech_hero_background.png";
import stockBrokerImg from "@assets/generated_images/stock_broker_backoffice_software.png";
import handkerchiefImg from "@assets/generated_images/handkerchief_manufacturer_software.png";
import studentImg from "@assets/generated_images/student_performance_tracking.png";
import questionBankImg from "@assets/generated_images/question_bank_coaching_software.png";
import postProductionImg from "@assets/generated_images/post_production_studio_software.png";
import warehouseImg from "@assets/generated_images/warehouse_management_system.png";
import financeBrokerImg from "@assets/generated_images/finance_broker_backoffice.png";
import gstInvoicingImg from "@assets/generated_images/gst_invoicing_software.png";
import insuranceImg from "@assets/generated_images/insurance_agent_task_management.png";
import stockMarketIcon from "@assets/generated_images/stock_market_trading_icon.png";
import financeBrokerIcon from "@assets/generated_images/finance_broker_icon.png";
import coachingIcon from "@assets/generated_images/coaching_institute_icon.png";
import postProductionIcon from "@assets/generated_images/post_production_studio_icon.png";
import garmentIcon from "@assets/generated_images/garment_manufacturing_icon.png";
import logisticsIcon from "@assets/generated_images/logistics_warehouse_icon.png";

const solutions = [
  { image: stockBrokerImg, title: "Back-office for Stock Broker" },
  { image: handkerchiefImg, title: "Back-office for Handkerchief Manufacturer" },
  { image: studentImg, title: "Students Performance Tracking" },
  { image: questionBankImg, title: "Question Bank for Coaching Institutes" },
  { image: postProductionImg, title: "Resource Management for Post Production Studios" },
  { image: warehouseImg, title: "Warehouse Management System" },
  { image: financeBrokerImg, title: "Back-office for Finance Broker" },
  { image: gstInvoicingImg, title: "GST Invoicing for Trader / Shop keeper" },
  { image: insuranceImg, title: "Task Management for Insurance Agent" },
];

const verticals = [
  { image: stockMarketIcon, title: "Stock Market" },
  { image: financeBrokerIcon, title: "Finance Broker" },
  { image: coachingIcon, title: "Coaching Institute" },
  { image: postProductionIcon, title: "Post Production Studio" },
  { image: garmentIcon, title: "Garment Manufacturing" },
  { image: logisticsIcon, title: "Logistics & Warehouse" },
];

export default function Products() {
  return (
    <Layout>
      {/* Hero Header Section with Blue Gradient */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-cyan-900/80" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-main relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Our Products</span>
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
              Solutions Designed & Developed
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">We specialise in providing customised business software for our clients. Our diverse portfolio is a testimony of our technical capacity and customer satisfaction.</p>
          </motion.div>
        </div>
      </section>

      {/* Products Cards Section with White Background */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shrink-0 border-2 border-blue-200 shadow-sm bg-blue-50 p-1">
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-contain rounded-lg" />
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

      {/* Verticals - Blue Gradient Background */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <div className="mb-10 md:mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-white/10 text-cyan-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">Industries</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                Verticals We Cater To
              </h2>
              <p className="text-white/70">Some of the verticals that we cater to are</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {verticals.map((ver, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 overflow-hidden border border-blue-400/30">
                  <img src={ver.image} alt={ver.title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
                <span className="font-medium text-white text-xs sm:text-sm">{ver.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
