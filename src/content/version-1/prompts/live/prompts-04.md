---
caption: Standard 4
title: Evaluate the privacy risks to make sure that personal data collection requirements are appropriate.
version: "version-1"
standard: "standard-4"
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

- What have you done to ensure compliance with the Data Protection Act?
- What data goes where and why?
- Who is the data controller for the service?
- How have you ensured you follow cookie policy?
- Has a Privacy Impact Assessment been carried out?
- Has the SIRO signed off any risks?

### Evidence

Service Manager able to:

- explain how the service complies with the Data Protection Act
- explain data flows i.e. what data goes where and why
- confirm who the data controller is for the service
- explain how the service complies with cookie policy
- confirm that a Privacy Impact Assessment has been carried out and that the SIRO has signed off any risks
