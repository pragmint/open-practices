# Separation of Concerns

This strategy applies the same at the code level as it does the architectural level. By organizing systems into simple and well encapsulated abstractions, the overall complexity of those systems can be reduced.

## Resources

### Encapsulation

- [Code examples on how to manage complexity with encapsulation](https://8thlight.com/blog/kevin-buchanan/2014/11/04/mistaking-encapsulation-for-abstraction.html)
- [Encapsulating behavior](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_32)

#### Law of Demeter

- [Introduction of Law of Demeter](https://dzone.com/articles/the-genius-of-the-law-of-demeter)
- [What it looks like when Law of Demeter is broken](https://www.youtube.com/watch?v=IU29HF6ZEJ4)
- [Temporal coupling and the Law of Demeter](https://practicingruby.com/articles/temporal-coupling-and-the-law-of-demeter)

#### Single Responsibility Principle

- [Introductory Blog](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
- [Blog that introduces some nuance](https://qualitycoding.org/single-responsibility-principle/)
- [PDF of a Case Study showing SRP at the cloud architecture level](https://azure.microsoft.com/mediahandler/files/resourcefiles/e56cf87f-eb90-49bb-b40c-5c4247b7fa7c/Cloud-SOLID-The-single-responsibility-principle.pdf)
- [How SRP relates to DDD](https://dzone.com/articles/the-most-important-rule-in-software)
- [Meme](https://1.bp.blogspot.com/-UsdrVVdzhEk/UG21yvzLCHI/AAAAAAAAHd8/GsPSmsfGMP0/s320/Single+Responsibility+Principle.jpeg)
- [Functional code example](https://spin.atomicobject.com/2017/01/09/functions-single-responsibility-principle/)
- [Sandi Metz's talk on SOLID OOO](https://vimeo.com/12350535)

### Reusability / Configurability

- Drawbacks of reuse [perspective 1](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_07) and [perspective 2](http://www.bennorthrop.com/Essays/2018/the-reality-of-reuse.php)
- [DRY](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_30)
- [DRY can uncover performance bottlenecks](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_91)
- [CUPID - How properties can be more useful than principles](https://dannorth.net/2022/02/10/cupid-for-joyful-coding/)

#### Open / Closed Principle

- [Introductory Blog](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html)

#### Dependency Inversion Principle

- [Dependency Inversion Applied](https://www.martinfowler.com/articles/dipInTheWild.html)

### Cohesion

- [Singletons create coupling](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_73)

#### Interface Segregation Principle

- [Introductory Blog](https://reflectoring.io/interface-segregation-principle/)
