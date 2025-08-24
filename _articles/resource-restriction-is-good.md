---
title: Resource Restriction is Great!
subtitle: No founder I know doesn't need more funding. In the back of every startup founder's brain is the wish to get the funding problem off their backs and work without distraction. It's unfair to say, stop, and embrace scarcity as a superpower.
layout: default
published: true
date: 2025-04-15
order: 0
topic: general
sitemap: true
---

{% include subStyles.css %}

Happy Friday. This was too big a week for me. There were too many interesting conversations with too many influential thinkers. It might be strange to say out loud, but ideas have weight (for me). When I get too stacked up, I get a bit stressed.

There are times in a call with a founder when three great insights come up that all need their hour to unpack. This triggers my startup brain too much. It's like having too many presents under the Christmas tree. I start feeling paralyzed and need to sit quietly and let things gel.

My week suffers if I don't capture an idea fast enough and let it slip away.

## Signals: What I’ve Been Seeing This Week
Scarcity sharpens clarity. Three founders told me they get more done when the money is almost gone (or low, or might be low). Limited time and fewer options trigger intense focus, and they finally ship their product.

Brutal prioritization beats planning. When constraints tighten, they stop iterating on what they’ve built and zero in on the smallest thing that solves the problem.

Knowing too much can hurt. Two founders admitted that deep customer insight made them overthink, and simplicity got lost. The hardest part wasn’t solving—it was letting go of all the other “good” ideas.

## Low Code in Action
A few months ago, the founders of Pompeii learned about my work on Fractional.Tools (it’s a time tracking tool for fractionals that uses Google Calendar). I shared how much effort I put into storing and maintaining Google OAuth tokens. An Auth Token is a key, so it needs to be protected and preserved.

They asked: "Why aren't you using Nango?"

They outlined how Nango handles all the token logic—storage, refresh, expiry. At the time, I had already built my own. But since then, they’d gone further and decided Nango did not work for them either. So they built their solution: Aqueducts.

Aquaducts in a single feature solution, with only one mission: Manage Auth0 Tokens.

This week, I’d had enough. I carved out an hour to remove my DIY auth flow and integrate the Aquaduct SDK. It was fast—less than an hour end-to-end. I removed 541 lines of code, six API endpoints, cron jobs, and fragile token logic.

Sometimes, low-code means using the right library; sometimes, it means integrating a SaaS. In this case, the value was in breaking apart the feature, identifying what mattered, and going deeper—not wider—to move faster.

I deployed to my beta users by the end of the day. Less code is more code. :)

## New solutions in the Queue
I have an AI meeting engine that flags new tools mentioned during founder calls. Here’s what’s at the top of my research queue this week:

### 1. [Weavy.com](https://www.weavy.com/) - A stealth-mode AI founder texted me: "Have you seen this yet?".

Weavy is building dev tools for low code. That sentence alone made me stop. I jumped on a Zoom with the founders and was floored. They’re building no-code infrastructure for enterprise teams—not just drag-and-drop UIs but real embedded collaboration features, ready to wire into apps without rebuilding.

### 2. [Intellectible.com](http://intellectible.com) - AI Workflow Builder ([Jesse](https://www.linkedin.com/in/lozanojesse))

I met the founder in a Techstars Zoom call, and we demoed his product. During the call, I outlined one of my client’s AI stack problems—multi-layered, messy, and expensive. We needed a way to productize what we had built before we added another layer of complexity.

He said, “We can build that on our AI stack in one hour.”

At first, I shrugged it off as a tech flex. Then, I saw some of their target client use cases. They are focused on the high-end consulting market, Forrestors, BCP, etc.

Now, I’m carving out time (and budget) to explore their startup-focused release. If it delivers, it could remove months of engineering pain and get two clients to revenue in a fraction of the time.

It's not cheap, but the price might be important if the impact is as good as the CTO outlined. (Jesse, I will accept the beta invite once I return from vacation.)

### 3. [Deciphr.ai](https://deciphr.ai) - AI knowledge base for YouTubers. (Talk to [Nikhil](https://www.linkedin.com/in/nikhilsingh))

A startup out of Australia that’s been on my radar for months. They’ve built an AI query engine that runs on top of document folders—fast answers from messy files. The use case keeps popping up.

Their current ICP is YouTube content creators who need to access and reuse past content. Once these founders get to 50+ hours of content, the challenges of finding and reusing past materials impact their ability to grow their audiences.

I see a lot of other use cases for their tech.

I hope that in May, I can find the perfect MVP to justify a full deep dive.

## A Big Team Developer Perspective on AI
Last night in Chinatown, I shared a table with junior devs from a big Boston tech team. One of the developers mentioned that their company management now requires each developer to use at least $20 of Copilot per month.

Good? The developer did not understand the metric or its value. I do.

The second insight she shared was that much of her team would not use the tools provided.

60% of her team thinks that’s too much. AI was a pain, and they felt they did not need to be adapted.

But here’s what I told her: Use it. Max it out. This isn’t just a tool mandate—it’s a filtering system. Management is watching who **adapts** and who **resists**.

This is how layoffs will be made. **This is one of the metrics determining who goes and who stays.**

Every CEO and board I talk to is chasing one thing: **an AI strategy**. The real plan is simple: "Scale people with tools".

Use AI to turn one developer into three.

We’re (could be) heading into a recession, and smaller teams are coming. Headcounts will drop. Find the high-adopters now, before budgets get tight.

Pre-scale your team. Give them the tools to prove their value before they’re asked to.

## All Done!
It's not a great way to end the week, but this is the world startups will face this coming year.

I hope everyone has a great week. Enjoy the warm weather.


{% include articleFooter.html %}
