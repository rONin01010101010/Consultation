'use client';

import Image from "next/image";
import { Menu, X, Heart, Activity, Users, Target, Calendar, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full glass-effect z-50 shadow-soft border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Selucia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#expertise" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Expertise
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#process" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Why Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold shadow-md hover:shadow-glow transform hover:scale-105">
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-100 animate-slide-down">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#about" className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">About</a>
              <a href="#expertise" className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">Expertise</a>
              <a href="#process" className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">Process</a>
              <a href="#why-us" className="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">Why Us</a>
              <a href="#contact" className="block py-3 px-4 text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold text-center mt-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft"></span>
                Premium Online Wellness Consulting
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Unlock Your
                <span className="block mt-2 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Best Health
                </span>
              </h1>

              <p className="text-2xl text-gray-600 font-light leading-relaxed">
                Personalized Fitness and Nutrition, Delivered Online
              </p>

              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Selucia Wellness Center simplifies wellness, helping you reconnect with your mind, body, and spirit to live a vibrant and healthy lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="btn-primary group">
                  Book Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg font-semibold shadow-soft border border-gray-200">
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl blur-2xl opacity-20 animate-pulse-soft"></div>
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src="/images/photo.jpg"
                  alt="Wellness"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl-soft p-6 animate-float border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
              Who We Are
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl-soft ring-1 ring-gray-200">
                <Image
                  src="/images/photo2.jpg"
                  alt="About Selucia"
                  fill
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-8">Our Vision & Mission</h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-xl flex-shrink-0">
                      <Target className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Vision</h4>
                      <p className="text-gray-700 leading-relaxed">
                        To establish holistic and preventative wellness as the standard practice, inspiring a global community to embrace authentic healing and wholeness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-xl flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Mission</h4>
                      <p className="text-gray-700 leading-relaxed">
                        We simplify wellness, helping you reconnect with your mind, body, and spirit to live a vibrant and healthy lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Selucia Wellness Center is a premium e-consulting service dedicated to helping busy professionals, parents, and anyone looking to make a serious, sustainable change to their health. We provide personalized, science-backed guidance in fitness, nutrition, and holistic well-being, all accessible from the comfort of your home, office, or gym.
                </p>
                <p>
                  We move beyond generic plans. Our approach is rooted in understanding your unique lifestyle, goals, and challenges to build a strategy that you can actually stick with—and thrive on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="expertise" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in helping clients achieve sustainable, life-changing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Activity className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Sustainable Nutrition Habits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized meal strategies, macro-nutrient guidance, and education that moves you away from restrictive diets toward a flexible, balanced approach.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Effective Fitness Programs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Custom-designed workout plans tailored to your available equipment, time constraints, and fitness level (beginner to advanced).
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Holistic Well-being
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Guidance on stress management, sleep optimization, and recovery to ensure your body and mind are performing at their peak.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 card-hover">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                Specific Goals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you want to lose fat, build muscle, increase energy, or train for a specific event, we create the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How E-Consulting Works Section */}
      <section id="process" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
              Our Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">How E-Consulting Works</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery Call</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start with a comprehensive virtual assessment to understand your history, goals, and lifestyle.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Plan</h3>
                <p className="text-gray-600 leading-relaxed">
                  We design your custom plan (fitness, nutrition, or combination) delivered via a user-friendly platform or app.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Weekly or bi-weekly video check-ins, direct messaging support, and real-time adjustments based on your progress.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We equip you with the knowledge to maintain your results independently and build lasting habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
              Why Selucia
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Why Choose Selucia</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <Image
                  src="/images/photo3.jpg"
                  alt="Why Choose Us"
                  fill
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">100% Remote</h3>
                    <p className="text-gray-600 leading-relaxed">Get world-class coaching from anywhere in the world.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Accountability</h3>
                    <p className="text-gray-600 leading-relaxed">We hold you accountable with consistent check-ins, tracking, and personalized feedback.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Flexibility</h3>
                    <p className="text-gray-600 leading-relaxed">Plans adapt to your travel, work schedule, and life changes.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Expert-Led</h3>
                    <p className="text-gray-600 leading-relaxed">Our consultants are certified professionals with years of experience in fitness, nutrition, and holistic wellness.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl flex-shrink-0 shadow-md">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">Science-Backed Approach</h3>
                    <p className="text-gray-600 leading-relaxed">All our methods are based on the latest research and proven strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></span>
            Limited Spots Available
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Health?
          </h2>

          <p className="text-xl md:text-2xl text-primary-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book your Free 30-Minute Strategy Session today to discuss your goals and see if our personalized e-consulting is the right fit for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-10 py-5 bg-white text-primary-700 rounded-2xl hover:bg-gray-50 transition-all duration-300 text-lg font-bold inline-flex items-center shadow-2xl hover:shadow-xl hover:scale-105">
              Book Your Free Session
              <Calendar className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <a href="#about" className="px-10 py-5 bg-transparent text-white border-2 border-white/50 rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-300 text-lg font-bold inline-flex items-center backdrop-blur-sm">
              Learn More
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>

          <p className="mt-8 text-primary-100 text-sm">
            No credit card required • 100% Free consultation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2 rounded-xl shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Selucia</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Simplifying wellness, helping you reconnect with your mind, body, and spirit.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                  <Activity className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                  <Heart className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="text-gray-400 hover:text-primary-500 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    Our Expertise
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-primary-500 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-gray-400 hover:text-primary-500 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-primary-500" />
                  </div>
                  <span>info@seluciawellness.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary-500" />
                  </div>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-gray-800 p-2 rounded-lg">
                    <Users className="h-4 w-4 text-primary-500" />
                  </div>
                  <span>Follow us on social media</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Selucia Wellness Center. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
