export type ProjectCategory = 'ai' | 'fullstack';

export interface ProjectData {
    slug: string;
    title: string;
    date: string;
    category: ProjectCategory;
    description: string;
    longDescription: string;
    /** Headline number for the card. Kept short — the caption carries the context. */
    metric?: { value: string; label: string };
    highlights?: string[];
    image: string;
    tags: string[];
    techIcons: { name: string; color: string }[];
    githubUrl: string;
    demoUrl?: string;
    images: string[];
}

export const projectsData: ProjectData[] = [
    // ------------------------------------------------------------------ AI
    {
        slug: 'enterprise-rag',
        title: 'Enterprise RAG & Doc Search',
        date: 'Sep 2026',
        category: 'ai',
        description: 'Document Q&A over internal files — hybrid retrieval (pgvector HNSW + Postgres full-text, fused by RRF) with cross-encoder re-ranking, streaming answers that cite the exact line they came from.',
        longDescription: 'A retrieval system built the way a search team would build it rather than the way a tutorial would. Documents are chunked and indexed twice — once as embeddings in pgvector with an HNSW index, once as a Postgres tsvector with a GIN index — and a single SQL query fuses both rankings with Reciprocal Rank Fusion before a cross-encoder re-ranks the survivors. Answers stream to the browser over SSE with line-level citations, and a citation guard refuses to answer rather than improvise when retrieval comes back empty. The repository ships the evaluation harness that produced its own numbers, so every claim on this page can be re-run.',
        metric: { value: '0.97 / 0.878', label: 'Recall@5 / MRR on a 30-question set' },
        highlights: [
            'Hybrid retrieval: vector and keyword legs fused by Reciprocal Rank Fusion inside one SQL query — no application-side merging.',
            'Cross-encoder re-ranking carries MRR from 0.640 (keyword only) and 0.673 (vector only) to 0.878.',
            'Streaming SSE answers with line-level citations, plus a guard that declines to answer when nothing relevant is retrieved.',
            '133 tests green in CI, Docker Compose for the whole stack, and an eval harness checked into the repo so the numbers reproduce.',
            'Limitation stated in the README rather than hidden: Thai queries reach neither retrieval leg today.',
        ],
        image: '/covers/enterprise-rag-v2.svg',
        tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'RRF', 'Cross-Encoder', 'Next.js', 'Docker'],
        techIcons: [
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'FastAPI', color: 'bg-teal-500' },
            { name: 'PG', color: 'bg-blue-800' },
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'Docker', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/YC-Enterprice-RAG',
        images: [],
    },
    {
        slug: 'thai-slip-qlora',
        title: 'QLoRA Slip Extraction',
        date: 'Sep 2026',
        category: 'ai',
        description: 'Fine-tuned a 1.5B model to turn Thai bank-transfer slips into 11-field JSON. Eighteen minutes on a free T4 took exact-record accuracy from 1-in-100 to 96-in-100 — level with a frontier model a hundred times its size.',
        longDescription: 'A complete fine-tuning and evaluation pipeline: a generator that produces slips across ten layouts with labels correct by construction, QLoRA training on a free Colab T4, and one scorer that grades the base model, the tuned model and a frontier API model against the same 250 held-out slips. The interesting result is not that fine-tuning worked — it is what the base model was already capable of. It read amounts perfectly before training; what it would not do was follow the spec. Fine-tuning did not add knowledge, it turned a request into a habit: emit bare JSON, convert the Buddhist year, and know which line belongs to the sender.',
        metric: { value: '0.01 → 0.96', label: 'exact-record accuracy on 250 held-out slips' },
        highlights: [
            '4-bit NF4 base frozen, LoRA r=16 adapter of 67 MB, trained in 18.2 minutes at 4.1 GB peak on a free T4.',
            'Base 0.733 field / 0.01 exact → tuned 0.995 / 0.956. A frontier API model scored 0.993 / 0.956 on the same test set, and lost on output format.',
            'Two slip layouts held out of training: seen layouts score 1.000 exact, unseen 0.853 — reported in separate columns so a single average cannot hide the gap.',
            'One prompt, one scorer, greedy decoding across all three configurations, so the only variable is the weights.',
            'A 400-token cap once made a capable model score 0.000; it was diagnosed as a measurement bug and documented instead of published as a result.',
        ],
        image: '/covers/thai-slip-qlora-v2.svg',
        tags: ['Python', 'PyTorch', 'Unsloth', 'PEFT / LoRA', 'Transformers', 'Colab T4'],
        techIcons: [
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'PyTorch', color: 'bg-orange-600' },
        ],
        githubUrl: 'https://github.com/annop07/thai-slip-qlora',
        images: [],
    },
    {
        slug: 'taintguard',
        title: 'TaintGuard',
        date: 'Sep 2026',
        category: 'ai',
        description: 'An open-source Python package on PyPI that blocks prompt-injected agent tool calls by tracking where data came from — provenance, not a second model guessing whether text looks malicious.',
        longDescription: 'Most prompt-injection defences ask a model to judge whether some text is an attack, which means the same trick that fooled the agent can fool the judge. TaintGuard takes the other route, borrowed from language security: anything an agent reads from an untrusted source is marked, the mark travels with the value through the program, and if a marked value ever reaches a sensitive tool argument the call is refused before it happens. The decision is deterministic and explainable — you can point at the exact source the tainted value came from.',
        metric: { value: '215 tests · 100%', label: 'coverage, mypy --strict, CI on Python 3.10–3.13' },
        highlights: [
            'Taint tracking over agent inputs: untrusted text is marked at the boundary and the mark propagates through transformations.',
            'A marked value reaching a sensitive tool argument raises before the tool executes — no network call, no side effect.',
            'Deterministic by design: no second LLM in the loop for an injection to fool twice.',
            '215 tests at 100% coverage, mypy --strict, CI across Python 3.10 through 3.13.',
            'Published and installable: pip install taintguard',
        ],
        image: '/covers/taintguard-v2.svg',
        tags: ['Python', 'AI Security', 'pytest', 'mypy --strict', 'GitHub Actions', 'PyPI'],
        techIcons: [
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'GitHub', color: 'bg-gray-800' },
        ],
        githubUrl: 'https://github.com/annop07/agentguard8',
        demoUrl: 'https://pypi.org/project/taintguard/',
        images: [],
    },
    {
        slug: 'savy',
        title: 'Savy — AI Financial Agent',
        date: 'Aug 2026',
        category: 'ai',
        description: 'Rebuilt my expense tracker around AI: a vision model reads Thai slips into a typed schema, vector search makes spending history answerable in plain language, and an agent pulls the real numbers to say where the money went.',
        longDescription: 'Savy started as a receipt manager that scraped expenses out of email over IMAP and parsed them with hand-written regex — one branch per vendor, and a new vendor meant new code. The rebuild replaces that with an AI layer: a multimodal vision model reads a photograph of a slip into a validated Pydantic schema, receipts are embedded as they are written so spending history can be searched in plain language, and an agentic advisor calls tools against the real database rather than generating plausible-sounding advice. It is a FastAPI + Next.js monorepo that runs with no external infrastructure — SQLite and an embedded Qdrant.',
        metric: { value: 'regex → LLM', label: 'one parser replaces one branch per vendor' },
        highlights: [
            'Vision LLM with Instructor parses a slip photo into a typed Pydantic schema — vendor, amount, date (Thai Buddhist year converted), payment method and line items.',
            'Semantic search over receipt history answers questions like "เดือนนี้ค่ากินเกินงบไหม?" with real figures, citing the receipts it used.',
            'An agent calls tools against actual spending and budgets, so the advice is grounded in the database rather than invented.',
            'The IMAP pipeline now reads email with an LLM and keeps regex only as a fallback — a sender it has never seen still parses correctly.',
            'Zero external infrastructure: SQLite plus embedded Qdrant, so the whole thing runs on a laptop.',
        ],
        image: '/covers/savy-ai-v2.svg',
        tags: ['FastAPI', 'Next.js', 'Vision LLM', 'Pydantic', 'Qdrant', 'RAG', 'SQLite'],
        techIcons: [
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'FastAPI', color: 'bg-teal-500' },
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'TW', color: 'bg-teal-500' },
            { name: 'Docker', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/new-savy',
        images: [
            '/photos/savy-photo/main-dashboard.png',
            '/photos/savy-photo/recipet-list.png',
            '/photos/savy-photo/receipt-detail.png',
            '/photos/savy-photo/manage-overview.png',
            '/photos/savy-photo/manage-money.png',
        ],
    },
    {
        slug: 'market-intel',
        title: 'Market Intelligence Agent',
        date: 'Aug 2026',
        category: 'ai',
        description: 'Point it at a set of e-commerce sources: a Go scraper crawls them politely, every review is embedded, prices are computed in SQL, and an LLM agent writes an executive report where each claim traces back to a review id.',
        longDescription: 'A three-language system that turns competitor catalogues and customer reviews into a report a product executive can act on. A concurrent Go collector handles crawling — worker pool, rate limiting, retry with backoff, and a robots.txt parser written from scratch. A Python analysis service embeds reviews for similarity search, computes the price landscape and change detection deterministically in SQL, and extracts aspect-level sentiment with hallucination guards. The LLM writes the prose; it never invents a number, because every figure in the report comes from a query, and every claim carries the review id it came from.',
        metric: { value: 'SQL, not LLM', label: 'prices computed — never generated' },
        highlights: [
            'Concurrent Go collector: worker pool, rate limiting, retry/backoff, and an own robots.txt parser handling groups, wildcards and longest-match.',
            'Cross-language data contract — a Go struct and a Pydantic model kept in lockstep across the process boundary.',
            'Price landscape, price history and change detection are deterministic SQL; the LLM writes prose around numbers it cannot alter.',
            'Aspect-based sentiment with hallucination guards, and RAG Q&A that filters citations to the brand actually asked about.',
            'Adding a new platform means adding one adapter file, not editing the crawler.',
        ],
        image: '/covers/market-intel-v2.svg',
        tags: ['Go', 'Python', 'FastAPI', 'Qdrant', 'LLM Agent', 'Next.js'],
        techIcons: [
            { name: 'Go', color: 'bg-cyan-600' },
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'FastAPI', color: 'bg-teal-500' },
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/market-intel',
        images: [],
    },
    {
        slug: 'ai-agent-service',
        title: 'AI Agent Service',
        date: 'Aug 2026',
        category: 'ai',
        description: 'A FastAPI microservice running an AI agent with the three primitives everything else is built on: tool/function calling, structured output validated against a schema, and vector similarity search.',
        longDescription: 'The foundation project — one service that does the three things an AI application actually needs, without a framework hiding how they work. The agent calls tools and feeds the results back into its own reasoning loop, returns structured output validated against a Pydantic schema rather than free text a caller has to parse, and searches a vector index for semantically similar records. A Next.js dashboard sits on top so each capability can be exercised by hand.',
        metric: { value: 'typed end to end', label: 'schema-validated agent output' },
        highlights: [
            'Tool / function calling with results fed back into the agent loop.',
            'Structured output validated against a Pydantic schema — callers get a typed object, not a string to parse.',
            'Vector similarity search over stored records, exposed as its own endpoint.',
            'A Next.js dashboard to exercise every capability, so the service is demonstrable and not just documented.',
        ],
        image: '/covers/ai-agent-service-v2.svg',
        tags: ['FastAPI', 'Python', 'LLM', 'Tool Calling', 'Structured Output', 'Next.js'],
        techIcons: [
            { name: 'Python', color: 'bg-blue-400' },
            { name: 'FastAPI', color: 'bg-teal-500' },
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/AI-Enginner',
        images: [],
    },

    // ----------------------------------------------------------- FULL-STACK
    {
        slug: 'shabu-pos',
        title: 'Shabu POS',
        date: 'Jan-Mar 2025',
        category: 'fullstack',
        description: 'A real-time Point of Sale system running the floor at a restaurant — in-store sales, table reservations, and QR-code ordering from the customer’s own phone.',
        longDescription: 'This repository contains a web-based Point of Sale (POS) application that supports in-store sales, reservations, and food ordering via QR Code, and has been in daily production use at a restaurant since it shipped. Customers scan a QR code to browse the menu and place orders from their own phone, while staff manage orders, tables and stock, and the system calculates payments and prints receipts. Built with Next.js, TypeScript, Tailwind CSS, Prisma and MySQL.',
        metric: { value: 'in daily use', label: 'at a restaurant, in production' },
        image: '/photos/hana_pos/main-menu-front.jpg',
        tags: ['TypeScript', 'Next.js', 'Node.js', 'Prisma', 'MySQL'],
        techIcons: [
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'TW', color: 'bg-teal-500' },
            { name: 'Node', color: 'bg-green-600' },
            { name: 'Prisma', color: 'bg-indigo-600' },
            { name: 'MySQL', color: 'bg-blue-600' },
        ],
        githubUrl: 'https://github.com/annop07/fullPOS',
        images: [
            // User Features
            '/photos/hana_pos/Login-frontend.jpg',
            '/photos/hana_pos/main-menu-front.jpg',
            '/photos/hana_pos/reserve-chair.jpg',
            '/photos/hana_pos/confirm-reserve.jpg',
            '/photos/hana_pos/history-reserve-user.jpg',
            '/photos/hana_pos/reserve-detail-wait.jpg',
            '/photos/hana_pos/reserve-detail-confirm.jpg',
            '/photos/hana_pos/reserve-detail-cancel.jpg',
            '/photos/hana_pos/order-inQrcode.jpg',
            '/photos/hana_pos/order-history.jpg',
            '/photos/hana_pos/summary-ingredian.jpg',
            // Staff Features
            '/photos/hana_pos/Login-backend.jpg',
            '/photos/hana_pos/Today-Reservations.jpg',
            '/photos/hana_pos/order-chair.jpg',
            '/photos/hana_pos/QRCode-order.jpg',
            '/photos/hana_pos/reserve-list-backend.jpg',
            '/photos/hana_pos/list-order-in-kitchen.jpg',
            '/photos/hana_pos/stock-ingredian.jpg',
            '/photos/hana_pos/new-ingredian.jpg',
            '/photos/hana_pos/edit-stock.jpg',
            '/photos/hana_pos/import-ingredian.jpg',
            '/photos/hana_pos/import-history.jpg',
            '/photos/hana_pos/Product-Withdrawal-History.jpg',
            '/photos/hana_pos/Payment.png',
            '/photos/hana_pos/receipt.png',
            // Admin Features
            '/photos/hana_pos/admin-dashboard.jpg',
            '/photos/hana_pos/add-employee.jpg',
            '/photos/hana_pos/edit-employee-info.jpg',
        ],
    },
    {
        slug: 'doctora',
        title: 'Doctora',
        date: 'Aug-Oct 2025',
        category: 'fullstack',
        description: 'A full-stack healthcare platform for booking doctor appointments, managing patient records, and enabling real-time availability checking.',
        longDescription: 'This project is a full-stack web application for online doctor appointment booking, featuring real-time schedule management and smart doctor selection. Patients can search for doctors by specialty, view real-time availability, and book appointments online, while doctors can manage schedules, approve appointments, and handle patient queues. Administrators can manage doctors, specialties, and monitor overall system usage. The system is built using a 3-tier architecture with Next.js and TypeScript for the frontend, Spring Boot (Java) for the backend, and PostgreSQL as the database, communicating via REST APIs secured with JWT authentication.',
        image: '/photos/doctora-photo/doctora-photo/cover-doctora.png',
        tags: ['Next.js', 'Spring Boot', 'TypeScript', 'PostgreSQL'],
        techIcons: [
            { name: 'Next.js', color: 'bg-gray-900' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'TW', color: 'bg-teal-500' },
            { name: 'Spring', color: 'bg-green-500' },
            { name: 'PG', color: 'bg-blue-800' },
            { name: 'Docker', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/doctora-full',
        images: [
            // Patient Booking Flow
            '/photos/doctora-photo/doctora-photo/1-main-menu.png',
            '/photos/doctora-photo/doctora-photo/2-selected-department.png',
            '/photos/doctora-photo/doctora-photo/3-seleced-time-date.png',
            '/photos/doctora-photo/doctora-photo/4-patient-info.png',
            '/photos/doctora-photo/doctora-photo/5-confirm-appointment.png',
            '/photos/doctora-photo/doctora-photo/6-booking-info.png',
            '/photos/doctora-photo/doctora-photo/7-select-doctor.png',
            '/photos/doctora-photo/doctora-photo/8-select-time-date.png',
            // Doctor Features
            '/photos/doctora-photo/doctora-photo/9-doctor-dashboard.png',
            '/photos/doctora-photo/doctora-photo/10-patient-info.png',
            '/photos/doctora-photo/doctora-photo/11-manage-schedule.png',
            '/photos/doctora-photo/doctora-photo/12-doctor-calendar.png',
        ],
    },
    {
        slug: 'doctora-mobile',
        title: 'Doctora Mobile',
        date: 'Aug-Oct 2025',
        category: 'fullstack',
        description: 'A mobile healthcare application for booking doctor appointments with auto-matching and real-time schedule management.',
        longDescription: 'This project is a mobile application version of the Doctora healthcare platform, designed for convenient doctor appointment booking on smartphones. The app features intelligent auto-matching that suggests suitable doctors based on specialty and availability, manual doctor selection, real-time schedule viewing, and appointment management. Patients can register, search for doctors, book appointments, and track their appointment history, while the system provides instant notifications and updates. Built with React Native and Expo for cross-platform compatibility, with backend integration to the Doctora API system.',
        image: '/photos/doctora-mobile-photo/doctora-mobile-photo/cover-mobile.png',
        tags: ['React Native', 'TypeScript', 'Expo', 'REST API'],
        techIcons: [
            { name: 'React Native', color: 'bg-cyan-500' },
            { name: 'Expo', color: 'bg-gray-800' },
            { name: 'Spring', color: 'bg-green-500' },
            { name: 'PG', color: 'bg-blue-800' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'Docker', color: 'bg-blue-500' },
        ],
        githubUrl: 'https://github.com/annop07/doctora-mobile',
        images: [
            // Authentication
            '/photos/doctora-mobile-photo/doctora-mobile-photo/1-login.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/2-register.PNG',
            // Main Dashboard
            '/photos/doctora-mobile-photo/doctora-mobile-photo/3-mainidashboard.PNG',
            // Auto Doctor Selection Flow
            '/photos/doctora-mobile-photo/doctora-mobile-photo/4-auto-selected-doctor.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/5-select-date-time.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/6-patient-info.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/6-2-patient-info.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/7-summary-appoiment.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/7.2-summary-appoiment.PNG',
            // Appointment Management
            '/photos/doctora-mobile-photo/doctora-mobile-photo/8-Appoiment-list.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/11-appoiment-info.PNG',
            // Doctor Information
            '/photos/doctora-mobile-photo/doctora-mobile-photo/9-doctor-info.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/10-doctor-schedule.PNG',
            // Manual Doctor Selection
            '/photos/doctora-mobile-photo/doctora-mobile-photo/12-manual-select-doctor.PNG',
            '/photos/doctora-mobile-photo/doctora-mobile-photo/12.2-manual-select-doctor.PNG',
        ],
    },
    {
        slug: 'tinder-cat',
        title: 'Tinder Cat',
        date: 'Sep-Nov 2025',
        category: 'fullstack',
        description: 'A mobile application that lets users create profiles for their cats, match with nearby cats, and chat in real time — Tinder, but for pets.',
        longDescription: 'This project is a mobile application for cat matching and social connection, designed to help cat owners find breeding partners or companions for their cats through a swipe-based matching system similar to Tinder. Users can create profiles, manage their cats, and swipe to like or show special interest. When both sides are interested, the system creates a match and enables real-time chat, allowing owners to communicate and arrange meetups. The mobile application is built with React Native and Expo, while the backend is developed using Node.js and Express.js with MongoDB for data storage. Real-time communication is powered by Socket.IO, image management is handled via Cloudinary, and secure access is ensured using JWT authentication.',
        image: '/photos/cat-tinder-photo/cover.png',
        tags: ['React Native', 'TypeScript', 'Node.js', 'WebSocket.io', 'MongoDB'],
        techIcons: [
            { name: 'React Native', color: 'bg-cyan-500' },
            { name: 'Expo', color: 'bg-gray-800' },
            { name: 'TS', color: 'bg-blue-500' },
            { name: 'Node', color: 'bg-green-600' },
            { name: 'Express', color: 'bg-gray-700' },
            { name: 'MongoDB', color: 'bg-green-500' },
            { name: 'Cloudinary', color: 'bg-blue-400' },
            { name: 'WS', color: 'bg-emerald-500' },
        ],
        githubUrl: 'https://github.com/annop07/cat-tinder-full',
        images: [
            // Login
            '/photos/cat-tinder-photo/1-login.png',
            // Registration Flow
            '/photos/cat-tinder-photo/2.1-register.PNG',
            '/photos/cat-tinder-photo/2.2-register.PNG',
            '/photos/cat-tinder-photo/2.3-register.PNG',
            '/photos/cat-tinder-photo/2.4-register.PNG',
            // Add Cat Flow
            '/photos/cat-tinder-photo/3-add-cat.PNG',
            '/photos/cat-tinder-photo/3.2-add-cat.PNG',
            '/photos/cat-tinder-photo/3.3-add-cat.PNG',
            '/photos/cat-tinder-photo/3.4-add-cat.PNG',
            // Main Feed & Cat Info
            '/photos/cat-tinder-photo/4-main.jpeg',
            '/photos/cat-tinder-photo/4.2-cat-info.PNG',
            '/photos/cat-tinder-photo/4.3-cat-info.PNG',
            // Swipe & Match
            '/photos/cat-tinder-photo/5-swip.gif',
            '/photos/cat-tinder-photo/6-match.gif',
            // Chat
            '/photos/cat-tinder-photo/7.chat.PNG',
            '/photos/cat-tinder-photo/7.2-chat-realtime.PNG',
            '/photos/cat-tinder-photo/8-message-list.PNG',
            // Profile
            '/photos/cat-tinder-photo/9.profile.PNG',
        ],
    },
    {
        slug: 'internship-alert-bot',
        title: 'Internship Alert Bot',
        date: 'Dec 2025',
        category: 'fullstack',
        description: 'An automated job alert system that monitors internship openings from JobsDB and delivers real-time notifications via LINE and Discord.',
        longDescription: 'This project is an automated job alert system that monitors internship openings from JobsDB, supporting Backend, Frontend, and Fullstack categories with intelligent duplicate detection. The system delivers real-time notifications via LINE (Rich Menu & Flex Messages) and Discord (Slash Commands & Embeds). A Go-based web scraper handles HTML parsing, retry logic, and error recovery, while GitHub Actions automate scheduled scraping every 30 minutes without manual operation. The project focuses on reliability, clean architecture, and scalable bot-based user experience for job seekers.',
        image: '/photos/alert-bot-photo/1.bot.png',
        tags: ['Go', 'LINE Bot', 'Discord Bot', 'Web Scraping', 'GitHub Actions'],
        techIcons: [
            { name: 'Go', color: 'bg-cyan-600' },
            { name: 'GitHub', color: 'bg-gray-800' },
        ],
        githubUrl: 'https://github.com/annop07/internship-alert-bot',
        images: [
            '/photos/alert-bot-photo/1.bot.png',
            '/photos/alert-bot-photo/2.qrcode.png',
            '/photos/alert-bot-photo/3.add-bot.png',
            '/photos/alert-bot-photo/4.rich-menu.png',
            '/photos/alert-bot-photo/5.rich-menu-click.png',
            '/photos/alert-bot-photo/6.new-job-alert.png',
            '/photos/alert-bot-photo/7.new-jobs-noti.png',
        ],
    },
    {
        slug: 'kku-missing',
        title: 'KKU Missing',
        date: 'Sep-Dec 2024',
        category: 'fullstack',
        description: 'A Lost and Found System for university students and staff to report and recover lost or found items with Google Maps integration.',
        longDescription: 'This project is a Lost and Found System developed with Laravel 11, designed to help students and staff report lost or found items and coordinate item recovery within a university or community environment. Users can post lost or found items, upload images, and specify locations using the Google Maps API, while managing their own posts through a secure user dashboard. Administrators can monitor, search, and manage all items within the system. The system utilizes Laravel Jetstream and Sanctum for authentication and security, MySQL for data storage, and Tailwind CSS for a clean and responsive user interface.',
        image: '/photos/kku-missing/cover-kku-missing.png',
        tags: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS'],
        techIcons: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PHP', color: 'bg-indigo-600' },
            { name: 'MySQL', color: 'bg-blue-600' },
            { name: 'TW', color: 'bg-teal-500' },
        ],
        githubUrl: 'https://github.com/annop07/Project-Web',
        demoUrl: 'http://webcs0567.cpkkuhost.com/',
        images: [
            // Authentication
            '/photos/kku-missing/1-login.png',
            '/photos/kku-missing/2-register.png',
            // Main Dashboard
            '/photos/kku-missing/3.main-dashboard.png',
            // Item Listings
            '/photos/kku-missing/4.found-item.png',
            '/photos/kku-missing/5.missing-item.png',
            // Item Details
            '/photos/kku-missing/6.detail-item.png',
            '/photos/kku-missing/6.2-pin-detail-item.png',
            // Map Integration
            '/photos/kku-missing/7.map.png',
            '/photos/kku-missing/7.2pin-map.png',
            // User Profile
            '/photos/kku-missing/8.profile.png',
            // Admin Features
            '/photos/kku-missing/9.admin-main.png',
            '/photos/kku-missing/10.admin-item.png',
        ],
    },
];

export const aiProjects = projectsData.filter((p) => p.category === 'ai');
export const fullstackProjects = projectsData.filter((p) => p.category === 'fullstack');

export function getProjectBySlug(slug: string): ProjectData | undefined {
    return projectsData.find(project => project.slug === slug);
}
