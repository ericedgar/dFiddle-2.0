define(['durandal/app', 'durandal/system', 'knockout'], function( app, system, ko ) {
    var formDivFoundInAttachedMessage = formDivFoundInAttachedMessage = ko.observable("");
    var composedViewDivFoundInAttachedMessage = ko.observable("");
    var composedViewDivFoundAfterCompositionCompleteMessage = ko.observable("");
      
    return {
        composedViewMessage: 'Hello from composed view',
        formMessage: "Hello from form",
        formDivFoundInAttachedMessage: formDivFoundInAttachedMessage,
        composedViewDivFoundInAttachedMessage: composedViewDivFoundInAttachedMessage,
        composedViewDivFoundAfterCompositionCompleteMessage: composedViewDivFoundAfterCompositionCompleteMessage,
        activate: function() {
            system.log('Lifecycle : activate : hello');
        },
        binding: function() {
            system.log('Lifecycle : binding : hello');
            return { cacheViews: false }; //cancels view caching for this module, allowing the triggering of the detached callback
        },
        bindingComplete: function() {
            system.log('Lifecycle : bindingComplete : hello');
        },
        attached: function( view, parent ) {
            system.log('Lifecycle : attached : hello');
            var formDivElement;
            formDivElement = document.getElementById("formDivElement");
            
            if (formDivElement) {
                this.formDivFoundInAttachedMessage("form div FOUND in form attached");
            } else {
                this.formDivFoundInAttachedMessage("form div NOT FOUND in form attached");
            }
            
            var composedViewDivElement;
            composedViewDivElement = document.getElementById("composedViewDivElement");
            if (composedViewDivElement) {
                this.composedViewDivFoundInAttachedMessage("composed view FOUND in form attached");
            } else {
                this.composedViewDivFoundInAttachedMessage("composed view NOT FOUND in form attached");
            }
        },
        compositionComplete: function( view ) {
            system.log('Lifecycle : compositionComplete : hello');
            var composedViewDivElement;
            composedViewDivElement = document.getElementById("composedViewDivElement");
            if (composedViewDivElement) {
                this.composedViewDivFoundAfterCompositionCompleteMessage("composed view FOUND in form compositionComplete");
            } else {
                this.composedViewDivFoundAfterCompositionCompleteMessage("composed view NOT FOUND in form compositionComplete");
            }
        },
        detached: function( view ) {
            system.log('Lifecycle : detached : hello');
        }
    };
});
