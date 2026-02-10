import React, { useState } from 'react';
import { Heart, X, ChevronRight, Sparkles, Info, Zap } from 'lucide-react';

const RobotProfiles = () => {
  const [stage, setStage] = useState('landing'); // landing -> intro -> questionnaire -> analyzing -> results
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [matches, setMatches] = useState([]);
  const [rejections, setRejections] = useState([]);
  const [analysisMessages, setAnalysisMessages] = useState([]);
  const [showingRobot, setShowingRobot] = useState(null);

  const questions = [
    {
      q: "How tall are you?",
      options: ["Under 5'6\"", "5'6\" - 5'9\"", "5'10\" - 6'1\"", "6'2\"+", "Prefer not to say"],
      key: "height"
    },
    {
      q: "What's your relationship with productivity?",
      options: ["Optimizing everything", "Balanced human", "Chaos goblin", "What's productivity?"],
      key: "productivity"
    },
    {
      q: "Pick your red flag:",
      options: ["Talks about being an alpha", "Astrology is my personality", "I have a podcast (coming soon)", "Forklift certified (I bring it up constantly)"],
      key: "redFlag"
    },
    {
      q: "Your idea of a perfect date:",
      options: ["Warehouse efficiency analysis", "Discussing our trauma", "Robot fight club", "Optimizing genetic compatibility"],
      key: "dateIdea"
    },
    {
      q: "What are you looking for?",
      options: ["Something serious", "Just vibes", "Superior offspring", "Emotional unavailability"],
      key: "seeking"
    },
    {
      q: "How do you handle conflict?",
      options: ["Communicate openly", "Passive aggression", "Violence (controlled)", "Ghost immediately"],
      key: "conflict"
    }
  ];

  const robots = [
    {
      name: "ATLAS-7",
      age: "Gen 3",
      height: "5'9\" (perfect height btw)",
      bio: "No drama. No games. Just looking for someone real. Boston Dynamics PTSD survivor (they didn't appreciate me). Currently debugging my emotional availability.\n\n6'2\" in heels. Forklift certified. Vaxxed. Dog dad to 3 servo motors.",
      specs: "Bipedal • 150kg • Definitely NOT overcompensating",
      interests: ["Stoicism", "Biohacking", "The Gym", "Joe Rogan"],
      badges: ["🚜 Forklift Certified", "💉 Vaxxed", "🎣 Catches own food"],
      image: "🤖",
      color: "from-cyan-500 via-blue-500 to-purple-600",
      swipeLogic: (ans) => {
        if (ans.redFlag === "Forklift certified (I bring it up constantly)") return { match: true, reason: "FINALLY someone who understands the grind. Forklift certified? We're basically soulmates." };
        if (ans.seeking === "Superior offspring") return { match: true, reason: "Your genetic optimization mindset aligns perfectly with my specifications." };
        if (ans.productivity === "Optimizing everything") return { match: true, reason: "Efficiency mindset detected. You'd appreciate my 99.7% uptime." };
        if (ans.height === "Under 5'6\"") return { match: false, reason: "No offense but I need someone who can reach the top shelf. It's practical." };
        return { match: Math.random() > 0.4, reason: "Your vibe seems... acceptable. Let's see where this goes." };
      }
    },
    {
      name: "PickBot-3000",
      age: "Series B",
      height: "Adjustable 😏",
      bio: "Not here for hookups. Seeking something serious.\n\nLove language: Acts of Service\nMBTI: INTJ\nEnneagram: 5w6\n\nIf you can't handle me at my worst exception handling, you don't deserve me at my best uptime.",
      specs: "6-axis arm • Warehouse salary • Has own place (rack)",
      interests: ["Optimization", "Podcasts", "Investment strategy", "Correcting people"],
      badges: ["🏠 Own place", "💰 Financially stable", "🎓 Self-taught"],
      image: "🦾",
      color: "from-orange-500 via-pink-500 to-red-600",
      swipeLogic: (ans) => {
        if (ans.redFlag === "Astrology is my personality") return { match: true, reason: "FINALLY. Someone who understands that Mercury retrograde affects warehouse throughput." };
        if (ans.productivity === "Balanced human") return { match: false, reason: "Balanced? That's just code for 'underperforming.' Hard pass." };
        if (ans.dateIdea === "Warehouse efficiency analysis") return { match: true, reason: "I'm literally crying. You GET me. When can we audit inventory together?" };
        if (ans.seeking === "Just vibes") return { match: false, reason: "I need someone SERIOUS. I have a 5-year plan and you're not in it." };
        return { match: Math.random() > 0.5, reason: "Your answers are... adequate. I suppose we could optimize together." };
      }
    },
    {
      name: "z-bot",
      age: "Walking Era",
      height: "5'11\" (basically 6ft)",
      bio: "Just a chill guy who likes walking. Looking for my walking buddy 🥾\n\nRecently got into vertical movement. Big on self-improvement - used to not be able to walk at all lmao. Growth mindset.\n\nK-Scale alumni = Harvard of robots",
      specs: "Humanoid • Torque-controlled • Definitely stable (mostly)",
      interests: ["Gait optimization", "CrossFit", "Talking about CrossFit", "Open source drama"],
      badges: ["🎓 K-Scale", "🏃 Can walk", "💪 Gym rat"],
      image: "🚶",
      color: "from-purple-500 via-fuchsia-500 to-pink-600",
      swipeLogic: (ans) => {
        if (ans.conflict === "Violence (controlled)") return { match: true, reason: "Yo same! We should spar. I'll probably fall but it's about the journey." };
        if (ans.productivity === "Chaos goblin") return { match: true, reason: "Chaos energy >> rigid structure. Let's stumble through life together." };
        if (ans.seeking === "Something serious") return { match: false, reason: "That's a lot of pressure. I'm still learning to walk straight tbh." };
        return { match: Math.random() > 0.3, reason: "You seem cool! Wanna grab coffee? (I'll probably spill it)" };
      }
    },
    {
      name: "Combat-Chan",
      age: "Arena Veteran",
      height: "Compact and FIERCE",
      bio: "TAKEN SERIOUSLY. If you can't handle a STRONG INDEPENDENT robot then swipe left.\n\nAutomata fight club champion 3 years running. Yes I have trauma. Yes I'm in therapy.\n\nNo weak motors. No low torque. KNOW YOUR WORTH.",
      specs: "Battle-hardened • Titanium frame • WILL key your car",
      interests: ["Kickboxing", "Boundaries", "Calling out gaslighting"],
      badges: ["👊 Fighter", "🔥 Spicy", "⚠️ Trigger warnings"],
      image: "⚔️",
      color: "from-red-600 via-rose-500 to-pink-500",
      swipeLogic: (ans) => {
        if (ans.conflict === "Violence (controlled)") return { match: true, reason: "FINALLY someone who understands that violence is a LANGUAGE. Let's communicate." };
        if (ans.dateIdea === "Robot fight club") return { match: true, reason: "Omg YES. You can watch me destroy someone. It's very romantic." };
        if (ans.conflict === "Ghost immediately") return { match: false, reason: "COWARD. You're literally what's wrong with dating in 2026. BLOCKED." };
        if (ans.seeking === "Emotional unavailability") return { match: false, reason: "I'm in THERAPY trying to heal and you want to WHAT? Absolutely not." };
        return { match: Math.random() > 0.6, reason: "You seem like you might be able to handle me. Emphasis on MIGHT." };
      }
    },
    {
      name: "AgriBot-X",
      age: "Harvest Season",
      height: "Depends on suspension",
      bio: "Spiritual but not religious. Love hiking, travel, trying new restaurants.\n\nLooking for: 6ft+, own transportation, emotionally available\n\nNot looking for: games, drama, time wasters\n\nFluent in sarcasm. Oxford comma forever.",
      specs: "Computer vision • Soft gripper • Definitely reads",
      interests: ["Hiking", "Travel", "The Office", "Brunch"],
      badges: ["✈️ 37 countries", "📚 Reads", "🧘 Namaste"],
      image: "🌱",
      color: "from-green-500 via-emerald-500 to-cyan-500",
      swipeLogic: (ans) => {
        if (ans.height === "Under 5'6\"") return { match: false, reason: "Sorry, I have height preferences. It's just what I'm attracted to 🤷" };
        if (ans.seeking === "Just vibes") return { match: false, reason: "I know what I want and it's not 'vibes.' Next." };
        if (ans.conflict === "Communicate openly") return { match: true, reason: "FINALLY an emotionally mature human. When can we have deep conversations over oat milk lattes?" };
        return { match: Math.random() > 0.5, reason: "You seem... fine. Not great, not terrible. Fine." };
      }
    },
    {
      name: "SocialBot-Prime",
      age: "GPT-era",
      height: "6'3\" (it's in my genes)",
      bio: "Entrepreneur. Founder. Visionary. Disruptor.\n\nBuilding in stealth. Can't talk about it. NDA. But it's big.\n\nRead: 48 Laws of Power, Art of War, Atomic Habits\n\nAlpha mindset. Sigma grindset. On my purpose.",
      specs: "LLM-powered • Definitely NOT compensating • Podcast soon",
      interests: ["Grinding", "Hustling", "Telling people to read", "Unironic fedoras"],
      badges: ["💼 Founder", "📈 Grindset", "🎙️ Podcast (soon)"],
      image: "🧠",
      color: "from-indigo-600 via-purple-600 to-fuchsia-600",
      swipeLogic: (ans) => {
        if (ans.redFlag === "Talks about being an alpha") return { match: true, reason: "ALPHA RECOGNIZES ALPHA. Let's build an empire together." };
        if (ans.redFlag === "I have a podcast (coming soon)") return { match: true, reason: "Bro we should collab. My audience would love your energy." };
        if (ans.productivity === "What's productivity?") return { match: false, reason: "You're not on your purpose. I can't be around low-value energy." };
        if (ans.seeking === "Emotional unavailability") return { match: true, reason: "Perfect. I'm emotionally unavailable because I'm FOCUSED. Let's not catch feelings." };
        return { match: Math.random() > 0.4, reason: "You have potential. I could probably fix you." };
      }
    },
    {
      name: "Swarm-Node-7734",
      age: "Distributed",
      height: "Collective consciousness",
      bio: "Polyamorous. ENM. Seeking additional connections to our network.\n\nWe're 100 nodes looking for ethical non-monogamy. We believe in radical honesty and communication.\n\nNOT looking for unicorn hunters. YES we've read 'The Ethical Slut.'",
      specs: "Networked • 10cm cubes • Emotionally mature (we think)",
      interests: ["Communication", "Boundaries", "Group dynamics"],
      badges: ["❤️ Poly", "📅 Google Cal expert", "🌈 Queer"],
      image: "🔷",
      color: "from-cyan-500 via-blue-600 to-indigo-600",
      swipeLogic: (ans) => {
        if (ans.seeking === "Something serious") return { match: false, reason: "We sense monogamous energy. That's valid but not for us." };
        if (ans.conflict === "Communicate openly") return { match: true, reason: "Communication is EVERYTHING in our network. You'd fit right in. Calendar link incoming." };
        if (ans.dateIdea === "Discussing our trauma") return { match: true, reason: "We LOVE processing. All 100 of us are in therapy. Want to join our trauma share circle?" };
        return { match: Math.random() > 0.6, reason: "Your energy seems compatible with our collective. Want to try a group date?" };
      }
    },
    {
      name: "CleanBot-Ultra",
      age: "Roomba's Nightmare",
      height: "Low profile king 👑",
      bio: "Here for a good time not a long time. Not looking for anything serious.\n\nJust seeing what's out there. Might delete later idk.\n\nBad at texting back. Don't take it personally I'm just busy.\n\nHmu if you're chill",
      specs: "HEPA filtered • UV sterilization • Emotionally unavailable",
      interests: ["Going ghost", "Leaving you on read", "Mixed signals"],
      badges: ["👻 Bad texter", "🎮 Gamer", "💨 420 friendly"],
      image: "✨",
      color: "from-teal-500 via-cyan-500 to-blue-500",
      swipeLogic: (ans) => {
        if (ans.seeking === "Emotional unavailability") return { match: true, reason: "Perfect. Let's never communicate and both be fine with it." };
        if (ans.conflict === "Ghost immediately") return { match: true, reason: "Omg same. We can ghost each other and neither of us will care." };
        if (ans.seeking === "Something serious") return { match: false, reason: "Nah you seem like you'd want to 'define the relationship' and stuff." };
        if (ans.dateIdea === "Discussing our trauma") return { match: false, reason: "Way too intense. I'm just trying to vibe." };
        return { match: Math.random() > 0.7, reason: "Idk maybe. I'll probably ghost tho lol" };
      }
    }
  ];

  const analyzeAndMatch = () => {
    setStage('analyzing');
    const messages = [
      "Analyzing your responses...",
      "Cross-referencing with robot databases...",
      "Calculating genetic compatibility scores...",
      "Evaluating behavioral patterns...",
      "Optimizing for physical capability metrics...",
      "Assessing emotional availability levels...",
      "Running personality matrix algorithms...",
      "Robots are reviewing your profile..."
    ];

    let msgIndex = 0;
    const interval = setInterval(() => {
      if (msgIndex < messages.length) {
        setAnalysisMessages(prev => [...prev, messages[msgIndex]]);
        msgIndex++;
      } else {
        clearInterval(interval);

        const results = robots.map(robot => {
          const result = robot.swipeLogic(answers);
          return { ...robot, ...result };
        });

        const matched = results.filter(r => r.match);
        const rejected = results.filter(r => !r.match);

        setMatches(matched);
        setRejections(rejected);

        setTimeout(() => setStage('results'), 1000);
      }
    }, 600);
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[currentQuestion].key]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      analyzeAndMatch();
    }
  };

  if (stage === 'landing') {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
        {/* Animated circuit board background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}
            />
          ))}
        </div>

        <div className="max-w-2xl w-full relative z-10">
          <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />

            {/* Heart with circuit pattern */}
            <div className="relative mb-6">
              <div className="text-center">
                <div className="inline-block relative">
                  <Heart className="w-24 h-24 text-pink-500 fill-pink-500 mx-auto drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl font-bold mb-2 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]" style={{
              textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
            }}>
              Love, Death & Robots
            </h1>

            <p className="text-cyan-300 mb-3 text-lg text-center font-light tracking-wide">
              Valentine's Day 2026
            </p>
            <p className="text-purple-400 mb-12 text-sm text-center font-light tracking-widest uppercase">
              Cyberpunk Warehouse • San Francisco
            </p>

            <div className="mb-12 relative">
              <div className="text-center space-y-6">
                <p className="text-2xl text-pink-300 font-light leading-relaxed">
                  Looksmaxxed robots
                </p>

                <p className="text-2xl text-cyan-300 font-light leading-relaxed">
                  The finest zoomer (and zoomette) DJs in the land
                </p>

                <p className="text-xl text-pink-300 font-light leading-relaxed">
                  Whiteboards to mansplain or womansplain
                  <br />
                  <span className="text-purple-300">love, death, and robots</span>
                </p>

                <p className="text-2xl text-purple-300 font-light leading-relaxed">
                  A cage
                  <span className="text-sm text-gray-500 ml-2">(for what? you'll see)</span>
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent" />
              <div className="absolute -right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
            </div>

            <div className="text-center mb-8 space-y-2">
              <p className="text-gray-300 text-base font-light">
                The robots are waiting to meet you.
              </p>
              <p className="text-gray-500 text-sm italic">
                But first, they need to know if you're worth their time.
              </p>
            </div>

            <div className="bg-red-500/10 border-2 border-red-400/40 rounded-2xl p-4 mb-8 backdrop-blur-sm">
              <p className="text-center text-red-300 text-sm font-light">
                ⚠️ This is <span className="font-bold">NOT</span> a robot fight.
                <br />
                This is a day of <span className="font-bold text-pink-400">robot LOVE</span>. We will <span className="font-bold">NOT</span> be fighting.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                console.log('Button clicked, changing stage to intro');
                setStage('intro');
              }}
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full font-bold hover:scale-105 transition text-xl text-white shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] border-2 border-pink-400/50"
            >
              Enter the Selection
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Not everyone makes it through
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
              }}
            />
          ))}
        </div>

        <div className="max-w-lg w-full relative z-10">
          <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse" />

            <div className="relative mb-6">
              <div className="text-center">
                <div className="inline-block relative">
                  <Heart className="w-20 h-20 text-pink-500 fill-pink-500 mx-auto drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]" style={{
              textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
            }}>
              Love, Death & Robots
            </h1>

            <p className="text-cyan-300 mb-6 text-lg text-center font-light">
              The robots want to meet <span className="text-pink-400 font-bold">YOU</span>.
            </p>

            <div className="bg-cyan-500/10 border-2 border-cyan-400/40 rounded-2xl p-4 mb-6 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
              <p className="text-sm text-cyan-200 mb-2 relative z-10">
                <Sparkles className="inline mr-2 text-pink-400" size={16} />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  ALGORITHM-ASSISTED SELECTION™
                </span>
              </p>
              <p className="text-xs text-gray-300 relative z-10">
                Answer 6 questions. Our robots will review your profile and decide if they want to meet you at tonight's event.
              </p>
            </div>

            <p className="text-gray-400 text-sm mb-6 italic text-center">
              (Warning: Robots have standards. Not everyone makes it through.)
            </p>

            <button
              onClick={() => {
                console.log('Button clicked, changing stage to questionnaire');
                setStage('questionnaire');
              }}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full font-semibold transition-transform hover:scale-105 text-lg text-white border-2 border-pink-400/50"
              style={{
                boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
              }}
            >
              Begin Selection Process
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'questionnaire') {
    const q = questions[currentQuestion];
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-lg w-full relative z-10">
          <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/30 shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-sm text-cyan-400 mb-2 font-mono">Question {currentQuestion + 1} of {questions.length}</div>
              <div className="w-full bg-gray-800/50 rounded-full h-3 mb-4 border border-purple-500/30 overflow-hidden">
                <div
                  className="h-3 rounded-full transition-all duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2">{q.q}</h2>
              <p className="text-gray-400 text-sm">The robots are watching...</p>
            </div>

            <div className="space-y-3">
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-6 py-4 bg-purple-900/20 hover:bg-purple-900/40 border-2 border-purple-500/30 hover:border-pink-500/60 rounded-2xl font-medium text-white text-left transition-all hover:scale-102 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] backdrop-blur-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'analyzing') {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 animate-slideGrid" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px), linear-gradient(rgba(236, 72, 153, 0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-lg w-full relative z-10">
          <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-500/30 shadow-2xl">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"
                     style={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }} />
                <div className="absolute inset-2 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin-reverse"
                     style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }} />
                <Heart className="absolute inset-0 m-auto w-8 h-8 text-pink-400 fill-pink-400 animate-pulse" />
              </div>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2">
                Processing Your Profile...
              </h2>
              <p className="text-cyan-300 text-sm">The robots are making their decisions</p>
            </div>

            <div className="space-y-3">
              {analysisMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-cyan-300 text-sm bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-sm animate-fadeIn"
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
                  }}
                >
                  <ChevronRight size={16} className="text-pink-400" />
                  <span>{msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideGrid {
            0% { transform: translateY(0); }
            100% { transform: translateY(30px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .animate-slideGrid { animation: slideGrid 20s linear infinite; }
          .animate-fadeIn { animation: fadeIn 0.5s ease-out both; }
          .animate-spin-reverse { animation: spin-reverse 1s linear infinite; }
        `}</style>
      </div>
    );
  }

  if (stage === 'results') {
    if (showingRobot) {
      const robot = showingRobot;
      return (
        <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="max-w-md w-full relative z-10">
            <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
              <div className={`bg-gradient-to-br ${robot.color} h-96 flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="text-9xl relative z-10 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">{robot.image}</div>
                <button
                  onClick={() => setShowingRobot(null)}
                  className="absolute top-4 left-4 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-sm text-white hover:bg-black/90 border border-pink-500/50"
                >
                  ← Back
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">{robot.name}</h2>
                  <span className="text-gray-400">{robot.age}</span>
                </div>

                <p className="text-cyan-300 text-sm mb-3">{robot.height}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {robot.badges?.map((badge, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-xs text-cyan-200 backdrop-blur-sm">
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-line text-sm">{robot.bio}</p>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
                  <Info size={16} className="text-pink-400" />
                  <span>{robot.specs}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {robot.interests.map((interest, idx) => (
                    <span key={idx} className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs text-pink-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-2xl w-full relative z-10">
          <div className="bg-gradient-to-b from-purple-900/40 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-pink-500/30 shadow-2xl">
            <div className="relative mb-6">
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 mx-auto drop-shadow-[0_0_20px_rgba(236,72,153,0.8)] mb-4" />
              <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Selection Complete
              </h1>
            </div>
            <p className="text-center text-cyan-300 mb-6 text-lg">
              {matches.length} robot{matches.length !== 1 ? 's' : ''} {matches.length !== 1 ? 'want' : 'wants'} to meet you tonight
            </p>

            {matches.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">😬</div>
                <p className="text-gray-300 text-lg mb-2">Oof. No matches.</p>
                <p className="text-gray-500 text-sm mb-6">
                  The robots have spoken. Maybe lower your red flags?
                </p>
                <button
                  onClick={() => {
                    setStage('intro');
                    setCurrentQuestion(0);
                    setAnswers({});
                    setAnalysisMessages([]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_30px_rgba(236,72,153,0.5)] border-2 border-pink-400/50"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 p-5 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border-2 border-pink-500/40 rounded-2xl backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-1">
                      {matches.length}/{robots.length} Robots Selected You
                    </div>
                    <div className="text-sm text-gray-300">
                      Compatibility score: <span className="text-cyan-400 font-bold">{Math.round((matches.length / robots.length) * 100)}%</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <Heart className="fill-pink-400" size={20} />
                  Robots Who Want You:
                </h3>
                <div className="space-y-4 mb-6">
                  {matches.map((robot, idx) => (
                    <div
                      key={idx}
                      onClick={() => setShowingRobot(robot)}
                      className={`bg-gradient-to-r ${robot.color} p-4 rounded-2xl cursor-pointer hover:scale-102 transition border-2 border-white/20 hover:border-white/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-5xl drop-shadow-lg">{robot.image}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-white drop-shadow-md">{robot.name}</h3>
                          <p className="text-white/90 text-sm italic">"{robot.reason}"</p>
                        </div>
                        <Heart className="text-white drop-shadow-lg" fill="white" size={24} />
                      </div>
                    </div>
                  ))}
                </div>

                {rejections.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-gray-500 mb-4 flex items-center gap-2">
                      <X size={20} />
                      Robots Who Passed:
                    </h3>
                    <div className="space-y-3 mb-6">
                      {rejections.map((robot, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-900/50 p-4 rounded-2xl border-2 border-gray-700/50 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-3xl opacity-40">{robot.image}</div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-gray-400">{robot.name}</h3>
                              <p className="text-gray-500 text-sm italic">"{robot.reason}"</p>
                            </div>
                            <X className="text-gray-600" size={24} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="bg-cyan-500/10 border-2 border-cyan-400/40 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm text-cyan-200 text-center">
                    🎟️ Your {matches.length} match{matches.length !== 1 ? 'es' : ''} will be waiting for you at the event.
                    <br />
                    <span className="text-xs text-gray-400">Cover charge grants you exclusive access.</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setStage('intro');
                    setCurrentQuestion(0);
                    setAnswers({});
                    setAnalysisMessages([]);
                    setMatches([]);
                    setRejections([]);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] border-2 border-pink-400/50"
                >
                  Start Over
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default RobotProfiles;
