---
caption: Standard 18
title: Use analytics tools that collect performance data.
version: "version-1"
standard: "standard-18"
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

- What analytics tool have you installed?
- Has the SIRO signed this off?
- Have you anonymised the user IP address?
- Have you opted out of data sharing with 3rd parties?
- In addition to the 4 KPIs, what other KPIs are you tracking?
- Are you able to track progression through your transaction so you can identify areas of poor performance?
- Have you tracked exit paths?
- Have you tracked outbound links?
- Who in the team is responsible for identifying actionable data insights?
- Have you built a funnel and who will work on it?

### Evidence

Service Manager able to:

- explain what analytics tool they have used during the alpha and intend to use for the beta
- show that the SIRO has signed it off for the beta
- explain for their chosen analytics tool that they have anonymised the user IP address and have opted out of sharing data with 3rd parties for the beta
- explain what additional KPI’s they have tracked during the alpha and will track in the beta
- explain how they will track progression through the transaction so they can identify areas of poor performance in the beta
- explain how they will be tracking exit paths and outbound links for the beta
- explain who in the team was responsible for identifying actionable data insights during the alpha and who will be responsible in the beta
- explain how they have built a funnel and who will be working on it
