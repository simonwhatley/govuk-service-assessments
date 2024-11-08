---
caption: Standard 8
title: Analyse the prototype service’s success, and translate user feedback into features and tasks for the next phase of development.
version: "version-1"
standard: "standard-8"
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

## Beta

### Questions

- What prototype testing have you done so far?
- What did and do you plan to test?
- How did and do you test the prototype with end users?
- What have you learnt?
- What did you change?
- What didn’t you change and why?
- How many other versions of the prototype did you try?
- Why did you choose this version?
- Have you started discussions with GOV.UK about start and end pages?

### Evidence

Service Manager able to:

- show videos of usability testing
- talk clearly about user research reports, indicating where a service required remediation
- talk through substantial iteration in the design and content of the service during the alpha
- show they have discussed and agreed start and end pages with GOV.UK and these are optimised
