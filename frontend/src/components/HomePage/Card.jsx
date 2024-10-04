import React from 'react';
import Meteor from '../ui/meteors'; // Make sure to import the Meteors component or remove it if not needed.
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gray-200 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        
        {/* Event Title */}
        <h2 className="font-bold text-xl text-white mb-4 relative z-50 event-card-title">
          Webnatic
        </h2>
        
        {/* Event Quote */}
        <p className="font-semibold text-lg text-slate-400 mb-2 relative z-50 event-card-quote">
          Tailwind Your Web Development
        </p>

        {/* Event Description */}
        <p className="font-normal text-base text-slate-500 mb-4 relative z-50 event-card-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus, veritatis cumque aliquid facilis atque corporis veniam
          nulla minima ipsa perspiciatis doloremque culpa commodi
          laboriosam sapiente assumenda aut dolorem ut obcaecati?
        </p>

        {/* Rulebook Link */}
        <a
          href=""
          className="text-blue-400 underline mb-2 relative z-50"
        >
          RULEBOOK
        </a>

        {/* Read More Link */}
        <Link
          to="/webnatic"
          className="text-blue-400 underline relative z-50"
        >
          Read More &gt;
        </Link>

        {/* Meteor effect - can be removed if not needed */}
        <Meteor number={1} />
      </div>
    </div>
  );
};

export default Card;
