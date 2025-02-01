// Import dependencies
import { createElement, appendChild } from './dom-utils.js';

// Define constants
const EVENTS = [
  { year: 1818, description: 'Illinois becomes the 21st state of the United States.' },
  // ...
];

const FUN_FACTS = [
  { fact: 'December 3rd is the 337th day of the year.' },
  // ...
];

// Define functions
function createBirthdayMessage(name) {
  return `Happy Birthday, ${name}!`;
}

function createEventList(events) {
  const list = createElement('ul');
  events.forEach(event => {
    const listItem = createElement('li');
    listItem.textContent = `${event.year}: ${event.description}`;
    appendChild(list, listItem);
  });
  return list;
}

function createFunFactsList(facts) {
  const list = createElement('ul');
  facts.forEach(fact => {
    const listItem = createElement('li');
    listItem.textContent = fact.fact;
    appendChild(list, listItem);
  });
  return list;
}

// Define main function
function main() {
  const name = prompt('Enter your name: ');
  const birthdayMessage = createBirthdayMessage(name);
  const eventsList = createEventList(EVENTS);
  const funFactsList = createFunFactsList(FUN_FACTS);

  const birthdayMessageElement = document.getElementById('birthday-message');
  birthdayMessageElement.textContent = birthdayMessage;

  const eventsListElement = document.getElementById('events-list');
  eventsListElement.appendChild(eventsList);

  const funFactsListElement = document.getElementById('fun-facts-list');
  funFactsListElement.appendChild(funFactsList);

  // Add event listeners
  document.getElementById('homebutton').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  document.getElementById('eventsbutton').addEventListener('click', () => {
    window.location.href = 'events.html';
  });

  document.getElementById('funfactsbutton').addEventListener('click', () => {
    window.location.href = 'funfacts.html';
  });
}

// Call main function
main();