import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Code, FileText, Wrench, MonitorPlay, PenTool,
  Smartphone, Settings, Bug, Search, ShoppingCart,
  Package, Headphones, PlugZap, Database, RefreshCw
} from 'lucide-react';

const services = [
  { icon: <Code className="h-6 w-6 text-red-600" />, title: 'Full Stack Development', desc: 'Robust frontend & backend solutions tailored to your needs.' },
  { icon: <FileText className="h-6 w-6 text-red-600" />, title: 'Content Development', desc: 'High-quality content aligned with your brand and goals.' },
  { icon: <Wrench className="h-6 w-6 text-red-600" />, title: 'Application Maintenance', desc: 'Ongoing updates and support to keep your apps running smoothly.' },
  { icon: <MonitorPlay className="h-6 w-6 text-red-600" />, title: 'Broadcast & Digital Marketing', desc: 'Multichannel strategies for brand reach and engagement.' },
  { icon: <PenTool className="h-6 w-6 text-red-600" />, title: 'UI/UX Design', desc: 'Intuitive and visually appealing user interfaces.' },
  { icon: <Smartphone className="h-6 w-6 text-red-600" />, title: 'Mobile App Development', desc: 'Scalable and secure iOS & Android app solutions.' },
  { icon: <Settings className="h-6 w-6 text-red-600" />, title: 'DevOps & Automation', desc: 'CI/CD pipelines, infrastructure automation, and monitoring.' },
  { icon: <Bug className="h-6 w-6 text-red-600" />, title: 'QA & Software Testing', desc: 'Ensure quality with rigorous manual and automated testing.' },
  { icon: <Search className="h-6 w-6 text-red-600" />, title: 'Digital Marketing & SEO', desc: 'Grow visibility and traffic with proven strategies.' },
  { icon: <ShoppingCart className="h-6 w-6 text-red-600" />, title: 'E-commerce Development', desc: 'Custom online stores with seamless shopping experiences.' },
  { icon: <Package className="h-6 w-6 text-red-600" />, title: 'Custom Software Development', desc: 'Tailored software built around your business logic.' },
  { icon: <Headphones className="h-6 w-6 text-red-600" />, title: 'Tech Support & Helpdesk', desc: 'Timely, reliable support when you need it most.' },
  { icon: <PlugZap className="h-6 w-6 text-red-600" />, title: 'API Integration & Development', desc: 'Connect systems and build scalable integrations.' },
  { icon: <Database className="h-6 w-6 text-red-600" />, title: 'Database Management', desc: 'Efficient, secure database architecture and monitoring.' },
  { icon: <RefreshCw className="h-6 w-6 text-red-600" />, title: 'Migration & Modernization', desc: 'Update legacy systems to modern, scalable platforms.' }
];

const ServiceCarousel = () => {
  return (
    <section className="bg-gray-900 py-24 text-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Comprehensive Digital Solutions Tailored for You
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-line"></span>`
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          speed={800}
          className="service-swiper pb-12 overflow-visible"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="overflow-visible">
              <div className="relative overflow-visible">
                <div className="bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 transition-colors rounded-xl p-6 pt-16 h-[280px] flex flex-col items-start text-left shadow-lg relative">
                  {/* Circle icon */}
                  <div className="absolute top-0 left-4 -translate-y-1/2 bg-gray-900 border-2 border-red-600 p-3 rounded-full shadow-lg z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Removed jsx attribute from <style> */}
        <style>{`
          .swiper-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 40px;
          }

          .custom-line {
            display: inline-block;
            width: 50px;
            height: 4px;
            background-color: #9ca3af; /* gray-400 */
            border-radius: 2px;
            transition: background-color 0.3s ease;
          }

          .swiper-pagination-bullet-active.custom-line {
            background-color: #dc2626; /* red-600 */
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServiceCarousel;
