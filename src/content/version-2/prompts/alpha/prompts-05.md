---
caption: Standard 5
title: Iterate and improve frequently
description: Build a service that can be iterated and improved on a frequent basis and make sure that you have the capacity, resources and technical flexibility to do so.
version: "version-2"
standard: "standard-5"
section: "alpha"
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
          active: true
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

## Alpha

### Questions

- What have you built and why?
- What is the cycle time of a story?
- How are you analysing and reacting to your user research?
- How have you derisked any technical challenges?

### Evidence

Service Manager able to:

- explain what they have built in alpha and why.
- explain the cycle time of a story during alpha.
- explain how they are analysing and reacting to user research.
- explain how they are derisking any technical challenges.
