---
caption: Standard 25
title: Make a plan for the event of the service being taken temporarily offline.
version: "version-1"
standard: "standard-25"
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

- Do you have a disaster recovery plan in place for after the service is live and have you tested it?
- Have you evaluated your suppliers disaster recovery capability?
- Have you planned for the consequences of a forced shutdown after the service is live?
- Have you planned for a Distributed Denial of Service attack and other malicious attacks after the service is live? Have you tested it?
- Have you done sufficient load testing for after the service is live?
- Do you have a line into GovCertUK for reporting in the event of an incident?

### Evidence

Service Manager able to:

- explain their disaster recovery plan for the live service and how they have tested it
- explain what their suppliers disaster recovery capability is where appropriate
- explain how the service would deal with a forced shutdown of the live service
- explain how they will deal with a DDoS attack and other malicious attacks on the live service
- explain what load testing they have done for the live service
- confirm they are aware of GovCertUK and are aware of how to report an incident
