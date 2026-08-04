import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react'
import toast from 'react-hot-toast'
import { authAPI } from '@/api/auth'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

type Step = 'email' | 'otp' | 'password-login' | 'set-password'

const slideVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.25 } },
}

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [hasPassword, setHasPassword] = useState(false)
  const [tempToken, setTempToken] = useState('')

  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleSendOTP = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    setLoading(true)
    try {
      const { data } = await authAPI.sendOTP(email)
      setIsNewUser(data.isNewUser)
      setHasPassword(data.hasPassword)
      setStep('otp')
      toast.success('OTP sent to your email')
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      toast.error(error.response?.data?.message || 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  const handleOTPChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOTP = [...otp]
    newOTP[index] = value.slice(-1)
    setOtp(newOTP)
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
    if (newOTP.every((d) => d !== '')) {
      setTimeout(() => handleVerifyOTP(newOTP.join('')), 100)
    }
  }

  const handleOTPKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleVerifyOTP = async (otpValue?: string) => {
    const finalOTP = otpValue || otp.join('')
    if (finalOTP.length !== 6) {
      toast.error('Please enter the complete 6-digit OTP')
      return
    }
    setLoading(true)
    try {
      const { data } = await authAPI.verifyOTP(email, finalOTP)
      if (data.requiresPassword) {
        setTempToken(data.tempToken)
        setStep('set-password')
      } else {
        login(data.token, data.user)
        toast.success('Welcome to Awooraa!')
        navigate('/')
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      toast.error(error.response?.data?.message || 'Invalid OTP')
      setOtp(['', '', '', '', '', ''])
      otpRefs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordLogin = async () => {
    if (!password) {
      toast.error('Please enter your password')
      return
    }
    setLoading(true)
    try {
      const { data } = await authAPI.loginWithPassword(email, password)
      login(data.token, data.user)
      toast.success('Welcome back!')
      navigate('/')
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      toast.error(error.response?.data?.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  const handleSetPassword = async () => {
    if (!newPassword || newPassword.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      const { data } = await authAPI.setPassword(tempToken, newPassword)
      login(data.token, data.user)
      toast.success('Account created! Welcome to Awooraa Global Professional Services!')
      navigate('/')
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } }
      toast.error(error.response?.data?.message || 'Failed to set password')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (step === 'otp') {
      setTimeout(() => otpRefs.current[0]?.focus(), 200)
    }
  }, [step])

  const switchToPasswordLogin = () => {
    setStep('password-login')
  }

  const switchToOTPLogin = async () => {
    setOtp(['', '', '', '', '', ''])
    setLoading(true)
    try {
      await authAPI.sendOTP(email)
      setStep('otp')
      toast.success('New OTP sent to your email')
    } catch {
      toast.error('Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-avora-900 flex">
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85"
          alt="Modern office"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-avora-900/20 to-avora-900" />

        <div className="relative z-10 p-16 flex flex-col justify-between h-full">
          <Link to="/" className="font-display text-white text-lg tracking-[0.15em] uppercase flex items-center gap-3">
            <ArrowLeft className="w-5 h-5" />
            Awooraa
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-avora-gold/30 bg-avora-gold/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-avora-gold" />
              <span className="text-avora-gold text-xs tracking-widest uppercase">Trusted by 500+ businesses</span>
            </div>
            <h2 className="font-display text-5xl text-white leading-tight mb-6">
              One Partner.<br />
              <em className="not-italic text-avora-gold">Every Solution.</em>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              Access your personalized dashboard to manage compliance, track financials, and coordinate all your business services.
            </p>

            <div className="mt-12 space-y-4">
              {['Secure & encrypted access', 'Single sign-in for all services', 'Dedicated account manager'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/40 text-sm">
                  <Shield className="w-4 h-4 text-avora-gold/60" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/20 text-xs">© 2025 Awooraa Global Professional Services. All rights reserved.</p>
        </div>
      </div>

      <div className="flex-1 relative flex flex-col items-center justify-center px-6 md:px-12 py-12">
        {/* Mobile background image — same as hero, low opacity */}
        <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover opacity-[0.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-avora-900/80 via-transparent to-avora-900/50" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="lg:hidden mb-10">
            <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
          </div>

          <AnimatePresence mode="wait">
            {step === 'email' && (
              <motion.div key="email" variants={slideVariants} initial="enter" animate="center" exit="exit">
                <div className="mb-10">
                  <h1 className="font-display text-4xl text-white mb-3">Welcome Back</h1>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Enter your email to continue to your Awooraa dashboard.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold tracking-[0.12em] uppercase mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendOTP()}
                        placeholder="you@company.com"
                        autoFocus
                        className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-white/25 focus:outline-none focus:border-avora-gold/50 focus:bg-white/[0.08] transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSendOTP}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-avora-gold text-avora-navy rounded-xl font-bold text-sm hover:bg-avora-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-avora-navy/30 border-t-avora-navy rounded-full animate-spin" />
                    ) : (
                      <>Continue <ArrowUpRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>

                <p className="text-center text-white/30 text-xs mt-8">
                  New to Awooraa?{' '}
                  <span className="text-avora-gold cursor-pointer hover:underline" onClick={handleSendOTP}>
                    Create your account
                  </span>
                </p>
              </motion.div>
            )}

            {step === 'otp' && (
              <motion.div key="otp" variants={slideVariants} initial="enter" animate="center" exit="exit">
                <button
                  onClick={() => { setStep('email'); setOtp(['', '', '', '', '', '']) }}
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Change email
                </button>

                <div className="mb-10">
                  <h1 className="font-display text-4xl text-white mb-3">Verify Your Email</h1>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We sent a 6-digit code to{' '}
                    <span className="text-white font-medium">{email}</span>
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold tracking-[0.12em] uppercase mb-4">
                      Enter OTP
                    </label>
                    <div className="flex gap-3">
                      {otp.map((digit, i) => (
                        <input
                          key={i}
                          ref={(el) => { otpRefs.current[i] = el }}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOTPChange(i, e.target.value)}
                          onKeyDown={(e) => handleOTPKeyDown(i, e)}
                          className={cn(
                            'flex-1 aspect-square text-center text-xl font-bold rounded-xl border transition-all duration-200',
                            'bg-white/[0.06] text-white focus:outline-none',
                            digit
                              ? 'border-avora-gold text-avora-gold bg-avora-gold/10'
                              : 'border-white/10 focus:border-avora-gold/50'
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleVerifyOTP()}
                    disabled={loading || otp.some((d) => !d)}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-avora-gold text-avora-navy rounded-xl font-bold text-sm hover:bg-avora-gold-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-avora-navy/30 border-t-avora-navy rounded-full animate-spin" />
                    ) : (
                      <>Verify & Continue <ArrowUpRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <div className="text-center space-y-2">
                    <button
                      onClick={() => authAPI.sendOTP(email).then(() => { setOtp(['', '', '', '', '', '']); toast.success('New OTP sent') })}
                      className="text-white/40 hover:text-white text-xs transition-colors"
                    >
                      Didn't receive it? Resend OTP
                    </button>

                    {hasPassword && (
                      <div>
                        <button
                          onClick={switchToPasswordLogin}
                          className="text-avora-gold hover:text-avora-gold-light text-xs transition-colors flex items-center gap-1 mx-auto"
                        >
                          <Lock className="w-3 h-3" /> Use password instead
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'password-login' && (
              <motion.div key="password-login" variants={slideVariants} initial="enter" animate="center" exit="exit">
                <button
                  onClick={() => setStep('email')}
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                <div className="mb-10">
                  <h1 className="font-display text-4xl text-white mb-3">Sign In</h1>
                  <p className="text-white/40 text-sm">
                    Signing in as <span className="text-white">{email}</span>
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold tracking-[0.12em] uppercase mb-3">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handlePasswordLogin()}
                        placeholder="Your password"
                        autoFocus
                        className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-4 pl-12 pr-12 text-white placeholder:text-white/25 focus:outline-none focus:border-avora-gold/50 transition-all duration-200 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handlePasswordLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-avora-gold text-avora-navy rounded-xl font-bold text-sm hover:bg-avora-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-avora-navy/30 border-t-avora-navy rounded-full animate-spin" />
                    ) : (
                      <>Sign In <ArrowUpRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <div className="text-center">
                    <button
                      onClick={switchToOTPLogin}
                      className="text-avora-gold hover:text-avora-gold-light text-xs transition-colors"
                    >
                      Sign in with OTP instead
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'set-password' && (
              <motion.div key="set-password" variants={slideVariants} initial="enter" animate="center" exit="exit">
                <div className="mb-10">
                  <div className="w-12 h-12 rounded-full bg-avora-gold/15 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-avora-gold" />
                  </div>
                  <h1 className="font-display text-4xl text-white mb-3">Set Your Password</h1>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {isNewUser
                      ? 'Create a password to secure your new Awooraa account.'
                      : 'Set a password for faster future sign-ins.'}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-white/60 text-xs font-semibold tracking-[0.12em] uppercase mb-3">New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Min. 8 characters"
                        autoFocus
                        className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-4 pl-12 pr-12 text-white placeholder:text-white/25 focus:outline-none focus:border-avora-gold/50 transition-all duration-200 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-semibold tracking-[0.12em] uppercase mb-3">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSetPassword()}
                        placeholder="Repeat your password"
                        className={cn(
                          'w-full bg-white/[0.06] border rounded-xl px-4 py-4 pl-12 text-white placeholder:text-white/25 focus:outline-none transition-all duration-200 text-sm',
                          confirmPassword && newPassword !== confirmPassword
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/10 focus:border-avora-gold/50'
                        )}
                      />
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <p className="text-red-400 text-xs mt-2">Passwords do not match</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: 'At least 8 characters', met: newPassword.length >= 8 },
                      { label: 'Passwords match', met: newPassword === confirmPassword && confirmPassword.length > 0 },
                    ].map((req) => (
                      <div key={req.label} className="flex items-center gap-2">
                        <span className={cn('w-1.5 h-1.5 rounded-full transition-colors', req.met ? 'bg-avora-gold' : 'bg-white/20')} />
                        <span className={cn('text-xs transition-colors', req.met ? 'text-white/60' : 'text-white/25')}>{req.label}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleSetPassword}
                    disabled={loading || newPassword !== confirmPassword || newPassword.length < 8}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-avora-gold text-avora-navy rounded-xl font-bold text-sm hover:bg-avora-gold-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-avora-navy/30 border-t-avora-navy rounded-full animate-spin" />
                    ) : (
                      <>Create Account & Sign In <ArrowUpRight className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

