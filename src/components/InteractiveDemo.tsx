'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ExclamationTriangleIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

// Sample test data
const sampleTestData = {
  total: 1250,
  passed: 1187,
  failed: 45,
  skipped: 18,
  flaky: 12,
  duration: '2m 34s',
  coverage: 87.3,
  tests: [
    { name: 'User Authentication', status: 'passed', duration: '1.2s', coverage: 95 },
    { name: 'Payment Processing', status: 'failed', duration: '2.8s', coverage: 78, error: 'Timeout error' },
    { name: 'Data Validation', status: 'passed', duration: '0.8s', coverage: 92 },
    { name: 'Email Service', status: 'flaky', duration: '3.1s', coverage: 84 },
    { name: 'Database Connection', status: 'passed', duration: '0.5s', coverage: 98 },
    { name: 'API Integration', status: 'failed', duration: '1.9s', coverage: 71, error: 'Network error' }
  ]
}

export default function InteractiveDemo() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100'
      case 'failed': return 'text-red-600 bg-red-100'
      case 'flaky': return 'text-yellow-600 bg-yellow-100'
      case 'skipped': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return CheckCircleIcon
      case 'failed': return XCircleIcon
      case 'flaky': return ExclamationTriangleIcon
      default: return ClockIcon
    }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience how AI Test Reporter transforms your test results into actionable insights
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Demo Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Test Results Dashboard</h3>
                <p className="text-blue-100">AI-powered insights and analytics</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{sampleTestData.passed}</div>
              <div className="text-sm text-slate-600">Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{sampleTestData.failed}</div>
              <div className="text-sm text-slate-600">Failed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{sampleTestData.flaky}</div>
              <div className="text-sm text-slate-600">Flaky</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{sampleTestData.coverage}%</div>
              <div className="text-sm text-slate-600">Coverage</div>
            </div>
          </div>

          {/* Test Results Table */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-slate-900">Recent Test Results</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600">Total Duration:</span>
                <span className="text-sm font-semibold text-slate-900">{sampleTestData.duration}</span>
              </div>
            </div>

            <div className="space-y-2">
              {sampleTestData.tests.map((test, index) => {
                const StatusIcon = getStatusIcon(test.status)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${selectedTest === test.name ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                    onClick={() => setSelectedTest(selectedTest === test.name ? null : test.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <StatusIcon className={`w-5 h-5 ${getStatusColor(test.status).split(' ')[0]}`} />
                        <span className="font-medium text-slate-900">{test.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                          {test.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span>{test.duration}</span>
                        <span>{test.coverage}% coverage</span>
                      </div>
                    </div>
                    
                    {selectedTest === test.name && test.error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg"
                      >
                        <p className="text-sm text-red-800">
                          <strong>Error:</strong> {test.error}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-t border-slate-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-900">AI Insights</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-900 mb-2">Test Stability</h5>
                <p className="text-sm text-slate-600">12 flaky tests detected. Consider reviewing timeout configurations and external dependencies.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <h5 className="font-medium text-slate-900 mb-2">Coverage Gap</h5>
                <p className="text-sm text-slate-600">Payment Processing module has 22% coverage gap. Focus on edge cases and error handling.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}