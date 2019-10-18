import { computed } from '@ember/object';
import Component from '@ember/component';
import { assign } from '@ember/polyfills';
import $ from 'jquery';

export default Component.extend({
  tagName: 'div',
  classNames: 'sticky',
  topSpacing: 0,
  defaultOptions: computed('topSpacing', function() {
    return {
      topSpacing: this.get('topSpacing')
    };
  }),

  mergedOptions: computed('options', function() {
    return assign(this.get('defaultOptions'), this.get('options'));
  }),

  didInsertElement() {
    $(this.element).sticky( this.get('mergedOptions') );
  },

  willDestroyElement() {
    $(this.element).unstick();
  },
});
