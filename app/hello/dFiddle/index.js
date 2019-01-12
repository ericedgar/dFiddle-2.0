define(['durandal/app', 'durandal/system', 'knockout'], function( app, system, ko ) {
    var formDivFoundInAttachedMessage;
    formDivFoundInAttachedMessage = "test";
      
    return {
        composedViewMessage: 'Hello from composed view',
        formMessage: "Hello from form",
        formDivFoundInAttachedMessage: formDivFoundInAttachedMessage,
        composedViewDivFoundInAttachedMessage: "",
        composedViewDivFoundAfterTimeoutMessage: "",
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
            if (this.formDivFoundInAttachedMessage) {
               system.log('Lifecycle : attached : this.formDivFoundInAttachedMessage: ' + this.formDivFoundInAttachedMessage + ' : formDivElement: ' + formDivElement);
            } else {
                system.log('Lifecycle : attached : this.formDivFoundInAttachedMessage: IS NULL');
            }
            
            if (formDivElement) {
                this.formDivFoundInAttachedMessage = "form div FOUND in form attached";
            } else {
                this.formDivFoundInAttachedMessage = "form div NOT FOUND in form attached";
            }
        },
        compositionComplete: function( view ) {
            system.log('Lifecycle : compositionComplete : hello');
        },
        detached: function( view ) {
            system.log('Lifecycle : detached : hello');
        }
    };
});
