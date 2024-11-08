---
caption: Standard 11
title: Choose the right tools and technology
description: Choose tools and technology that let you create a high quality service in a cost effective way. Minimise the cost of changing direction in future.
version: "version-3"
standard: "standard-11"
tags:
  - standard
  - version-3
layout: standard
eleventyComputed:
  permalink: "/{{ version }}/{{ standard }}/"
  eleventyNavigation:
    key: "{{ version }}-{{ standard }}"
    title: "{{ title }}"
    parent: "{{ version }}"
    subNavigation:
      label: "Sub-navigation"
      items:
        - text: Overview
          href: "/{{ version }}/{{ standard }}/"
          active: true
        - text: Alpha
          href: "/{{ version }}/{{ standard }}/alpha/"
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

## Why it’s important

When you make a decision about technology, you’re making a significant investment. The choices you make will have a huge impact on your ability to create, iterate and operate the service in a sustainable way.

## What it means

When considering technical architecture, choice of programming languages, development toolchain and other technology choices, service teams should:

- use appropriate tools and technologies to create and operate a good service in a cost effective way - for example, by automating things where possible
- be able to show that they’ve made good decisions about what technology to build and what to buy, including use of common platforms where appropriate
- understand total cost of ownership of the technology and preserve the ability to make different choices in future - for example, reducing the chances of getting locked into contracts for specific tools and suppliers by using open standards
- have an effective approach to managing any legacy technology the service integrates with or depends on

## Related guidance

[Choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction)

[Using common platforms](https://www.gov.uk/service-manual/technology/using-common-components)

[Working with open standards](https://www.gov.uk/service-manual/technology/working-with-open-standards)

[Moving away from legacy systems](/service-manual/technology/moving-away-from-legacy-systems)

<!-- ## Service standard points

[1\. Understand users and their needs](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs)

[2\. Solve a whole problem for users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem)

[3\. Provide a joined up experience across all channels](https://www.gov.uk/service-manual/service-standard/point-3-join-up-across-channels)

[4\. Make the service simple to use](https://www.gov.uk/service-manual/service-standard/point-4-make-the-service-simple-to-use)

[5\. Make sure everyone can use the service](https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service)

[6\. Have a multidisciplinary team](https://www.gov.uk/service-manual/service-standard/point-6-have-a-multidisciplinary-team)

[7\. Use agile ways of working](https://www.gov.uk/service-manual/service-standard/point-7-use-agile-ways-of-working)

[8\. Iterate and improve frequently](https://www.gov.uk/service-manual/service-standard/point-8-iterate-and-improve-frequently)

[9\. Create a secure service which protects users’ privacy](https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service)

[10\. Define what success looks like and publish performance data](https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data)

[11\. Choose the right tools and technology](https://www.gov.uk/service-manual/service-standard/point-11-choose-the-right-tools-and-technology)

[12\. Make new source code open](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open)

[13\. Use and contribute to open standards, common components and patterns](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns)

[14\. Operate a reliable service](https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service) -->
