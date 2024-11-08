---
caption: Standard 15
title: Collect performance data
description: Use tools for analysis that collect performance data. Use this data to analyse the success of the service and to translate this into features and tasks for the next phase of development.
version: "version-2"
standard: "standard-15"
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

- What data and analysis have you done during discovery from existing or legacy systems or the wider digital landscape?
- What analysis have you made on the alpha?
- Who in the team is responsible for analysis during the alpha, including for assisted digital support?

### Evidence

Service Manager able to:

- explain what data sources and analysis were undertaken in discovery.
- explain how the shape of the service has influenced the choice of metrics, data points and data sources.
- explain who in the team is responsible for identifying actionable data insights during alpha, including assisted digital support.
- talk clearly about evidence from qualitative and quantitative data, what they learned from these sources and what changes to user needs/improvements they identified.
- talk through how these were prioritised and what features were changed or implemented.
