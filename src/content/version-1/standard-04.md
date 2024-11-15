---
caption: Standard 4
title: Evaluate the privacy risks to make sure that personal data collection requirements are appropriate.
version: "version-1"
standard: "standard-4"
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
      - text: Information security
        href: "/{{ version }}/guides/information-security/"
      - text: User accounts and logins
        href: "/{{ version }}/guides/user-accounts-and-logins/"
---

{% if related.items.length %}
Related guides:

{% for item in related.items %}

- [{{item.text}}]({{item.href}})
  {{ item.description if item.description.length }}
{% endfor %}
{% endif %}
