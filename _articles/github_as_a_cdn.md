---
title:  Github as a CDN?
subtitle: Github is great for hosting code, git repositories, but it has other superpowers that often get overlooked.
layout: default
published: true
date: 2024-05-09 00:00:00
order: 100
linkCard: /assets/page/github-cdn-banner-3.png
---

{% include subStyles.css %}

<img src="/assets/page/github-cdn-banner-3.png" class="img-fluid">

I have recently been rethinking a number of technology stack components to see if they could
serve a different purpose. [GitHub](https://github.com) has been my favorite for a while now. Github.com
is the go-to service to host GIT repositories, used by software teams around the world to securely host
their code bases.

> This site is hosted on GitHub, using their 'Github Pages'. It supports SSL (free) and custom domains.
Using Jekyll for templating.

Recently I needed a place to dump some images from an AirTable project into a web storage solution
that I could use on outside projects. AirTable is happy to host images, but their image paths have
expiration timers. Basically, if you are on AirTable, all is good, the image URLs work. If you want
to use the images off of their service, the URLs only function for 24 hours, then you get a 404 message.

No love. :(

#### Not AWS S3 Again

The traditional place to solve this image hosting requirement is on AWS S3. For several reasons,
I am not an AWS fan. I wanted a simpler solution. Not code-free, but just not S3. (Using S3, with
CloudFront service seemed too old school)

#### Github is my CDN

Hosting static HTML pages on GitHub is great, but it can also host images and files. Lots of them. So I uploaded
a few images to a folder and committed them into a single-purpose git repository. This works, but the URL path
is long and dirty. While it worked, it felt too tech-centric.

[fCTO-CDN Repo (Public)](https://github.com/d1b1/fCTO-CDN)

> https://raw.githubusercontent.com/d1b1/fCTO-CDN/main/less-code/logos/rec24DyWSgs2KzUR0.png

Just because GitHub was the host, did not mean I needed to send all that traffic to their servers.

So I started looking for a way to have a cleaner URL and cache the images, just as a CDN like S3+CloudFront
handles images. Content Delivery Networks (CDN) spread your images around the internet and set up local caches
that are fast to access.

#### A CDN Wrapper
I found [TwicPics.com](https://twicpics.com). This is a service that does just what AWS CloudFront does. It
just does it all without having to set up an AWS account, set up IAM, and set up credentials. (The 'CISO' in me views AWS
as a huge cybersecurity issue waiting to happen.)

So I signed up for a [Twicpics.com](https://twicpics.com) account, set up a workspace, and set a URL path. The URL
path gives me a cleaner URL to use in my '[Low Code Cookbook](https://low-code.stephansmith.solutions)'. The
CDN proxies any requests to the actual GitHub Repo URL. This removes the Github URL from the image page.

<img src="/assets/page/twicpics-setup.png" class="img-thumbnail shadow-lg">
<i style="font-size: 12px;">(Path to Source URL)</i>

And it offers traditional image caching. The first time an image is called, GitHub serves the image. The next
requests are returns from the CDN cache and are never passed to GitHub.

### Missing Images
Additionally, the CDN proxy handles missing images gracefully. I set a missing image setting so that if my
application requests a missing image, the application gets a placeholder. Not a huge issue, but it's clean.
I like clean.

This means that my react app does not use the `onError()` to handle 404 image sources.

### Programmatic Uploads to the GitHub CDN
Manual solutions are great as a fallback for small fixes or single tasks, but I needed a way to keep the GitHub
CDN repository in sync with my AirTable data. Each evening, I wanted a process to migrate my data into an Algolia
search index, and store the AirTable images (attachments) into a CDN (i.e. Github Repo).

It turns out GitHub Git repositories are 100% accessible via code. I set up a `personal access token` and updated my
sync code to store each image in the repo, via a file commit. This is no different than the daily activities
we do when we check code (files & images) into a git repo.

Here is a gist for this script: [AirTable to Github Gist](https://gist.github.com/d1b1/8953c455e4934efea9d04119be9da8fe)

#### So what is this?
So I now have a free CDN, with a caching proxy, all accessible via code. Each night a CRON process runs, and bingo,
GitHub is now my content delivery network. And AWS-less CDN.

One bonus of this approach is that I do not store image URLs in a datastore. My Low Code Cookback app is
built in react-js and uses [Algolia](https://algolia.com) for the full-text facetted searches. It just uses each AirTable
ID to call the proxy to show an image.

> https://__less-code.twic.pics__/logos/#####.png

#### Bonus Feature
A good CDN proxy like TwixPics offers image resizing. So with a few teaks, I can serve (on the fly) different
size images (thumbnails to banners) without having to run a process to resize and store them.

<img src="/assets/page/cnd-html-example.png" class="img-fluid shadow-lg" style="border:1px solid #DFDFDF;">
<i style="font-size: 12px;">(Example from the Cookbook. FYI, Unified.to rocks)</i>

Also, [Twicpics.com](https://www.twicpics.com/) offers custom domains. So if I were not a cheap Yankee Coder, I would
cough up for a paid account and upgrade the proxy URL to use my domain. This would be nice to have, but not really needed.

> https://__less-code.twic.pics__/ becomes https://__cdn.StephanSmith.solutions__/

<div class="mt-5 tech-note">
    <h5>
        CEO Tech Note
    </h5>
    <p>
        So what do you need to know? Nothing really. You need to have a top-level understanding of what a Content Delivery Network, and how it is used in your team's workflow and products. A CDN is not a mission critical feature.
        <!-- You might want to read the <a href="/ceo_technology_primer">Non-Technical Founder Primer</a> -->
    </p>
</div>

{% include articleFooter.html %}
