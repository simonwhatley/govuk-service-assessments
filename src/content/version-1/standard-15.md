---
caption: Standard 15
title: Make all new source code open and reuseable, and publish it under appropriate licences (or provide a convincing explanation as to why this cannot be done for specific subsets of the source code).
version: "version-1"
standard: "standard-15"
section: "overview"
tags:
  - standard
  - version-1
layout: standard
eleventyComputed:
  permalink: "/{{ version }}/{{ standard }}/"
  eleventyNavigation:
    key: "{{ version }}-{{ standard }}"
    title: "{{ title }}"
    parent: "{{ version }}"
    subNavigation:
      label: "Sub-navigation"
      items:
        - text: Overview
          href: "/{{ version }}/{{ standard }}/"
          active: true
        - text: Alpha
          href: "/{{ version }}/{{ standard }}/alpha/"
          active: false
        - text: Beta
          href: "/{{ version }}/{{ standard }}/beta/"
          active: false
        - text: Live
          href: "/{{ version }}/{{ standard }}/live"
          active: false
  related:
    items:
      - text: Choosing technology
        href: "/{{ version }}/guides/choosing-technology/"
      - text: Open standards and licensing
        href: "/{{ version }}/guides/open-standards-and-licensing/"
      - text: Culture that supports change
        href: "/{{ version }}/guides/culture-that-supports-change/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}

- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
