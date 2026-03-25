import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   DATA — 9 SUBJECTS, DEEPLY FLESHED OUT
   ═══════════════════════════════════════════════════════════════ */

const SUBJECTS = [
  {
    id: "diagnosis",
    emoji: "🧭",
    title: "Understanding the Diagnosis",
    stage: ["newly-diagnosed", "early-years"],
    why: "Before you can advocate for your child, you need to truly understand what the diagnosis means — and what it doesn't. A diagnosis is a tool: it unlocks services, helps you find community, and gives professionals a shared language. But it does not define your child's ceiling, their personality, or their worth.",
    deepDive: `Getting a diagnosis is often the most disorienting moment in a parent's life. You may feel relief ("finally, a name for what we've been seeing"), grief ("this isn't what I imagined"), or both simultaneously — and that's completely normal.

Here's what you need to understand early: the evaluation process varies enormously depending on where you live, your child's age, and the condition being assessed. In many countries, you'll encounter both medical diagnoses (from pediatricians, neuropsychologists, or developmental specialists) and educational classifications (from school districts). These are not the same thing, and they serve different purposes.

A medical diagnosis like "Autism Spectrum Disorder" or "ADHD" follows criteria from the DSM-5 or ICD-11. An educational classification like "Other Health Impaired" or "Specific Learning Disability" follows your country's education law. Your child might qualify for one and not the other — or get different labels from each system. This is confusing but important to understand, because services flow from classifications.

Common conditions you'll encounter include Autism Spectrum Disorder (ASD), Attention Deficit Hyperactivity Disorder (ADHD), Down syndrome, cerebral palsy, intellectual disabilities, specific learning disabilities (dyslexia, dyscalculia, dysgraphia), speech and language disorders, sensory processing differences, epilepsy, and genetic conditions like Fragile X or Williams syndrome. Many children have co-occurring conditions — ADHD and autism together is extremely common, for example.

Don't be afraid to seek a second opinion. Diagnoses can be wrong, incomplete, or outdated. If something doesn't feel right, trust your instincts. You know your child better than any clinician who spent 90 minutes with them.

One more thing: be very cautious about Dr. Google in the early days. The internet is full of outdated information, fear-mongering, and outright misinformation about developmental conditions. Stick to the resources below and talk to other parents who've walked this road.`,
    quickTip: "A diagnosis is a map, not a destiny. It opens doors to services, therapies, and community — it doesn't define your child's ceiling.",
    books: [
      { title: "The Whole-Brain Child", author: "Daniel J. Siegel & Tina Payne Bryson", note: "The best starting point for understanding how your child's brain develops and how to work with it, not against it. Accessible neuroscience for parents." },
      { title: "Uniquely Human", author: "Barry Prizant", note: "A paradigm shift in understanding autism — reframes 'behaviors' as communication and coping strategies. Essential even if your child isn't autistic." },
      { title: "Far From the Tree", author: "Andrew Solomon", note: "A sweeping, deeply researched exploration of how families adapt when children are fundamentally different from their parents. Profoundly comforting." },
      { title: "Neurotribes", author: "Steve Silberman", note: "The history of autism and neurodiversity. Gives you crucial context for why the systems you're navigating exist — and why they're often broken." },
    ],
    videos: [
      { title: "Understanding Your Child's Diagnosis", source: "Child Mind Institute", url: "https://www.youtube.com/results?search_query=child+mind+institute+understanding+diagnosis" },
      { title: "What Is Neurodiversity?", source: "Harvard Health", url: "https://www.youtube.com/results?search_query=harvard+health+neurodiversity+explained" },
      { title: "The Diagnostic Process Explained", source: "Kennedy Krieger Institute", url: "https://www.youtube.com/results?search_query=kennedy+krieger+diagnostic+evaluation+child" },
    ],
    websites: [
      { title: "Child Mind Institute", url: "https://childmind.org", note: "Gold-standard, evidence-based information on virtually every childhood condition." },
      { title: "Understood.org", url: "https://understood.org", note: "Practical, parent-friendly guides for learning and attention issues." },
      { title: "CDC Developmental Milestones", url: "https://www.cdc.gov/ncbddd/actearly/milestones/", note: "The baseline reference for tracking development." },
    ],
    topics: [
      "What the evaluation process looks like (medical vs. educational)",
      "DSM-5 and ICD-11 diagnostic criteria — what they mean in practice",
      "Common conditions: ASD, ADHD, Down syndrome, cerebral palsy, learning disabilities",
      "Co-occurring conditions and why they matter",
      "Genetic vs. environmental factors — what the science actually says",
      "When and how to seek a second opinion",
      "Navigating waitlists and getting evaluated faster",
      "Explaining the diagnosis to family, friends, and your child",
    ],
  },
  {
    id: "rights",
    emoji: "⚖️",
    title: "Your Legal Rights & Advocacy",
    stage: ["newly-diagnosed", "school-age", "transition"],
    why: "The system is complex and often adversarial. Schools have budgets, districts have policies, and bureaucracies have inertia. Knowing your rights transforms you from a passive recipient of whatever the school offers into a powerful advocate who can demand what your child is legally entitled to.",
    deepDive: `Here's the uncomfortable truth: the systems designed to help your child — schools, government agencies, insurance companies — are also designed to manage costs. This doesn't make the people in them evil. Most teachers and administrators genuinely care. But the system has structural incentives to provide the minimum, and your job is to know what the maximum looks like.

In the United States, your primary legal framework is the Individuals with Disabilities Education Act (IDEA), which guarantees every child with a disability a "Free Appropriate Public Education" (FAPE) in the "Least Restrictive Environment" (LRE). These are not suggestions — they are federal law. Under IDEA, your child may be entitled to an Individualized Education Program (IEP), which is a legally binding document that spells out exactly what services the school must provide.

Section 504 of the Rehabilitation Act provides a broader, less intensive set of accommodations for children who have disabilities but may not qualify for an IEP. A 504 Plan might include things like extra time on tests, preferential seating, or modified homework. It's less protective than an IEP but still enforceable.

In the European Union, disability rights are governed by the UN Convention on the Rights of Persons with Disabilities (UNCRPD) and country-specific legislation. In Sweden, the Education Act (Skollagen) and the Discrimination Act (Diskrimineringslagen) provide frameworks for inclusive education and reasonable accommodations. In New Zealand, the Education and Training Act 2020 and the NZ Disability Strategy govern rights.

Regardless of where you live, there are universal principles: your child has a right to education, you have a right to participate in decisions about that education, and the burden of proof for denying services should never fall on you.

The single most important skill you will develop is documentation. Every conversation should be followed up with an email summarizing what was discussed. Every request should be in writing. Every meeting should have notes. If it's not written down, it didn't happen.

When disputes arise — and they will — most countries have escalating resolution processes: informal meetings, mediation, formal complaints, due process hearings, and ultimately litigation. You don't need to start with a lawyer, but you should know when to get one.`,
    quickTip: "Document everything. Every email, every meeting, every phone call. Paper trails win IEP disputes. Send a follow-up email after every verbal conversation: 'Per our discussion today...'",
    books: [
      { title: "Wrightslaw: From Emotions to Advocacy", author: "Peter Wright & Pamela Wright", note: "THE bible for special education advocacy in the US. Clear, practical, and empowering. Start here." },
      { title: "Wrightslaw: Special Education Law", author: "Peter Wright & Pamela Wright", note: "The companion legal reference. Dense but invaluable when you need to cite specific statutes." },
      { title: "The Complete IEP Guide", author: "Lawrence Siegel", note: "Step-by-step guide to the IEP process. Excellent for parents who want to understand every stage." },
      { title: "Better IEPs", author: "Barbara Bateman & Cynthia Herr", note: "How to write IEP goals that are actually measurable and enforceable — not vague wishful thinking." },
    ],
    videos: [
      { title: "Your Rights Under IDEA", source: "Wrightslaw", url: "https://www.youtube.com/results?search_query=wrightslaw+IDEA+parent+rights" },
      { title: "IEP Meeting Preparation", source: "Understood.org", url: "https://www.youtube.com/results?search_query=understood+IEP+meeting+preparation+parents" },
      { title: "504 Plans vs IEPs Explained", source: "Understood.org", url: "https://www.youtube.com/results?search_query=504+plan+vs+IEP+explained" },
    ],
    websites: [
      { title: "Wrightslaw.com", url: "https://wrightslaw.com", note: "The definitive US resource for special education law and advocacy." },
      { title: "Center for Parent Information & Resources", url: "https://www.parentcenterhub.org", note: "Federally funded resource connecting parents to their state's Parent Training and Information Center." },
      { title: "Council of Parent Attorneys and Advocates", url: "https://www.copaa.org", note: "When you need to find a special education attorney." },
    ],
    topics: [
      "IDEA, FAPE, and LRE — the legal foundations (US)",
      "IEP vs. 504 Plans — when each applies and what they cover",
      "How to request an evaluation (and what to do when the school says no)",
      "Your rights at IEP meetings — prior written notice, consent, and participation",
      "Independent Educational Evaluations (IEEs) — your right to a second opinion",
      "Dispute resolution: mediation, state complaints, due process",
      "Country-specific frameworks: Sweden (Skollagen), EU (UNCRPD), NZ, UK (EHCP)",
      "When to hire an advocate vs. an attorney",
      "The art of the follow-up email — documenting verbal agreements",
    ],
  },
  {
    id: "therapies",
    emoji: "🧩",
    title: "Therapies & Interventions",
    stage: ["newly-diagnosed", "early-years", "school-age"],
    why: "The therapy landscape is overwhelming — and full of snake oil. Well-meaning parents spend tens of thousands on interventions with zero evidence base, while proven therapies go underutilized. Learning to evaluate evidence will save you money, time, and heartache.",
    deepDive: `Within weeks of a diagnosis, you'll be bombarded with therapy recommendations. Some will come from professionals, some from other parents, and some from targeted ads that somehow found you at 2 AM. Your job is to become a critical consumer.

The gold standard for evaluating any intervention is: does peer-reviewed research support it? This doesn't mean a testimonial on a website. It means controlled studies published in reputable journals. The best resource for evaluating autism interventions specifically is the National Standards Project by the National Autism Center, which rates interventions as Established, Emerging, or Unestablished.

Applied Behavior Analysis (ABA) is the most widely researched and most controversial therapy for autism. Modern ABA — sometimes called "naturalistic" or "play-based" ABA — looks nothing like the rigid, repetitive drills of the 1960s. Good ABA follows the child's motivation, builds skills in natural settings, and respects the child's autonomy. Bad ABA is still out there: look for providers who listen to autistic self-advocates, who never use punishment or food deprivation, and who focus on building skills rather than extinguishing "behaviors."

Speech-Language Therapy addresses not just articulation but pragmatic language (social communication), receptive language (understanding), and augmentative/alternative communication (AAC). If your child is minimally speaking, AAC — whether through a device, an app, or sign language — is not "giving up on speech." Research consistently shows that AAC supports, rather than hinders, spoken language development.

Occupational Therapy (OT) helps with fine motor skills, sensory processing, self-care tasks, and regulation. A good OT can be transformative for a child who struggles with handwriting, gets overwhelmed by sensory input, or can't tolerate certain textures of food or clothing.

Physical Therapy (PT) addresses gross motor development, balance, coordination, and mobility. Essential for children with cerebral palsy, Down syndrome, or other conditions affecting physical development.

Red flags that a therapy is pseudoscience: it claims to "cure" a developmental condition, it requires expensive proprietary equipment or supplements, it's only available from one specific provider or organization, the evidence consists primarily of parent testimonials, or the practitioner gets defensive when you ask about research.

Some therapies in the "promising but more research needed" category include: Social Thinking curriculum, DIR/Floortime, music therapy, animal-assisted therapy, and mindfulness-based interventions. These may be worth trying, but go in with realistic expectations.`,
    quickTip: "If someone promises a 'cure,' run. If they show you data, invite questions, and adapt their approach to your child, stay.",
    books: [
      { title: "An Early Start for Your Child with Autism", author: "Sally J. Rogers, Geraldine Dawson & Laurie A. Vismara", note: "The book behind the Early Start Denver Model (ESDM). Evidence-based, parent-friendly, and applicable even if you're not in a formal ESDM program." },
      { title: "More Than Words", author: "Fern Sussman (Hanen Centre)", note: "The best parent guide for supporting language development in young children. Used by speech therapists worldwide." },
      { title: "Raising a Sensory Smart Child", author: "Lindsey Biel & Nancy Peske", note: "Comprehensive, practical guide to sensory processing differences. Indispensable for the parent whose child covers their ears, won't eat certain foods, or melts down in crowded places." },
      { title: "The Out-of-Sync Child", author: "Carol Kranowitz", note: "Another excellent sensory processing resource, especially good at explaining what's happening neurologically." },
      { title: "Thinking in Pictures", author: "Temple Grandin", note: "First-person account from one of the most famous autistic adults. Invaluable for understanding how your child might experience the world." },
    ],
    videos: [
      { title: "Evidence-Based Therapies for Autism", source: "Autism Science Foundation", url: "https://www.youtube.com/results?search_query=autism+science+foundation+evidence+based+therapy" },
      { title: "What Is ABA Therapy?", source: "Child Mind Institute", url: "https://www.youtube.com/results?search_query=child+mind+institute+ABA+therapy+explained" },
      { title: "Introduction to AAC", source: "AssistiveWare", url: "https://www.youtube.com/results?search_query=assistiveware+AAC+introduction" },
      { title: "Sensory Processing Explained", source: "STAR Institute", url: "https://www.youtube.com/results?search_query=STAR+institute+sensory+processing+explained" },
    ],
    websites: [
      { title: "National Autism Center — National Standards Project", url: "https://www.nationalautismcenter.org", note: "The most rigorous rating system for autism interventions." },
      { title: "ASHA (American Speech-Language-Hearing Association)", url: "https://www.asha.org", note: "Evidence maps and resources for speech/language therapy." },
      { title: "AssistiveWare", url: "https://www.assistiveware.com", note: "Leaders in AAC technology with excellent free educational resources." },
      { title: "The Hanen Centre", url: "https://www.hanen.org", note: "Research-backed parent programs for language development." },
    ],
    topics: [
      "Applied Behavior Analysis (ABA) — modern approaches, controversies, and how to evaluate a provider",
      "Speech-Language Therapy — articulation, pragmatic language, receptive language",
      "Augmentative and Alternative Communication (AAC) — devices, apps, and why it's not giving up",
      "Occupational Therapy — fine motor, sensory integration, self-care skills",
      "Physical Therapy — gross motor, mobility, adaptive equipment",
      "Social skills groups and social thinking curricula",
      "The Early Start Denver Model and other early interventions",
      "How to read a research paper (the 5-minute version for exhausted parents)",
      "Red flags: identifying pseudoscience and predatory providers",
      "Insurance coverage and fighting denials for therapy services",
    ],
  },
  {
    id: "education",
    emoji: "🏫",
    title: "Navigating the School System",
    stage: ["school-age", "transition"],
    why: "School will be the single largest institution in your child's life for 13+ years. It will shape their self-image, their social skills, and their academic trajectory. Understanding how schools work — their incentives, their limitations, and their obligations — gives you extraordinary leverage.",
    deepDive: `The first and most important thing to understand about schools is that they are institutions with budgets. Every service your child receives costs money, and someone is tracking that cost. This doesn't mean schools are the enemy — most educators genuinely care about your child. But the system has structural pressure to provide the minimum, and you need to know what the maximum looks like.

The inclusion debate is one of the most emotionally charged in special education. "Full inclusion" means your child is in general education classrooms for all or most of the day, with supports brought to them. "Self-contained" means a separate classroom with specialized instruction. Most families end up somewhere in between. There is no universally right answer — it depends on your child's needs, the school's capacity, and the specific teachers involved.

Here's a framework that experienced parents use: inclusion is ideal for social modeling, peer interaction, and access to grade-level curriculum. Self-contained settings are ideal when your child needs intensive, individualized instruction that can't be delivered in a general education classroom. The LRE (Least Restrictive Environment) requirement means schools should start with inclusion and only move to more restrictive settings when they can demonstrate that inclusion, even with supports, isn't working.

Writing good IEP goals is an art form. A goal like "Johnny will improve his reading" is useless — it's not measurable, not time-bound, and not specific. A good goal looks like: "By [date], Johnny will read grade-level passages at 80 words per minute with 95% accuracy, as measured by curriculum-based measurement probes administered biweekly." The difference matters because vague goals let schools claim progress without evidence.

Behavior Intervention Plans (BIPs) are critical for children who exhibit challenging behavior at school. A good BIP is based on a Functional Behavior Assessment (FBA) that identifies WHY the behavior is happening — not just what the behavior looks like. Behavior is communication. If your child is throwing chairs, it's not because they're "bad" — it's because something in the environment is overwhelming, or they lack the skills to communicate what they need.

Transition planning legally begins at age 14–16 (depending on jurisdiction) but should start informally much earlier. This covers the shift from school to adult life: employment, post-secondary education, independent living, and community participation. Many parents are shocked to discover how much support evaporates when their child ages out of the school system.`,
    quickTip: "You are an equal member of the IEP team. Bring your own data, your own goals, and don't sign anything same-day if you're unsure. 'I need time to review this' is always an acceptable response.",
    books: [
      { title: "The Complete IEP Guide", author: "Lawrence Siegel", note: "Step-by-step walkthrough of the IEP process with templates and checklists." },
      { title: "Better IEPs", author: "Barbara Bateman & Cynthia Herr", note: "How to write goals that are actually measurable and hold schools accountable." },
      { title: "The Behavior Code", author: "Jessica Minahan & Nancy Rappaport", note: "How to understand the function behind challenging behaviors and work with schools on effective plans." },
      { title: "Inclusion in Action", author: "Nicole Eredics", note: "Practical strategies for making inclusion work — aimed at both parents and educators." },
    ],
    videos: [
      { title: "IEP Meeting Tips for Parents", source: "Understood.org", url: "https://www.youtube.com/results?search_query=understood+IEP+meeting+tips+parents" },
      { title: "How to Write Measurable IEP Goals", source: "SpecialEdResource", url: "https://www.youtube.com/results?search_query=writing+measurable+IEP+goals" },
      { title: "Functional Behavior Assessment Explained", source: "PBIS Rewards", url: "https://www.youtube.com/results?search_query=functional+behavior+assessment+explained+parents" },
    ],
    websites: [
      { title: "Understood.org — IEP Guide", url: "https://www.understood.org/articles/en/what-is-an-iep", note: "Plain-language guide to every aspect of the IEP process." },
      { title: "National Center on Intensive Intervention", url: "https://intensiveintervention.org", note: "Evidence-based tools and strategies for students who need intensive support." },
      { title: "PBIS.org", url: "https://www.pbis.org", note: "Positive Behavioral Interventions and Supports — the framework your school should be using." },
    ],
    topics: [
      "Inclusion vs. self-contained classrooms — making the right choice for your child",
      "Writing SMART IEP goals that are measurable and enforceable",
      "Functional Behavior Assessments and Behavior Intervention Plans",
      "Related services: speech, OT, PT, counseling, transportation",
      "Assistive technology in schools — who pays and how to get it",
      "Transition planning: from school to adult life (starts at 14-16)",
      "Extended School Year (ESY) services — when summer regression is a concern",
      "When to request an Independent Educational Evaluation (IEE)",
      "Dealing with bullying and social exclusion",
      "Working with paraprofessionals and aides effectively",
    ],
  },
  {
    id: "emotional",
    emoji: "💛",
    title: "Your Mental Health & Resilience",
    stage: ["newly-diagnosed", "early-years", "school-age", "transition"],
    why: "Caregiver burnout isn't a character flaw — it's a predictable consequence of sustained stress without adequate support. Research shows that parents of children with disabilities experience stress levels comparable to combat veterans. Taking care of yourself is not selfish; it's structural.",
    deepDive: `Nobody prepares you for the grief. Not the grief of losing your child — your child is right here — but the grief of losing the future you imagined. The soccer games, the easy playdates, the milestones you assumed would come naturally. This is called "ambiguous grief" or "chronic sorrow," and it's one of the most under-discussed aspects of special needs parenting.

Here's what experienced parents want you to know: grief and joy coexist. You can cry in the parking lot after a brutal IEP meeting and then laugh at dinner when your kid does something hilarious. You can mourn the child you expected while fiercely loving the child you have. These feelings don't cancel each other out.

The research on caregiver stress is sobering. Parents of children with autism show cortisol patterns similar to soldiers in combat. Mothers of children with disabilities have higher rates of depression, anxiety, and autoimmune conditions. The divorce rate in special needs families is debated but the relationship stress is not — it's real and significant.

Your relationship with your partner (if you have one) will be tested. You will disagree about therapies, about how much to push versus accept, about how to handle behaviors, and about how to divide the staggering workload. These disagreements are normal. What's not sustainable is avoiding them. Find a couples therapist who understands disability — this is one of the best investments you can make.

Siblings need attention too. Research on siblings of children with disabilities shows a complicated picture: many develop extraordinary empathy and resilience, but they also experience "courtesy stigma," parentification (being asked to take on caretaking roles too young), and a sense that their own needs come second. Talk to your other children openly and honestly. Let them feel what they feel without guilt.

Respite care is not a luxury — it's a necessity. Whether it's a trained respite provider, a trusted family member, or a specialized program, you need regular breaks. Many families feel guilty about this. Don't. You cannot sustain this marathon without rest, and your child needs you functional for the long haul.

Find your people. One friend who truly understands — who you can text at midnight when the school sends another impossible email — is worth more than all the awareness campaigns in the world.`,
    quickTip: "Grief and joy can coexist. Feeling sad about what you expected doesn't mean you love your child any less. Both feelings are valid, and pretending one doesn't exist makes the other impossible.",
    books: [
      { title: "Raising a Rare Girl", author: "Heather Lanier", note: "Beautiful, honest memoir about raising a child with a rare genetic condition. Will make you feel profoundly less alone." },
      { title: "The Explosive Child", author: "Ross W. Greene", note: "Not specifically about parental mental health, but the Collaborative & Proactive Solutions model it teaches will reduce your stress enormously because it actually works." },
      { title: "Daring Greatly", author: "Brené Brown", note: "Not disability-specific, but the framework on vulnerability and shame is directly applicable to the isolation many special needs parents feel." },
      { title: "What I Wish I'd Known", author: "Gary Chapman & Jolene Philo", note: "Written specifically for parents of special needs children. Covers the emotional journey with practical wisdom." },
    ],
    videos: [
      { title: "Caregiver Burnout: Warning Signs", source: "Child Mind Institute", url: "https://www.youtube.com/results?search_query=caregiver+burnout+special+needs+parents" },
      { title: "The Honest Reality of Special Needs Parenting", source: "TEDx Talks", url: "https://www.youtube.com/results?search_query=tedx+special+needs+parenting+honest" },
      { title: "Sibling Support", source: "Sibling Support Project", url: "https://www.youtube.com/results?search_query=sibling+support+project+disability" },
    ],
    websites: [
      { title: "The Sibling Support Project", url: "https://siblingsupport.org", note: "Founded by Don Meyer, the leading resource for siblings of people with disabilities." },
      { title: "ARCH National Respite Network", url: "https://archrespite.org", note: "Find respite care providers near you." },
      { title: "Psychology Today — Therapist Finder", url: "https://www.psychologytoday.com/us/therapists", note: "Filter by specialty including 'caregiver stress' and 'disability.'" },
    ],
    topics: [
      "Ambiguous grief and chronic sorrow — naming what you're feeling",
      "Caregiver burnout: recognizing the signs before you crash",
      "Couples and co-parenting under extraordinary stress",
      "Finding a therapist who understands disability families",
      "Respite care — types, funding, and why it's not selfish",
      "Sibling needs: empathy, resentment, and the complicated middle",
      "Building your support network (online and offline)",
      "Managing relationships with extended family who don't understand",
      "The comparison trap — why social media makes everything harder",
      "Finding joy: not despite the disability, but within your actual life",
    ],
  },
  {
    id: "daily",
    emoji: "🏠",
    title: "Daily Life & Practical Strategies",
    stage: ["early-years", "school-age"],
    why: "The big picture matters, but so does getting through Tuesday. Sleep deprivation, mealtime battles, meltdowns in the grocery store, and the relentless demands of daily routines — this is where the theory meets reality.",
    deepDive: `The most transformative insight in special needs parenting comes from Ross Greene: "Kids do well if they can." Not "kids do well if they want to." If your child is melting down, they're not being manipulative — they're overwhelmed. If they're refusing food, they're not being picky — they may have genuine sensory aversions. If they can't sleep, it's often neurological, not behavioral.

This mindset shift changes everything. Instead of asking "how do I make my child behave?", you start asking "what's getting in the way of my child succeeding?"

Sleep is often the first crisis. Many children with developmental conditions have disrupted sleep architecture — they produce less melatonin, have trouble with sleep onset, or wake frequently. Evidence-based sleep strategies include: consistent bedtime routines (same sequence, same time, every night), reducing screen light 2 hours before bed, melatonin supplementation (consult your pediatrician for dosing), weighted blankets (evidence is mixed but many families report benefit), and environmental modifications (blackout curtains, white noise, cool temperature).

Mealtime is another battlefield. Feeding challenges are extremely common in children with autism, sensory processing differences, and oral-motor difficulties. The SOS Approach to Feeding (Sequential Oral Sensory) is one of the best evidence-based frameworks — it works through systematic desensitization, moving from tolerating a food's presence to touching, smelling, tasting, and eventually eating it. The process takes months, not days.

Meltdowns vs. tantrums: they look similar but are fundamentally different. A tantrum is goal-directed — the child wants something and escalates to get it. A meltdown is a neurological overload — the child has exceeded their capacity to process sensory, emotional, or cognitive input. You manage tantrums by not reinforcing the behavior. You manage meltdowns by reducing demands, creating a safe space, and waiting for the storm to pass. Trying to reason with a child in meltdown is like trying to have a conversation with someone drowning.

Visual supports are not just for children with autism — they help every child with executive function challenges. Visual schedules (first-then boards, daily planners), social stories (scripted narratives about upcoming events), and visual timers (showing the passage of time concretely) reduce anxiety, improve compliance, and build independence.

Toilet training deserves its own book (and there are several good ones). For children with developmental delays, readiness signals may appear much later than typical. Average age for toilet training completion in children with autism is 3.3 to 5+ years. This is within normal range for your child — don't let anyone make you feel otherwise.`,
    quickTip: "Kids do well if they can. If they can't, something is getting in the way. Your job is to be a detective, not a drill sergeant.",
    books: [
      { title: "The Explosive Child", author: "Ross W. Greene", note: "The foundational text for Collaborative & Proactive Solutions (CPS). Will change how you think about 'behavior problems' forever." },
      { title: "Visual Supports for People with Autism", author: "Marlene Cohen & Donna Sloan", note: "Practical guide to creating and using visual supports that actually work." },
      { title: "Solving Sleep Problems in Children with Autism", author: "Terry Katz & Beth Malow", note: "Evidence-based, practical sleep strategies from the Vanderbilt Kennedy Center." },
      { title: "Food Chaining", author: "Cheri Fraker et al.", note: "Systematic approach to expanding your child's diet by building on foods they already accept." },
      { title: "No More Meltdowns", author: "Jed Baker", note: "Practical prevention strategies for meltdowns — identifies triggers and teaches proactive alternatives." },
    ],
    videos: [
      { title: "Collaborative Problem Solving", source: "Lives in the Balance (Ross Greene)", url: "https://www.youtube.com/results?search_query=ross+greene+collaborative+proactive+solutions" },
      { title: "Visual Schedules Tutorial", source: "Autism Little Learners", url: "https://www.youtube.com/results?search_query=visual+schedule+autism+how+to+create" },
      { title: "Sensory-Friendly Home Setup", source: "Harkla", url: "https://www.youtube.com/results?search_query=sensory+friendly+home+setup+autism" },
    ],
    websites: [
      { title: "Lives in the Balance", url: "https://livesinthebalance.org", note: "Ross Greene's organization — free resources, training, and the CPS model explained." },
      { title: "Do2Learn", url: "https://do2learn.com", note: "Free printable visual supports, social skills materials, and behavior tools." },
      { title: "Autism Little Learners", url: "https://autismlittlelearners.com", note: "Practical visual supports and classroom tools." },
    ],
    topics: [
      "Meltdowns vs. tantrums — what's actually happening and what to do",
      "Visual schedules, social stories, and first-then boards",
      "Sleep strategies: melatonin, routines, environmental modifications",
      "Feeding challenges: SOS Approach, food chaining, when to see a feeding therapist",
      "Toilet training: readiness signs, timelines, and evidence-based methods",
      "Sensory-friendly home modifications",
      "Managing transitions and changes in routine",
      "Community outings: preparation, escape plans, and reducing meltdowns",
      "Technology as a tool: apps, timers, communication devices",
      "Self-care routines and building independence incrementally",
    ],
  },
  {
    id: "financial",
    emoji: "💰",
    title: "Financial Planning & Benefits",
    stage: ["newly-diagnosed", "school-age", "transition"],
    why: "Special needs parenting has real financial costs — therapy co-pays, specialized equipment, lost income from reduced work hours, and long-term planning for when you're no longer around. Knowing what's available and planning ahead reduces one of the biggest sources of chronic stress.",
    deepDive: `The financial reality of raising a child with a disability is staggering. Studies estimate that the lifetime cost of raising a child with autism is $1.4 to $2.4 million USD above the cost of raising a neurotypical child. For other conditions, the numbers vary but the financial pressure is universal.

The costs come from everywhere: therapy co-pays and deductibles, specialized equipment and assistive technology, home modifications, specialized childcare, transportation to appointments, reduced or lost parental income, and eventually, long-term supported living arrangements.

Start with what's available. In the United States, key benefit programs include: Supplemental Security Income (SSI) for children with disabilities, Medicaid (which in many states has waivers specifically for children with disabilities, often with different income thresholds than standard Medicaid), Children's Health Insurance Program (CHIP), state-level Developmental Disabilities (DD) waivers, and early intervention services (free through Part C of IDEA for ages 0-3).

ABLE Accounts (Achieving a Better Life Experience) are tax-advantaged savings accounts for people with disabilities. They function similarly to 529 education savings plans but can be used for a broader range of disability-related expenses. The critical advantage: ABLE accounts don't count against the $2,000 asset limit for SSI eligibility, up to $100,000.

Special Needs Trusts (SNTs) are the cornerstone of long-term financial planning. A properly structured SNT can hold unlimited assets for your child's benefit without affecting their eligibility for means-tested government benefits. There are two main types: first-party trusts (funded with the disabled person's own money) and third-party trusts (funded by family). You need an attorney who specializes in this area — it's not something to DIY.

Insurance battles are a reality. Many families spend hours on the phone fighting denied claims for therapy services. Key strategies: always get prior authorization in writing, appeal every denial (most first-line denials are overturned on appeal), request peer-to-peer review (where your child's doctor speaks directly with the insurance company's reviewing physician), and know your state's insurance mandate laws — many states require coverage of ABA therapy for autism.

For families outside the US: research your country's disability benefit system thoroughly. Sweden's Försäkringskassan provides vårdbidrag (care allowance) for parents of children with disabilities. New Zealand's Ministry of Health provides Disability Support Services. The UK has Disability Living Allowance (DLA) for children. These systems are complex but the benefits are substantial.`,
    quickTip: "Look into ABLE accounts (US) or equivalent disability savings programs in your country immediately. Also, never accept an insurance denial without appealing — the majority are overturned.",
    books: [
      { title: "The Special Needs Planning Guide", author: "John Nadworny & Cynthia Haddad", note: "Comprehensive financial planning for disability families. Covers trusts, benefits, insurance, and long-term planning." },
      { title: "Bloom: A Parent's Guide to Government Benefits", author: "Julie Fry & Annette Hines", note: "Practical guide to navigating the benefits maze in the US." },
      { title: "Planning for the Future", author: "L. Mark Russell & Arnold Grant", note: "Estate planning and financial strategies specifically for families of people with disabilities." },
    ],
    videos: [
      { title: "ABLE Accounts Explained", source: "ABLE National Resource Center", url: "https://www.youtube.com/results?search_query=ABLE+account+explained+disability" },
      { title: "Special Needs Trusts 101", source: "Special Needs Alliance", url: "https://www.youtube.com/results?search_query=special+needs+trust+explained+parents" },
      { title: "SSI for Children with Disabilities", source: "Social Security Administration", url: "https://www.youtube.com/results?search_query=SSI+children+disability+application" },
    ],
    websites: [
      { title: "ABLE National Resource Center", url: "https://www.ablenrc.org", note: "Everything you need to know about ABLE accounts." },
      { title: "Special Needs Alliance", url: "https://www.specialneedsalliance.org", note: "Find attorneys specializing in special needs trusts and estate planning." },
      { title: "Benefits.gov", url: "https://www.benefits.gov", note: "Screen for all federal and state benefits your family may qualify for." },
    ],
    topics: [
      "Government benefits: SSI, Medicaid waivers, SSDI (US-focused)",
      "ABLE accounts — tax-advantaged savings that don't affect benefit eligibility",
      "Special Needs Trusts — first-party vs. third-party, and why you need an attorney",
      "Insurance navigation: prior auth, appeals, peer-to-peer review, state mandates",
      "Budgeting for therapy: co-pays, out-of-pocket maximums, and sliding scale options",
      "Tax benefits: medical expense deductions, dependent care credits",
      "Long-term financial projections and retirement planning",
      "International benefits: Sweden (vårdbidrag), NZ (Disability Support), UK (DLA)",
      "Letter of Intent — the non-legal document that's equally important",
      "Finding pro bono or reduced-cost legal help for benefits applications",
    ],
  },
  {
    id: "community",
    emoji: "🤝",
    title: "Building Your Village",
    stage: ["newly-diagnosed", "early-years", "school-age", "transition"],
    why: "Isolation is the silent killer of special needs parenting. When your child's needs don't fit the playdate mold, friendships fall away. When you can't explain what you're going through, you stop trying. Connection with other families who truly get it changes everything.",
    deepDive: `The loneliness hits in waves. First, when you realize your friends with typical kids simply can't understand what you're dealing with. They try — they say supportive things — but they don't know what it's like to spend three hours on hold with insurance, or to calculate how many meltdowns you can absorb before you need to leave the birthday party.

Second, when your social world shrinks. Activities your family used to enjoy become impossible. Restaurants, playgrounds, family gatherings — all of them carry the weight of potential disaster. You start declining invitations. Then you stop getting them.

Here's the antidote: find your people. And "your people" are other parents walking this same road.

Parent support groups come in many forms. Diagnosis-specific organizations (the Down Syndrome Association, the Autism Society, CHADD for ADHD families) often have local chapters with regular meetups. Hospital-based programs frequently offer parent groups facilitated by social workers. Online communities — Facebook groups, Reddit communities, Discord servers — provide 24/7 connection when you need it at 2 AM.

A word about online communities: they can be life-saving, but they can also be toxic. Some groups become echo chambers of rage, conspiracy thinking, or martyrdom. Look for groups with active moderation, a focus on practical problem-solving, and a culture that celebrates progress without shaming struggle.

The most powerful connection is one-to-one mentoring from a parent who's a few years ahead of you on the journey. Many organizations formalize this through "parent-to-parent" programs. These veteran parents can tell you which therapists are worth the wait, which schools are actually inclusive (not just on paper), and which battles are worth fighting.

Don't neglect inclusive recreation. Sensory-friendly movie screenings, adaptive sports leagues, disability-inclusive camps, and therapeutic horseback riding programs exist in more places than you might think. These are places where your child can just be a kid, without the constant pressure to perform neurotypicality.

Finally, consider the neurodiversity and disability rights communities. As your child grows, connecting with autistic adults, disability advocates, and self-advocates will give you a perspective you can't get from any professional. These are the people who can tell you what your child's experience might feel like from the inside.`,
    quickTip: "Online communities are a great start, but one real-life friend who understands your world is worth a thousand forum posts. Seek out parent-to-parent mentoring programs in your area.",
    books: [
      { title: "Far From the Tree", author: "Andrew Solomon", note: "A masterwork about families of difference — spans deafness, dwarfism, Down syndrome, autism, and more. Will make you feel part of a vast, remarkable community." },
      { title: "NeuroTribes", author: "Steve Silberman", note: "Connects you to the broader neurodiversity movement and its history." },
      { title: "Disability Visibility", author: "Alice Wong (editor)", note: "First-person essays by disabled people. Crucial for understanding your child's future community." },
    ],
    videos: [
      { title: "The Power of Parent Networks", source: "Family Voices", url: "https://www.youtube.com/results?search_query=family+voices+parent+support+disability" },
      { title: "Neurodiversity: What Does It Mean?", source: "TEDx", url: "https://www.youtube.com/results?search_query=tedx+neurodiversity" },
      { title: "Adaptive Sports for All", source: "Special Olympics", url: "https://www.youtube.com/results?search_query=special+olympics+adaptive+sports+inclusion" },
    ],
    websites: [
      { title: "Parent to Parent USA", url: "https://www.p2pusa.org", note: "Matches experienced parents with newly diagnosed families for one-to-one support." },
      { title: "Family Voices", url: "https://familyvoices.org", note: "National network of family-led organizations providing support and advocacy." },
      { title: "The Arc", url: "https://thearc.org", note: "The largest national community-based organization for people with intellectual and developmental disabilities." },
      { title: "Special Olympics", url: "https://www.specialolympics.org", note: "Sports programs in 200+ countries for people with intellectual disabilities." },
    ],
    topics: [
      "Finding local parent support groups (diagnosis-specific and general)",
      "Navigating online communities — the good, the bad, and the toxic",
      "Parent-to-parent mentoring programs",
      "Inclusive recreation: adaptive sports, sensory-friendly events, inclusive camps",
      "Connecting with the disability rights and neurodiversity communities",
      "Supporting siblings through Sibshops and sibling groups",
      "Religious and faith-based disability support",
      "Culturally responsive support for diverse families",
      "Advocacy organizations and how to get involved",
      "Building an emergency support plan with your village",
    ],
  },
  {
    id: "future",
    emoji: "🚀",
    title: "Planning for the Future",
    stage: ["school-age", "transition"],
    why: "The hardest question every special needs parent faces: 'What happens when I'm gone?' This subject turns that existential fear into a concrete, actionable plan. Starting early transforms dread into preparation.",
    deepDive: `This is the subject parents avoid the longest and regret delaying the most. The transition from childhood to adulthood is a cliff — services that were guaranteed under IDEA disappear at 18 or 21, and the adult disability system is a patchwork of waitlists, underfunding, and bureaucratic mazes.

Transition planning legally begins at age 14–16 in most US states (check your state's requirement). It should be part of every IEP meeting from that point forward, covering four domains: post-secondary education, employment, independent living, and community participation.

Employment options exist on a spectrum: competitive integrated employment (a real job with real wages in the community), supported employment (a real job with job coaching), customized employment (a job created around the person's strengths), self-employment and microenterprises, day programs and sheltered workshops (increasingly criticized, but still common). The goal should always be the most integrated, competitive option your child can succeed in — with the right supports.

Housing is the great unsolved problem of disability services. Options include: living at home with supports, supported living (own apartment with staff who check in), group homes and residential programs, intentional communities (like L'Arche or Camphill), and various co-housing models. Waitlists for residential services are years to decades long in many states. Get on them early, even if you don't think you'll need them soon.

Guardianship is the legal mechanism for making decisions on behalf of an adult who lacks capacity. Full guardianship removes almost all of a person's legal rights — the right to vote, to marry, to make medical decisions. Many families are now choosing less restrictive alternatives: power of attorney, supported decision-making, limited guardianship (covering specific domains only), or representative payee status (for financial decisions). The trend is toward preserving as much autonomy as possible.

The Letter of Intent is not a legal document, but it may be the most important thing you ever write. It's a detailed description of your child's life — their preferences, routines, medical needs, relationships, fears, joys, and the things that only you know. It tells future caregivers how to care for your child the way you would. Update it annually.

The most critical financial planning tools for the future are covered in the Financial Planning subject — Special Needs Trusts, ABLE accounts, and government benefit preservation. If you haven't addressed those yet, go there next.`,
    quickTip: "Get on waitlists for adult residential services NOW, even if your child is 10. Many states have 5-15 year waitlists. Future-you will thank present-you.",
    books: [
      { title: "A Good Life", author: "Al Etmanski", note: "The definitive guide to creating a full, meaningful life beyond institutional models. Inspiring and practical." },
      { title: "The Transition Companion", author: "Lisa Meeks & Elisa Bernick", note: "Step-by-step guide covering education, employment, and living for transition-age youth." },
      { title: "Supported Decision-Making (ABA Guide)", author: "American Bar Association", note: "Legal guide to alternatives to guardianship. Free online." },
    ],
    videos: [
      { title: "Transition Planning", source: "PACER Center", url: "https://www.youtube.com/results?search_query=PACER+center+transition+planning+disability" },
      { title: "Guardianship Alternatives", source: "NCD", url: "https://www.youtube.com/results?search_query=guardianship+alternatives+supported+decision+making" },
      { title: "Self-Determined Futures", source: "AUCD", url: "https://www.youtube.com/results?search_query=self+determination+disability+adults" },
    ],
    websites: [
      { title: "PACER Center — Transition", url: "https://www.pacer.org/transition/", note: "One of the best transition planning resources available." },
      { title: "Think College", url: "https://thinkcollege.net", note: "Database of post-secondary programs for students with intellectual disabilities." },
      { title: "APSE", url: "https://apse.org", note: "The leading organization promoting competitive employment for people with disabilities." },
    ],
    topics: [
      "Transition planning in the IEP: what it should include and when it starts",
      "Post-secondary options: college, vocational programs, Think College programs",
      "Employment: competitive, supported, customized, and self-employment",
      "Housing: supported living, group homes, intentional communities, co-housing",
      "Guardianship vs. supported decision-making vs. power of attorney",
      "The Letter of Intent — what it is and how to write one",
      "Building a support circle beyond your nuclear family",
      "Government services for adults with disabilities (and the waitlists)",
      "Social Security benefits at 18 — the redetermination process",
      "Estate planning: wills, trusts, and preserving benefit eligibility",
    ],
  },
];

