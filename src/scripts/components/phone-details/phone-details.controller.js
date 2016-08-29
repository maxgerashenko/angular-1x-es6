
class phoneDetailsCtrl {
    constructor(PersonService, $routeParams) {
        'ngInject';
        PersonService.getPhoneDetails($routeParams.phoneID).then(response => {
            this.phone = response.data;
            this.mainImgUrl = this.phone.images[0];
        })
    }

    setMainImg(img){
        this.mainImgUrl = img;
    }
}

export default phoneDetailsCtrl;