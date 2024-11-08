---
caption: Standard 2
title: Solve a whole problem for users
description: Work towards creating a service that solves a whole problem for users, working with other teams and organisations where necessary.
version: "version-3"
standard: "standard-2"
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

Services that do not work well with other related services make it hard for users to do what they need to. For example, working out which of several similar schemes they’re eligible for or choosing the right form to fill in out of several near-identical options.

However we should be careful not to build big, complicated services that are not intuitive to use because they try to do too much.

And it does not mean trying to fix everything at once. Making incremental and frequent improvements benefits users.

Just make sure the increments are working towards bringing related content and services together into a journey that makes sense to users, irrespective of which department or team they ‘belong’ to. Because users should not have to understand how government works in order to use public services.

## What it means

Service teams should:

- understand any genuine constraints that affect the service - for example, legislative constraints - and work with policy professionals to solve any problems those constraints are causing
- make sure services are scoped according to how users think and what they need to do - not too narrow or too broad
- be able to explain how the service the team is working on will join up with other things into a journey that solves a whole problem for users
- take responsibility for agreeing how this user journey will work with organisations responsible for different parts of it - for example, with the GDS content team to join up GOV.UK content with the service you’re working on
- consider alternatives to creating a service - for example publishing website content, running a campaign, partnering with a non-government organisation or making data or an Application Programming Interface (API) available to third parties
- work in the open so that people inside and outside the organisation know what the service team is doing - increasing the potential for collaboration and reducing duplication of effort (for example by publishing business cases, mission statements, research findings, user experience maps, maps of existing services and product roadmaps showing plans to develop new features)
- work towards minimising the number of times users have to provide the same information to government (while respecting users’ privacy), for example by using a single sign-on
- work with other teams and organisations where that’s necessary to solve a whole problem for users

## Related guidance

[Scoping your service](https://www.gov.uk/service-manual/design/scoping-your-service)

[Developing a roadmap](https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap)

[Working across organisational boundaries](https://www.gov.uk/service-manual/agile-delivery/working-across-organisational-boundaries)

## Related blog posts

[How service teams are solving a whole problem for users](https://services.blog.gov.uk/2022/03/16/how-service-teams-are-solving-a-whole-problem-for-users/)

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
