import searchBoxCtrl from './search-box.controller.js';

let searchBoxComponent = {
    templateUrl: './src/templates/search-box.html',
    controller: searchBoxCtrl,
    bindings: {
        query: '='
    }
};

export default searchBoxComponent;