const STAGES = [
  { id: "all", label: "All Stages" },
  { id: "newly-diagnosed", label: "Just Diagnosed" },
  { id: "early-years", label: "Early Years (0–5)" },
  { id: "school-age", label: "School Age (5–14)" },
  { id: "transition", label: "Transition (14+)" },
];

/* ─── palette ─── */
const P = {
  bg: "#0b0d11", bgAlt: "#10131a", card: "#141822", cardHover: "#1a1f2d",
  accent: "#dba24e", accentDim: "#b5853b", accentGlow: "rgba(219,162,78,0.10)",
  text: "#e4dfda", textMuted: "#908b84", textDim: "#5e5a54", border: "#232730",
};

/* ─── Inject styles ─── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap";
document.head.appendChild(fontLink);
const styleEl = document.createElement("style");
styleEl.textContent = `
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
  *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
  body{background:${P.bg};color:${P.text};font-family:'DM Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased;line-height:1.6}
  ::selection{background:${P.accent};color:${P.bg}}
  ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:${P.bg}}::-webkit-scrollbar-thumb{background:${P.textDim};border-radius:3px}
  a{color:${P.accent};text-decoration:none}a:hover{text-decoration:underline}
`;
document.head.appendChild(styleEl);

/* ═══════ COMPONENTS ═══════ */

