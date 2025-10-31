'use client'

import Layout from '@/components/Layout'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckIcon,
  XMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Free',
    description: 'Perfect for individual developers and small projects',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Local analysis only',
      'Basic test result visualization',
      'Coverage reports',
      'Export to JSON/CSV',
      'Community support',
      'Up to 1,000 tests per month'
    ],
    limitations: [
      'No server connection',
      'No AI insights',
      'No historical data',
      'No team collaboration'
    ],
    cta: 'Get Started Free',
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Pro',
    description: 'Ideal for growing teams and professional projects',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Everything in Free',
      'Cloud sync and storage',
      'AI-powered insights',
      'Historical data tracking',
      'Advanced visual analytics',
      'Team collaboration (up to 5 users)',
      'Priority support',
      'Up to 10,000 tests per month',
      'Custom integrations',
      'API access'
    ],
    limitations: [],
    cta: 'Start Free Trial',
    popular: true,
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    price: { monthly: 99, yearly: 990 },
    features: [
      'Everything in Pro',
      'Multi-team dashboards',
      'Unlimited users',
      'Custom integrations',
      'Advanced API access',
      'SSO and SAML support',
      'Dedicated account manager',
      'Custom training and onboarding',
      'SLA guarantees',
      'Unlimited tests',
      'White-label options',
      'On-premise deployment'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-purple-500 to-pink-500'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your team. Upgrade or downgrade anytime.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!isYearly ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
                Yearly
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                Save 17%
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <SparklesIcon className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-slate-600 ml-2">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && plan.price.yearly > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-900 mb-4">Features:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-900 mb-4">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-start">
                            <XMarkIcon className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Can I change plans later?
                </h3>
                <p className="text-slate-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-slate-600">
                  Yes! All paid plans come with a 14-day free trial. No credit card required to start.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-slate-600">
                  We accept all major credit cards, PayPal, and wire transfers for enterprise customers.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Do you offer discounts for non-profits?
                </h3>
                <p className="text-slate-600">
                  Yes! We offer a 50% discount on all plans for qualified non-profit organizations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who are already using AI Test Reporter to improve their testing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}