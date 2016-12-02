

var expect = chai.expect;
var should = chai.should();

describe('ZeptoModal', function() {

  before(function () {
    
    if (window.__html__) {
        document.body.innerHTML = window.__html__['tests/index.html'];
    }

  });

  describe('init', function() {

    before(function () {
    
      $.modal({
        title: 'My modal title',
        content: 'Hello world!',
        footer: '...by Igirisu Ltd'
      });

      this.modal = document.querySelector('#zeptoModal div[role="container"]');
    });
      
    it('should insert a shim layer with a default id', function() {
      document.querySelectorAll('#zeptoModal').should.not.be.empty;
    });

    it('should insert a container inside the shim', function() {
      document.querySelector('#zeptoModal').should.contain('div[role="container"]');
    });

    it('should have a header element', function() {
      this.modal.should.contain('header');
    });

    it('should have main element', function() {
      this.modal.should.contain('main');
    });

    it('should have a footer element', function() {
      this.modal.should.contain('footer');
    });

    it('should have a close button in the header', function() {
      document.querySelector('#zeptoModal header').should.contain('a[role="button"][class="close"]');
    });

    it('should put content into the main section', function() {
      document.querySelector('#zeptoModal main').should.contain.html('Hello world!');
    });

    it('should put title into the header section', function() {
      document.querySelector('#zeptoModal header').should.contain.html('My modal title');
    });

    it('should put footer into the footer section', function() {
      document.querySelector('#zeptoModal footer').should.contain.html('...by Igirisu Ltd');
    });

    it('should be displayed', function() {
      expect($('#zeptoModal').css('display')).to.equal('block');
    });

    it('should be overlaid', function() {
      expect($('#zeptoModal').css('font-family')).to.contain('Arial');
      expect($('#zeptoModal').css('position')).to.equal('fixed');
      expect($('#zeptoModal').css('z-index')).to.equal('1');
      expect($('#zeptoModal').css('left')).to.equal('0px');
      expect($('#zeptoModal').css('top')).to.equal('0px');
      expect($('#zeptoModal').css('width')).to.equal('100%');
      expect($('#zeptoModal').css('height')).to.equal('100%');
      expect($('#zeptoModal').css('overflow')).to.equal('auto');
      expect($('#zeptoModal').css('background-color')).to.equal('rgba(0, 0, 0, 0.4)');
    });

    it('should default some styling on the container', function() {
      expect($(this.modal).css('position')).to.equal('relative');
      expect($(this.modal).css('margin-left')).to.equal('auto');
      expect($(this.modal).css('margin-right')).to.equal('auto');
      expect($(this.modal).css('margin-top')).to.equal('300px');
      expect($(this.modal).css('padding')).to.equal('5px');
      expect($(this.modal).css('background-color')).to.equal('rgb(238, 238, 238)');
      expect($(this.modal).css('width')).to.equal('60%');
      expect($(this.modal).css('border')).to.equal('1px solid rgb(51, 51, 51)');
    });

    it('should default some styling on the title', function() {
      var title = $('#zeptoModal header');
      expect(title.css('background-color')).to.equal('rgb(204, 204, 204)');
    });

    it('should default some styling on the close button', function() {
      var close = $('#zeptoModal header a[role="button"][class="close"]');
      expect(close.css('float')).to.equal('right');
      expect(close.css('text-decoration')).to.equal('none');
    });

  });

  describe('events', function() {

    // it('should emit a created event', function() {
    //   // todo: destroy existing modals first to force
    //   // creation        
    //   var callback = sinon.spy();
    //   $(document).on('zeptomodal:created', callback);

    //   $.modal({
    //     title: 'abc',
    //     content: '123'
    //   });

    //   expect(callback.called).to.be.true;
    // });

    it('should emit a shown event', function() {
      var callback = sinon.spy();
      $(document).on('zeptomodal:shown', callback);

      $.modal({
        title: 'abc',
        content: '123'
      });

      expect(callback.called).to.be.true;
    });

    it('should emit a hidden event', function() {
      var callback = sinon.spy();
      $(document).on('zeptomodal:hidden', callback);

      $.modal({
        title: 'abc',
        content: '123'
      });

      expect(callback.called).to.be.false;

      $('#zeptoModal a.close').trigger('click');

      expect(callback.called).to.be.true;
    });

  });

  describe('reinit', function() {

    it('should only create elements once', function() {
      $.modal();

      document.querySelectorAll('#zeptoModal').should.be.length(1);
    });

    it('should show again after close', function() {
      $('#zeptoModal a.close').trigger('click');
      $.modal();

      expect($('#zeptoModal').css('display')).to.equal('block');
    });

    // todo: emit show event
  });

  describe('close', function() {

    it('should not be displayed', function() {
      $('#zeptoModal a.close').trigger('click');

      expect($('#zeptoModal').css('display')).to.equal('none');
    });

    // todo: emit hide event

  });
   
});