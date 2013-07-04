define([
  'intern!bdd',
  'intern/chai!expect',
  'app/Greeter',
], function (bdd, expect, Greeter) {
  describe('demo', function () {
    var greeter;

    // before the suite starts
    before(function() {
      greeter = new Greeter();
    });

    // asynchronous test for Promises/A-based interfaces
    it('should say hello', function () {
      expect(greeter.greet()).to.equal('Hello World');
    });

    it('should say hello witha  custom name', function () {
      expect(greeter.greet("Bob")).to.equal('Hello Bob');
    });
  });
});