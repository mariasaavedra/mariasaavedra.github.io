+++
title = 'Authentication Issues in Safari and iOS Browsers'
date = 2023-11-25T01:41:06-06:00
draft = false
+++

## The Problem:
I recently came across a time-consuming bug on a fresh application build. The issue, authentication operated perfectly on Chrome (Desktop), yet authentication was completely broken on Chrome/iOS. This issue was compounded by the fact that the issue was not limited to Chrome, but also affected Firefox and Safari on iOS.

The problem wasn't clear to me at first: Authentication, which performed as expected in Chrome on desktop environments was not working on iOS at all in any browser. However, when I tested on my Safari desktop browser, authentication also didn't work. This was a critical clue that lead me to the solution.

### Understanding Intelligent Tracking Prevention (ITP)

My first hunch to take a look at the privacy settings. This lead me to understanding a critical feature of Safari - Intelligent Tracking Prevention (ITP). Recent versions of Safari have introduced ITP as a default feature; a privacy feature that blocks third-party cookies. This feature is enabled by default on all Safari browsers. It appears this feature was introduced to all browsers in in 2020, as reported by [Apple](hhttps://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/).

For more information on how to access Safari's Preferences, you can refer to the [official Apple support guide](https://support.apple.com/lv-lv/guide/safari/sfri40732/mac).

After disabling this option, Auth0 authentication worked as expected on Safari. Voila! The revelation was clear: Safari's ITP was blocking the cookies essential for Auth0's session management.

But why was it affecting Chrome on mobile, but not on Desktop? The discovery was twofold: not only was Safari's ITP blocking essential cookies for Auth0's session management, but another quirk compounded the issue. All browsers on iOS, regardless of the brand, utilize the Webkit engine—this includes Chrome and Firefox on iOS. This means that the ITP settings affect all these browsers, not just Safari.

I was surprised I hadn't learned this sooner. Apparently, Apple is considering dropping this requirement, as reported by [9to5Mac](https://9to5mac.com/2023/02/07/new-iphone-browsers/).

## The Solution:

Faced with this challenge, two solutions presented themselves: restructuring our session management to be server-side or adopting Auth0's custom domain feature. P.S I would not recommend saving session data in local storage, as this is a security risk.

After weighing both options, I opted for Auth0's custom domain feature. This solution, although accompanied by a $23/month cost, was an instant resolution.

Implementing the custom domain was straightforward. The impact was immediate and authentication became consistent and reliable across all browsers.

## Reflections

This experience highlighted the importance of understanding browser-specific behaviors, particularly when dealing with security and authentication. Emulating devices via Developer Tools is a useful tool for testing, but it is not a substitute for real-world testing, had we tested our application on an actual iOS device, we would have caught this issue much earlier in the development process.
