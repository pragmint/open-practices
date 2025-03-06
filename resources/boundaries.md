# Boundaries by Gary Bernhardt

Resource type: video

https://www.destroyallsoftware.com/talks/boundaries

This presentation delves into the concept of using simple values rather than complex objects as the boundaries between components and subsystems in software development. It covers various topics such as functional programming, the relationship between mutability and object-oriented programming (OO), isolated unit testing with and without test doubles, and concurrency. Understanding and implementing these concepts can be immensely beneficial in managing dependencies with third parties.

If you're watching the video with your team(s), you may want to pause and ponder at the following points:

* 4:04
  * do we do this?
  * Benefits / Downside?
  * Do we want those benefits?
  * how valuable are they?
* 8:54
  * No Dependencies; Defined by Inputs & Output
  * "Natural Isolation"
  * Is this cheating? Is this just a mock by another name?
  * "Good" Abstraction?
* 9:09
  * Email is separated (hidden abstraction?)
  * Does the code need to know it's working with a DB or with an ORM?
    * with a BE or with Memory?
  * Can we find the dependencies in this code that it's behavior doesn't really need to care about?
* 9:20
  * Value is the Boundary (value = data; even OO Code is separate from it)
  * Where are potential value-boundaries in this file?
* 10:20
  * Interesting but not essential
  * Also subjective, not everyone agrees
* 13:58
  * Core & Shell
  * Shell has State
  * Shell knows about the ugly outside world
  * Where is the shell in our file?
  * Where can we extract cores from the shell?
  * Core makes Decisions; Shell knows Dependencies
* 20:00
  * How does this apply to microservices?
    * Kafka?
    * Grpc & protobuf?
  * How should we abstract our microservices?
