---
caption: Standard 7
title: Establish performance benchmarks, in consultation with GDS, using the 4 key performance indicators (KPIs) defined in the manual, against which the service will be measured.
version: "version-1"
standard: "standard-7"
section: "overview"
tags:
  - standard
  - version-1
layout: standard
permalink: /version-1/standard-7/
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
      - text: Measurement
        href: "/{{ version }}/guides/measurement/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}
- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
