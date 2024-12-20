---
caption: Standard 25
title: Make a plan for the event of the service being taken temporarily offline.
version: "version-1"
standard: "standard-25"
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

- Do you have a disaster recovery plan?
- Have you evaluated your suppliers disaster recovery capability?
- Have you planned for the consequences of a forced shutdown in the alpha?
- Have you planned for a Distributed Denial of Service (DDoS) attack and other malicious attacks in the alpha?
- Have you done sufficient load testing for the alpha?
- Do you have a line into GovCertUK for reporting in the event of an incident?

### Evidence

Service manager able to:

- explain their disaster recovery plan for the alpha, including understanding their suppliers disaster recovery capability where appropriate
- explain how the service would deal with a forced shutdown in the alpha
- explain how they will deal with a DDoS attack and other malicious attacks in the alpha
- explain what load testing they have done for the alpha
- confirm they are aware of GovCertUK and are aware of how to report an incident
