---
caption: Standard 8
title: Analyse the prototype service’s success, and translate user feedback into features and tasks for the next phase of development.
version: "version-1"
standard: "standard-8"
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

- What testing did you do during the beta?
- What did you plan to test?
- How did you test the beta with end users?
- What did you learn?
- What did you change?
- What didn’t you change and why?
- Have you agreed start and end pages with GOV.UK

### Evidence

Service Manager able to:

- show videos of usability testing during beta
- talk clearly about user research reports, indicating where a service required remediation
- talk through substantial iteration in the design and content of the service during the beta
- have agreed start and end pages with GOV.UK and these are optimised
