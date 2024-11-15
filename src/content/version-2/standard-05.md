---
caption: Standard 5
title: Iterate and improve frequently
description: Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.
version: "version-2"
standard: "standard-5"
section: "overview"
tags:
  - standard
  - version-2
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

You must iterate your service and improve it frequently to meet point 5 of the Digital Service Standard.

You’ll have to explain how you’ve done this at your [service assessments](https://www.gov.uk/service-manual/service-assessments/how-service-assessments-work).

## How point 5 improves your service

You need to build a service which you can iterate and keep improving so that you can:

- easily respond to changes in policy which affect the service
- make sure your service keeps meeting user needs

## How you’ll be assessed

Your assessment and the questions assessors ask you will vary depending on your service and what it does.

To pass the alpha, beta and live assessments, you usually need to:

- explain what you’ve built in that phase and why you built it
- describe the lifecycle of a user story from user research to production
- show you understand how your service is built to meet user needs
- explain your process for identifying and prioritising insights from user research
- show you can move user stories quickly and smoothly between user research and production
- show there’s minimal risk associated with the technology you chose
- prove you have the ability to deploy software frequently with minimal disruption to users
- show you’re analysing user research and using it to improve your service
- show you’re solving any technical problems you’ve found

At the beta assessment, you also need to explain:

- how long you expect your service to be in beta and why
- your way of [deploying software](https://www.gov.uk/service-manual/making-software/deployment.html), ie how you can deploy frequently with minimum impact on users

At the live assessment you also need to explain:

- how you’re practising zero downtime deployments in a way that does not stop users using the service
- how you plan to have enough staff to keep improving the service

## Explain your service’s evolution

At each phase you should explain how your service has evolved since its last assessment.

## Related guides

Find out more about:

- [agile delivery](https://www.gov.uk/service-manual/agile-delivery)
- [service assessments](https://www.gov.uk/service-manual/service-assessments)
