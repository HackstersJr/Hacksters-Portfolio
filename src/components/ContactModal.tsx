'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactInfo {
  email?: string;
  officialEmail?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  contactInfo: ContactInfo;
}

export default function ContactModal({ isOpen, onClose, name, role, contactInfo }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Personal Email',
      value: contactInfo.email,
      href: contactInfo.email ? `mailto:${contactInfo.email}` : undefined,
      copyable: true,
      color: 'cyan',
    },
    {
      icon: Mail,
      label: 'Official Email',
      value: contactInfo.officialEmail,
      href: contactInfo.officialEmail ? `mailto:${contactInfo.officialEmail}` : undefined,
      copyable: true,
      color: 'purple',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: contactInfo.phone ? `tel:${contactInfo.phone}` : undefined,
      copyable: true,
      color: 'green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: contactInfo.linkedin,
      copyable: false,
      color: 'blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: contactInfo.github,
      href: contactInfo.github ? `https://github.com/${contactInfo.github.replace('@', '')}` : undefined,
      copyable: false,
      color: 'white',
    },
  ].filter(item => item.value);

  // Different animations for mobile (slide up) vs desktop (scale + fade)
  const modalVariants = isMobile
    ? {
      initial: { y: '100%', opacity: 1 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 1 },
    }
    : {
      initial: { opacity: 0, scale: 0.95, y: 10 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 10 },
    };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; hover: string; border: string }> = {
      cyan: { icon: 'text-cyan-400', hover: 'hover:bg-cyan-400/10 hover:border-cyan-400/30', border: 'border-cyan-400/20' },
      purple: { icon: 'text-purple-400', hover: 'hover:bg-purple-400/10 hover:border-purple-400/30', border: 'border-purple-400/20' },
      green: { icon: 'text-green-400', hover: 'hover:bg-green-400/10 hover:border-green-400/30', border: 'border-green-400/20' },
      blue: { icon: 'text-blue-400', hover: 'hover:bg-blue-400/10 hover:border-blue-400/30', border: 'border-blue-400/20' },
      white: { icon: 'text-white', hover: 'hover:bg-white/10 hover:border-white/30', border: 'border-white/20' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className={`fixed inset-0 z-[9999] flex ${isMobile ? 'items-end' : 'items-center justify-center'} pointer-events-none`}>
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 35,
              }}
              className={`pointer-events-auto relative w-full ${isMobile
                ? 'max-h-[85vh] rounded-t-3xl'
                : 'max-w-md mx-4 rounded-2xl'
                } bg-neutral-950 border border-white/10 overflow-hidden`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle for mobile */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
                </div>
              )}

              {/* Content */}
              <div className={`${isMobile ? 'px-6 pb-8' : 'p-8'}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-1"
                      style={{ fontFamily: '"Dala Floda", serif' }}
                    >
                      {name}
                    </h3>
                    <p className="text-gray-400 text-sm font-chillax">
                      {role}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Contact Items */}
                <div className="space-y-3">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon;
                    const isCopied = copiedField === item.label;
                    const colorClasses = getColorClasses(item.color);

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.3 }}
                        className={`group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 ${colorClasses.hover} transition-all duration-200`}
                      >
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-lg bg-white/5 border ${colorClasses.border} flex items-center justify-center ${colorClasses.icon} transition-colors`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] uppercase tracking-wider text-gray-500 font-chillax mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                              rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noopener noreferrer'}
                              className="text-sm text-white font-chillax hover:underline truncate block"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-white font-chillax truncate">{item.value}</p>
                          )}
                        </div>

                        {/* Action button */}
                        {item.copyable ? (
                          <button
                            onClick={() => copyToClipboard(item.value || '', item.label)}
                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                            aria-label={`Copy ${item.label}`}
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        ) : item.href && (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                            aria-label={`Open ${item.label}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer hint - only on desktop */}
                {!isMobile && (
                  <p className="text-xs text-gray-600 text-center mt-6 font-chillax">
                    Press ESC or click outside to close
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