function SubjectCard({ subject, index, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div role="button" tabIndex={0} onClick={onClick} onKeyDown={e => e.key === "Enter" && onClick()}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        animation: `fadeUp .45s ease both`, animationDelay: `${index * 0.06}s`,
        background: h ? P.cardHover : P.card, border: `1px solid ${h ? P.accent + "44" : P.border}`,
        borderRadius: 14, padding: "26px 22px", cursor: "pointer", transition: "all .25s",
        transform: h ? "translateY(-2px)" : "none", display: "flex", flexDirection: "column", gap: 10, minHeight: 210,
        boxShadow: h ? `0 6px 28px rgba(219,162,78,.06)` : "none",
      }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: 30 }}>{subject.emoji}</span>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {subject.stage.map(s => (
            <span key={s} style={{ fontSize: 10, padding: "2px 7px", borderRadius: 6, background: P.accent + "14", color: P.accentDim, letterSpacing: .3 }}>
              {STAGES.find(st => st.id === s)?.label}
            </span>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 21, color: P.text, lineHeight: 1.25 }}>{subject.title}</h3>
      <p style={{ fontSize: 13.5, color: P.textMuted, lineHeight: 1.6, flex: 1 }}>{subject.why.slice(0, 180)}…</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
        <span style={{ fontSize: 11, color: P.textDim }}>📖 {subject.books.length} books · 🎬 {subject.videos.length} videos · {subject.topics.length} topics</span>
        <span style={{ color: P.accent, fontSize: 17, transition: "transform .2s", transform: h ? "translateX(3px)" : "none" }}>→</span>
      </div>
    </div>
  );
}

