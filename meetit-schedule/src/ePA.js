import React from 'react'

const ePAColor = "#88305D"
const ePAType = "Practice Activities"

const ePA1 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>What is it like to work at Facebook as a 19 year old?</h3>
      <p>by Natalia Kocoł, Facebook</p>
      <p className="justify"> 
      Natalia worked as a Software Engineering Apprentice at Facebook for almost a year straight after graduating from high school. She had the opportunity to immerse herself in the London culture and gain industrial experience before heading off to university. Come if you would like to learn more about her journey and what is hidden behind the doors of one of the biggest tech companies in the world.
      </p>
      <p>Location: Upstairs</p>

      <br/>

      <h3>An introduction to Unity - creating your first game</h3>
      <p>by Aleksandra Kowalska &amp; Mikołaj Grzebieluch, Camp IT  </p>
      <p className="justify">
      Our aim is to show the basics of using Unity Engine. We are about to explain everything while creating a simple game (collecting coins under time pressure) which will provide us various excellent examples. We will explain how to create and work with scripts to show your creativity and customize a game as well as how to use already implemented, handful and cool features. At the end, we will inspire people to modify what we will had created and explore Unity on their own. We expect some basic knowledge of object oriented programming (up to the level of public, protected and private class members) and some experience with C++ / C# would be very helpful. Our classes are aimed to total Unity beginners (but people with previous experience with other ways of creating games won't get bored and are also welcommed).
      </p>
      <p>Location: Downstairs</p>
      
      <br/>
      
      <h3>Comfort zone and where to find it</h3>
      <p>by Evgeny Kosmogradsky-Ivanov, Meet IT</p>
      <p className="justify">
      Three years ago I started learning web development online. Two years ago I started doing frontend remotely 8 hours a day, while still being a full-time student in a power engineering university. A year ago I decided to drop my studies, started travelling, playing piano and learning French. This is a story of me trying to find my comfort zone while subconsciously avoiding it and the experience I gained from that.
      </p>
      <p>Location: Dining</p>
    </>

}

const ePA2 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>Constructions of G^1 continuous surfaces</h3>
      <p>by Adéla Kostelecká, Charles University</p>
      <p className="justify"> 
        We introduce an algorithm that connects two Bézier patches indistinguishtably. The algorithm modifies patches to have a common tangent plane. This is called the method of Chiyokura Kimura. We ensure this type of continuity for multiple patches by replacing the control points with rational functions. These are called the Gregory patches. Finally, we present the results of the algorithm on asymmetric icosahedron and on real geometric objects such as Standford Bunny.
      </p>
      <p>Location: Downstairs</p>

      <br/>

      <h3>Mobile Applications</h3>
      <p>by Valeria Popescu, Camp IT  </p>
      <p className="justify">
        My talk is about how I got into mobile development, and why I made it my priority after a long time of problem-solving. I will explain how we can come up with bright solutions for the future, and use our minds to bring something to life by introducing the projects I participated in that made me develop myself and have a lot of fun meanwhile.
      </p>
      <p>Location: Dining</p>
      
      <br/>
      
      <h3>The Hitchhiker's Guide to the Frontend</h3>
      <p>by Piotr ‘Styczi’ Styczyński, Meet IT</p>
      <p className="justify">
        The talk will be an inspirational journey throughout the niche programming languages nobody know and ideas so sick that they deserve their place in hell. I will talk about frontend and why it’s rather an extreme sport than only “colour changing” job. The lecture will be filled with many anecdotes and plot twists from my own life as well as with hints on how to develop competitive UI skills.
      </p>
      <p>Location: Upstairs</p>
    </>

}

const ePA3 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,
  details:
  <>
    <h3>Security essentials for junior web developers</h3>
    <p>by Matúš Makatura, Hack Kosice</p>
    <p className="justify">
      In the recent years, native applications are getting increasingly replaced by web applications. 
      Although not as powerful or flexible as their native versions, they are much cheaper 
      and easier to update and maintain - code once, deploy everywhere. This, however, means that developers, 
      especially juniors, are being exposed to threats that they might have not encountered before. This talk will 
      introduce you to the most common security vulnerabilities and teach you how to mitigate them.
    </p>
    <p>Location: Dining</p>
    
    <h3>GitLab CI/CD &amp; GitLab Pages in 30 minutes</h3>
    <p>by Dominik Matis, Hack Kosice</p>
    <p className="justify">
      How to automate testing, building and deploying of your software? 
      How to use GitLab to host your own static website? GitLab CI/CD and GitLab Pages will do it! 
      In this presentation we will look at configuration of a Pipeline (CI/CD) for automating compilation 
      of a C code and also we will use GitLab to host our site.
    </p>
    <p>Location: Upstairs</p> 

    <h3>Grundy numbers</h3>
    <p>Peter Onduš, Hack Kosice</p>
    <p className="justify">
    We will talk about problems from game theory, which can't be easily solved by hand, 
    and talk about solving them efficiently using a computer, 
    using dynamic programming and a method called Grundy numbers, or nimbers.
    </p>
    <p>Location: Downstairs</p>
  </>
}


