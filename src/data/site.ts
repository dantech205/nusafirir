export const IMG = {
  heroHome: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
  heroAbout: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80",
  heroServices: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80",
  heroContact: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2000&q=80",
  heroTest: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=2000&q=80",
  sailboat: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  waterfall: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
  aerialBeach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  overwater: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80",
  turquoise: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
  jungle: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80",
  culture: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1200&q=80",
  train: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
};

export const services = [
  { slug: "vacation-packages", name: "Hospitality & Guest Management", tagline: "Discover Unforgettable Getaways Tailored to Your Travel Style",
    image: IMG.aerialBeach,
    intro: "Escape the ordinary with curated vacation packages designed around your rhythm. From sun-soaked beaches to alpine retreats, every itinerary is thoughtfully arranged so you can focus on the moments that matter.",
    body: "Whether you're chasing turquoise water or hidden mountain villages, our vacation packages combine handpicked stays, private transfers and local expertise into a single, seamless journey. Our specialists arrange every detail — from arrival to farewell — with a focus on comfort, story and place.",
    highlights: ["Overwater Villa", "All-Inclusive Dining", "Snorkeling Experience", "Romantic Sunset Cruise"],
    duration: "7 Days / 6 Nights", price: 1299,
    included: ["Return airport transfers", "Handpicked boutique stays", "Daily breakfast & selected meals", "Private guided experiences", "24/7 on-trip concierge"],
    benefit: "You return with more than photographs. Each Voyanta package is engineered to feel unhurried, personal and effortlessly organised — so the only thing you plan is what memory to make next." },
  { slug: "adventure-tours", name: "VIP/HNI Luxury Concierge", tagline: "For Travelers Who Chase Horizons, Not Checklists",
    image: IMG.waterfall,
    intro: "Trek jungle waterfalls, paddle glass-flat coves and summit the sunrise. Our adventure tours are built for the curious and the brave — with certified guides, considered gear and just enough comfort at the end of the day.",
    body: "From rainforest expeditions to volcanic hikes, we design adventure itineraries with a strong safety spine and a light footprint. Small groups, local guides and flexible pacing keep every day meaningful without feeling rushed.",
    highlights: ["Certified local guides", "Small-group departures", "Premium gear included", "Sunrise summit day"],
    duration: "5 Days / 4 Nights", price: 899,
    included: ["All permits & park fees", "Expedition-grade equipment", "Trailside meals & hydration", "Support vehicle & medic on call", "Photography by lead guide"],
    benefit: "You leave with new confidence, new friends and stories that don't fit on a postcard. Adventure, done responsibly and beautifully." },
  { slug: "cultural-experiences", name: "Bespoke Experiences", tagline: "Meet the People, Music and Rituals That Shape a Place",
    image: IMG.culture,
    intro: "Travel deeper with immersive cultural journeys — private ceremonies, family-run kitchens, artisan studios and festivals you couldn't book on your own.",
    body: "We spend years building trust with the communities we visit. Our cultural experiences are quiet, respectful and genuinely reciprocal — designed to leave you moved and the community better off.",
    highlights: ["Private ceremony access", "Family-hosted meals", "Artisan workshops", "Local guide storyteller"],
    duration: "6 Days / 5 Nights", price: 1099,
    included: ["Community host fees", "All cultural entry & permits", "Traditional meals & tastings", "Interpreter & guide", "Handcrafted keepsake"],
    benefit: "A trip that changes the way you see home. Cultural travel with intention, warmth and depth." },
  { slug: "business-travel", name: "Travel Concierge/ Logistics", tagline: "Frictionless Corporate Trips, Handled End-to-End",
    image: IMG.train,
    intro: "Executive-grade travel management with real humans on call. From last-minute rebookings to full multi-city itineraries, we keep your team moving.",
    body: "Voyanta corporate travel blends senior travel managers with quiet, quality vendor relationships. We negotiate rates, manage policy compliance and act as a single point of contact 24/7.",
    highlights: ["24/7 travel desk", "Priority rebooking", "Global lounge access", "Consolidated invoicing"],
    duration: "Flexible", price: 249,
    included: ["Dedicated account manager", "Corporate rate program", "Policy compliance reporting", "Traveler safety tracking", "Emergency rebooking within 15 min"],
    benefit: "Fewer emails, fewer surprises. Your team lands prepared and your finance team gets clean, consolidated reporting." },
];

