---
caption: Standard 13
title: Use and contribute to open standards, common components and patterns
description: Build on open standards and common components and patterns from inside and outside government.
version: "version-3"
standard: "standard-13"
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

If you develop your own patterns or components, share them publicly so others can use them.

## Why it’s important

Using common components and patterns means you do not have to solve problems that have already been solved. By using a component or pattern that’s already been extensively tested, you can provide users with a good experience in a cost effective way. If you develop your own components or patterns, share them so that others can benefit from your work.

Open standards help services to work consistently - so you’ll spend less time trying to make systems “talk” to each other. And they help you to avoid getting locked into a particular supplier or technology - so when things change, you can change your approach.

## What it means

Service teams should:

- use open standards, and propose a new open standard if there is not one that already meets their needs
- use standard government technology components where possible
- maximise flexibility in their use of technology, for example by using and creating application programming interfaces (APIs) and, where possible, authoritative sources of data
- use common components and patterns, and share details of any new components or patterns they create or adapt (for example, by contributing to the GOV.UK Design System)

When services create data that’s potentially useful to others inside or outside government, they should publish them in an open, machine readable format, under an Open Government Licence (unless they have permission from the National Archives to use a different type of licence). This does not apply to data that contains personally identifiable information, information that’s sensitive (for example because it could affect national security), or where publishing the data would infringe the intellectual property rights of someone outside government.

## Related guidance

[Working with open standards](https://www.gov.uk/service-manual/technology/working-with-open-standards)

[Standard government technology components](https://www.gov.uk/service-toolkit#gov-uk-services)

[APIs](https://www.gov.uk/service-manual/technology/application-programming-interfaces-apis)

[GOV.UK Design System](https://design-system.service.gov.uk/)

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
