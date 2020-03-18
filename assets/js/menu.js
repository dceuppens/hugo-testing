/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function() {
  'use strict';
  var querySelector = document.querySelector.bind(document);
  var queryAll = document.querySelectorAll.bind(document);
  var navdrawerContainer = querySelector('.c-primary-nav');
  var body = document.body;
  var appbarElement = querySelector('.c-header__controls');
  // var menuBtn = querySelector('.nav-toggle-menu');
  var main = querySelector('main');
  /*! toegevoegd door mij */
  // var searchBtn = querySelector('.nav-toggle-search');
  var searchContainer = querySelector('.c-search-form');
  var secmenuBtn = queryAll('.nav-toggle-secmenu');
  // dit selecteert alle .c-secondary - we willen enkel de eerste sibling van het geselecteerde element
  // var secsearchContainer = queryAll('.c-secondary-nav__list');
  /*! einde toevoeging */

  function closeMenu() {
    body.classList.remove('nav--is-active');
    appbarElement.classList.remove('nav--is-active');
    navdrawerContainer.classList.remove('nav--is-active');
    main.classList.remove('nav--is-active');
  }
  /*! toegevoegd door mij */
  function closesearchMenu() {
    main.classList.remove('search--is-active');
    searchContainer.classList.remove('search--is-active');
  }

  /* function closeSecMenu() {
    searchContainer.classList.remove('secnav--is-active');
  }
  */
  /*! einde toevoeging */

  function toggleMenu() {
    body.classList.toggle('nav--is-active');
    main.classList.toggle('nav--is-active');

    appbarElement.classList.toggle('nav--is-active');
    navdrawerContainer.classList.toggle('nav--is-active');
    // navdrawerContainer.classList.add('opened');
  }

  function togglesearchMenu() {
    // console.log('togglesearch opgeroepen');
    main.classList.toggle('search--is-active');
    searchContainer.classList.toggle('search--is-active');
    // searchContainer.classList.add('search--is-active');
  }

  document.addEventListener('mouseover', function(event) {
    // highlight the mouseover target
    if (event.target.classList.contains('c-primary-nav__link')) {
      // console.log('yeah hover');
      // console.log(event.target.parentNode);
      //  console.log(event.target.parentNode.lastChild);
      // console.log(event.target.parentNode.nextElementSibling);

      // event.target.style.color = 'orange';
      // reset the color after a short delay
      if (event.target.parentNode.nextElementSibling !== null) {
        event.target.parentNode.nextElementSibling.classList.add('hovered');
        setTimeout(function() {
          event.target.parentNode.nextElementSibling.classList.remove('hovered');
        }, 800);
      }
    }
  }, false);

/*
  main.addEventListener('click', closeMenu);
  main.addEventListener('click', closesearchMenu);
  menuBtn.addEventListener('click', toggleMenu);
  menuBtn.addEventListener('click', closesearchMenu);
  searchBtn.addEventListener('click', togglesearchMenu);
  searchBtn.addEventListener('click', closeMenu);
  secmenuBtn.addEventListener('click', toggleSecMenu);
  secmenuBtn.addEventListener('click', closeSecMenu);
*/

  document.addEventListener('click', function(event) {
    // If the event target doesn't match bail
    if (event.target.classList.contains('c-primary-nav')) {
      if (event.target.nodeName === 'A') {
        closeMenu();
      }
    } else if (event.target.classList.contains('main')) {
      closeMenu();
      closesearchMenu();
    } else if (event.target.classList.contains('nav-toggle-menu')) {
      console.log('Klik Menu');
      toggleMenu();
      closesearchMenu();
    } else if (event.target.classList.contains('nav-toggle-search')) {
      console.log('Klik Search');
      togglesearchMenu();
      closeMenu();
    } else if (event.target.classList.contains('nav-toggle-secmenu')) {
      console.log('Klik SecMenu');

      // haal alle actieve secundaire navs weg
      // event.target.parentNode.nextElementSibling.classList.toggle('secnav--is-active');
      // event.target.classList.toggle('secnav--is-active');

      console.log(event.target.class);
      console.log(event.target);
      var i;
      for (i = 0; i < secmenuBtn.length; i++) {
        console.log(secmenuBtn[i]);
        if (secmenuBtn[i] === event.target) {
          secmenuBtn[i].parentNode.nextElementSibling.classList.toggle('secnav--is-active');
          secmenuBtn[i].classList.toggle('icon-up-open');
          secmenuBtn[i].classList.toggle('icon-down-open');
        } else {
          secmenuBtn[i].parentNode.nextElementSibling.classList.remove('secnav--is-active');
          secmenuBtn[i].classList.remove('icon-up-open');
          secmenuBtn[i].classList.add('icon-down-open');
          window.scrollTo(0, 0);
        }
      }
      // event.target.parentNode.nextElementSibling.classList.toggle('secnav--is-active');
      // event.target.classList.toggle('secnav--is-active');
    } else if (event.target.classList.contains('c-search-form__input')) {
      // exception inbouwen voor search form c-search-form__input
      console.log('Search form ');
      console.log(event.target.classList);
      closeMenu();
      // closesearchMenu();
    } else {
      console.log('Vreemd ');
      console.log(event.target.classList);
      closeMenu();
      closesearchMenu();
    }
  }, false);
   /* nog op te lossen - search  in menu & searchveld in
   breedscherm hebben identieke id dus flapt de menu ook uit bij breed scherm
    - ofwel id vervangen in breedscherm (waarschijnlijk simpelste oplossing ofwel
      oplossen in javascript */

  /* navdrawerContainer.addEventListener('click', function(event) {
    // if (event.target.nodeName === 'A' || event.target.nodeName === 'LI' || event.target.nodeName === 'BUTTON') {
    if (event.target.nodeName === 'A') {
      closeMenu();
    }
  }); */
})();
