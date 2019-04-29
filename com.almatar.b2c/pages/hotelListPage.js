//page is non-angular
browser.ignoreSynchronization = true;

import BasePage from './basePage';

class HotelListPage extends BasePage {
	constructor() {
		super();
		this.editButton = element(by.cssContainingText('button', 'Edit'));
		//this.hotelLink = hotelNameRequired => { return element(by.cssContainingText('a', hotelNameRequired));};
		//this.hotelImage = hotelNameRequired => { return $('img[title*="' +hotelNameRequired +'"]');}; 	
		this.firstHotelImage = $$('img.main-img').get(0);
		this.availableRoomsButton = $('#book-room');
		//this.priceValuLabelOfFirstHotel = element (by.xpath('//div[1]/div/div[2]/div/div[2]/div[2]/h5/text()'));


		//this.url = '';
		this.pageLoaded = this.isVisible(this.editButton);
	}

	selectHotel(hotelRequired)
	{	
		browser.sleep(16000);
		//console.log (this.priceValuLabelOfFirstHotel);
		this.firstHotelImage.click();
		this.availableRoomsButton.click();

		//Now it's time to switch tabs
		browser.getWindowHandle().then(function(parentGUID){
			// click the button to open new window
			
			browser.sleep(5000);
			// get the All the session id of the browsers
			browser.getAllWindowHandles().then(function(allGUID){
				// print the title of th epage
				console.log("Page title before Switching : "+ browser.getTitle());
				console.log("Total Windows : "+allGUID.length);
				// iterate the values in the set
				for(let guid of allGUID){
					// one enter into if blobk if the GUID is not equal to parent window's GUID
					if(guid !=parentGUID){
						// switch to the guid
						browser.switchTo().window(guid);
						// break the loop
						break;
					}
				}

			});

		});

	}


};

export default new HotelListPage();