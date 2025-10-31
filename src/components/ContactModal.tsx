'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Instagram, Linkedin, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactInfo {
  email?: string;
  phone?: string;
  instagram?: string;
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

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contactInfo.email,
      href: contactInfo.email ? `mailto:${contactInfo.email}` : undefined,
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: contactInfo.phone ? `tel:${contactInfo.phone}` : undefined,
      copyable: true,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: contactInfo.instagram,
      href: contactInfo.instagram ? `https://instagram.com/${contactInfo.instagram.replace('@', '')}` : undefined,
      copyable: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: contactInfo.linkedin,
      copyable: false,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: contactInfo.github,
      href: contactInfo.github ? `https://github.com/${contactInfo.github.replace('@', '')}` : undefined,
      copyable: false,
    },
  ].filter(item => item.value);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="contact-modal-card pointer-events-auto relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Holographic Background Effect */}
              <div className="contact-modal-glow" />
              
              {/* Card Content */}
              <div className="contact-modal-content">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Chillax, sans-serif' }}>
                      {name}
                    </h3>
                    <p className="text-cyan-300/80 text-sm font-medium" style={{ fontFamily: 'Chillax, sans-serif' }}>
                      {role}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="contact-close-btn"
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
                    
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="contact-item-wrapper"
                      >
                        <div className="contact-item">
                          <div className="contact-item-icon">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="contact-item-label">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.label === 'Email' || item.label === 'Phone' ? undefined : '_blank'}
                                rel={item.label === 'Email' || item.label === 'Phone' ? undefined : 'noopener noreferrer'}
                                className="contact-item-value contact-item-link"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="contact-item-value">{item.value}</p>
                            )}
                          </div>
                          {item.copyable && (
                            <button
                              onClick={() => copyToClipboard(item.value || '', item.label)}
                              className="contact-copy-btn"
                              aria-label={`Copy ${item.label}`}
                            >
                              {isCopied ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Divider */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-xs text-center text-gray-400" style={{ fontFamily: 'Chillax, sans-serif' }}>
                    Click outside to close
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
