---
layout: post
title: My Homelab Journey
subtitle: From running out of cloud storage to automating my home
tags: [homelab, raspberrypi, cluster]
author: Taeju Park
---

A homelab is easy to mistake for a hobby about hardware. For me it never really was. It started as a practical fix for a problem I couldn't ignore, and over time it grew into the platform I use to build, host, and automate almost everything at home. This is the story of how that happened — and why I think owning one is worth it.

## It started with a storage problem

Like most people, my photos and videos lived scattered across a phone here, a laptop there, an old device in a drawer. There was no real backup — just the quiet risk that one dead phone would take years of memories with it.

The obvious answer was the cloud. I leaned on Google Drive and Google Photos, and for a while it was fine. Then I hit the wall every heavy user eventually hits: I ran out of free storage, and the only way forward was a monthly subscription. What bothered me wasn't just paying — it was that the cost only ever moves in one direction. The more I stored, the more I'd owe, month after month, indefinitely. I was renting space for data I already owned.

So I started looking for another way.

## Discovering the NAS

That research led me to the NAS — network-attached storage. It was almost a perfect fit for my case: a device that lives in my home, holds all my media in one place, backs itself up, and answers to me instead of a subscription plan. I could keep my own data on my own hardware.

Setting it up was my first real taste of server management — storage pools, shares, permissions, remote access. I ran that NAS for about a year and was genuinely happy with it. The storage problem that started everything was solved.

## Wanting more: enter the Raspberry Pi

Being satisfied, it turns out, doesn't last long once you've gotten a taste for building things yourself. The NAS had shown me how much control self-hosting gives you, and I wanted a bigger challenge.

I started with a single Raspberry Pi. It's a tiny, cheap, low-power computer — the perfect sandbox. I used it to run small services that made everyday life a little smoother, and in the process I started to really understand what a "server" is and what it means to host a service that runs continuously, quietly, on my terms.

## From one Pi to a cluster

Once that mental model clicked, one Pi wasn't enough. I bought more and wired them together into a cluster — a small group of machines working as one, sharing the load of running multiple self-hosted services at home.

This was the turning point. I wasn't just running an appliance anymore; I was operating a little piece of infrastructure. Deploying services, keeping them healthy, handling failures, thinking about networking and reliability — the homelab had quietly become a real system.

## Where it took me professionally

What I didn't expect was how far those lessons would carry. The concepts I picked up keeping my cluster alive — automation, reliability, infrastructure-as-code, thinking in terms of services rather than servers — turned out to be the exact same concepts that matter at an organizational scale.

My homelab became the place where I could learn by doing, break things safely, and build real intuition. That intuition is what I now bring to solving real-world problems in production. The hobby and the profession fed each other, and still do.

## Today: automating the home

These days the homelab has come full circle. It's no longer just about storing files or hosting services for their own sake — it's the brain of my house. I use it to automate the things around me: opening the garage door, watching the outdoor cameras, and tying together the smart devices throughout the home.

The homelab quietly runs in the background, and the house works a little better because of it.

## The ideal

That, to me, is what owning a homelab is really about. It starts as a way to solve one problem, but what you actually gain is ownership — over your data, your services, and your own learning. It's a place to be curious without asking permission, where a practical fix can grow into real skill and, eventually, into a home that runs the way you want it to.

It started with running out of storage. It became something I'll keep building for a long time.
