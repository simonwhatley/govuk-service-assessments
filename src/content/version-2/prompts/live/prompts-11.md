---
caption: Standard 11
title: Make a plan for being offline
description: Make a plan for the event of the digital service being taken temporarily offline.
version: "version-2"
standard: "standard-11"
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

### Questions

- Explain the impact upon the users of the service being unavailable for any length of time and how has that changed since beta?
- How are you ensuring your selected technology and platforms still meet your availability requirements?
- What is your data recovery strategy and how often are you testing it?
- Explain what things are most likely to take you offline and what mitigations you are considering?
- What is your strategy for dealing with an incident? Who is responsible and what decisions can they make?

### Evidence

Service Manager able to:

- explain the impact upon the users of the service being unavailable for any length of time and how that has changed since beta.
- explain how they are ensuring their selected technology and platforms still meet their availability requirements.
- explain their data recovery strategy and how often they are testing it.
- explain what things are most likely to take the service offline and what mitigations they are considering.
- explain their strategy for dealing with an incident, including who is responsible and what decisions they can make.
