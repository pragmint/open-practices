# OpenTelemetry Q&A Featuring Hazel Weakly

Resource type: Video + Transcript

Video: https://www.youtube.com/watch?v=wMJEgrUnX7M  
Transcript: https://github.com/open-telemetry/sig-end-user/blob/main/video-transcripts/transcripts/2023-09-13T19:26:10Z-opentelemetry-q-a-feat-hazel-weakly.md

## What it’s about

Hazel Weakly shares hard-won lessons from early OTel implementations. The Q&A touches on schema design, avoiding fragmentation, and how to get engineers comfortable with the shift from “logs/metrics/traces” to a unified event model.

## Why it’s worth watching/reading

It’s practical guidance from someone in the trenches, not just theory. Hazel’s framing of schema stability as the single most important adoption factor is a must-hear for any team starting out with OTel.

## Pause and Ponder

- How can we signal breaking schema changes clearly to devs consuming telemetry?  
- When is it safe to add custom attributes, and when should we standardize them?  
- What governance models help keep telemetry consistent across many repos?  
- What cultural frictions are likely blockers for adoption in our org?  

## Takeaway

OTel adoption lives or dies on schema discipline. Versioning and governance aren’t “nice to haves” — they’re the foundation that keeps telemetry comparable across services.