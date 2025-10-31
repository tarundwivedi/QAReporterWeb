'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  BugAntIcon, 
  EyeIcon, 
  PuzzlePieceIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Automated Test Result Aggregation',
    description: 'Seamlessly collect and consolidate test results from multiple frameworks and sources into a unified dashboard.',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Intelligent Defect Analytics',
    description: 'AI-powered analysis identifies patterns in test failures and helps prioritize critical issues automatically.',
    icon: BugAntIcon,
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Test Coverage Visualization',
    description: 'Interactive charts and graphs show test coverage across your codebase with detailed insights.',
    icon: EyeIcon,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Integration with Popular Tools',
    description: 'Native support for Playwright, Selenium, Jest, Cypress, and other popular testing frameworks.',
    icon: PuzzlePieceIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'ROI Tracking & Analytics',
    description: 'Measure the return on investment of your testing efforts with comprehensive analytics and reporting.',
    icon: ArrowTrendingUpIcon,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Test Stability Monitoring',
    description: 'Detect and track flaky tests over time with stability metrics and trend analysis.',
    icon: ShieldCheckIcon,
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function FeatureCards() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features for Modern QA Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to transform your test reporting workflow with AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ backgroundImage: `linear-gradient(to right, ${feature.color.split(' ')[0]}, ${feature.color.split(' ')[1]})` }} />
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}