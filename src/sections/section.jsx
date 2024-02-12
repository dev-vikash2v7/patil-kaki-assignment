import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faClock, faCloud, faCogs, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img2 from './download.jpg'
import img1 from './hero.jpg'

library.add(faCheckCircle, faClock, faCloud, faCogs, faGlobeAmericas);

export const HeroSection = () => {
  return (
    <section className="bg-sage-100 py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-none text-gray-800 mb-6">
          Experience <span className="underline decoration-royal-yellow">innovation</span>     like never before

          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-12">
            Discover how we're shaping the future with our cutting-edge technology and innovative approach.
          </p>
      
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-full lg:h-auto flex items-center justify-center lg:justify-end relative lg:pt-8">
            <img
              src={img1}
              alt="Hero Image"
              className="w-full lg:w-4/5 mb-8 lg:mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export const FounderSection = () => {
  return (
    <section className="bg-sage-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={img2}
              alt="Founder"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Visionary Founder
            </h2>
            <p className="text-gray-600 mb-4">
              Our founder, Ashwin, has a proven track record of success in
              strategy consulting. With over 15 years of experience, he has
              helped numerous organizations overcome complex business
              challenges and achieve sustainable growth.
            </p>
            <p className="text-gray-600 mb-4">
              Ashwin's unique approach to problem-solving combines deep
              industry knowledge with a strategic mindset. He is a firm
              believer in the power of data-driven decision-making and
              leveraging technology to drive business growth.
            </p>
            <p className="text-gray-600">
              Join us in discovering Ashwin's approach to problem-solving and
              learn how to apply these strategies to your own organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseSection = () => {
    const reasons = [
        {
          icon: 'check-circle',
          title: 'Proven Track Record',
          content: 'History of delivering successful projects and driving business growth.'
        },
        {
          icon: 'clock',
          title: 'Timely Delivery',
          content: 'Always meets deadlines and delivers projects on time.'
        },
        {
          icon: 'cloud',
          title: 'Cloud Expertise',
          content: 'Extensive experience in cloud computing and can help you migrate and optimize your infrastructure.'
        },
        {
          icon: 'cogs',
          title: 'Innovative Approach',
          content: 'Strategic and data-driven approach to problem-solving and uses technology to drive business growth.'
        },
        {
          icon: 'globe-americas',
          title: 'Global Perspective',
          content: 'Worked with clients from all over the world and understands the unique challenges of global business.'
        },
      ];

  return (
    <section className="bg-sage-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why should You go ahead with Me?</h2>
        <div className="flex flex-wrap -mx-4">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={['fas', reason.icon]} className="text-royal-yellow mr-4" size="2x" />
                <h3 className="text-xl font-semibold text-sage-800">{reason.title}</h3>
              </div>
              <p className="text-lg text-gray-600">{reason.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="countdown-timer bg-gray-400 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Limited Time Offer! Sign up in the next{" "}
          <span className="text-red-500">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>{" "}
          minutes!
        </h2>
      </div>
    </section>
  );
};

export const CallToActionSection = () => {
  return (
    <section className="bg-royal-yellow py-12 text-center">
      <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg text-sage-800 mb-8">
        Sign up now and get a free consultation with our team.
      </p>
      <button className="bg-sage-800 hover:bg-sage-900 text-white font-medium py-3 px-6 rounded-lg">
        Sign Up Now
      </button>
    </section>
  );
};



export const SlideInForm = () => {
  
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={`fixed bottom-0 left-0 right-0 bg-white p-6 shadow-md transition-transform duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <h2 className="text-2xl font-bold mb-4">Sign Up Now</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="border-gray-400 border w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="border-gray-400 border w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300">Submit</button>
        </form>
      </div>
  );
};
