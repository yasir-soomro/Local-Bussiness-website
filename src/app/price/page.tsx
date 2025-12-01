"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Shield, Sparkles, ChevronDown, Star } from 'lucide-react';

// ============================================================================
// FILE: types/pricing.ts
// ============================================================================

// interface PricingFeature {
//   name: string;
//   included: boolean;
// }

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  highlight: boolean;
  icon: React.ReactNode;
  buttonText: string;
  gradient: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ComparisonFeature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

// ============================================================================
// FILE: data/pricing-data.ts
// ============================================================================

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$19',
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: 'Perfect for beginners and small teams',
    features: [
      'Basic dashboard access',
      'Email support',
      'Up to 5 projects',
      'Analytics overview',
      '5GB storage',
      'Basic integrations',
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />,
    buttonText: 'Choose Plan',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$49',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'Best for growing businesses',
    features: [
      'Everything in Starter',
      'Advanced analytics',
      'AI-powered suggestions',
      'Unlimited projects',
      'Priority support',
      '100GB storage',
      'Advanced integrations',
      'Custom branding',
    ],
    highlight: true,
    icon: <Sparkles className="w-6 h-6" />,
    buttonText: 'Get Started',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with advanced needs',
    features: [
      'Everything in Professional',
      'Custom dashboards',
      'Dedicated account manager',
      'AI automation suite',
      'Enterprise-grade security',
      '24/7 support',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlight: false,
    icon: <Shield className="w-6 h-6" />,
    buttonText: 'Contact Sales',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const comparisonFeatures: ComparisonFeature[] = [
  { name: 'Projects', starter: '5', professional: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Storage', starter: '5GB', professional: '100GB', enterprise: 'Unlimited' },
  { name: 'Team members', starter: '3', professional: '15', enterprise: 'Unlimited' },
  { name: 'Basic analytics', starter: true, professional: true, enterprise: true },
  { name: 'Advanced analytics', starter: false, professional: true, enterprise: true },
  { name: 'AI-powered suggestions', starter: false, professional: true, enterprise: true },
  { name: 'Custom dashboards', starter: false, professional: false, enterprise: true },
  { name: 'Priority support', starter: false, professional: true, enterprise: true },
  { name: '24/7 support', starter: false, professional: false, enterprise: true },
  { name: 'Custom integrations', starter: false, professional: false, enterprise: true },
  { name: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
  { name: 'SLA guarantee', starter: false, professional: false, enterprise: true },
];

const faqData: FAQItem[] = [
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we\&lsquo;ll prorate any differences.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required to start. You can explore all features before committing.',
  },
  {
    question: 'What happens if I exceed my plan limits?',
    answer: 'We\&lsquo;ll send you a notification when you\&lsquo;re approaching 80% of your limits. You can either upgrade to a higher plan or purchase additional resources as needed.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all annual plans. If you\&lsquo;re not satisfied, we&lsquo;ll refund your payment, no questions asked.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. You\&lsquo;ll continue to have access until the end of your billing period.',
  },
];

// ============================================================================
// FILE: components/PricingCard.tsx
// ============================================================================

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly, index }) => {
  const displayPrice = plan.price === 'Custom' ? 'Custom' : 
    isYearly && plan.yearlyPrice 
      ? `$${Math.round(plan.yearlyPrice / 12)}`
      : plan.price;

  const savings = plan.monthlyPrice && plan.yearlyPrice
    ? plan.monthlyPrice * 12 - plan.yearlyPrice
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-8 shadow-lg border bg-white transition-all ${
        plan.highlight
          ? 'border-teal-600 scale-105 shadow-teal-100 shadow-2xl'
          : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-white" />
          Most Popular
        </div>
      )}

      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} text-white mb-4 shadow-lg`}>
        {plan.icon}
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {plan.name}
      </h3>

      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={isYearly ? 'yearly' : 'monthly'}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold text-teal-600"
            >
              {displayPrice}
            </motion.span>
          </AnimatePresence>
          {plan.price !== 'Custom' && (
            <span className="text-gray-600">/mo</span>
          )}
        </div>
        {isYearly && savings > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-emerald-600 font-medium mt-1"
          >
            Save ${savings}/year
          </motion.p>
        )}
      </div>

      <p className="text-gray-600 mb-6 text-sm">
        {plan.description}
      </p>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            className="flex items-start gap-3 text-gray-700 text-sm"
          >
            <Check className="text-teal-600 flex-shrink-0 mt-0.5" size={18} />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg ${
          plan.highlight
            ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {plan.buttonText}
      </motion.button>
    </motion.div>
  );
};

// ============================================================================
// FILE: components/BillingToggle.tsx
// ============================================================================

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-4 mb-12"
    >
      <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
        Monthly
      </span>
      
      <button
        onClick={onToggle}
        className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        style={{
          backgroundColor: isYearly ? '#14b8a6' : '#d1d5db',
        }}
      >
        <motion.span
          animate={{ x: isYearly ? 26 : 2 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
        />
      </button>

      <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
        Yearly
      </span>

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800"
      >
        Save 20%
      </motion.span>
    </motion.div>
  );
};

// ============================================================================
// FILE: components/ComparisonTable.tsx
// ============================================================================

interface ComparisonTableProps {
  features: ComparisonFeature[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 mb-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
        Compare All Features
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        See exactly what&lsquo;s included in each plan to make the right choice for your business.
      </p>
      
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="py-5 px-6 text-left text-sm font-semibold text-gray-900">
                  Feature
                </th>
                <th className="py-5 px-6 text-center text-sm font-semibold text-gray-900">
                  Starter
                </th>
                <th className="py-5 px-6 text-center text-sm font-semibold text-teal-600 bg-teal-50">
                  Professional
                </th>
                <th className="py-5 px-6 text-center text-sm font-semibold text-gray-900">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 text-sm text-gray-700 font-medium">
                    {feature.name}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.starter === 'boolean' ? (
                      feature.starter ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700 font-medium">
                        {feature.starter}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-teal-50/50">
                    {typeof feature.professional === 'boolean' ? (
                      feature.professional ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700 font-medium">
                        {feature.professional}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <Check className="w-5 h-5 text-teal-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm text-gray-700 font-medium">
                        {feature.enterprise}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================================
// FILE: components/FAQAccordion.tsx
// ============================================================================

interface FAQAccordionProps {
  item: FAQItem;
  index: number;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-teal-600 transition-colors group"
      >
        <span className="text-base font-semibold text-gray-900 pr-8 group-hover:text-teal-600 transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-teal-600 transition-colors" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed text-sm">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================================
// FILE: components/FAQSection.tsx
// ============================================================================

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Have questions? We&lsquo;ve got answers. Can&lsquo;t find what you&apos;re looking for? Contact our support team.
      </p>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        {faqs.map((item, index) => (
          <FAQAccordion key={index} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// ============================================================================
// FILE: app/pricing/page.tsx (Main Component)
// ============================================================================

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent <span className="text-teal-600">Pricing</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose a plan that fits your business. Upgrade anytime as you grow.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <BillingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>

        {/* Comparison Table */}
        <ComparisonTable features={comparisonFeatures} />

        {/* FAQ Section */}
        <FAQSection faqs={faqData} />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already growing with our platform. Start your free trial today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}