function SubjectDetail({ subject, onBack }) {
  const [tab, setTab] = useState("guide");
  const tabs = [
    { id: "guide", label: "Deep Dive" },
    { id: "books", label: `Books (${subject.books.length})` },
    { id: "videos", label: `Videos (${subject.videos.length})` },
    { id: "websites", label: `Websites (${subject.websites.length})` },
    { id: "topics", label: `Topics (${subject.topics.length})` },
  ];

  return (
    <div style={{ animation: "fadeUp .35s ease both", maxWidth: 780, margin: "0 auto" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: P.accent, cursor: "pointer", fontFamily: "'DM Sans'", fontSize: 14, marginBottom: 28, display: "flex", alignItems: "center", gap: 6 }}>
        ← Back to all subjects
      </button>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {subject.stage.map(s => (
          <span key={s} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 8, background: P.accent + "14", color: P.accent }}>{STAGES.find(st => st.id === s)?.label}</span>
        ))}
      </div>
      <div style={{ fontSize: 44, marginBottom: 12 }}>{subject.emoji}</div>
      <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 40, lineHeight: 1.12, marginBottom: 14 }}>{subject.title}</h2>
      <p style={{ fontSize: 16, color: P.textMuted, lineHeight: 1.7, marginBottom: 28, maxWidth: 640 }}>{subject.why}</p>

      <div style={{ background: P.accentGlow, border: `1px solid ${P.accent}30`, borderRadius: 12, padding: "18px 22px", marginBottom: 32, lineHeight: 1.65, fontSize: 14.5 }}>
        <strong style={{ color: P.accent }}>💡 Quick tip:</strong> <span style={{ color: P.text }}>{subject.quickTip}</span>
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: `1px solid ${P.border}`, paddingBottom: 12 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "8px 16px", borderRadius: 8, border: `1px solid ${tab === t.id ? P.accent + "44" : P.border}`,
            background: tab === t.id ? P.accent + "14" : "transparent",
            color: tab === t.id ? P.accent : P.textMuted,
            fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all .2s"
          }}>{t.label}</button>
        ))}
      </div>

      {tab === "guide" && (
        <div style={{ animation: "fadeUp .3s ease both" }}>
          {subject.deepDive.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: P.textMuted, marginBottom: 20, maxWidth: 680 }}>{para}</p>
          ))}
        </div>
      )}

      {tab === "books" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeUp .3s ease both" }}>
          {subject.books.map((b, i) => (
            <div key={i} style={{ background: P.card, border: `1px solid ${P.border}`, borderRadius: 12, padding: "20px 22px" }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 19, marginBottom: 4 }}>{b.title}</div>
              <div style={{ fontSize: 13, color: P.accentDim, marginBottom: 10 }}>by {b.author}</div>
              <p style={{ fontSize: 14, color: P.textMuted, lineHeight: 1.65 }}>{b.note}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "videos" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeUp .3s ease both" }}>
          {subject.videos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noreferrer" style={{ background: P.card, border: `1px solid ${P.border}`, borderRadius: 12, padding: "20px 22px", textDecoration: "none", display: "block" }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 18, color: P.text, marginBottom: 4 }}>{v.title}</div>
              <div style={{ fontSize: 13, color: P.accentDim }}>{v.source} →</div>
            </a>
          ))}
        </div>
      )}

      {tab === "websites" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeUp .3s ease both" }}>
          {subject.websites.map((w, i) => (
            <a key={i} href={w.url} target="_blank" rel="noreferrer" style={{ background: P.card, border: `1px solid ${P.border}`, borderRadius: 12, padding: "20px 22px", textDecoration: "none", display: "block" }}>
              <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 18, color: P.text, marginBottom: 4 }}>{w.title}</div>
              <p style={{ fontSize: 14, color: P.textMuted, lineHeight: 1.55, marginTop: 6 }}>{w.note}</p>
              <div style={{ fontSize: 12, color: P.accent, marginTop: 8 }}>{w.url}</div>
            </a>
          ))}
        </div>
      )}

      {tab === "topics" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, animation: "fadeUp .3s ease both" }}>
          {subject.topics.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "12px 16px", background: P.card, border: `1px solid ${P.border}`, borderRadius: 10 }}>
              <span style={{ color: P.accent, fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 1 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ color: P.textMuted, fontSize: 14.5, lineHeight: 1.55 }}>{t}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AskAI() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages, loading]);

  const systemPrompt = `You are a warm, deeply knowledgeable advisor for parents of children with special needs and disabilities. You have expertise across: diagnosis and evaluation, legal rights (IDEA, 504, UNCRPD, Swedish Skollagen, NZ Education Act), therapies (ABA, speech, OT, PT, AAC), school navigation (IEPs, BIPs, inclusion), parent mental health (burnout, grief, respite), daily life strategies (sleep, feeding, meltdowns, visual supports), financial planning (SSI, ABLE, SNTs, insurance appeals, international benefits), community building, and future/transition planning (employment, housing, guardianship alternatives).

Be empathetic but direct. Cite specific resources when relevant. Acknowledge emotional weight. Flag when professional consultation is needed. Use short paragraphs. Be honest about controversies. If a parent seems in crisis, gently suggest professional support.`;

  async function handleSubmit() {
    const q = question.trim();
    if (!q || loading) return;
    setMessages(prev => [...prev, { role: "user", text: q }]);
    setQuestion("");
    setLoading(true);
    try {
      const apiMsgs = [...messages.map(m => ({ role: m.role === "user" ? "user" : "assistant", content: m.text })), { role: "user", content: q }];
      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: systemPrompt, messages: apiMsgs }),
      });
      const data = await resp.json();
      const text = data.content?.map(b => b.text || "").join("\n") || "I wasn't able to generate a response. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", text }]);
    } catch { setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Please check your connection and try again." }]); }
    setLoading(false);
  }

  const starters = [
    "My child was just diagnosed with autism. What do I do first?",
    "How do I prepare for an IEP meeting?",
    "Is ABA therapy harmful or helpful?",
    "My 4-year-old won't eat anything except crackers and yogurt.",
    "I'm burned out. I don't know how much longer I can do this.",
    "How do I explain the disability to their sibling?",
    "The school is refusing to evaluate my child. What are my options?",
    "What's the difference between a meltdown and a tantrum?",
  ];

  return (
    <div style={{ maxWidth: 780, margin: "0 auto", animation: "fadeUp .4s ease both" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 36, marginBottom: 10 }}>🤖💛</div>
        <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 34, marginBottom: 8 }}>Ask the Guide</h2>
        <p style={{ color: P.textMuted, fontSize: 14.5, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Powered by AI, covering all nine subjects. Ask anything about diagnosis, rights, therapies, school, daily life, finances, or the future.
        </p>
      </div>

      {messages.length === 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 20 }}>
          {starters.map((s, i) => (
            <button key={i} onClick={() => setQuestion(s)} style={{
              padding: "8px 14px", borderRadius: 10, border: `1px solid ${P.border}`, background: P.card,
              color: P.textMuted, fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all .2s", textAlign: "left", maxWidth: 280
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = P.accent + "44"; e.currentTarget.style.color = P.text }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.color = P.textMuted }}
            >{s}</button>
          ))}
        </div>
      )}

      <div style={{ background: P.card, border: `1px solid ${P.border}`, borderRadius: 16, minHeight: 320, maxHeight: 520, overflowY: "auto", padding: 22, marginBottom: 14, display: "flex", flexDirection: "column", gap: 14 }}>
        {messages.length === 0 && !loading && (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ color: P.textDim, fontSize: 13.5, textAlign: "center" }}>Click a question above or type your own below.</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{
            alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "88%",
            background: m.role === "user" ? P.accent + "15" : P.bgAlt,
            border: `1px solid ${m.role === "user" ? P.accent + "30" : P.border}`,
            borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
            padding: "13px 17px", fontSize: 14, lineHeight: 1.75, color: P.text, whiteSpace: "pre-wrap"
          }}>{m.text}</div>
        ))}
        {loading && (<div style={{ display: "flex", gap: 6, padding: "13px 17px" }}>{[0, 1, 2].map(i => (<div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: P.accent, animation: `pulse 1s ease infinite`, animationDelay: `${i * .15}s` }} />))}</div>)}
        <div ref={bottomRef} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmit()}
          placeholder="Type your question…"
          style={{ flex: 1, padding: "13px 17px", borderRadius: 12, border: `1px solid ${P.border}`, background: P.card, color: P.text, fontSize: 14.5, outline: "none", fontFamily: "'DM Sans'", transition: "border-color .2s" }}
          onFocus={e => e.target.style.borderColor = P.accent + "55"} onBlur={e => e.target.style.borderColor = P.border}
        />
        <button onClick={handleSubmit} disabled={loading || !question.trim()} style={{
          padding: "13px 26px", borderRadius: 12, border: "none",
          background: question.trim() ? P.accent : P.textDim,
          color: P.bg, fontWeight: 700, fontSize: 14.5, cursor: question.trim() ? "pointer" : "default",
          fontFamily: "'DM Sans'", transition: "all .2s"
        }}>Ask</button>
      </div>
      <p style={{ fontSize: 11.5, color: P.textDim, marginTop: 10, textAlign: "center" }}>AI guidance is not a substitute for professional medical, legal, or therapeutic advice.</p>
    </div>
  );
}