export const team = [
  { name: "Michael Grant", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" },
  { name: "Sophia Rivera", role: "Travel Consultant", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
  { name: "Ethan Walker", role: "Operations Manager", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80" },
  { name: "Amara Osei", role: "Cultural Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
  { name: "Leo Tanaka", role: "Adventure Guide", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80" },
  { name: "Nadia Khan", role: "Corporate Travel Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
];

export const testimonials = [
  { name: "Sarah Mitchell", type: "Adventure Traveler", quote: "Voyanta planned a rainforest trek I didn't think was possible. Every detail was thought through — from the boots to the sunrise coffee at the summit." },
  { name: "James Carter", type: "Family Traveler", quote: "Two kids, three cities, zero stress. Their team rebooked a missed connection before I even noticed. This is how travel should feel." },
  { name: "Priya Shah", type: "Solo Traveler", quote: "The cultural experiences were quiet, respectful and deeply moving. I came home changed — and that's what I wanted." },
  { name: "Marcus Bell", type: "Business Traveler", quote: "Our corporate travel is finally boring, in the best way. Clean invoices, fast rebookings, and real humans on call." },
];

export const pricing = [
  { name: "Essential Escape", price: 499, desc: "A relaxed short break with the essentials handled.", features: ["3D / 2N accommodation", "Daily breakfast", "Airport transfer", "City sightseeing tour", "Travel assistance", "Standard hotel stay"], highlight: false },
  { name: "Premium Explorer", price: 999, desc: "Our most popular plan for the curious traveler.", features: ["5D / 4N accommodation", "Breakfast + selected meals", "Airport transfer", "Guided tours", "Attraction tickets", "Premium hotel"], highlight: true },
  { name: "Luxury Paradise", price: 1799, desc: "Full-service luxury with a personal itinerary.", features: ["7D / 6N accommodation", "All meals", "Private transportation", "Exclusive experiences", "Luxury resort", "Personalized itinerary"], highlight: false },
];

export const faqs = [
  { q: "How do I book a trip with Voyanta?", a: "Send us an enquiry through the contact form or pick a package on our pricing page. A travel consultant will confirm availability, dates and preferences within one business day and share a tailored itinerary for approval." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, bank transfer and secure online payment via Stripe. For premium and luxury packages, a 30% deposit secures your booking with the balance due 30 days before departure." },
  { q: "Is accommodation included in the package price?", a: "Yes. Every published Voyanta package includes accommodation matched to the tier — standard, premium or luxury — along with daily breakfast at minimum. Additional meals are listed in each package's inclusions." },
  { q: "Can I customize my itinerary?", a: "Absolutely. Every itinerary is a starting point. Tell us how you travel — pace, interests, dietary needs, non-negotiables — and we'll rebuild the plan around you at no extra design fee." },
  { q: "Are flights included?", a: "International flights are not included by default, but our team is happy to source and ticket them for you at competitive rates. Domestic and inter-island flights are usually included where they're essential to the itinerary." },
  { q: "Do you provide airport transfers?", a: "Yes. Return airport transfers are included in every package by private vehicle. A driver will meet you inside the terminal with a Voyanta sign and a bottle of water." },
];

export const blog = [
  { slug: "luxury-vs-budget-travel", title: "Luxury vs. Budget Travel: Which One Is Right for You?", author: "Sophia Rivera", date: "Mar 12, 2025", img: IMG.overwater, excerpt: "The best trip isn't the most expensive — it's the one that matches how you actually like to travel. Here's how to decide." },
  { slug: "instagram-worthy-destinations", title: "12 Instagram-Worthy Travel Destinations Around the World", author: "Ethan Walker", date: "Feb 28, 2025", img: IMG.aerialBeach, excerpt: "Some places just photograph well. These twelve are worth the flight — and worth putting the phone down for, too." },
  { slug: "perfect-resort-guide", title: "How to Choose the Perfect Resort for Your Dream Vacation", author: "Amara Osei", date: "Feb 14, 2025", img: IMG.turquoise, excerpt: "Ten questions to ask before you book — and the two red flags most travelers miss until check-in." },
];

export const values = [
  { title: "Passion for Exploration", body: "We fell in love with travel first. That energy shows up in every itinerary we design." },
  { title: "Trust & Integrity", body: "Transparent pricing, honest recommendations and no upsells you didn't ask for." },
  { title: "Customer First", body: "Real humans, real answers, on your side from enquiry through arrival home." },
  { title: "Responsible Tourism", body: "We work with community-owned partners and design trips that leave places better." },
];
