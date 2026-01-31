import React from 'react';
import Banner from '../Banner';
import AboutUs from '../AboutUs/AboutUs';
import Resolved from './Resolved';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Resolved></Resolved>
        </div>
    );
};

export default Home;


{/* বর্ণনা (Bangla Translation)

পাবলিক ইনফ্রাস্ট্রাকচার সমস্যা রিপোর্টিং সিস্টেম হলো একটি ডিজিটাল প্ল্যাটফর্ম যা নাগরিকদেরকে বাস্তব জীবনের পাবলিক সমস্যাগুলি যেমন ভাঙা রাস্তার বাতি, গর্ত, পানির লিকেজ, আবর্জনার overflow, ক্ষতিগ্রস্ত ফুটপাথ ইত্যাদি রিপোর্ট করার সুযোগ দেয়। সরকারী কর্মী এবং অ্যাডমিনরা রিপোর্ট করা সমস্যাগুলি দক্ষভাবে ম্যানেজ, ভেরিফাই, অ্যাসাইন এবং রিসলভ করতে পারে।
মিউনিসিপাল সার্ভিস প্রায়ই দেরিতে সাড়া দেয় এবং ট্র্যাকিংয়ে সমস্যা হয়। নাগরিকদের কোন কেন্দ্রীয় প্ল্যাটফর্ম নেই যেখানে তারা সমস্যাগুলি রিপোর্ট করতে পারে।

এই সিস্টেমের সুবিধা:

স্বচ্ছতা বৃদ্ধি করে

সাড়া দেওয়ার সময় কমায়

ইনফ্রাস্ট্রাকচার ডেটা সংগ্রহ ও বিশ্লেষণে সহায়ক

শহরের সার্ভিস ডেলিভারি আরও কার্যকর করে

কিভাবে সিস্টেমটি কাজ করে

নাগরিকরা ইস্যুর বিবরণ, ছবি এবং লোকেশনসহ রিপোর্ট জমা দেয়।

অ্যাডমিন ইস্যুটি রিভিউ করে এবং স্টাফকে অ্যাসাইন করে।

স্টাফ ইস্যুটি ভেরিফাই করে এবং প্রগ্রেস আপডেট করে।

সিস্টেম স্ট্যাটাস ট্র্যাক করে: Pending → In-Progress → Resolved → Closed।

নাগরিকরা আপডেট পায় এবং যেকোনো সময় তাদের ইস্যু ট্র্যাক করতে পারে।

প্রিমিয়াম নাগরিকরা প্রায়োরিটি সাপোর্ট পায়।

আপনাকে একটি পলিশড, বাগ-ফ্রি এবং ইমপ্রেসিভ অ্যাপ্লিকেশন তৈরি করতে হবে যা ফাংশনালিটি এবং ডিজাইনে উভয় দিক থেকেই আলাদা হয়।

মেইন রিকোয়ারমেন্টস (Must Do)

ক্লায়েন্ট সাইড কোডে অন্তত ২০টি অর্থপূর্ণ GitHub কমিট

সার্ভার সাইড কোডে অন্তত ১২টি অর্থপূর্ণ GitHub কমিট

একটি ভালো readme.md ফাইল তৈরি করতে হবে যা অন্তর্ভুক্ত করবে:

ওয়েবসাইটের নাম

অ্যাডমিন ইমেইল ও পাসওয়ার্ড

লাইভ সাইট URL

ওয়েবসাইটের অন্তত ১০টি ফিচার

ওয়েবসাইট সম্পূর্ণ রেসপন্সিভ হতে হবে (মোবাইল, ট্যাবলেট, ডেস্কটপ)

প্রাইভেট রুটে লগইন থাকলে পেজ রিফ্রেশের পরেও লগইন থাকতে হবে

Firebase এবং MongoDB সিক্রেটস এনভায়রনমেন্ট ভেরিয়েবল দিয়ে হাইড করতে হবে

Lorem Ipsum ব্যবহার করা যাবে না

লগইন, সাইনআপ এবং সব CRUD অ্যাকশনে Sweet Alert / Toast / Notification ব্যবহার করতে হবে

সব ডেটা ফেচিং-এ TanStack Query ব্যবহার করতে হবে

হোম পেজ

Navbar:

লোগো + ওয়েবসাইটের নাম

মেনু: Home, All Issues, 2 Extra Page

লগইন করলে ইউজার প্রোফাইল ছবি দেখাবে

প্রোফাইল ছবি ক্লিক করলে dropdown: User Name, Dashboard, Logout

Banner Section:

বড় সুন্দর ব্যানার/স্লাইডার

ইউনিক এবং আকর্ষণীয় ডিজাইন

Latest Resolved Issue Section:

অন্তত ৬টি ইস্যু দেখাবে

স্ট্যাটাস অনুযায়ী সাজানো

প্রতিটি ইস্যু কার্ডে বিস্তারিত তথ্য সহ

View Details ক্লিক করলে বিস্তারিত পেজে যাবে

Features Section:

অ্যাপ্লিকেশন ফিচারগুলো দেখাবে

How It Works Section

Extra 2 Section

Footer

404 Page:

ভুল URL এর জন্য সুন্দর এরর পেজ

Home এ ফেরার বাটন

All Issues Page (/all-issues)

সব ইস্যু কার্ড ভিউতে দেখানো

প্রতিটি কার্ডে: ছবি, টাইটেল, ক্যাটাগরি, স্ট্যাটাস ব্যাজ, প্রায়োরিটি ব্যাজ (High/Normal), লোকেশন, Upvote বাটন + মোট Upvote সংখ্যা, View Details বাটন

View Details ক্লিক করলে ইস্যু ডিটেইল পেজে যাবে

ফিল্টারিং: ক্যাটাগরি, স্ট্যাটাস, প্রায়োরিটি অনুযায়ী

সার্চ বার: ইস্যু সার্চ করতে

Upvote ফিচার:

লগইন ইউজাররা একবারে একটি ইস্যুতে Upvote করতে পারবে

নিজের ইস্যুতে Upvote করা যাবে না

Boosted issues সবসময় সাধারণ ইস্যুর উপরে থাকবে

Upvote করলে DB আপডেট এবং UI তে তাত্ক্ষণিক পরিবর্তন দেখাবে

Issue Details Page (Private Route)

শুধুমাত্র লগইন করা ইউজার দেখতে পারবে

পূর্ণ তথ্য দেখাবে এবং ইমপ্রেসিভ UI

বাটন:

Edit (যদি ইউজার এই ইস্যু Submit করে এবং Status Pending)

Delete (যদি ইউজার Submit করে)

Boost Issue Priority (প্রতি ইস্যু 100tk পেমেন্টে Boost করা যাবে)

স্টাফের তথ্য দেখাবে যদি অ্যাসাইন করা থাকে

Issue Tracking & Timeline Section:

সম্পূর্ণ লিফসাইকেল দেখাবে

Timeline read-only

Timeline এ অন্তর্ভুক্ত থাকবে:

Status (Pending / In-Progress / Resolved / Closed)

Message / Note

Updated by (Admin / Staff / Citizen)

Date & Time

ডেটা ফ্লো:

Issue creation

Staff assignment

Status change

Boost payment

Admin rejection

Issue closure

Role Management (3 Roles)

Admin:

সব ইস্যু দেখবে

Staff অ্যাসাইন ও ম্যানেজ

Citizens ম্যানেজ

Payments দেখবে

Citizen:

ইস্যু Submit করবে

নিজের Pending ইস্যু Edit/Delete

Boost Priority

Premium subscription access

Activities Track

Staff:

Assigned issues দেখবে

Status update করবে

Progress update দিবে

Mark as resolved

Profile edit

Citizen Dashboard (Private)

Blocked user লগইন করতে পারবে কিন্তু Submit/Edit/Upvote/Boost করতে পারবে না

Dashboard Stats: Total Issues, Pending, In-Progress, Resolved, Total Payments

My Issues Page:

নিজের ইস্যু লিস্ট

Status, Category ফিল্টার

Edit/Delete/View Details ফিচার

Report Issue Page:

ফর্ম: Title, Description, Category, Image Upload, Location

Free users max 3 issues

Premium users unlimited

Tracking record auto add হবে

Profile Page:

তথ্য আপডেট

Premium subscription (1000tk)

Premium Badge দেখাবে

Staff Dashboard (Private)

Assigned issues দেখবে

Status update

Charts & Stats

Admin Dashboard (Private)

Dashboard: Total issues, Resolved, Pending, Rejected, Payments

All Issues: Assigned staff, Boosted issues, Assign Staff button

Manage Users & Staff

Payment tracking

Payments Page:

সব পেমেন্ট দেখাবে

Filter এবং Chart (Optional)

Login & Registration:

Error messages

Login: Email/Password + Google Sign-in

Registration: Name, Email, Password, Photo Upload

Challenge Tasks (Must Do All)

Token Verification & Role-Based Middleware

Pagination, Search & Filter (Server-side)

Loader during data fetch

Downloadable PDF Invoice

Optional Tasks (Choose Any 2)

Animations (Framer Motion / AOS)

Axios Interceptors

Dark/Light theme

Prevent multiple upvotes

Additional Notes

ছবি কোথাও হোস্ট করতে পারবেন

CSS: Tailwind, DaisyUI, Custom ইত্যাদি

Deploy: Firebase Hosting, Vercel বা যেকোনো

Submission Details

Admin Email / Password

Live Site Link (Client)

Client & Server GitHub Repo

Staff Email/Password

Citizen Email/Password*/}