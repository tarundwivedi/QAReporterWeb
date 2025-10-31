'use client'

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  BugAntIcon, 
  EyeIcon, 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

const kpis = [
  {
    title: 'Automation Pass Rate',
    description: 'Track the percentage of automated tests that pass consistently over time. Our AI identifies patterns and provides actionable insights to improve stability.',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
    metric: '95.2%',
    improvement: '+2.1%',
    installCommand: 'npm install ai-test-reporter'
  },
  {
    title: 'Test Effectiveness',
    description: 'Measure how well your tests detect real defects. AI analysis helps identify redundant tests and suggests optimizations for maximum coverage.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-cyan-500',
    metric: '87.3%',
    improvement: '+5.7%',
    installCommand: 'npm install ai-test-reporter'
  },
  {
    title: 'Defect Density',
    description: 'Monitor the number of defects per thousand lines of code. AI-powered trend analysis helps predict and prevent future issues.',
    icon: BugAntIcon,
    color: 'from-red-500 to-orange-500',
    metric: '0.8/1000',
    improvement: '-15.2%',
    installCommand: 'npm install ai-test-reporter'
  },
  {
    title: 'ROI of Testing',
    description: 'Calculate the return on investment of your testing efforts by measuring time saved, defects prevented, and development velocity improvements.',
    icon: CurrencyDollarIcon,
    color: 'from-yellow-500 to-amber-500',
    metric: '340%',
    improvement: '+45%',
    installCommand: 'npm install ai-test-reporter'
  },
  {
    title: 'Test Stability',
    description: 'Identify and track flaky tests that pass and fail intermittently. AI helps determine root causes and suggests fixes.',
    icon: ArrowTrendingUpIcon,
    color: 'from-purple-500 to-pink-500',
    metric: '94.1%',
    improvement: '+8.3%',
    installCommand: 'npm install ai-test-reporter'
  },
  {
    title: 'Code Coverage',
    description: 'Visualize test coverage across your codebase with detailed insights into uncovered areas and coverage trends.',
    icon: EyeIcon,
    color: 'from-indigo-500 to-purple-500',
    metric: '92.7%',
    improvement: '+6.2%',
    installCommand: 'npm install ai-test-reporter'
  }
]

const integrations = [
  { name: 'Playwright', logo: '🎭', description: 'Modern web testing framework' },
  { name: 'Selenium', logo: '🕷️', description: 'Web browser automation' },
  { name: 'Cypress', logo: '🌲', description: 'End-to-end testing framework' },
  { name: 'Jest', logo: '🃏', description: 'JavaScript testing framework' },
  { name: 'Mocha', logo: '☕', description: 'Feature-rich test framework' },
  { name: 'WebDriver', logo: '🔧', description: 'WebDriver protocol support' }
]

export default function Product() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Transform Your Test Results into Actionable Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI-powered platform reads your automation JSON results, analyzes key performance indicators, and delivers intelligent insights that help you build better software faster.
            </p>
          </motion.div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${kpi.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${kpi.color}`}>
                        <kpi.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{kpi.title}</h3>
                        <p className="text-sm text-slate-600">Key Performance Indicator</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{kpi.metric}</div>
                      <div className="text-sm text-green-600 font-medium">{kpi.improvement}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{kpi.description}</p>
                  
                  {/* Install Command */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 mb-2">Get started with our NPM package:</p>
                    <div className="flex items-center justify-between bg-slate-900 text-green-400 p-3 rounded-lg font-mono text-sm">
                      <span>{kpi.installCommand}</span>
                      <button className="text-green-400 hover:text-green-300 transition-colors">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Seamless Integration with Your Favorite Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with popular testing frameworks and get instant insights without changing your workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-600">{integration.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Unlock AI Insights?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Sign up for our Pro plan to get AI analytics, server storage, and advanced visual analytics that will revolutionize your testing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}