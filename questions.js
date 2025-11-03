// Wellness Quiz Question Bank
// 100 questions total: 50 easy, 30 medium, 20 hard
// Categories: yoga, sound, breath, meditation
// 8+ numeric questions for tiebreakers

const questionBank = [
    // YOGA QUESTIONS (Body-focused)
    {
        id: 1,
        category: "yoga",
        difficulty: "easy",
        type: "mcq",
        question: "Which muscle group is primarily stretched in the Downward Dog (Adho Mukha Svanasana) pose?",
        choices: ["Hamstrings", "Quadriceps", "Biceps", "Triceps"],
        correct: 0,
        explanation: "Downward Dog stretches the hamstrings, calves, and back muscles."
    },
    {
        id: 2,
        category: "yoga",
        difficulty: "easy",
        type: "mcq",
        question: "What is the main benefit of practicing twists (like Ardha Matsyendrasana) for the digestive system?",
        choices: ["Improves blood circulation", "Stimulates digestion", "Strengthens the heart", "Increases lung capacity"],
        correct: 1,
        explanation: "Twists help stimulate digestion and massage abdominal organs."
    },
    {
        id: 3,
        category: "yoga",
        difficulty: "easy",
        type: "mcq",
        question: "Which yoga pose is best known for strengthening the core muscles?",
        choices: ["Plank (Phalakasana)", "Child’s Pose (Balasana)", "Cobra Pose (Bhujangasana)", "Tree Pose (Vrikshasana)"],
        correct: 0,
        explanation: "Plank pose is excellent for building core strength."
    },
    {
        id: 4,
        category: "yoga",
        difficulty: "easy",
        type: "mcq",
        question: "Which part of the body is most engaged during Warrior II (Virabhadrasana II)?",
        choices: ["Shoulders", "Legs and hips", "Wrists", "Neck"],
        correct: 1,
        explanation: "Warrior II strengthens and stretches the legs and hips."
    },
    {
        id: 5,
        category: "yoga",
        difficulty: "easy",
        type: "mcq",
        question: "What effect does deep diaphragmatic breathing (Pranayama) have on the nervous system?",
        choices: ["Activates fight-or-flight response", "Promotes relaxation and reduces stress", "Increases adrenaline", "Raises blood pressure"],
        correct: 1,
        explanation: "Diaphragmatic breathing activates the parasympathetic nervous system, promoting relaxation."
    },
    {
        id: 6,
        category: "yoga",
        difficulty: "medium",
        type: "mcq",
        question: "Which yoga posture helps to open the chest and improve lung capacity?",
        choices: ["Bridge Pose (Setu Bandhasana)", "Forward Fold (Uttanasana)", "Mountain Pose (Tadasana)", "Cat-Cow Pose (Marjaryasana/Bitilasana)"],
        correct: 0,
        explanation: "Bridge Pose opens the chest and improves lung capacity."
    },
    {
        id: 7,
        category: "yoga",
        difficulty: "medium",
        type: "mcq",
        question: "Practicing balance poses like Tree Pose (Vrikshasana) primarily improves which bodily function?",
        choices: ["Digestion", "Balance and proprioception", "Hearing", "Vision"],
        correct: 1,
        explanation: "Balance poses improve proprioception and stability."
    },
    {
        id: 8,
        category: "yoga",
        difficulty: "medium",
        type: "mcq",
        question: "Which yoga pose is recommended for relieving lower back pain?",
        choices: ["Child’s Pose (Balasana)", "Warrior I (Virabhadrasana I)", "Chair Pose (Utkatasana)", "Crow Pose (Bakasana)"],
        correct: 0,
        explanation: "Child’s Pose gently stretches the lower back and relieves tension."
    },
    {
        id: 9,
        category: "yoga",
        difficulty: "medium",
        type: "mcq",
        question: "What is the main physical benefit of practicing Sun Salutations (Surya Namaskar)?",
        choices: ["Improves cardiovascular health", "Increases flexibility and strength", "Enhances memory", "Reduces appetite"],
        correct: 1,
        explanation: "Sun Salutations increase flexibility, strength, and warm up the body."
    },
    {
        id: 10,
        category: "yoga",
        difficulty: "hard",
        type: "mcq",
        question: "Which joint is most mobilized during the practice of Lotus Pose (Padmasana)?",
        choices: ["Knee", "Hip", "Elbow", "Shoulder"],
        correct: 1,
        explanation: "Lotus Pose requires significant hip mobility."
    },

    // SOUND HEALING QUESTIONS (25 total: 12 easy, 8 medium, 5 hard)
    // ...existing code...
    {
        id: 26,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
            question: "Which sound frequency is believed to help reduce stress and promote relaxation in the human body?",
            choices: ["528 Hz", "1000 Hz", "50 Hz", "200 Hz"],
            correct: 0,
            explanation: "528 Hz is often used in sound healing to promote relaxation and stress reduction."
    },
    {
        id: 27,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "Which instrument is commonly used in Tibetan sound healing?",
        choices: ["Piano", "Singing bowls", "Guitar", "Flute"],
        correct: 1,
        explanation: "Tibetan singing bowls are traditional instruments used for sound healing and meditation practices."
    },
    {
        id: 28,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "What is the practice of using voice for healing called?",
        choices: ["Sound bathing", "Vocal therapy", "Toning", "Humming"],
        correct: 2,
        explanation: "Toning is the practice of using vocal sounds for healing, relaxation, and energy balancing."
    },
    {
        id: 29,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "Which of these is a benefit of sound healing?",
        choices: ["Stress reduction", "Improved sleep", "Pain relief", "All of the above"],
        correct: 3,
        explanation: "Sound healing can provide multiple benefits including stress reduction, improved sleep, and pain relief."
    },
    {
        id: 30,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "What is a sound bath?",
        choices: ["Bathing with music", "A group sound healing session", "Swimming while listening to music", "Underwater therapy"],
        correct: 1,
        explanation: "A sound bath is a meditative experience where participants are 'bathed' in healing sounds and vibrations."
    },
    {
        id: 31,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
            question: "How can sound vibrations affect the human body during a sound bath?",
            choices: ["Increase muscle tension", "Promote relaxation and reduce pain", "Cause hearing loss", "None of the above"],
            correct: 1,
            explanation: "Sound vibrations can help relax muscles, reduce pain, and promote overall wellness."
    },
    {
        id: 32,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "What does 'Hz' stand for in sound frequency?",
        choices: ["Hertz", "High zone", "Harmonic", "Heavy"],
        correct: 0,
        explanation: "Hz stands for Hertz, the unit of frequency measuring cycles per second in sound waves."
    },
    {
        id: 33,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "Which type of music is most commonly used for relaxation?",
        choices: ["Heavy metal", "Classical or ambient", "Rap", "Pop"],
        correct: 1,
        explanation: "Classical, ambient, and nature sounds are most commonly used for relaxation and healing purposes."
    },
    {
        id: 34,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
            question: "Chanting 'OM' during meditation is believed to have what effect on the body?",
            choices: ["Increase blood pressure", "Calm the nervous system", "Cause headaches", "None of the above"],
            correct: 1,
            explanation: "Chanting OM can help calm the nervous system and promote relaxation."
    },
    {
        id: 35,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "Which instrument creates sound through metal vibration?",
        choices: ["Drum", "Gong", "Flute", "Guitar"],
        correct: 1,
        explanation: "Gongs create healing sounds through the vibration of metal when struck."
    },
    {
        id: 36,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "What happens to brainwaves during sound healing?",
        choices: ["They become chaotic", "They synchronize with the sound frequencies", "They stop completely", "Nothing changes"],
        correct: 1,
        explanation: "Brainwaves tend to synchronize with sound frequencies, promoting relaxation and altered states of consciousness."
    },
    {
        id: 37,
        category: "sound",
        difficulty: "easy",
        type: "mcq",
        question: "Which sense is primarily engaged in sound healing?",
        choices: ["Sight", "Hearing", "Taste", "Smell"],
        correct: 1,
        explanation: "Sound healing primarily engages our sense of hearing, though vibrations can also be felt throughout the body."
    },
    {
        id: 38,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
            question: "How do Solfeggio frequencies affect the human body?",
            choices: ["No effect", "May promote relaxation and healing", "Cause muscle cramps", "Increase appetite"],
            correct: 1,
            explanation: "Solfeggio frequencies are believed to promote relaxation and healing in the body."
    },
    {
        id: 39,
        category: "sound",
        difficulty: "medium",
        type: "numeric",
        question: "What frequency (in Hz) is associated with the root chakra?",
        correct: 396,
        explanation: "396 Hz is the Solfeggio frequency associated with the root chakra and releasing fear and guilt."
    },
    {
        id: 40,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "What is binaural beats therapy?",
        choices: ["Playing two different frequencies in each ear", "Playing the same tone in both ears", "Playing music backwards", "Silent meditation"],
        correct: 0,
        explanation: "Binaural beats occur when slightly different frequencies are played in each ear, creating a perceived beat frequency."
    },
    {
        id: 41,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "Which brainwave state is associated with deep meditation and healing?",
        choices: ["Beta", "Alpha", "Theta", "Gamma"],
        correct: 2,
        explanation: "Theta brainwaves (4-8 Hz) are associated with deep meditation, healing, and access to subconscious states."
    },
    {
        id: 42,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "What is the scientific study of sound healing called?",
        choices: ["Sonotherapy", "Cymatics", "Psychoacoustics", "Vibroacoustics"],
        correct: 2,
        explanation: "Psychoacoustics is the scientific study of how sound affects the mind and body."
    },
    {
        id: 43,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "Which frequency is used to enhance DNA repair?",
        choices: ["528 Hz", "741 Hz", "852 Hz", "963 Hz"],
        correct: 0,
        explanation: "528 Hz is believed to enhance DNA repair and is sometimes called the 'miracle tone.'"
    },
    {
        id: 44,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "What is the principle behind crystal singing bowls?",
        choices: ["They look pretty", "Quartz crystal vibrations create pure tones", "They're expensive", "They're louder than metal bowls"],
        correct: 1,
        explanation: "Crystal singing bowls are made from quartz crystal, which creates pure, sustained tones when struck."
    },
    {
        id: 45,
        category: "sound",
        difficulty: "medium",
        type: "mcq",
        question: "How do tuning forks work in sound healing?",
        choices: ["They create specific frequencies for targeted healing", "They're just decorative", "They only work on metal", "They create random sounds"],
        correct: 0,
        explanation: "Tuning forks create precise frequencies that can be applied to specific body points for targeted healing."
    },
    {
        id: 46,
        category: "sound",
        difficulty: "hard",
        type: "mcq",
        question: "What is the Schumann Resonance?",
        choices: ["A musical instrument", "Earth's natural electromagnetic frequency (7.83 Hz)", "A type of singing", "A meditation technique"],
        correct: 1,
        explanation: "The Schumann Resonance is Earth's natural electromagnetic frequency at 7.83 Hz, which matches human alpha brainwaves."
    },
    {
        id: 47,
        category: "sound",
        difficulty: "hard",
        type: "numeric",
        question: "At what frequency (in Hz) does the average human heart beat resonate?",
        correct: 1,
        explanation: "The human heart beats at approximately 1 Hz (60 beats per minute), which can be used in sound healing practices."
    },
    {
        id: 48,
        category: "sound",
        difficulty: "hard",
        type: "mcq",
        question: "What is cymatics?",
        choices: ["A type of drum", "The study of visible sound vibrations and their patterns", "A meditation technique", "A musical scale"],
        correct: 1,
        explanation: "Cymatics is the study of visible sound and vibration patterns, showing how sound creates geometric forms in matter."
    },
    {
        id: 49,
        category: "sound",
        difficulty: "hard",
        type: "mcq",
            question: "How can music therapy benefit the human body?",
            choices: ["Improve mood and reduce pain", "Cause insomnia", "Increase blood pressure", "None of the above"],
            correct: 0,
            explanation: "Music therapy can improve mood, reduce pain, and support overall wellness."
    },
    {
        id: 50,
        category: "sound",
        difficulty: "hard",
        type: "mcq",
        question: "What is the relationship between sound and sacred geometry?",
        choices: ["No relationship", "Sound vibrations create geometric patterns in matter", "Only applies to religious music", "It's purely theoretical"],
        correct: 1,
        explanation: "Sound vibrations create specific geometric patterns in matter, demonstrating the connection between sound and sacred geometry."
    },

    // BREATHWORK QUESTIONS (25 total: 13 easy, 7 medium, 5 hard)
    // ...existing code...
    {
        id: 51,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is the average number of breaths a person takes per minute at rest?",
        choices: ["5-8", "12-20", "25-30", "35-40"],
        correct: 1,
        explanation: "The average resting respiratory rate for adults is 12-20 breaths per minute."
    },
    {
        id: 52,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "Which part of the autonomic nervous system is activated by slow, deep breathing?",
        choices: ["Sympathetic", "Parasympathetic", "Central", "Peripheral"],
        correct: 1,
        explanation: "Slow, deep breathing activates the parasympathetic nervous system, promoting relaxation and healing."
    },
    {
        id: 53,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is the 4-7-8 breathing technique?",
        choices: ["Inhale 4, hold 7, exhale 8", "Breathe for 4 hours, 7 minutes, 8 seconds", "4 breaths, 7 holds, 8 exhales", "A random number sequence"],
        correct: 0,
        explanation: "The 4-7-8 technique involves inhaling for 4 counts, holding for 7, and exhaling for 8 counts."
    },
    {
        id: 54,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "Which breathing pattern is most effective for reducing anxiety?",
        choices: ["Fast, shallow breathing", "Slow, deep breathing", "Holding breath", "Irregular breathing"],
        correct: 1,
        explanation: "Slow, deep breathing helps reduce anxiety by activating the body's relaxation response."
    },
    {
        id: 55,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is diaphragmatic breathing?",
        choices: ["Breathing through the nose only", "Breathing with the belly/diaphragm", "Breathing very fast", "Breathing through the mouth only"],
        correct: 1,
        explanation: "Diaphragmatic breathing involves using the diaphragm muscle to breathe deeply into the belly rather than shallow chest breathing."
    },
    {
        id: 56,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What happens to heart rate during exhale?",
        choices: ["It increases", "It decreases", "It stays the same", "It becomes irregular"],
        correct: 1,
        explanation: "Heart rate naturally decreases during exhale due to vagal stimulation, part of heart rate variability."
    },
    {
        id: 57,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "Which gas do we primarily exhale?",
        choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correct: 1,
        explanation: "We primarily exhale carbon dioxide, a waste product of cellular metabolism."
    },
    {
        id: 58,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "Box breathing involves which pattern?",
        choices: ["Inhale, exhale, repeat", "Inhale, hold, exhale, hold", "Just holding breath", "Random breathing"],
        correct: 1,
        explanation: "Box breathing follows a pattern of inhale, hold, exhale, hold - each for equal counts, forming a 'box' pattern."
    },
    {
        id: 59,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is the primary muscle of breathing?",
        choices: ["Heart", "Diaphragm", "Stomach", "Lungs"],
        correct: 1,
        explanation: "The diaphragm is the primary muscle responsible for breathing, contracting to draw air into the lungs."
    },
    {
        id: 60,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "Breathing through which part of the body filters and warms air?",
        choices: ["Mouth", "Nose", "Ears", "Eyes"],
        correct: 1,
        explanation: "Breathing through the nose filters, warms, and humidifies the air before it reaches the lungs."
    },
    {
        id: 61,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is the benefit of conscious breathing?",
        choices: ["Stress reduction", "Improved focus", "Better oxygen delivery", "All of the above"],
        correct: 3,
        explanation: "Conscious breathing provides multiple benefits including stress reduction, improved focus, and better oxygen delivery."
    },
    {
        id: 62,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "When should you practice breathwork?",
        choices: ["Only when sick", "During stress", "As a daily practice", "Never"],
        correct: 2,
        explanation: "Breathwork is most beneficial when practiced regularly as a daily practice for optimal health and well-being."
    },
    {
        id: 63,
        category: "breath",
        difficulty: "easy",
        type: "mcq",
        question: "What is alternate nostril breathing called in yoga?",
        choices: ["Kapalabhati", "Nadi Shodhana", "Bhastrika", "Ujjayi"],
        correct: 1,
        explanation: "Nadi Shodhana is the Sanskrit name for alternate nostril breathing, which balances the nervous system."
    },
    {
        id: 64,
        category: "breath",
        difficulty: "medium",
        type: "numeric",
        question: "How many times does the average person breathe per day?",
        correct: 20000,
        explanation: "The average person takes approximately 20,000 breaths per day (about 14 breaths per minute)."
    },
    {
        id: 65,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "What is the Wim Hof breathing method primarily known for?",
        choices: ["Relaxation only", "Increasing oxygen and controlling immune response", "Singing better", "Sleeping better"],
        correct: 1,
        explanation: "The Wim Hof method combines specific breathing techniques to increase oxygen levels and potentially influence immune response."
    },
    {
        id: 66,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "What is holotropic breathwork?",
        choices: ["Normal breathing", "A therapeutic breathing technique for altered states", "Breathing underwater", "Medical breathing"],
        correct: 1,
        explanation: "Holotropic breathwork is a therapeutic practice using accelerated breathing to achieve altered states of consciousness."
    },
    {
        id: 67,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "Which part of the brain controls automatic breathing?",
        choices: ["Cerebellum", "Medulla oblongata", "Frontal lobe", "Hippocampus"],
        correct: 1,
        explanation: "The medulla oblongata in the brainstem controls automatic breathing functions."
    },
    {
        id: 68,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "What is the ideal ratio for stress-reducing breathing?",
        choices: ["1:1 (equal inhale:exhale)", "2:1 (longer exhale)", "1:2 (longer exhale)", "Random timing"],
        correct: 2,
        explanation: "A 1:2 ratio with longer exhales activates the parasympathetic nervous system more effectively for stress reduction."
    },
    {
        id: 69,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "What is coherent breathing?",
        choices: ["Breathing with others", "5 seconds in, 5 seconds out", "Loud breathing", "Breathing with music"],
        correct: 1,
        explanation: "Coherent breathing involves breathing at 5 seconds in and 5 seconds out, creating optimal heart rate variability."
    },
    {
        id: 70,
        category: "breath",
        difficulty: "medium",
        type: "mcq",
        question: "What does pranayama literally mean?",
        choices: ["Deep breathing", "Extension or control of life force", "Nose breathing", "Yoga breathing"],
        correct: 1,
        explanation: "Pranayama literally means 'extension or control of prana (life force)' in Sanskrit."
    },
    {
        id: 71,
        category: "breath",
        difficulty: "hard",
        type: "mcq",
        question: "What is the Bohr effect in relation to breathing?",
        choices: ["CO2 levels affect oxygen release from hemoglobin", "Oxygen is harmful", "Breathing stops", "Heart rate increases"],
        correct: 0,
        explanation: "The Bohr effect describes how CO2 levels affect oxygen release from hemoglobin, making proper breathing crucial for oxygen delivery."
    },
    {
        id: 72,
        category: "breath",
        difficulty: "hard",
        type: "numeric",
        question: "What percentage of oxygen in air do we typically utilize in each breath?",
        correct: 25,
        explanation: "We typically utilize only about 25% of the oxygen available in each breath, leaving room for improved breathing efficiency."
    },
    {
        id: 73,
        category: "breath",
        difficulty: "hard",
        type: "mcq",
        question: "What is the relationship between breath and vagal tone?",
        choices: ["No relationship", "Slow breathing increases vagal tone", "Fast breathing increases vagal tone", "Breathing has no effect"],
        correct: 1,
        explanation: "Slow, controlled breathing increases vagal tone, improving parasympathetic nervous system function and overall health."
    },
    {
        id: 74,
        category: "breath",
        difficulty: "hard",
        type: "mcq",
        question: "What is tummo breathing?",
        choices: ["A type of yoga", "Tibetan breathing technique for generating inner heat", "Japanese meditation", "Chinese martial arts"],
        correct: 1,
        explanation: "Tummo is a Tibetan Buddhist breathing and meditation practice designed to generate inner heat and spiritual awakening."
    },
    {
        id: 75,
        category: "breath",
        difficulty: "hard",
        type: "mcq",
        question: "How does breath retention (kumbhaka) affect the body?",
        choices: ["It's harmful", "Increases CO2 tolerance and enhances oxygen utilization", "Nothing happens", "Only affects the lungs"],
        correct: 1,
        explanation: "Breath retention increases CO2 tolerance, enhances oxygen utilization, and can trigger beneficial physiological adaptations."
    },

    // MEDITATION QUESTIONS (25 total: 13 easy, 7 medium, 5 hard)
    // ...existing code...
    {
        id: 76,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is the primary goal of meditation?",
        choices: ["To fall asleep", "To stop all thoughts", "To cultivate awareness and presence", "To solve problems"],
        correct: 2,
        explanation: "The primary goal of meditation is to cultivate awareness, presence, and a deeper understanding of the mind."
    },
    {
        id: 77,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "How long should a beginner meditate?",
        choices: ["2 hours minimum", "5-10 minutes", "30 minutes only", "It doesn't matter"],
        correct: 1,
        explanation: "Beginners should start with 5-10 minutes daily to build a sustainable practice before gradually increasing duration."
    },
    {
        id: 78,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is mindfulness meditation?",
        choices: ["Thinking about the future", "Paying attention to the present moment", "Analyzing thoughts", "Planning activities"],
        correct: 1,
        explanation: "Mindfulness meditation involves paying attention to the present moment with acceptance and non-judgment."
    },
    {
        id: 79,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "Which posture is best for meditation?",
        choices: ["Lying down only", "Any comfortable, alert posture", "Standing only", "Moving around"],
        correct: 1,
        explanation: "Any comfortable posture that keeps you alert and attentive is suitable for meditation, whether sitting, standing, or walking."
    },
    {
        id: 80,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What should you do when thoughts arise during meditation?",
        choices: ["Stop meditating", "Fight the thoughts", "Notice them and gently return to your focus", "Analyze them deeply"],
        correct: 2,
        explanation: "When thoughts arise, simply notice them without judgment and gently return attention to your meditation focus."
    },
    {
        id: 81,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is loving-kindness meditation?",
        choices: ["A type of yoga", "Cultivating compassion for self and others", "Romantic meditation", "Group meditation only"],
        correct: 1,
        explanation: "Loving-kindness meditation involves cultivating feelings of compassion and goodwill toward yourself and others."
    },
    {
        id: 82,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "When is the best time to meditate?",
        choices: ["Only at night", "Only in the morning", "Whenever you can be consistent", "Only on weekends"],
        correct: 2,
        explanation: "The best time to meditate is whenever you can maintain consistency, though many prefer morning or evening."
    },
    {
        id: 83,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is a common focus point for beginners?",
        choices: ["Complex visualizations", "The breath", "Advanced mantras", "Difficult concepts"],
        correct: 1,
        explanation: "The breath is a common and effective focus point for beginning meditators as it's always available and natural."
    },
    {
        id: 84,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What does 'Om' or 'AUM' represent in meditation?",
        choices: ["A random sound", "The sound of the universe", "A person's name", "Nothing specific"],
        correct: 1,
        explanation: "Om or AUM is considered the primordial sound of the universe and is used as a sacred mantra in meditation."
    },
    {
        id: 85,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "Which of these is a benefit of regular meditation?",
        choices: ["Reduced stress", "Improved focus", "Better emotional regulation", "All of the above"],
        correct: 3,
        explanation: "Regular meditation provides numerous benefits including reduced stress, improved focus, and better emotional regulation."
    },
    {
        id: 86,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is walking meditation?",
        choices: ["Meditating while walking slowly and mindfully", "Running meditation", "Dancing meditation", "Hiking meditation"],
        correct: 0,
        explanation: "Walking meditation involves walking slowly and mindfully, paying attention to each step and the sensations of movement."
    },
    {
        id: 87,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "Do you need special equipment to meditate?",
        choices: ["Yes, expensive equipment", "Yes, special cushions", "No, just a quiet space", "Only special clothes"],
        correct: 2,
        explanation: "Meditation requires no special equipment - just a relatively quiet space and your attention."
    },
    {
        id: 88,
        category: "meditation",
        difficulty: "easy",
        type: "mcq",
        question: "What is the purpose of a meditation timer?",
        choices: ["To stress you out", "To help maintain practice duration", "To make noise", "To replace meditation"],
        correct: 1,
        explanation: "A meditation timer helps maintain consistent practice duration without worrying about checking the clock."
    },
    {
        id: 89,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What is Vipassana meditation?",
        choices: ["Visualization meditation", "Insight meditation observing sensations", "Mantra meditation", "Movement meditation"],
        correct: 1,
        explanation: "Vipassana is insight meditation that involves observing bodily sensations and mental processes with clear awareness."
    },
    {
        id: 90,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What are the traditional meditation jhanas?",
        choices: ["Physical exercises", "Absorbed concentration states", "Breathing techniques", "Walking practices"],
        correct: 1,
        explanation: "Jhanas are progressive states of absorbed concentration in Buddhist meditation practice."
    },
    {
        id: 91,
        category: "meditation",
        difficulty: "medium",
        type: "numeric",
        question: "According to research, how many weeks of regular meditation show measurable brain changes?",
        correct: 8,
        explanation: "Research shows that 8 weeks of regular meditation practice can produce measurable changes in brain structure and function."
    },
    {
        id: 92,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What is Zen meditation primarily focused on?",
        choices: ["Emotional expression", "Just sitting (shikantaza) or breath counting", "Complex visualizations", "Physical movement"],
        correct: 1,
        explanation: "Zen meditation often focuses on 'just sitting' (shikantaza) or breath counting, emphasizing simplicity and direct experience."
    },
    {
        id: 93,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What is the difference between concentration and mindfulness meditation?",
        choices: ["No difference", "Concentration focuses on one object, mindfulness observes all experience", "They're opposite practices", "One is better than the other"],
        correct: 1,
        explanation: "Concentration meditation focuses intensely on one object, while mindfulness meditation observes all arising experiences with awareness."
    },
    {
        id: 94,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What is MBSR?",
        choices: ["A type of yoga", "Mindfulness-Based Stress Reduction", "A breathing technique", "A meditation app"],
        correct: 1,
        explanation: "MBSR (Mindfulness-Based Stress Reduction) is a secular program developed by Jon Kabat-Zinn for medical and therapeutic applications."
    },
    {
        id: 95,
        category: "meditation",
        difficulty: "medium",
        type: "mcq",
        question: "What happens to brain waves during deep meditation?",
        choices: ["They become chaotic", "They slow down to alpha and theta states", "They speed up dramatically", "They stop completely"],
        correct: 1,
        explanation: "During deep meditation, brain waves typically slow down to alpha (8-12 Hz) and theta (4-8 Hz) states associated with relaxation and insight."
    },
    {
        id: 96,
        category: "meditation",
        difficulty: "hard",
        type: "mcq",
        question: "What is the concept of 'beginner's mind' in meditation?",
        choices: ["Being inexperienced", "Approaching practice with fresh, open awareness", "Making mistakes", "Learning basic techniques"],
        correct: 1,
        explanation: "Beginner's mind (Shoshin) means approaching meditation with openness, eagerness, and freedom from preconceptions."
    },
    {
        id: 97,
        category: "meditation",
        difficulty: "hard",
        type: "numeric",
        question: "In traditional Buddhist texts, how many types of meditation are there?",
        correct: 40,
        explanation: "Traditional Buddhist meditation texts describe 40 different meditation subjects or objects of concentration."
    },
    {
        id: 98,
        category: "meditation",
        difficulty: "hard",
        type: "mcq",
        question: "What is the 'witness consciousness' in meditation?",
        choices: ["Watching others meditate", "The observing awareness that notices thoughts and sensations", "Remembering experiences", "Legal testimony"],
        correct: 1,
        explanation: "Witness consciousness refers to the pure observing awareness that notices thoughts, emotions, and sensations without identifying with them."
    },
    {
        id: 99,
        category: "meditation",
        difficulty: "hard",
        type: "mcq",
        question: "What is samatha meditation?",
        choices: ["Movement meditation", "Calm-abiding or concentration meditation", "Emotional meditation", "Group meditation"],
        correct: 1,
        explanation: "Samatha is calm-abiding meditation that develops concentration and mental stability as a foundation for insight."
    },
    {
        id: 100,
        category: "meditation",
        difficulty: "hard",
        type: "mcq",
        question: "In advanced meditation, what is the 'dissolution of subject-object duality'?",
        choices: ["Falling asleep", "The experience where the meditator and meditation object merge", "Losing concentration", "Physical transformation"],
        correct: 1,
        explanation: "Advanced meditation can lead to experiences where the sense of a separate meditator observing an object dissolves into unified awareness."
    }
];