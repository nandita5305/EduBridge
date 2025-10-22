
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signupUser, loginUser } from "../api/auth";


export default function AuthAnimated() {
  const [mode, setMode] = useState("signin"); // 'signin' | 'signup'

  const toggle = (to) => setMode(to);

  // Respect prefers-reduced-motion
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced(mq.matches);
      const handler = () => setPrefersReduced(mq.matches);
      try { mq.addEventListener('change', handler); } catch { mq.addListener && mq.addListener(handler); }
      return () => { try { mq.removeEventListener('change', handler); } catch { mq.removeListener && mq.removeListener(handler); } };
    }
  }, []);

  const floatBubble = (i) => ({
    y: [0, -8, 0],
    x: mode === "signin" ? [0, 6, 0] : [0, -6, 0],
    transition: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }
  });


  // ==========================
  // SignIn Form
  // ==========================
  const SignInForm = ({ onSwitch }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const submit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await loginUser({ email, password });
    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    alert("✅ Logged in successfully!");
    window.location.href = "/"; // or use navigate("/")
  } catch (err) {
    console.error(err);
    alert("❌ Invalid credentials");
  } finally {
    setLoading(false);
  }
};

    return (
      <motion.form
        onSubmit={submit}
        layoutId="auth-form"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: prefersReduced ? 0 : 0.45 }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm text-slate-700 mb-2">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="you@domain.com" />
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-2">Password</label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <span className="text-slate-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-slate-600 hover:underline">Forgot?</button>
        </div>
        <button type="submit" className="w-full py-3 rounded-xl bg-[var(--color-primary-500)] text-white font-semibold shadow-md hover:brightness-95 disabled:opacity-70">{loading ? 'Signing in...' : 'Sign in'}</button>

        <div className="text-center mt-3">
          <span className="text-slate-600">Don’t have an account? </span>
          <button type="button" onClick={() => onSwitch('signup')} className="text-[var(--color-primary-500)] font-semibold">Sign up</button>
        </div>
      </motion.form>
    );
  };

  // ==========================
  // SignUp Form
  // ==========================
  const SignUpForm = ({ onSwitch }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
  e.preventDefault();
  if (password !== confirm) return alert("Passwords do not match");
  if (!role) return alert("Please select a role");

  setLoading(true);
  
  try {
  const res = await signupUser({ name, email, password, role });
  const { user } = res.data; // only get user

  alert("✅ Account created successfully!");
  window.location.href = "/"; // redirect to signin
} catch (err) {
  console.error(err);
  alert("❌ Error during signup");
}

   finally {
    setLoading(false);
  }
};


    return (
      <motion.form
        onSubmit={submit}
        layoutId="auth-form"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: prefersReduced ? 0 : 0.45 }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm text-slate-700 mb-2">Full name</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-2">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="you@domain.com" />
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-2">Role</label>
          <select required value={role} onChange={e => setRole(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus bg-white">
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-2">Password</label>
          <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="Create a password" />
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-2">Confirm Password</label>
          <input type="password" required value={confirm} onChange={e => setConfirm(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 input-focus" placeholder="Confirm password" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded" />
            <span className="text-slate-600">I agree to the Terms</span>
          </label>
          <button type="button" className="text-sm text-slate-600 hover:underline">Need help?</button>
        </div>
        <button type="submit" className="w-full py-3 rounded-xl bg-[var(--color-primary-500)] text-white font-semibold shadow-md hover:brightness-95 disabled:opacity-70">{loading ? 'Creating account...' : 'Sign up'}</button>
        <div className="text-center mt-3">
          <span className="text-slate-600">Already have an account? </span>
          <button type="button" onClick={() => onSwitch('signin')} className="text-[var(--color-primary-500)] font-semibold">Sign in</button>
        </div>
      </motion.form>
    );
  };

  // ==========================
  // Layout Logic
  // ==========================
  const leftIsBlue = mode === 'signup';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-primary-50)] p-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');
        * { font-family: "Manrope", sans-serif; font-weight: 500; }
        :root{ --color-primary: #0b3d91; --color-primary-50: #e9f0ff; --color-primary-500: #0b3d91; }
        .card { 
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.96)); 
          box-shadow: 0 18px 50px rgba(11,61,145,0.08); 
          border-radius: 18px; 
          overflow: hidden; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
        }
        /* FIX: Updated .panel to handle form overflow properly while being centered and top-aligned */
        .panel { 
            min-height: 460px; 
            display: flex; 
            flex-direction: column; 
            justify-content: flex-start; /* Aligns content to the top */
            align-items: center; /* Centers content horizontally */
            padding: 3rem; 
            overflow-y: auto; /* Allows the form to scroll if it is taller than the blue panel */
        }
        .blue-panel { 
            background: linear-gradient(180deg, var(--color-primary-300), var(--color-primary-500)); 
            color: rgba(255,255,255,0.96); 
            position: relative; 
            padding: 3rem; 
            overflow: hidden; /* Ensure blue panel content doesn't scroll */
        }
        .bubble { position: absolute; border-radius: 999px; filter: blur(6px); opacity: 0.28; }
        .input-focus:focus { outline: none; box-shadow: 0 6px 18px rgba(11,61,145,0.06); border-color: var(--color-primary-500); }
        @media (max-width: 980px){ .card{ grid-template-columns: 1fr; } .panel, .blue-panel{ padding: 2rem; } }
      `}</style>

      <div className="card w-full max-w-5xl items-stretch">
        {leftIsBlue ? (
          <>
            {/* LEFT SIDE (BLUE, INFO) - No Scrollbar */}
            <motion.div layout className="panel blue-panel">
              {/* Bubbles */}
              <motion.div className="bubble" style={{ width: 120, height: 120, top: 20, left: 22, background: 'rgba(255,255,255,0.10)' }} animate={floatBubble(0)} />
              <motion.div className="bubble" style={{ width: 88, height: 88, bottom: 52, right: 34, background: 'rgba(255,255,255,0.06)' }} animate={floatBubble(1)} />
              <motion.div className="bubble" style={{ width: 180, height: 180, bottom: -24, left: -36, background: 'rgba(255,255,255,0.05)' }} animate={floatBubble(2)} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Learn. Build. Grow.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.94)', marginBottom: 16, maxWidth: 360 }}>
                  Join thousands of students building real projects and leveling up — all inside EduBridge.
                </p>
                <ul className="mt-6 space-y-3 text-white text-[15px] leading-relaxed list-disc list-inside">
                  <li>Project-based lessons</li>
                  <li>Mentor support and reviews</li>
                  <li>AI-powered learning suggestions</li>
                  <li>Real-world internship opportunities</li>
                  <li>Community events & hackathons</li>
                  <li>Career guidance & portfolio reviews</li>
                  <li>Parent/Student dashboards</li>
                  <li>Interactive quizzes and progress tracking</li>
                </ul>
                <a className="explore-btn mt-6 inline-block px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold shadow-md hover:bg-white/10" href="#">Explore Courses</a>
                <div className="mt-6 text-center">
                  <img src="https://img.icons8.com/ios-filled/100/ffffff/graduation-cap.png" alt="Graduation Cap" className="mx-auto w-16 h-16 opacity-70" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE (WHITE, FORM) - Scrollbar if content overflows */}
            <motion.div layout className="panel">
              <div className="w-full max-w-sm"> 
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{mode === 'signin' ? 'Welcome back' : 'Create account'}</h1>
                  <p className="mt-2 text-slate-600">{mode === 'signin' ? 'Sign in to your account to continue to ' : 'Sign up to start learning at '}<span style={{ color: 'var(--color-primary)' }}>EduBridge</span>.</p>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  {mode === 'signin' ? <SignInForm key="si" onSwitch={toggle} /> : <SignUpForm key="su" onSwitch={toggle} />}
                </AnimatePresence>
                <footer className="mt-6 text-xs text-slate-400">By continuing you agree to our Terms of Service and Privacy Policy.</footer>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            {/* LEFT SIDE (WHITE, FORM) - Scrollbar if content overflows */}
            <motion.div layout className="panel">
              <div className="w-full max-w-sm">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{mode === 'signin' ? 'Welcome back' : 'Create account'}</h1>
                  <p className="mt-2 text-slate-600">{mode === 'signin' ? 'Sign in to your account to continue to ' : 'Sign up to start learning at '}<span style={{ color: 'var(--color-primary)' }}>EduBridge</span>.</p>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  {mode === 'signin' ? <SignInForm key="si" onSwitch={toggle} /> : <SignUpForm key="su" onSwitch={toggle} />}
                </AnimatePresence>
                <footer className="mt-6 text-xs text-slate-400">By continuing you agree to our Terms of Service and Privacy Policy.</footer>
              </div>
            </motion.div>

            {/* RIGHT SIDE (BLUE, INFO) - No Scrollbar */}
            <motion.div layout className="panel blue-panel">
              {/* Bubbles */}
              <motion.div className="bubble" style={{ width: 120, height: 120, top: 20, right: 22, background: 'rgba(255,255,255,0.10)' }} animate={floatBubble(0)} />
              <motion.div className="bubble" style={{ width: 88, height: 88, bottom: 52, left: 34, background: 'rgba(255,255,255,0.06)' }} animate={floatBubble(1)} />
              <motion.div className="bubble" style={{ width: 180, height: 180, bottom: -24, right: -36, background: 'rgba(255,255,255,0.05)' }} animate={floatBubble(2)} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Learn. Build. Grow.</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.94)', marginBottom: 16, maxWidth: 360 }}>
                  Join thousands of students building real projects and leveling up — all inside EduBridge.
                </p>
                <ul className="mt-6 space-y-3 text-white text-[15px] leading-relaxed list-disc list-inside">
                  <li>Project-based lessons</li>
                  <li>Mentor support and reviews</li>
                  <li>AI-powered learning suggestions</li>
                  <li>Real-world internship opportunities</li>
                  <li>Community events & hackathons</li>
                  <li>Career guidance & portfolio reviews</li>
                  <li>Parent/Student dashboards</li>
                  <li>Interactive quizzes and progress tracking</li>
                </ul>
                <a className="explore-btn mt-6 inline-block px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold shadow-md hover:bg-white/10" href="#">Explore Courses</a>
                <div className="mt-6 text-center">
                  <img src="https://img.icons8.com/ios-filled/100/ffffff/graduation-cap.png" alt="Graduation Cap" className="mx-auto w-16 h-16 opacity-70" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}