const ePA4 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>How do neural networks learn and how to organise a machine learning conference</h3>
      <p>by Michał Zmysłowski, ML in PL Association</p>
      <p className="justify"> 
        Neural networks have proven to be a universal tool for learning data dependencies. 
        In this presentation, we will learn how this learning takes 
        place. For this purpose, we will dive into 
        the world of optimisation. We will start our journey 
        from describing the optimisation landscape, and then we 
        will learn how the most popular iterative optimisation algorithms 
        like SGD, Momentum, RMSprop and ADAM work. Finally, we will question whether building 
        better optimisation algorithms is necessary and we will present alternative approaches called learning rate schedulers. 
        Besides that, you will also learn how one of the most popular machine learning conferences in Poland - ML in PL Conference - is organised.
      </p>
      <p>Location: Dining</p>

      <br/>

      <h3>FB chatbot via chatfuel</h3>
      <p>by Miro Macko, Camp IT </p>
      <p className="justify">At this PA you will be able to learn how to create a chatbot on Facebook using the Chatfuel platform. 
      Firstly I will tell you about a school project where we were developing a chatbot. Then we will 
      play with a chatbot which I created for the camp. Afterwards I will show you a bit about how does the platform work. Then each of you may create a 
      simple chatbot with given functionalities. Therefore please take your computer!
      </p>
      <p>Location: Upstairs</p>
      
      <br/>
      
      <h3>Cambridge? Sounds familiar</h3>
      <p> by Paweł Piwek, Cambridge</p>
      <p className="justify">
      It was quite a coincidence that made me go to Cambridge. With hindsight, a very lucky coincidence, probably the best one that ever happened to me. Why do I like it so much? I will unveil the mystery of that place a bit…
      What I will cover is: how it works to study there, what the pros (and cons!) are, how to get there.
      </p>
      <p>Location: Downstairs</p>
      
    </>
}


const ePA5 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>Q&amp;A with Eric Steinberger</h3>
      <p>by Eric Steinberger, MIT</p>
      <p className="justify">
      Eric Steinberger researches Deep Reinforcement Learning as well as applications of technology to achieve higher sustainability in developing nations. 
      Despite being just 20 years old, he has already collaborated with three Universities, including MIT, and advises start ups on how to apply AI to 
      their business. Eric will briefly talk about his journey from when he was 15 to today and then dive into any topic or questions the group is interested in.
      </p>
      <p>Location: Upstairs</p>

      <br/>
  
      <h3>Making the World more efficient using AI &amp; machine learning</h3>
      <p> by Krzysztof Kowalczyk, Boston Consulting Group</p>
      <p className="justify">
      The rapid development of AI-related technologies gives us, mathematicians and programmers, an unprecedented ability to solve 
      the world's hardest problems and come up with exciting new products. During this talk, we'll dive deep into the details of what AI is, 
      and how is it applied to a wide variety of problems. By attending it, you will gain a solid understanding of artificial intelligence, machine learning, 
      deep learning, data science, and general optimization. Looking at how they all relate to the traditional realm of computer science and mathematics, 
      that we're all familiar with, will give you a strong foundation for efficiently developing your skills in these domains. The talk will be given 
      by Krzysztof Kowalczyk, President of Machine Learning Society at the University of Warsaw and a Visiting Data Scientist at BCG GAMMA, where he applies 
      his skills to help businesses achieve competitive advantage.
      </p>
      <p>Location: Dining</p>
      <br/>

      <h3>Line Follower Robot</h3>
      <p>by Farhan Ahmad</p>
      <p className="justify">My PA is going to be divided into two sections. Firstly, I will present a theory that stands behind Arduino, 
        different kind of sensors, and basic programming techniques for Arduino. Secondly, you will see 
        how that stuff works in practice! I will show how to make an interface to the sensors, write the program to control a 
        robot that follows established lines under various conditions.
      </p>
      <p>Location: Downstairs</p>

      
  </>
}

const ePA6 = {
  hour: "15:00",
  top: "1050px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>Watch a short video to get 4x more</h3>
      <p>by Piotr Kowalewski, RedBandGames</p>
      <p className="justify">Anoying right? Oh but how satisfying it is to add them everywhere xD. My name is Piotr and I am mobile game developer. From early console, th text RPGs, through some abominations mocking my r*tard friends, to my first game on AppStore, I'll show some highlights of my story, tell you a bit about the mobile market and try to discourage you from making the same mistakes I made on my way to the moraly questionable job I do right now.</p>
      <p>Location: Dining</p>
    </>
}

const ePA7 = {
  hour: "16:00",
  top: "1150px",
  height: "100px",
  type: ePAType,
  color: ePAColor,
  details:
    <>
      <h3>History of Sigmoidal</h3>
      <p> by Marek Bardoński, AI Revolution</p>
      <p className="justify">
        The story of starting and successfully scaling an AI consulting business to 30 people, who work on state-of-the-art algorithms for international corporations.
      </p>
      <p>Location: Upstairs</p>
    </>
}

const ePA8 = {
  hour: "17:00",
  top: "1250px",
  height: "100px",
  type: ePAType,
  color: ePAColor,

  details:
    <>
      <h3>Rendering methods and future of Augmented Reality</h3>
      <p> by Paweł Burzyński, Google</p>
      <p className="justify">
        What do light, shadows, and colors do in graphics? What are the most fundamental rendering techniques, its efficient implementation, and costs? During my talk, you will learn that sometimes slower means better and how the future of AR is going to be like. 
      </p>
      <p>Location: Upstairs</p>
    </>
}

export {ePA1, ePA2, ePA3, ePA4, ePA5, ePA6, ePA7, ePA8};