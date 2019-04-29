//page is non-angular
browser.ignoreSynchronization = true;

import BasePage from './basePage';

class HotelRoomsPage extends BasePage {
	constructor() {
		super();
		this.bookNowButtonForFirstRoomInHotel=element(by.cssContainingText('button','book now'));
		this.editButton=element(by.cssContainingText('button span','Edit'));
		//this.url = '';
		this.pageLoaded = this.isVisible(this.bookNowButtonForFirstRoomInHotel);
	}

	bookRoom()
	{	
		browser.sleep(10000);
		browser.actions().mouseMove(this.bookNowButtonForFirstRoomInHotel).perform();
		this.bookNowButtonForFirstRoomInHotel.click();
	}


};

export default new HotelRoomsPage();