/* ═══════ MAIN APP ═══════ */
export default function App() {
  const [activeTab, setActiveTab] = useState("subjects");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [stageFilter, setStageFilter] = useState("all");

  const filtered = stageFilter === "all" ? SUBJECTS : SUBJECTS.filter(s => s.stage.includes(stageFilter));
  const stats = { books: SUBJECTS.reduce((a, s) => a + s.books.length, 0), videos: SUBJECTS.reduce((a, s) => a + s.videos.length, 0), websites: SUBJECTS.reduce((a, s) => a + s.websites.length, 0), topics: SUBJECTS.reduce((a, s) => a + s.topics.length, 0) };

  return (
    <div style={{ minHeight: "100vh", background: P.bg }}>
      <header style={{ padding: "72px 24px 56px", textAlign: "center", position: "relative", overflow: "hidden", borderBottom: `1px solid ${P.border}` }}>
        <div style={{ position: "absolute", top: -220, left: "50%", transform: "translateX(-50%)", width: 750, height: 750, borderRadius: "50%", background: `radial-gradient(circle,${P.accent}06 0%,transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", padding: "5px 14px", borderRadius: 100, background: P.accent + "12", border: `1px solid ${P.accent}22`, fontSize: 12.5, color: P.accent, marginBottom: 22, letterSpacing: .4 }}>
            For parents, by parents who get it
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5.5vw,60px)", lineHeight: 1.08, marginBottom: 18, maxWidth: 680, margin: "0 auto 18px" }}>
            Teach Yourself<br /><span style={{ color: P.accent, fontStyle: "italic" }}>Special Needs Parenting</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: P.textMuted, lineHeight: 1.7, maxWidth: 580, margin: "0 auto 16px" }}>
            Nine essential subjects every special needs parent should learn — with {stats.books} curated books, {stats.videos} video resources, {stats.websites} trusted websites, and an AI advisor that actually understands.
          </p>
          <p style={{ fontSize: 13, color: P.textDim, maxWidth: 480, margin: "0 auto" }}>
            Inspired by <a href="https://teachyourselfcs.com/" target="_blank" rel="noreferrer">TeachYourselfCS</a>. Built for the toughest job nobody trained you for.
          </p>
        </div>
      </header>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "44px 24px 0" }}>
        <div style={{ background: P.card, border: `1px solid ${P.border}`, borderRadius: 14, padding: "26px 28px", marginBottom: 36 }}>
          <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 21, marginBottom: 10, color: P.accent }}>TL;DR</h3>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: P.textMuted, marginBottom: 14 }}>
            Study all nine subjects below. Start with <strong style={{ color: P.text }}>Understanding the Diagnosis</strong> and <strong style={{ color: P.text }}>Your Legal Rights</strong> — they unlock everything else.
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: P.textMuted, marginBottom: 14 }}>
            <strong style={{ color: P.text }}>If you're overwhelmed, just start with two books:</strong> <em style={{ color: P.text }}>The Whole-Brain Child</em> (to understand your child's brain) and <em style={{ color: P.text }}>Wrightslaw: From Emotions to Advocacy</em> (to fight for what they're entitled to).
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.75, color: P.textMuted }}>
            <strong style={{ color: P.text }}>Still too much?</strong> Jump to <strong style={{ color: P.text }}>Ask the Guide</strong> and describe your situation. The AI covers all nine subjects and can point you to exactly where to start.
          </p>
        </div>
      </section>

      <nav style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 10px", display: "flex", gap: 8 }}>
        {[{ id: "subjects", label: "📚 The Curriculum" }, { id: "ask", label: "🤖 Ask the Guide" }].map(t => (
          <button key={t.id} onClick={() => { setActiveTab(t.id); setSelectedSubject(null); }}
            style={{ padding: "10px 20px", borderRadius: 10, border: `1px solid ${activeTab === t.id ? P.accent + "50" : P.border}`, background: activeTab === t.id ? P.accent + "12" : "transparent", color: activeTab === t.id ? P.accent : P.textMuted, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all .2s" }}>
            {t.label}
          </button>
        ))}
      </nav>

      {activeTab === "subjects" && !selectedSubject && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px 28px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {STAGES.map(s => (
            <button key={s.id} onClick={() => setStageFilter(s.id)} style={{
              padding: "6px 14px", borderRadius: 8, border: `1px solid ${stageFilter === s.id ? P.accent + "40" : "transparent"}`,
              background: stageFilter === s.id ? P.accent + "10" : "transparent",
              color: stageFilter === s.id ? P.accent : P.textDim,
              fontSize: 12.5, cursor: "pointer", fontFamily: "'DM Sans'", fontWeight: 500, transition: "all .2s"
            }}>{s.label}</button>
          ))}
        </div>
      )}

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        {activeTab === "subjects" && !selectedSubject && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(275px,1fr))", gap: 14 }}>
            {filtered.map((s, i) => (<SubjectCard key={s.id} subject={s} index={i} onClick={() => { setSelectedSubject(s); window.scrollTo({ top: 0, behavior: "smooth" }); }} />))}
            {filtered.length === 0 && (<p style={{ color: P.textDim, fontSize: 14, gridColumn: "1/-1", textAlign: "center", padding: 40 }}>No subjects match this filter.</p>)}
          </div>
        )}
        {activeTab === "subjects" && selectedSubject && (<SubjectDetail subject={selectedSubject} onBack={() => setSelectedSubject(null)} />)}
        {activeTab === "ask" && <AskAI />}
      </main>

      <footer style={{ borderTop: `1px solid ${P.border}`, padding: "36px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 13.5, color: P.textDim, lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
          You didn't get a manual for this. So we're writing one together.<br />
          <span style={{ color: P.textMuted }}>Built by parents who've been in the trenches.</span>
        </p>
        <p style={{ fontSize: 11.5, color: P.textDim, marginTop: 14 }}>© {new Date().getFullYear()} Teach Yourself Special Needs Parenting</p>
      </footer>
    </div>
  );
}
