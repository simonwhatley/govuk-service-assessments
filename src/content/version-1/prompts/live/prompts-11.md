---
caption: Standard 11
title: Plan (with GDS) for the phasing out of any existing alternative channels, where appropriate.
version: "version-1"
standard: "standard-11"
section: "live"
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
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: true
---

### Questions

- How did you identify users’ perceived risks and how do you know it’s working?
- How have you used analytics and user research to reduce drop-out rates for your digital service?
- How do you know significant channel shift is happening?
- What is your plan for phasing out non-digital channels?
- What is your plan for increasing digital take up to 82% over the next 5 years?
- Tell us about your evidence base to support these plans?

### Evidence

Service Manager able to:

- explain their plan for moving users to the digital service including year by year targets for increasing digital take up for the next 5 years
- explain their plan to phase out non-digital channels as digital take up increases over the next 5 years
- explain the evidence base behind their plans for increasing digital take up and phasing out non-digital channels
- show and explain usage volumes (and trends) per channel
