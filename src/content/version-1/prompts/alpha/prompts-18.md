---
caption: Standard 18
title: Use analytics tools that collect performance data.
version: "version-1"
standard: "standard-18"
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

### Question

- What analytics tool have you installed for the alpha?
- Is your SIRO happy with it?
- Who does analytics in the team during the alpha?
- In addition to the 4 KPI’s, what other KPI’s are you tracking during the alpha?

### Evidence

Service Manager able to:

- explain what analytics tool is installed for the alpha and that the SIRO is happy with this approach
- explain who in the team is responsible for identifying actionable data insights during the alpha
- explain what additional KPI’s they are tracking during the alpha
