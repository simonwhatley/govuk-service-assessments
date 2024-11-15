---
caption: Standard 18
title: Test with the minister
description: Test the service from beginning to end with the minister responsible for it.
version: "version-2"
standard: "standard-18"
section: "overview"
tags:
  - standard
  - version-2
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

You must test your service with the minister to meet point 18 of the Digital Service Standard.

You’ll have to explain how you did this at your [service assessments](https://www.gov.uk/service-manual/service-assessments/how-service-assessments-work).

## Why you must test with the minister

Ministers are accountable for everything produced by their departments, so you need to show them your service before it goes live.

## How you’ll be assessed at alpha

To pass the alpha assessment, you need to confirm that the minister responsible for the service will test it before it goes live.

## How you’ll be assessed at beta

To pass the beta assessment you need to explain how you’ll test the service with the minister responsible for it.

## How you’ll be assessed at live

To pass the live assessment, you need to show evidence (a video, photos or a signed letter) that the minister responsible for the service has tested the full service from beginning to end, including any legacy or offline parts.

## Related guides

Find out more about [service assessments](https://www.gov.uk/service-manual/service-assessments)
