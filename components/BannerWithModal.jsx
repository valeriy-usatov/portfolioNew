'use client'; // Важно для использования useState и useEffect

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';


export default function BannerWithModal() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('Baner');

  
  const handleCloseBanner = () => {
    setIsBannerVisible(false);
    // localStorage.setItem('bannerClosed', 'true');
  };

  
  // Анимации
  const bannerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', damping: 25 } },
  };

  return (
    <>
      {/* Баннер */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={bannerVariants}
            className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 z-50 shadow-lg"
          >
            <div className="container mx-auto flex justify-between items-center">
              <p className="text-sm md:text-base font-medium">
              🚀  {t('title')} 
              {'  '}
                {/*  Я разрабатываю сайты и приложения!{'  '} */}
                <span className="hidden sm:inline">{t('subTitle')} →</span>
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-1 bg-white text-blue-600 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
                >
                    {t('Details')}
                </button>
                <button
                  onClick={handleCloseBanner}
                  className="px-2 text-white hover:text-gray-200 transition"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalVariants}
              className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('MyServices')} </h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✅ {t('Landing')} </li>
                <li>✅ {t('ECommerce')} </li>
                <li>✅ {t('WebApplications')} </li>
                <li>✅ {t('Multililang')} </li>
                <li>✅ {t('APIIntegrations')} </li>
              </ul>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                >
                  {t('Close')} 
                </button>
                <a
                  href="#contact" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  {t('Contact')} 
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
