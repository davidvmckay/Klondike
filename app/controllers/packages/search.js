import Ember from 'ember';
import BaseControllerMixin from 'klondike/mixins/base-controller';
import PaginationSupport from 'klondike/mixins/pagination-support';

export default Ember.ObjectController.extend(BaseControllerMixin, PaginationSupport, {
    queryParams: ['query', 'page', 'sortBy', 'sortOrder', 'includePrerelease', 'originFilter', 'latestOnly'],

    originFilters: [
      { value: 'any', label: 'Local and mirrored'},
      { value: 'local', label: 'Local'},
      { value: 'mirror', label: 'Mirrored'}
    ],

    versionFilters: [
      { value: false, label: 'Stable only'},
      { value: true, label: 'Include pre-release'}
    ],

    sortByColumns: [
      { value: 'score', label: 'Sort by relevance'},
      { value: 'title', label: 'Sort by title'},
      { value: 'id', label: 'Sort by package ID'},
      { value: 'published', label: 'Sory by date published'}
    ],

    latestOnlyFilters: [
      { value: true, label: 'Latest version'},
      { value: false, label: 'All versions'}
    ],

    query: '',
    pageBinding: 'model.page',
    sortBy: 'score',
    sortOrder: 'ascending',
    includePrerelease: false,
    originFilter: 'any',
    latestOnly: true,

    totalBinding: Ember.Binding.oneWay('model.totalHits'),

    isEmptyQuery: function() {
        return Ember.isEmpty(this.get('query'));
    }.property('query'),

    actions: {
        'nextPage': function() {
            this.set('page', this.get('page') + 1);
        },
        'previousPage': function () {
            this.set('page', this.get('page') - 1);
        },
    },
});
