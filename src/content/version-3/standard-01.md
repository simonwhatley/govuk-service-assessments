---
caption: Standard 1
title: Understand users and their needs
description: Develop a deep understanding of users and the problem you’re trying to solve for them.
version: "version-3"
standard: "standard-1"
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

Look at the full context to understand what the user is trying to achieve, not just the part where they have to interact with government.

## Why it’s important

Understanding as much of the context as possible gives you the best chance of meeting users’ needs in a simple and cost effective way.

Focusing on the user and the problem they’re trying to solve - rather than a particular solution - often means that you learn unexpected things about their needs.

The real problem might not be the one you originally thought needed solving. Testing your assumptions early and often reduces the risk of building the wrong thing.

## What it means

Service teams should learn as much as possible about the problem users need them to solve by:

- doing user research to understand what users need - and, where relevant, secondary research and analysis
- building quick, throwaway prototypes to test their hypotheses
- using web analytics and other data that’s available (for example, from government call centres or third party services to enhance their understanding of the problem)

## Related guidance

[Learning about users and their needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs)

[Making prototypes](https://www.gov.uk/service-manual/design/making-prototypes)

## Related blog posts

[How the GOV.UK Notify team used contextual research to improve the service](https://userresearch.blog.gov.uk/2018/06/12/how-were-using-contextual-research-to-improve-gov-uk-notify/)

[How GOV.UK uses data to help understand user needs](https://gds.blog.gov.uk/2014/08/12/helping-government-find-user-needs-with-analytics/)

[How a team used rich data from Citizens Advice to create insight dashboards](https://gds.blog.gov.uk/2018/01/10/working-with-citizens-advice-and-its-amazing-data/)

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
