# Automated Testing

Automated tests are scripts that execute code and verify their results against the scripted expectations. This enables developers to (if done correctly) inexpensively determine if the software being tested is working as expected.

This is perhaps the most important concept as it relates to building quality software. Yet, it's strangely controversial. Part of the controversy is due to the fact that poorly written software doesn't have proper entry seams for tests to hook into. To the untrained eye, those tests are complicated therefore not worth writing/maintaining. To the trained eye, that's a valuable signal to the reader pointing in the direction of necessary refactoring opportunities.

Test Driven Development allows you to take the benefits of automated testing a bit further by influencing the design of the code based on following the simplest testing path. If done properly, the code that emerges from this technique is very simple and full of reusable abstractions.

If done improperly, the amount of maintenance that automated tests may require could be a burden to your team.

## Resources

- [Test behavior, not implementation](https://testing.googleblog.com/2013/08/testing-on-toilet-test-behavior-not.html)
- [Basic set of automated testing principles](https://medium.com/@kentbeck_7670/programmer-test-principles-d01c064d7934)
- Three Laws of TDD [talk](https://www.youtube.com/watch?v=qkblc5WRn-U) and [blog](http://www.butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)
- [How to stop hating your automated test suite](https://www.youtube.com/watch?v=VD51AkG8EZw)
- [Characterization testing](https://michaelfeathers.silvrback.com/characterization-testing)
- [Test Automation Pyramid](https://martinfowler.com/bliki/TestPyramid.html)
- [Ephemeral model-based testing](https://www.tedinski.com/2018/12/26/model-based-testing.html)
