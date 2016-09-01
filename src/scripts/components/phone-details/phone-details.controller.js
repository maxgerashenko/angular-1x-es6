
class phoneDetailsCtrl {
    constructor(DataService, $routeParams) {
        'ngInject';
        DataService.getPhoneDetails($routeParams.phoneID).then(response => {
            this.phone = response.data;
            this.mainImgUrl = this.phone.images[0];
        })
    }

    setMainImg(img){
        this.mainImgUrl = img;
    }
}

export default phoneDetailsCtrl;