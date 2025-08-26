import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { StarIcon } from "./icons/StarIcon";

const Offer = () => {
  // We manage targetDate with useState to handle resets.
  const [targetDate, setTargetDate] = useState(() => {
    // Check for a stored end date in localStorage to persist the countdown.
    try {
      const item = typeof window !== 'undefined' ? localStorage.getItem('offerEndDate') : null;
      if (item) {
        const storedDate = new Date(parseInt(item, 10));
        // If the stored date is valid and in the future, use it.
        if (!isNaN(storedDate.getTime()) && storedDate > new Date()) {
          return storedDate;
        }
      }
    } catch (e) {
      // If localStorage is not accessible, we'll proceed to create a new date.
      console.warn("Could not access localStorage for countdown timer.");
    }
    
    // If no valid stored date, set a new target 7 hours from now.
    const newTargetDate = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('offerEndDate', newTargetDate.getTime().toString());
      }
    } catch (e) {
      // Silently fail if localStorage can't be written to.
    }
    return newTargetDate;
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = +targetDate - +now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Timer has ended. Reset it for another 7 hours from now.
        const newTargetDate = new Date(now.getTime() + 7 * 60 * 60 * 1000);
        setTargetDate(newTargetDate);
        try {
          if (typeof window !== 'undefined') {
            localStorage.setItem('offerEndDate', newTargetDate.getTime().toString());
          }
        } catch(e) {
          // Silently fail if localStorage can't be written to.
        }
      }
    }, 1000);

    // Clear the interval when the component unmounts to prevent memory leaks.
    return () => clearInterval(timer);
  }, [targetDate]); // This effect depends on targetDate and will re-run if it changes.

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    // Pad single digit numbers with a leading zero.
    const paddedValue = value.toString().padStart(2, '0');
    return (
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl font-bold text-foreground">{paddedValue}</span>
        <span className="text-xs uppercase text-muted-foreground">{interval}</span>
      </div>
    );
  });

  const benefits = [
    "Step-by-step course to create your first landing page",
    "Ready-to-use and customizable templates",
    "No coding or design skills required",
    "Practical method using Google AI Studio",
    "Immediate, lifetime access to the content",
  ];

  return (
    <section id="offer" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-10 text-center shadow-2xl bg-gradient-to-br from-destructive/10 via-background to-background">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80 animate-fade-in-up">
            FULL ACCESS
          </h2>

          <div className="my-6 animate-fade-in-up delay-100">
            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 drop-shadow-md">$9.99</span>
            <span className="ml-2 text-2xl text-muted-foreground line-through">$47</span>
          </div>

          <p className="text-lg text-muted-foreground animate-fade-in-up delay-200">
            Get immediate access to everything you need to create stunning landing pages with AI.
          </p>

          <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto animate-fade-in-up delay-300">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 animate-fade-in-up delay-400">
            <p className="uppercase text-sm tracking-widest text-muted-foreground mb-3">
              Offer ends in
            </p>
            <div className="flex justify-center gap-4 md:gap-8">
              {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
          </div>

          <div className="animate-fade-in-up delay-500">
            <Button size="lg" className="w-full md:w-auto text-base font-bold" asChild>
                <a href="https://nextleveladrian.gumroad.com/l/gvfedg?_gl=1*1lza2c3*_ga*MTcyMjUxNDA4Ni4xNzU0MjQ2OTcx*_ga_6LJN6D94N6*czE3NTYyNDEzOTYkbzckZzEkdDE3NTYyNDE2MTYkajEwJGwwJGgw">BUY NOW</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;