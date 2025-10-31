'use client'

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { 
  RocketLaunchIcon,
  EyeIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    image: '👩‍💼',
    bio: 'Former QA Director with 15+ years of experience in test automation and quality assurance.',
    expertise: ['Test Strategy', 'AI/ML', 'Team Leadership']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO & Co-Founder',
    image: '👨‍💻',
    bio: 'Software architect specializing in distributed systems and machine learning applications.',
    expertise: ['System Architecture', 'Machine Learning', 'DevOps']
  },
  {
    name: 'Priya Patel',
    role: 'Head of Product',
    image: '👩‍🔬',
    bio: 'Product leader with deep expertise in developer tools and testing platforms.',
    expertise: ['Product Strategy', 'User Experience', 'Agile Development']
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    image: '👨‍🔧',
    bio: 'Full-stack engineer passionate about building scalable testing solutions.',
    expertise: ['Full-Stack Development', 'Cloud Architecture', 'API Design']
  }
]

const values = [
  {
    icon: EyeIcon,
    title: 'Clarity',
    description: 'We believe in making complex testing data simple and actionable through clear visualizations and insights.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HeartIcon,
    title: 'Quality',
    description: 'Quality is at the heart of everything we do. We help teams build better software through intelligent testing.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration',
    description: 'We foster collaboration between developers, QA teams, and stakeholders through shared insights.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation',
    description: 'We continuously innovate to bring cutting-edge AI technology to software testing.',
    color: 'from-purple-500 to-indigo-500'
  }
]

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About AI Test Reporter
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are a team of automation architects simplifying how QA teams measure success using intelligent insights.
            </p>
          </motion.div>

          {/* Company Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Founded by experienced QA professionals and software engineers, AI Test Reporter was born from a simple observation: testing teams were drowning in data but starving for insights.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  We set out to build a platform that would transform raw test results into actionable intelligence, helping teams make better decisions faster.
                </p>
                <p className="text-lg text-slate-600">
                  Today, we&apos;re proud to serve hundreds of teams worldwide, helping them deliver higher quality software with confidence and efficiency.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600">
                  To make intelligent testing insights accessible to every development team, regardless of size or resources.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${value.color} mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The experienced professionals driving our mission forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                View Open Positions
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}