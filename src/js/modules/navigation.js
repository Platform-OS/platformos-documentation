// @flow

import { findElement, closest } from '../toolkit/dom';
import Hammer from 'hammerjs';

const NAV_VISIBLE_CLASS = 'nav-visible';
const NAV_SELECTOR = '.nav-section';
const CONTAINER_SELECTOR = '.masthead';

const body = findElement('body');
const container = document.querySelector(CONTAINER_SELECTOR);

function initializeSwiping(sidebar) {
  let hmSidebar = new Hammer.Manager(sidebar);

  hmSidebar.add(
    new Hammer.Swipe({
      direction: Hammer.DIRECTION_LEFT,
      threshold: 50
    })
  );

  hmSidebar.on('swipe', (e: Event) => {
    if (e.direction === Hammer.DIRECTION_LEFT) {
      closeNavigation();
    }
  });
}

function openNavigation() {
  body.classList.add(NAV_VISIBLE_CLASS);
  body.addEventListener('keydown', watchForEscapeKey);
  body.addEventListener('click', watchForClickOutside);
}

function closeNavigation() {
  body.classList.remove(NAV_VISIBLE_CLASS);
  body.removeEventListener('keydown', watchForEscapeKey);
  body.removeEventListener('click', watchForClickOutside);
}

function watchForClickOutside(e) {
  if (e.defaultPrevented) {
    return;
  }

  if (closest(e.target, NAV_SELECTOR) === null) {
    closeNavigation();
  }
}

function watchForEscapeKey(e: Event) {
  if (e.defaultPrevented) {
    return;
  }

  if (e.keyCode === 27) {
    e.preventDefault();
    closeNavigation();
  }
}

function createToggler(): HTMLButtonElement {
  let toggler = document.createElement('button');
  toggler.setAttribute('type', 'button');
  toggler.classList.add('navigation-toggler');
  toggler.innerHTML = 'Menu';

  toggler.addEventListener('click', (e: Event) => {
    e.preventDefault();
    openNavigation();
  });

  return toggler;
}

let sidebar = document.querySelector(NAV_SELECTOR);
if (container instanceof HTMLElement && sidebar instanceof HTMLElement) {
  initializeSwiping(sidebar);
  container.appendChild(createToggler());
}
