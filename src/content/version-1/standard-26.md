---
caption: Standard 26
title: Test the service from beginning to end with the minister responsible for it.
version: "version-1"
standard: "standard-26"
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
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}

- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
