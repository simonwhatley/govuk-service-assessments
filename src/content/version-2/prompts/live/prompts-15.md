---
caption: Standard 15
title: Collect performance data
description: Use tools for analysis that collect performance data. Use this data to analyse the success of the service and to translate this into features and tasks for the next phase of development.
version: "version-2"
standard: "standard-15"
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

## Live

### Questions

- What have you instrumented and why? Have you modelled user journeys, and are you able to track progression through your service so you can identify completions and areas of poor performance?
- Where appropriate, have you built a funnel, exit paths?
- What tools are you using to collect data?
- Has the SIRO signed these off?
- Where appropriate, have you anonymised the user IP address, have you opted out of data sharing with 3rd parties?
- What further analysis has been carried out on the service and how has this impacted on the backlog?
- What metrics and data sources have you chosen to measure your assisted digital support and why?
- What is the ongoing roadmap for performance analysis, including assisted digital support?
- Once live, who in the team is responsible for identifying actionable data insights, including assisted digital support?
- What is the next performance analysis user story?

### Evidence

Service Manager able to:

- explain what data sources and analysis have been undertaken in beta.
- explain how the shape of the service has influenced the choice of metrics, data points and data sources.
- explain the choice of analysis tools to be used on the live service.
- show that appropriate information security and privacy issues have been addressed.
- explain how they have modelled user journeys and will track progression through the service so they can identify completions and areas of poor performance in beta.
- talk clearly about evidence from qualitative and quantitative data, what they learned from these sources and what changes to user needs/improvements they identified.
- talk through how these were prioritised and what features were changed or implemented.
- explain how assisted digital support will be measured and why.
- talk about the ongoing roadmap for performance analysis, and explain who in the team is responsible for identifying actionable data insights in live, including for assisted digital support.
- explain the next performance analysis user story.
- demonstrate start and end pages with GOV.UK and that these are optimised.
