---
caption: Standard 11
title: Plan (with GDS) for the phasing out of any existing alternative channels, where appropriate.
version: "version-1"
standard: "standard-11"
section: "beta"
tags:
  - prompt
  - version-1
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
          active: true
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

### Questions

- What is your plan for increasing digital take up during the beta?
- Tell us about your evidence base to support these plans?
- How are you able to assess if users are shifting away from your non-digital channels to your digital one?
- How have you tested the effectiveness of your messaging with real users?
- How did you identify users’ perceived risks and how do you know it’s working?

### Evidence

Service Manager able to:

- explain how they plan to increase digital take up during the beta
- explain the evidence base behind their plans for increasing digital take up
- demonstrate (at least) weekly analytics/metrics for usage volumes across channels
- demonstrate how your messaging has improved based on user insight and how it has performed based on analytics
- demonstrate that you have addressed users perceived risk throughout user research
