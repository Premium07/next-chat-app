import { Shield, Users, Zap } from "lucide-react";

export default function Home() {
  const ChatIllustration = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient
          id="bubble-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect
        x="50"
        y="50"
        width="300"
        height="200"
        rx="20"
        fill="white"
        opacity="0.1"
      />
      <circle cx="200" cy="90" r="15" fill="url(#bubble-gradient)" />
      <circle cx="160" cy="150" r="15" fill="url(#bubble-gradient)" />
      <circle cx="240" cy="150" r="15" fill="url(#bubble-gradient)" />
      <path d="M180 200 L220 200" stroke="white" strokeWidth="4" />
    </svg>
  );

  const WavePattern = () => (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        fill="rgba(255,255,255,0.1)"
      />
    </svg>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Features Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Connect with anyone, anywhere
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Experience real-time messaging like never before. Share moments,
                express yourself, and stay connected with your loved ones.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition text-lg">
                  Start Chatting
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <ChatIllustration />
            </div>
          </div>
        </div>
        <WavePattern />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Lets Chat?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover the features that make our platform stand out from the
            crowd
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-white/80">
              Experience instant messaging with zero lag. Our platform ensures
              your messages are delivered in real-time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure Chats
            </h3>
            <p className="text-white/80">
              Your privacy matters. End-to-end encryption ensures your
              conversations stay private and secure.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:-translate-y-1 transition duration-300">
            <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Group Chats
            </h3>
            <p className="text-white/80">
              Create groups for family, friends, or work. Share messages, media,
              and more with multiple people at once.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust Lets Chat for their communication
            needs.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition text-lg">
            Start Chatting Now
          </button>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Home - Lets Chat",
  description:
    "Lets Chat helps you to connect new people and communicate around globally.",
};
