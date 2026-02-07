import React from 'react';
import Banner from '../Banner';
import AboutUs from '../AboutUs/AboutUs';
import Resolved from './Resolved';
import FAQ from './FAQ';
import Reviews from './UserReview/Reviews';
import HowItWorks from './HowItWorks';
const reviewPromise = fetch('/review.json')
  .then(res => res.json());


const Home = () => {

    return (
        <div className='mx-auto mt-3  '>
            <Banner></Banner>
            <Resolved></Resolved>
            <HowItWorks></HowItWorks>
            <AboutUs></AboutUs>
            
            <Reviews reviewPromise={reviewPromise}></Reviews>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;


{/* 




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