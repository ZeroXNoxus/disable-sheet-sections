function initialize(){
    toggleSections();
}

function toggleSections(){
    const inspiration = game.settings.get('disable-sheet-sections', 'inspiration');
    const exhaustion  = game.settings.get('disable-sheet-sections', 'exhaustion');
    const ressources  = game.settings.get('disable-sheet-sections', 'ressources');
    const traits      = game.settings.get('disable-sheet-sections', 'traits');
    switch(true){
        case inspiration:
            $('body').addClass('disable-inspiration');
        case exhaustion:
            $('body').addClass('disable-exhaustion');
        case ressources:
            $('body').addClass('disable-ressources');
        case traits:
            $('body').addClass('disable-traits');
    }
    switch(false){
        case inspiration:
            $('body').removeClass('disable-inspiration');
        case exhaustion:
            $('body').removeClass('disable-exhaustion');
        case ressources:
            $('body').removeClass('disable-ressources');
        case traits:
            $('body').removeClass('disable-traits');
    }
}

function generateSheetSectionSettings(){ 
    game.settings.register('disable-sheet-sections', 'inspiration', {
        name: 'Disable Inspiration',
        hint: "When selected the 'Inspiration' field on character sheets will be hidden.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { toggleSections(); }
    });
    game.settings.register('disable-sheet-sections', 'exhaustion', {
        name: 'Disable Exhaustion',
        hint: "When selected the 'Exhaustion' field on character sheets will be hidden.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { toggleSections(); }
    });
    game.settings.register('disable-sheet-sections', 'ressources', {
        name: 'Disable Exhaustion',
        hint: "When selected the 'Ressource' fields on character sheets will be hidden.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { toggleSections(); }
    });
    game.settings.register('disable-sheet-sections', 'traits', {
        name: 'Disable Special Traits',
        hint: "When selected the 'Special Traits' setting on character sheets will be hidden.",
        scope: 'client',
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { toggleSections(); }
    });
}
Hooks.on('init', () => {
    generateSheetSectionSettings();
});

Hooks.on('renderActorSheet', () => {
    initialize();
});