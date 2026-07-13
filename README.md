# atikur163 — Course Blueprint

এইটা তোমার GitHub পোর্টফোলিও সাইট — প্রতিটা কোর্সকে একটা "class" আর প্রতিটা module-কে একটা "method" হিসেবে ভেবে ডিজাইন করা হয়েছে। কোনো framework/build-tool লাগে না — খালি plain HTML/CSS/JS, তাই GitHub Pages-এ সরাসরি চলবে।

## ফোল্ডার স্ট্রাকচার

```
portfolio/
├── index.html                          → হোমপেজ (কোর্স ক্যাটালগ)
├── css/style.css                       → পুরো সাইটের ডিজাইন (একটাই ফাইল)
├── js/main.js                          → module sidebar-এর scroll-highlight
├── assets/logo-ict.svg                 → ICT dept-এর প্লেসহোল্ডার লোগো
└── courses/
    ├── oop.html                        → ✅ Object Oriented Pattern & Design (১০টা module, সম্পূর্ণ)
    ├── ict-dept.html                   → MBSTU ICT dept পেজ ("Coming soon")
    ├── communication-engineering.html  → "Coming soon"
    ├── operating-system.html           → "Coming soon"
    ├── microprocessor.html             → "Coming soon"
    ├── fourier-mathematics.html        → "Coming soon"
    └── accounting.html                 → "Coming soon"
```

## GitHub Pages-এ পাবলিশ করবে কীভাবে

1. GitHub-এ `atikur163.github.io` নামে একটা নতুন repository বানাও (username অনুযায়ী exact নাম হতে হবে, তাহলে সরাসরি `https://atikur163.github.io` তে চলবে)। অথবা যেকোনো নামের repo বানিয়ে Pages এনাবল করতে পারো — লিংক হবে `https://atikur163.github.io/repo-name`।
2. এই `portfolio` ফোল্ডারের ভেতরের সব ফাইল ও ফোল্ডার repo-র root-এ push করো।
3. Repo → **Settings → Pages** → Source-এ `main` branch, `/ (root)` সিলেক্ট করে Save করো।
4. কয়েক মিনিট পর সাইটটা লাইভ হয়ে যাবে।

```bash
git init
git add .
git commit -m "Initial course blueprint"
git branch -M main
git remote add origin https://github.com/atikur163/atikur163.github.io.git
git push -u origin main
```

## ICT department লোগো বদলাবে কীভাবে

`assets/logo-ict.png` — এইটা তোমার দেওয়া **আসল** ICT dept লোগো, হোমপেজের হেডারে ডান পাশে এবং প্রতিটা course পেজের হেডারে বসানো আছে। বদলাতে চাইলে নতুন ফাইল `assets/` ফোল্ডারে রেখে `<img src="assets/logo-ict.png">` (বা `../assets/logo-ict.png`) এর filename বদলে দাও।

`assets/logo-university.svg` — এইটা **প্লেসহোল্ডার**, আসল MBSTU লোগো এখনো বসানো হয়নি (আমার কাছে ফাইলটা ছিল না)। হোমপেজের হেডারে বাম পাশে বসানো আছে। আসল লোগো পেলে:

1. লোগো ফাইলটা (`.png`/`.svg`) `assets/` ফোল্ডারে রাখো, যেমন `assets/logo-university.png`।
2. `index.html`-এ `<img class="univ-logo" src="assets/logo-university.svg">` এই লাইনের filename বদলে দাও।

## ICT dept-এর তথ্য যোগ করবে কীভাবে

`courses/ict-dept.html` ফাইলের ভেতরে `.cs-box` অংশটা (Coming soon বক্স) বদলে দিয়ে ফ্যাকাল্টি, কারিকুলাম, বা যেকোনো তথ্য বসাতে পারো — চাইলে `.module` স্টাইলে (OOP পেজের মতো) সেকশন আকারে সাজিয়ে ফেলতে পারো।

## নতুন কোর্স/module যোগ করবে কীভাবে (OOP পেজের প্যাটার্ন অনুসরণ করে)

প্রতিটা "Coming soon" কোর্স পেজ (যেমন `operating-system.html`) কে `oop.html`-এর কাঠামো অনুযায়ী বদলাতে পারো:

1. `oop.html` কপি করে নতুন কোর্সের জন্য টাইটেল, `course-meta`, আর sidebar (`module-nav`)-এর লিংকগুলো বদলাও।
2. প্রতিটা module-এর জন্য একটা `<article class="module" id="mX">` ব্লক বসাও — ভেতরে explanation (`<p>`) আর `<div class="code-panel">`-এর ভেতরে code।
3. `index.html`-এর সংশ্লিষ্ট course card-এ `status soon` কে `status active` করে দাও এবং module সংখ্যা আপডেট করো।

এই একই প্যাটার্নে Communication Engineering, Operating System, Microprocessor, Fourier Mathematics, আর Accounting — প্রতিটা কোর্স ধীরে ধীরে বানাতে পারবে।
