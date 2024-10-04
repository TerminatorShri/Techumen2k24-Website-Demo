import React from "react";
import Card from "./Card";

const events = [
  {
    name: "Webnatic",
    quote: "Tailwind Your Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veritatis cumque aliquid facilis atque corporis veniam nulla minima ipsa perspiciatis doloremque culpa commodi laboriosam sapiente assumenda aut dolorem ut obcaecati?",
    rulebookLink: "",
    route: "/webnatic",
  },
  {
    name: "CodeBlast",
    quote: "Elite Algorithmic Showdown",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veritatis cumque aliquid facilis atque corporis veniam nulla minima ipsa perspiciatis doloremque culpa commodi laboriosam sapiente assumenda aut dolorem ut obcaecati?",
    rulebookLink: "",
    route: "/codeblast",
  },
  {
    name: "Compile It",
    quote: "Two Brains, One Breakthrough",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veritatis cumque aliquid facilis atque corporis veniam nulla minima ipsa perspiciatis doloremque culpa commodi laboriosam sapiente assumenda aut dolorem ut obcaecati?",
    rulebookLink: "",
    route: "/compile-it",
  },
  {
    name: "Puzzle Vault",
    quote: "Crack the Puzzle, Uncover the Mystery",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, veritatis cumque aliquid facilis atque corporis veniam nulla minima ipsa perspiciatis doloremque culpa commodi laboriosam sapiente assumenda aut dolorem ut obcaecati?",
    rulebookLink: "",
    route: "/puzzle-vault",
  },
];

const EventCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="event-card-div grid grid-cols-1 sm:grid-cols-2 gap-8">
        {events.map((event, index) => (
            <Card key={index} event={event} />
        ))}
        </div>
    </div>
  );
};

export default EventCards;
