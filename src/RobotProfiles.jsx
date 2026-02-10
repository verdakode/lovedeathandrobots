import React, { useState } from 'react';
import { Heart, X, ChevronRight, Sparkles, Info, Zap } from 'lucide-react';

const RobotProfiles = () => {
  const [stage, setStage] = useState('landing');
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

  const getGradientColors = (colorName) => {
    const gradients = {
      'from-cyan-500 via-blue-500 to-purple-600': 'linear-gradient(135deg, #06b6d4, #3b82f6, #9333ea)',
      'from-orange-500 via-pink-500 to-red-600': 'linear-gradient(135deg, #f97316, #ec4899, #dc2626)',
      'from-purple-500 via-fuchsia-500 to-pink-600': 'linear-gradient(135deg, #a855f7, #d946ef, #db2777)',
      'from-red-600 via-rose-500 to-pink-500': 'linear-gradient(135deg, #dc2626, #f43f5e, #ec4899)',
      'from-green-500 via-emerald-500 to-cyan-500': 'linear-gradient(135deg, #22c55e, #10b981, #06b6d4)',
      'from-indigo-600 via-purple-600 to-fuchsia-600': 'linear-gradient(135deg, #4f46e5, #9333ea, #c026d3)',
      'from-cyan-500 via-blue-600 to-indigo-600': 'linear-gradient(135deg, #06b6d4, #2563eb, #4f46e5)',
      'from-teal-500 via-cyan-500 to-blue-500': 'linear-gradient(135deg, #14b8a6, #06b6d4, #3b82f6)'
    };
    return gradients[colorName] || 'linear-gradient(135deg, #ec4899, #a855f7, #22d3ee)';
  };

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
      <div style={styles.container}>
        <div style={styles.gridBackground} />

        <div style={styles.particlesContainer}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.particle,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div style={styles.contentWrapper}>
          <div style={styles.card}>
            <div style={styles.heartContainer}>
              <Heart style={styles.heartIcon} />
              <Zap style={styles.zapIcon} />
            </div>

            <h1 style={styles.title}>Love, Death & Robots</h1>

            <p style={styles.subtitle}>Valentine's Day 2026</p>
            <p style={styles.location}>CYBERPUNK WAREHOUSE • SAN FRANCISCO</p>

            <div style={styles.eventList}>
              <p style={{...styles.eventItem, fontSize: '24px', color: '#f9a8d4'}}>
                Looksmaxxed robots
              </p>

              <p style={{...styles.eventItem, fontSize: '24px', color: '#67e8f9'}}>
                The finest zoomer (and zoomette) DJs in the land
              </p>

              <p style={{...styles.eventItem, fontSize: '20px', color: '#f9a8d4'}}>
                Whiteboards to mansplain or womansplain
                <br />
                <span style={{color: '#c084fc'}}>love, death, and robots</span>
              </p>

              <p style={{...styles.eventItem, fontSize: '24px', color: '#c084fc'}}>
                A cage
                <span style={{fontSize: '14px', color: '#6b7280', marginLeft: '8px'}}>(for what? you'll see)</span>
              </p>
            </div>

            <div style={styles.disclaimer}>
              <p style={styles.disclaimerText}>
                ⚠️ This is <strong>NOT</strong> a robot fight.
                <br />
                This is a day of <strong style={{color: '#f9a8d4'}}>robot LOVE</strong>. We will <strong>NOT</strong> be fighting.
              </p>
            </div>

            <div style={styles.robotsWaiting}>
              <p style={styles.robotsWaitingMain}>
                The robots are waiting to meet you.
              </p>
              <p style={styles.robotsWaitingSecondary}>
                But first, they need to know if you're worth their time.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setStage('intro')}
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Enter the Selection
            </button>

            <p style={styles.notEveryone}>
              Not everyone makes it through
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div style={styles.container}>
        <div style={styles.gridBackground} />

        <div style={styles.particlesContainer}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.particle,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div style={styles.contentWrapperSmall}>
          <div style={styles.card}>
            <div style={styles.heartContainer}>
              <Heart style={styles.heartIconMedium} />
              <Zap style={styles.zapIconMedium} />
            </div>

            <h1 style={styles.titleMedium}>Love, Death & Robots</h1>

            <p style={styles.subtitleIntro}>
              The robots want to meet <span style={{color: '#f9a8d4', fontWeight: 'bold'}}>YOU</span>.
            </p>

            <div style={styles.algoBox}>
              <p style={styles.algoTitle}>
                <Sparkles style={{display: 'inline', marginRight: '8px', color: '#f9a8d4', width: '16px', height: '16px'}} />
                <span style={{fontWeight: 'bold', background: 'linear-gradient(to right, #f9a8d4, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  ALGORITHM-ASSISTED SELECTION™
                </span>
              </p>
              <p style={styles.algoText}>
                Answer 6 questions. Our robots will review your profile and decide if they want to meet you at tonight's event.
              </p>
            </div>

            <p style={styles.warningText}>
              (Warning: Robots have standards. Not everyone makes it through.)
            </p>

            <button
              onClick={() => setStage('questionnaire')}
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
      <div style={styles.container}>
        <div style={styles.gridBackground} />

        <div style={styles.contentWrapperSmall}>
          <div style={styles.card}>
            <div style={{textAlign: 'center', marginBottom: '24px'}}>
              <div style={styles.questionCounter}>Question {currentQuestion + 1} of {questions.length}</div>
              <div style={styles.progressBarContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                  }}
                />
              </div>
              <h2 style={styles.questionTitle}>{q.q}</h2>
              <p style={styles.robotsWatchingText}>The robots are watching...</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {q.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  style={styles.optionButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(88, 28, 135, 0.4)';
                    e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.6)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(88, 28, 135, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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
      <div style={styles.container}>
        <div style={styles.animatedGridBackground} />

        <div style={styles.contentWrapperSmall}>
          <div style={styles.card}>
            <div style={{textAlign: 'center', marginBottom: '32px'}}>
              <div style={styles.loadingContainer}>
                <div style={styles.loadingSpinner} />
                <div style={styles.loadingSpinnerReverse} />
                <Heart style={styles.loadingHeart} />
              </div>

              <h2 style={styles.analyzingTitle}>
                Processing Your Profile...
              </h2>
              <p style={styles.analyzingSubtitle}>The robots are making their decisions</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {analysisMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.analysisMessage,
                    animationDelay: `${idx * 0.1}s`
                  }}
                >
                  <ChevronRight size={16} style={{color: '#f9a8d4', flexShrink: 0}} />
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
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}</style>
      </div>
    );
  }

  if (stage === 'results') {
    if (showingRobot) {
      const robot = showingRobot;
      return (
        <div style={styles.container}>
          <div style={styles.gridBackground} />

          <div style={styles.contentWrapperMedium}>
            <div style={{...styles.card, padding: 0}}>
              <div style={{
                background: getGradientColors(robot.color),
                height: '384px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)'}} />
                <div style={{fontSize: '96px', position: 'relative', zIndex: 10, filter: 'drop-shadow(0 0 30px rgba(0, 0, 0, 0.8))'}}>{robot.image}</div>
                <button
                  onClick={() => setShowingRobot(null)}
                  style={styles.backButton}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'}
                >
                  ← Back
                </button>
              </div>

              <div style={{padding: '24px'}}>
                <div style={{display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px'}}>
                  <h2 style={styles.robotName}>{robot.name}</h2>
                  <span style={{color: '#9ca3af'}}>{robot.age}</span>
                </div>

                <p style={{color: '#67e8f9', fontSize: '14px', marginBottom: '12px'}}>{robot.height}</p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px'}}>
                  {robot.badges?.map((badge, idx) => (
                    <span key={idx} style={styles.badge}>
                      {badge}
                    </span>
                  ))}
                </div>

                <p style={{color: '#d1d5db', marginBottom: '16px', lineHeight: 1.5, whiteSpace: 'pre-line', fontSize: '14px'}}>{robot.bio}</p>

                <div style={styles.specsBox}>
                  <Info size={16} style={{color: '#f9a8d4', flexShrink: 0}} />
                  <span>{robot.specs}</span>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                  {robot.interests.map((interest, idx) => (
                    <span key={idx} style={styles.interestBadge}>
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
      <div style={styles.container}>
        <div style={styles.gridBackground} />

        <div style={styles.contentWrapperLarge}>
          <div style={styles.card}>
            <div style={{position: 'relative', marginBottom: '24px'}}>
              <Heart style={{...styles.heartIconMedium, margin: '0 auto 16px', display: 'block'}} />
              <h1 style={styles.resultsTitle}>
                Selection Complete
              </h1>
            </div>
            <p style={styles.matchCountText}>
              {matches.length} robot{matches.length !== 1 ? 's' : ''} {matches.length !== 1 ? 'want' : 'wants'} to meet you tonight
            </p>

            {matches.length === 0 ? (
              <div style={{textAlign: 'center', padding: '48px 0'}}>
                <div style={{fontSize: '60px', marginBottom: '16px'}}>😬</div>
                <p style={{color: '#d1d5db', fontSize: '18px', marginBottom: '8px'}}>Oof. No matches.</p>
                <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '24px'}}>
                  The robots have spoken. Maybe lower your red flags?
                </p>
                <button
                  onClick={() => {
                    setStage('intro');
                    setCurrentQuestion(0);
                    setAnswers({});
                    setAnalysisMessages([]);
                  }}
                  style={styles.button}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <div style={styles.compatibilityBox}>
                  <div style={{textAlign: 'center'}}>
                    <div style={styles.compatibilityScore}>
                      {matches.length}/{robots.length} Robots Selected You
                    </div>
                    <div style={{fontSize: '14px', color: '#d1d5db'}}>
                      Compatibility score: <span style={{color: '#67e8f9', fontWeight: 'bold'}}>{Math.round((matches.length / robots.length) * 100)}%</span>
                    </div>
                  </div>
                </div>

                <h3 style={styles.sectionTitle}>
                  <Heart style={{fill: '#f9a8d4', color: '#f9a8d4', width: '20px', height: '20px', marginRight: '8px'}} />
                  Robots Who Want You:
                </h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px'}}>
                  {matches.map((robot, idx) => (
                    <div
                      key={idx}
                      onClick={() => setShowingRobot(robot)}
                      style={{
                        ...styles.matchCard,
                        background: getGradientColors(robot.color)
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.3)';
                      }}
                    >
                      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                        <div style={{fontSize: '48px', filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.3))'}}>{robot.image}</div>
                        <div style={{flex: 1}}>
                          <h3 style={{fontWeight: 'bold', fontSize: '20px', color: 'white', filter: 'drop-shadow(0 2px 2px rgb(0 0 0 / 0.3))', marginBottom: '4px'}}>{robot.name}</h3>
                          <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px', fontStyle: 'italic'}}>"{robot.reason}"</p>
                        </div>
                        <Heart style={{color: 'white', fill: 'white', width: '24px', height: '24px', filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.3))'}} />
                      </div>
                    </div>
                  ))}
                </div>

                {rejections.length > 0 && (
                  <>
                    <h3 style={{...styles.sectionTitle, color: '#6b7280'}}>
                      <X style={{width: '20px', height: '20px', marginRight: '8px'}} />
                      Robots Who Passed:
                    </h3>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px'}}>
                      {rejections.map((robot, idx) => (
                        <div key={idx} style={styles.rejectCard}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <div style={{fontSize: '32px', opacity: 0.4}}>{robot.image}</div>
                            <div style={{flex: 1}}>
                              <h3 style={{fontWeight: 'bold', fontSize: '18px', color: '#9ca3af', marginBottom: '4px'}}>{robot.name}</h3>
                              <p style={{color: '#6b7280', fontSize: '14px', fontStyle: 'italic'}}>"{robot.reason}"</p>
                            </div>
                            <X style={{color: '#4b5563', width: '24px', height: '24px'}} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div style={styles.eventInfoBox}>
                  <p style={{fontSize: '14px', color: '#a5f3fc', textAlign: 'center', margin: 0}}>
                    🎟️ Your {matches.length} match{matches.length !== 1 ? 'es' : ''} will be waiting for you at the event.
                    <br />
                    <span style={{fontSize: '12px', color: '#9ca3af'}}>Cover charge grants you exclusive access.</span>
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
                  style={{...styles.button, marginTop: 0}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 50px rgba(236, 72, 153, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.5)';
                  }}
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

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  gridBackground: {
    position: 'absolute',
    inset: 0,
    opacity: 0.2,
    backgroundImage: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px'
  },
  animatedGridBackground: {
    position: 'absolute',
    inset: 0,
    opacity: 0.3,
    backgroundImage: 'linear-gradient(90deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px), linear-gradient(rgba(236, 72, 153, 0.2) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    animation: 'slideGrid 20s linear infinite'
  },
  particlesContainer: {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden'
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: '#22d3ee',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
    animation: 'pulse 2s ease-in-out infinite'
  },
  contentWrapper: {
    maxWidth: '800px',
    width: '100%',
    position: 'relative',
    zIndex: 10
  },
  contentWrapperSmall: {
    maxWidth: '512px',
    width: '100%',
    position: 'relative',
    zIndex: 10
  },
  contentWrapperMedium: {
    maxWidth: '448px',
    width: '100%',
    position: 'relative',
    zIndex: 10
  },
  contentWrapperLarge: {
    maxWidth: '672px',
    width: '100%',
    position: 'relative',
    zIndex: 10
  },
  card: {
    background: 'linear-gradient(to bottom, rgba(88, 28, 135, 0.4), rgba(0, 0, 0, 0.4))',
    backdropFilter: 'blur(24px)',
    borderRadius: '24px',
    padding: '32px',
    border: '2px solid rgba(236, 72, 153, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    overflow: 'hidden'
  },
  heartContainer: {
    position: 'relative',
    marginBottom: '24px',
    textAlign: 'center'
  },
  heartIcon: {
    width: '96px',
    height: '96px',
    color: '#ec4899',
    fill: '#ec4899',
    filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))',
    margin: '0 auto',
    display: 'block'
  },
  heartIconMedium: {
    width: '80px',
    height: '80px',
    color: '#ec4899',
    fill: '#ec4899',
    filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))',
    margin: '0 auto',
    display: 'block'
  },
  zapIcon: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    color: '#22d3ee',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 2s ease-in-out infinite'
  },
  zapIconMedium: {
    position: 'absolute',
    width: '32px',
    height: '32px',
    color: '#22d3ee',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 2s ease-in-out infinite'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #f9a8d4, #c084fc, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.5))',
    textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
  },
  titleMedium: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #f9a8d4, #c084fc, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.5))',
    textShadow: '0 0 30px rgba(236, 72, 153, 0.3)'
  },
  subtitle: {
    color: '#67e8f9',
    marginBottom: '12px',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: 300,
    letterSpacing: '0.05em'
  },
  subtitleIntro: {
    color: '#67e8f9',
    marginBottom: '24px',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: 300
  },
  location: {
    color: '#c084fc',
    marginBottom: '48px',
    fontSize: '14px',
    textAlign: 'center',
    fontWeight: 300,
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
  },
  eventList: {
    marginBottom: '48px',
    position: 'relative',
    textAlign: 'center'
  },
  eventItem: {
    fontWeight: 300,
    lineHeight: 1.75,
    margin: '24px 0'
  },
  disclaimer: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '2px solid rgba(248, 113, 113, 0.4)',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '32px',
    backdropFilter: 'blur(4px)'
  },
  disclaimerText: {
    textAlign: 'center',
    color: '#fca5a5',
    fontSize: '14px',
    fontWeight: 300,
    margin: 0
  },
  robotsWaiting: {
    textAlign: 'center',
    marginBottom: '32px'
  },
  robotsWaitingMain: {
    color: '#d1d5db',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '8px'
  },
  robotsWaitingSecondary: {
    color: '#6b7280',
    fontSize: '14px',
    fontStyle: 'italic',
    margin: 0
  },
  button: {
    width: '100%',
    padding: '16px 32px',
    background: 'linear-gradient(to right, #ec4899, #a855f7, #22d3ee)',
    borderRadius: '9999px',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'white',
    boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
    border: '2px solid rgba(236, 72, 153, 0.5)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  notEveryone: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '16px'
  },
  algoBox: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    border: '2px solid rgba(34, 211, 238, 0.4)',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '24px',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(4px)'
  },
  algoTitle: {
    fontSize: '14px',
    color: '#a5f3fc',
    marginBottom: '8px',
    position: 'relative',
    zIndex: 10
  },
  algoText: {
    fontSize: '12px',
    color: '#d1d5db',
    position: 'relative',
    zIndex: 10,
    margin: 0
  },
  warningText: {
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '24px',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  questionCounter: {
    fontSize: '14px',
    color: '#22d3ee',
    marginBottom: '8px',
    fontFamily: 'monospace'
  },
  progressBarContainer: {
    width: '100%',
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: '9999px',
    height: '12px',
    marginBottom: '16px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    overflow: 'hidden'
  },
  progressBar: {
    height: '12px',
    borderRadius: '9999px',
    transition: 'width 0.3s',
    background: 'linear-gradient(to right, #ec4899, #a855f7, #22d3ee)',
    boxShadow: '0 0 20px rgba(236, 72, 153, 0.6)'
  },
  questionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #f9a8d4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px'
  },
  robotsWatchingText: {
    color: '#9ca3af',
    fontSize: '14px',
    margin: 0
  },
  optionButton: {
    width: '100%',
    padding: '16px 24px',
    backgroundColor: 'rgba(88, 28, 135, 0.2)',
    border: '2px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '16px',
    fontWeight: 500,
    color: 'white',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s',
    backdropFilter: 'blur(4px)',
    fontSize: '16px'
  },
  loadingContainer: {
    position: 'relative',
    width: '96px',
    height: '96px',
    margin: '0 auto 24px'
  },
  loadingSpinner: {
    position: 'absolute',
    inset: 0,
    border: '4px solid rgba(236, 72, 153, 0.3)',
    borderTop: '4px solid #ec4899',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
  },
  loadingSpinnerReverse: {
    position: 'absolute',
    inset: '8px',
    border: '4px solid rgba(34, 211, 238, 0.3)',
    borderTop: '4px solid #22d3ee',
    borderRadius: '50%',
    animation: 'spinReverse 1s linear infinite',
    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
  },
  loadingHeart: {
    position: 'absolute',
    width: '32px',
    height: '32px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#f9a8d4',
    fill: '#f9a8d4',
    animation: 'pulse 2s ease-in-out infinite'
  },
  analyzingTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #f9a8d4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '8px'
  },
  analyzingSubtitle: {
    color: '#67e8f9',
    fontSize: '14px',
    margin: 0
  },
  analysisMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#67e8f9',
    fontSize: '14px',
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    border: '1px solid rgba(34, 211, 238, 0.3)',
    borderRadius: '8px',
    padding: '12px',
    backdropFilter: 'blur(4px)',
    animation: 'fadeIn 0.5s ease-out both',
    boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
  },
  backButton: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    padding: '8px 16px',
    borderRadius: '9999px',
    fontSize: '14px',
    color: 'white',
    border: '1px solid rgba(236, 72, 153, 0.5)',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  robotName: {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #f9a8d4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0
  },
  badge: {
    padding: '4px 12px',
    backgroundColor: 'rgba(6, 182, 212, 0.2)',
    border: '1px solid rgba(34, 211, 238, 0.4)',
    borderRadius: '8px',
    fontSize: '12px',
    color: '#a5f3fc',
    backdropFilter: 'blur(4px)'
  },
  specsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '16px',
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)'
  },
  interestBadge: {
    padding: '4px 12px',
    backgroundColor: 'rgba(236, 72, 153, 0.2)',
    border: '1px solid rgba(236, 72, 153, 0.3)',
    borderRadius: '9999px',
    fontSize: '12px',
    color: '#f9a8d4'
  },
  resultsTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8px',
    background: 'linear-gradient(to right, #f9a8d4, #c084fc, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  matchCountText: {
    textAlign: 'center',
    color: '#67e8f9',
    marginBottom: '24px',
    fontSize: '18px'
  },
  compatibilityBox: {
    marginBottom: '24px',
    padding: '20px',
    background: 'linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))',
    border: '2px solid rgba(236, 72, 153, 0.4)',
    borderRadius: '16px',
    backdropFilter: 'blur(4px)'
  },
  compatibilityScore: {
    fontSize: '28px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #f9a8d4, #67e8f9)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '4px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#f9a8d4',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  matchCard: {
    padding: '16px',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)'
  },
  rejectCard: {
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    padding: '16px',
    borderRadius: '16px',
    border: '2px solid rgba(55, 65, 81, 0.5)',
    backdropFilter: 'blur(4px)'
  },
  eventInfoBox: {
    backgroundColor: 'rgba(6, 182, 212, 0.1)',
    border: '2px solid rgba(34, 211, 238, 0.4)',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '24px',
    backdropFilter: 'blur(4px)'
  }
};

export default RobotProfiles;
