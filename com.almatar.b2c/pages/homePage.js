//page is non-angular
browser.ignoreSynchronization = true;

import BasePage from './basePage';

class HomePage extends BasePage {
	constructor() {
		super();

		// Hotel Reservation
		this.destinationTextbox = $('#typeahead-http');
		this.suggestedDestination = element.all(by.css('div.title'));
		this.fromDate = $('input[name=fromDate]');
		this.toDate = $('input[name=toDate]');
		this.stayPeriod = $('div span.number');
		this.travelersDropdown = $('span[class*=search__passengers]');
		//this.citySpanInSearchLocation = element (by.css( 'div.title > ngb-highlight'));
		//this.travelCityDestination = cityRequired => { return element(by.cssContaining(citySpanInSearchLocation,cityRequired)); };

		//Traveler counters setting elements
		this.decreasetAdult =element(by.css('div:nth-child(2) > div.passenger-dropdown__room-right-side > ol > li.decrease > button'));
		this.increaseAdult=element(by.css('div:nth-child(2) > div.passenger-dropdown__room-right-side > ol > li.increase > button'));
		this.decreaseChild = $('div.passenger-dropdown__room div:eq(4) ol li:eq(0) button');
		this.increaseChild = element(by.css('div:nth-child(3) > div.passenger-dropdown__room-right-side > ol > li.increase > button'));

		this.addRoomButton =$('div.room-control button');
		this.searchButton = $('button span.icon-search');


		this.decrementChild = $('ol li:eq(3) button.decrement');;

		this.url = '';
		this.pageLoaded = this.isVisible(this.destinationTextbox);
		 
		 
		 
	}

	setTravelDestination(travelCountryDestination,travelCityDestination)
	{	
		this.destinationTextbox.clear();
		console.log(travelCountryDestination + travelCityDestination);
		this.destinationTextbox.sendKeys(travelCountryDestination);
		browser.sleep(3000);
		this.suggestedDestination.get(0).click();
		
		
	}

	setCheckInDate(checkInDay)
	{	
		this.fromDate.sendKeys(checkInDay); 
	}

	setCheckOutDate(checkOutDay)
	{	
		this.toDate.sendKeys(checkOutDay);
	}

	setAdultCountPerRoom(adultCountRequired)
	{
		console.log(adultCountRequired);
		//Given count of adults is 1 at least.
		for (var i=1; i<adultCountRequired;i++)
		{
			this.increaseAdult.click();

		}
	}

	setChildCountPerRoom(childCountRequired)
	{
		//Given count of adults is 1 at least.
		for (var i=0; i<childCountRequired;i++)
		{
			this.increaseChild.click();

		}
	}
	
	setTravelerCountPerRoom(adultCountRequired,childCountRequired)
	{
		this.travelersDropdown.click();
		browser.sleep(1000);
		this.setAdultCountPerRoom(adultCountRequired);
		browser.sleep(1000);
		this.setChildCountPerRoom(childCountRequired);
		browser.sleep(1000);
		
	}

    searchHotel()
    {
    	return this.searchButton.click();
    	
    }
  

};

export default new HomePage();