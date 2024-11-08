---
caption: Standard 5
title: Iterate and improve frequently
description: Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.
version: "version-2"
standard: "standard-5"
section: "live"
tags:
  - prompt
  - version-2
layout: standard
eleventyComputed:
  permalink: "/{{ version }}/{{ standard }}/{{ section }}/"
  eleventyNavigation:
    key: "{{ version }}-{{ standard }}-{{ section }}"
    title: "Prompts for ‘{{ title }}’"
    parent: "{{ version }}"
    subNavigation:
      label: "Sub-navigation"
      items:
        - text: Overview
          href: "/{{ version }}/{{ standard }}/"
          active: false
        - text: Alpha
          href: "/{{ version }}/{{ standard }}/alpha/"
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

## Live

### Questions

- What have you built and why?
- How have you ensured zero downtime deployments or otherwise ensured that there is no user impact to doing a release?
- Describe the lifecycle of a story from user research to production.
- How will you staff/pay for the continued improvement of the service?

### Evidence

Service Manager able to:

- explain what they have built to this point and why.
- explain how they have ensured zero downtime deployments or otherwise ensured there is no user impact to doing a release.
- describe clearly the lifecycle of a story from user research to production.
- explain how they will staff/pay for continued improvement of the service.
