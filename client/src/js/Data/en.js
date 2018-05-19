import test from '../../Assets/img/test.png';
import {serverURL} from '../../js/api'
import React from 'react';

export default {
  header:
    {
      content: <span>If at first you don’t succeed;<br/>
    call it version 1.0 en</span>,
      button: {
        text:'test',
        url:'/'
      }
    },
  company: [
    {
      title: 'Qui sommes-nousEn?',
      sub: 'Votre professionel du nettoyage',
      body: <span>
        <p>
          I am from a small island in the Caribbean. I worked as a Sales Representative and acted as a Web Consultant for over five years now.
          My journey started with small projects when I was a kid such as Forums and Websites. However, later on, I realized how passionate I was.
        </p>
        <p>Learning is such a powerful feeling that I would like to share with you. Doing business in a way that allows everybody to connect and communicate with each others, is the goal that I want to achieve.
        </p>
      </span>,
      key: 0
    }
  ],
  services: [
    {
      title: 'test-name',
      sub: 'test-sub',
      url: serverURL + 'images/profile.jpg',
      img: serverURL + 'images/profile.jpg',
      body: <span>
        <p>
          I am from a small island in the Caribbean. I worked as a Sales Representative and acted as a Web Consultant for over five years now.
        </p>
        <p>
          My journey started with small projects when I was a kid such as Forums and Websites. However, later on, I realized how passionate I was.
        </p>
        <p>Learning is such a powerful feeling that I would like to share with you. Doing business in a way that allows everybody to connect and communicate with each others, is the goal that I want to achieve.
        </p>
      </span>,
      key: 0
    }, {
      title: 'test-name2',
      sub: 'test-sub2',
      url: serverURL + 'images/profile.jpg',
      img: serverURL + 'images/profile.jpg',
      body: <span>
        <p>
          I am from a small island in the Caribbean. I worked as a Sales Representative and acted as a Web Consultant for over five years now.
        </p>
        <p>
          My journey started with small projects when I was a kid such as Forums and Websites. However, later on, I realized how passionate I was.
        </p>
        <p>Learning is such a powerful feeling that I would like to share with you. Doing business in a way that allows everybody to connect and communicate with each others, is the goal that I want to achieve.
        </p>
      </span>,
      key: 1
    }, {
      title: 'test-name3',
      sub: 'test-sub3',
      url: '',
      img: serverURL + 'images/profile.jpg',
      body: <span>
        <p>
          I am from a small island in the Caribbean. I worked as a Sales Representative and acted as a Web Consultant for over five years now.
        </p>
        <p>
          My journey started with small projects when I was a kid such as Forums and Websites. However, later on, I realized how passionate I was.
        </p>
        <p>Learning is such a powerful feeling that I would like to share with you. Doing business in a way that allows everybody to connect and communicate with each others, is the goal that I want to achieve.
        </p>
      </span>,
      key: 2
    }
  ],
  product: [
    {
      test: 'test',
      name: 'test-name',
      sub: 'test-sub',
      url: '',
      img: test,
      description: 'test-description',
      key: 0
    }, {
      test: 'test2',
      name: 'test-name2',
      sub: 'test-sub2',
      url: '',
      img: test,
      description: 'test-description2',
      key: 1
    }, {
      test: 'test3',
      name: 'test-name3',
      sub: 'test-sub3',
      url: '',
      img: test,
      description: 'test-description3',
      key: 2
    }
  ],
  clientTitle:'They trusted us',
  client: [
  {
    name: 'React',
    img: serverURL + 'images/profile.jpg',
    key: 0
  }, {
    name: 'Redux',
    img: serverURL + 'images/profile.jpg',
    key: 1
  }, {
    name: 'Socket.io',
    img: serverURL + 'images/profile.jpg',
    key: 2
  }, {
    name: 'GraphQl',
    img: serverURL + 'images/profile.jpg',
    key: 3
  }
],
footer:
  {
    content: <span>If at first you don’t succeed</span>,
    button: {
      text:'test',
      url:'/'
    }
  },
  socialLink:[
    {
      url:'https://www.linkedin.com/in/andrewsordier/',
      icon:'fab fa-linkedin-in',
      key:0
    },
    {
      url:'https://www.linkedin.com/in/andrewsordier/',
      icon:'fab fa-linkedin-in',
      key:1
    },
    {
      url:'https://www.linkedin.com/in/andrewsordier/',
      icon:'fab fa-linkedin-in',
      key:2
    }
  ],
copyright:<p>Copyright © 2018 "PRONET S.A.S". All rights reserved</p>
}
