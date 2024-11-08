---
caption: Standard 6
title: Evaluate tools and systems
description: Evaluate what tools and systems will be used to build, host, operate and measure the service, and how to procure them.
version: "version-2"
standard: "standard-6"
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

Describe the languages, frameworks, and other technical choices you’ve made in alpha, and how those will affect the decisions you make in beta. Describe the development toolchain that you would like to select for beta and why.

### Evidence

Service Manager able to:

- describe the languages, frameworks, and other technical choices they’ve made in alpha, and how this will affect the decisions they make in beta.
- describe the development toolchain they would like to select for beta and why.
