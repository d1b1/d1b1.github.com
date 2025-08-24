---
layout: default
title: Frequency Asked Questions
subtitle: This should be a must read! If you are thinking about using a fractional anything, or anyone to solve a business problem, it might make sense to understand some basics.
sitemap: true
---

<style>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

details { 
  margin: 0 0 1.5rem 0; 
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

details:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

summary { 
  font-weight: 700; 
  font-size: 1.1rem; 
  cursor: pointer; 
  list-style: none; 
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #2c3e50;
  border-bottom: 1px solid #e1e5e9;
  position: relative;
  transition: all 0.3s ease;
}

summary:hover {
  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
  color: #1a252f;
}

summary::-webkit-details-marker { display: none; }

summary::after { 
  content: " ▸"; 
  font-size: 1.2rem;
  color: #6c757d;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

details[open] summary::after { 
  content: " ▾"; 
  color: #495057;
  transform: translateY(-50%) rotate(180deg);
}

details[open] summary {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1565c0;
  border-bottom: 2px solid #2196f3;
}

details[open] {
  border-color: #2196f3;
  box-shadow: 0 4px 20px rgba(33, 150, 243, 0.15);
}

.faq-answer {
  padding: 1.5rem;
  background: #ffffff;
  border-left: 4px solid #e1e5e9;
  margin: 0;
}

details[open] .faq-answer {
  border-left-color: #2196f3;
}

.faq-answer p {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  color: #495057;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

.faq-answer ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.faq-answer strong {
  color: #2c3e50;
}

/* Page header styling */
.faq-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.faq-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.faq-header p {
  font-size: 1.1rem;
  opacity: 0.95;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Responsive design */
@media (max-width: 768px) {
  .faq-container {
    padding: 1rem;
  }
  
  .faq-header h1 {
    font-size: 2rem;
  }
  
  summary {
    font-size: 1rem;
    padding: 1rem 1.25rem;
  }
  
  .faq-answer {
    padding: 1.25rem;
  }
}
</style>

<div class="faq-container">
  <div class="faq-header">
    <h1>{{ page.title }}</h1>
    <p>{{ page.subtitle }}</p>
  </div>

  <details>
    <summary>Do a frational code? (for you?)</summary>
    <div class="faq-answer">
      <p>Every fractional will answer this question differently. For me, the anwser is both
      yes and no. Currently I only take on one coding client at a time.</p>
    </div>
  </details>

  <details>
    <summary>How many clients do you take on?</summary>
    <div class="faq-answer">
      <p>I work with three clients at a time. At most. This usually breaks down into
      two advisory clients and one deep code client. In the past I would take on more,
      but I have found that this balance works the best.</p>
    </div>
  </details>

  <details>
    <summary>How long will I need a fractional?</summary>
    <div class="faq-answer">
      <p>Again, depends upon your project. I have found that advisory engagement
      usually run for three months. Basically, it take some time to understand the business,
      some time to understand the founders, and some time to have an impact.</p>
      <p>Advisory client never go away, they just grow out of my domain.</p>
    </div>
  </details>

  <details>
    <summary>Can I hire you for just an hour?</summary>
    <div class="faq-answer">
      <p>Hells yes, sometimes an hour is all a founder needs to evolve their 
      thinking and move forward. (Here is the calendar [link](https://calendly.com/stephan-smith/on-demand)</p>
      <p>No package or letter of intent needed. Just book the time you want.</p>
    </div>
  </details>

  <details>
    <summary>Are there clients you do not take?</summary>
    <div class="faq-answer">
      <p>Yes, I stay in my lane. If a client needs what I can not offer, then 
      I have a huge network of other fractional CTOs I can pull in and/or hand
      off to.</p>
    </div>
  </details>

  <details>
    <summary>Do you work for equity?</summary>
    <div class="faq-answer">
      <p>Err - No. I find equity clouds the conversation. There are time when it makes
      sense, but for the most part this is not an option.</p>
    </div>
  </details>

  <details>
    <summary>How do I terminate a CTO relationship?</summary>
    <div class="faq-answer">
      <p>Easy, when things do not work, the relationship ends. I stay away from
      long and involved contracts. I operate the way lawyers operate. I offer a 
      single letter of intent.</p>
      <p>Simple is easier.</p>
    </div>
  </details>

  <details>
    <summary>Can I pay you after I raise funds?</summary>
    <div class="faq-answer">
      <p>No. I know the feeling and the desire to have someone working and helping
      you get to a fundraise. In my experience, it's a bad idea. Fundraising always
      takes too long. Missing fundraising deadlines can kill a good working relationships.</p>
      <p>Founders do not need extra stress during a raise.</p>
    </div>
  </details>

  <details>
    <summary>Can you help me with a fundraise?</summary>
    <div class="faq-answer">
      <p>Yes. Within bounds. First I have a huge network of founders, investors and 
      advisors. There are countless ways I can help. But in the end, only the founder/CEO
      can raise.</p>
      <p>It's one of the only things that founders kind of have to do on their own.</p>
    </div>
  </details>

  <details>
    <summary>Do you fire clients?</summary>
    <div class="faq-answer">
      <p>Yes, but very very seldom. Firing a client means I did not choose well.
      And. I value network, having a client relationship end with a firing is
      not the way I operate.</p>
      <p>It does happen. Its always about mixed expectations.</p>
      <p>For me its like dropping a college class when I get a bad grade. Just not my style.</p>
    </div>
  </details>

  <details>
    <summary>What do you want a founder to carry with them after working with you?</summary>
    <div class="faq-answer">
      <p>Easy question, but hard answer quickly.</p>
      <ul>
        <li><strong>Automomy</strong> - I want a founder to own their idea. Value my input, but more importantly
        have the tools to move the concept forward. If I was hit by a bus, the company and 
        team might slow down, but the core ideas are not lost.</li>
        <li><strong>Enabled</strong> - My ideas are not really mine. I talke to hundreds of founders and CTOs
        every year. I learn from smarter people. So I want the founders I work with to feel 
        enabled and powerful. Don't credit me. Anything I share it the founders to own!</li>
        <li><strong>Socialized</strong> - I highly value network. I network like an olympian. Seriously. I want
        founders to feel that after working with me, they are plugged into an huge and growing 
        network. This goal grew out of the benefits I gains while in the 2018 TechStars program.</li>
      </ul>
      <p>The spring cohort was amazing. I learned a ton, but I value the network and the connections
      I made. I remain in contact with many of the founders and advisors from the period.</p>
      <p>Network is everything.</p>
    </div>
  </details>
</div>
