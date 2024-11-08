---
caption: Standard 5
title: Evaluate what tools and systems will be used to build, host, operate and measure a service, and how to procure them.
version: "version-1"
standard: "standard-5"
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

## Live

### Questions

- How did you choose technology for the live service?
- What tools are you using for the live service?
- What options were considered and what factors led to the decision?
- How are you avoiding lock-in?
- Are the contracts in place suitably flexible and delivering value for money?
- What procurement vehicles have you used and why?
- What changes are you planning to make after the service is live?
- What metrics are you collecting from the running system ?
- How will you monitor and manage capacity after the service is live?
- How will you respond to increases in demand after the service is live?
- Do the operational team know what to do in the event of an incident on the service and have you tested this?

### Evidence

Service Manager able to:

- explain what technology and tools the service has bought, built and will use for the live service and why they have chosen them
- explain how they are avoiding lock in, how their contracts are suitably flexible and how they are delivering value for money
- explain what procurement vehicles they have used and why
- explain what changes they are planning to make after the service is live
- explain what metrics they are collecting from the running system
- explain how they will monitor and manage capacity after the service is live, and how they will respond to increases in demand
- explain the process in the event of an incident on the service and how this has been tested
