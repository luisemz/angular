angular.module('app').component('detailPanel', {
    transclude: true,
    templateUrl: '/components/detailPanel.html',
    bindings: {
        title: '@',
        initialCollapsed: '@collapsed'
    },
    controller: (function () {
        function DetailPanel() {
            this.collapsed = this.initialCollapsed === 'true';
        }
        DetailPanel.prototype.collapse = function () {
            this.collapsed = !this.collapsed;
        };
        return DetailPanel;
    }())
});
//# sourceMappingURL=detailPanel.js.map