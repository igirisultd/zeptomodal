

var expect = chai.expect;

describe('ZeptoModal', function() {
    
  before(function () {
    // Karma creates this global __html__ property that will hold all
    // of our HTML so we can populate the body during our tests
    if (window.__html__) {
        document.body.innerHTML = window.__html__['tests/index.html'];
    }

    $('body').modal('Hello');
  });

  describe('init', function() {
      
    it('should insert a shim layer with a default id', function() {

      expect(document.querySelectorAll('#zeptoModal')).not.to.be.empty;

    });
  });
   
});