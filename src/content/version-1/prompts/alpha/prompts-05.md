---
caption: Standard 5
title: Evaluate what tools and systems will be used to build, host, operate and measure a service, and how to procure them.
version: "version-1"
standard: "standard-5"
section: "alpha"
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
          active: true
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
---

### Questions

- How did you choose technology for the alpha?
- What tools are you using for the alpha?
- What options were considered and what factors led to the decision?
- How are you avoiding lock-in during the alpha and beyond?
- Are the contracts in place suitably flexible and delivering value for money?
- What procurement vehicles have you used and why?
- What changes are you planning to make?

### Evidence

Service Manager able to:

- explain what technology and tools the service has bought, built and uses for the alpha and why they have chosen them
- explain how they are avoiding lock in, how their contracts are suitably flexible and how they are delivering value for money
- explain what procurement vehicles they have used and why
- explain what changes they are planning to make
