import api from '@/configs/axios';
import { authClient } from '@/lib/auth-client';
import { Loader2Icon, Sparkles, Zap, Globe, Code, Palette, Rocket, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Home = () => {

  const {data: session} = authClient.useSession()
  const navigate = useNavigate()

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!session?.user){
        return toast.error('Please sign in to create a project')
      }else if(!input.trim()){
        return toast.error('Please enter a message')
      }
      setLoading(true)
      const {data} = await api.post('/api/user/project', {initial_prompt: input});
      setLoading(false);
      navigate(`/projects/${data.projectId}`)
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  }

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Design",
      description: "Let AI transform your ideas into stunning websites with intelligent design suggestions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Build and deploy websites in minutes, not days. Speed up your workflow dramatically."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Get production-ready, optimized code that follows best practices automatically."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Fully Customizable",
      description: "Fine-tune every aspect of your website with our intuitive editor and live preview."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Instant Publishing",
      description: "Deploy your website to the web with a single click. No hosting hassles."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices ensure your site ranks well from day one."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      content: "This tool saved me weeks of development time. I had my landing page live in under an hour!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content: "The AI understands design principles better than most developers I've worked with. Incredible!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      content: "Finally, a website builder that doesn't require a technical degree. Game changer for our team.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10K+", label: "Websites Created" },
    { value: "99.9%", label: "Uptime" },
    { value: "5 min", label: "Avg. Build Time" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="text-white font-poppins">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center pb-20 px-4 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>

        <a href="#pricing" className="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20 hover:border-indigo-500 transition-colors">
          <span className="bg-gradient-to-r from-[#CB52D4] to-indigo-600 text-xs px-3 py-1 rounded-full font-medium">NEW</span>
          <p className="flex items-center gap-2">
            <span>Try 30 days free trial option</span>
            <svg className="mt-px" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </p>
        </a>

        <h1 className="text-center text-[40px] leading-[48px] md:text-7xl md:leading-[80px] mt-6 font-bold max-w-5xl bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
          Turn thoughts into websites instantly, with AI
        </h1>

        <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mt-6 leading-relaxed">
          Create, customize and publish stunning websites faster than ever. No coding required, just describe what you want and watch the magic happen.
        </p>

        <form onSubmit={onSubmitHandler} className="bg-white/5 backdrop-blur-sm max-w-2xl w-full rounded-2xl p-5 mt-12 border border-indigo-600/50 focus-within:border-indigo-500 focus-within:ring-2 ring-indigo-500/50 transition-all shadow-2xl shadow-indigo-900/20">
          <textarea 
            onChange={e => setInput(e.target.value)} 
            className="bg-transparent outline-none text-gray-200 placeholder:text-gray-500 resize-none w-full text-base" 
            rows={4} 
            placeholder="Describe your website... e.g., 'A modern portfolio site for a photographer with a gallery and contact form'" 
            required 
          />
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-500">Press Enter to submit or Shift+Enter for new line</p>
            <button 
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-gradient-to-r from-[#CB52D4] to-indigo-600 hover:from-[#D662E0] hover:to-indigo-500 rounded-lg px-6 py-3 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-900/30"
            >
              {!loading ? (
                <>
                  Create with AI <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Creating <Loader2Icon className='animate-spin w-4 h-4'/>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 max-w-4xl w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to build amazing websites
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features that make website creation effortless and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-600/50 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-indigo-600/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to build your dream website?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who are already building amazing websites with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => !session?.user ? navigate('/auth/sign-in') : window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#CB52D4] to-indigo-600 hover:from-[#D662E0] hover:to-indigo-500 rounded-lg px-8 py-4 font-semibold text-lg transition-all shadow-lg shadow-indigo-900/30 flex items-center gap-2"
            >
              Get Started Free <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/community')}
              className="border border-gray-700 hover:border-indigo-500 rounded-lg px-8 py-4 font-semibold text-lg transition-all"
            >
              View Examples
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">No credit card required • 30-day free trial</p>
        </div>
      </section>

    </div>
  )
}

export default Home
