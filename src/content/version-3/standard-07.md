---
caption: Standard 7
title: Use agile ways of working
description: Create the service using agile, iterative user-centred methods.
version: "version-3"
standard: "standard-7"
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

Using agile methods means getting your service in front of real users as soon as possible. Then observing and generating data on how they use it, and iterating the service based on what you’ve learned.

Because you’re not specifying everything up front before you’ve developed an understanding of what users need, agile methods reduce the risk of delivering the wrong thing.

## What it means

Service teams should:

- use agile ways of working - inspecting, learning and adapting as they go
- have governance arrangements that are consistent with the agile governance principles and make sure that the right people know what’s happening with the service, at the right level of detail (including, for example, the minister or chief executive)
- where appropriate and proportionate, test the service with the minister or relevant senior stakeholder

## Related guidance

[Agile delivery](https://www.gov.uk/service-manual/agile-delivery)

[Governance principles for agile service delivery](https://www.gov.uk/service-manual/agile-delivery/governance-principles-for-agile-service-delivery)

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
