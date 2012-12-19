﻿function initPersonArray(){	var personArray = [];		var femaleFirstNames = ['Barb', 'Kelly', 'Wendy', 'Sally', 'Simone', 'Geraldine', 'Ann', 'Pat', 'Tricia', 'Beth', 'Nina', 'Stephanie', 'Christina', 'Kim', 'Kimberly',							'Carmen', 'Dorothy', 'Eunice', 'Sandy', 'Elizabeth', 'Shelly', 'Courtney', 'Chloe', 'Emily', 'Emma', 'Julie', 'Margaret', 'Heather', 'Paula',							'Melinda', 'Tracy', 'Angela', 'Amy', 'Florence', 'Faizal', 'Trinity', 'Ashley', 'Susan', 'Suzanne', 'Camilla', 'Trudy', 'Chrystal'];	var maleFirstNames = ['Bob', 'Jim', 'James', 'Kevin', 'William', 'Douglas', 'Chuck', 'Richard', 'Dave', 'David', 'Chris', 'Greg', 'Ben', 'Laurent', 'Nick', 'Glenn',							'Dean', 'John', 'Johnathan', 'Wilbur', 'Dale', 'Rob', 'Robert', 'Davis', 'Winston', 'Isaac', 'Phil', 'Edward', 'Ed', 'Charles', 'Kirk',							'Willy', 'Chester', 'Carl', 'Vito', 'Peter', 'Hans', 'Dennis', 'Bill', 'Sam', 'Samuel', 'Roger', 'Vinny', 'Vince', 'Ernie', 'Tom', 'Eddy'];	var lastNames = ['Smith', 'Wilson', 'Davis', 'Davidson', 'Macauley', 'McLean', 'Hall', 'Winters', 'Totten', 'Hawes', 'Tether', 'McCabe', 'Weathers', 'Sinclair', 'Heathrow',					'Weldon', 'Jordan', 'Jesslop', 'Tandem', 'LeClaire', 'Belleveau', 'Darling', 'Hunt', 'Huntsman', 'Erlang', 'Burgess', 'Logie', 'Tilts', 'Mitton', 'Teltale',					'Brand', 'Bishop', 'Ball', 'McCall', 'Kools', 'Komarik', 'Germansky', 'Teller', 'Wickers', 'Vick', 'Tomas', 'Gendron', 'Kitch', 'Skelly', 'Barnstrom'];			var gender = 1; //1 for man, 0 for woman	var firstName = "";	var lastName = "";	var employer = "";	var photo = "";	var birthdate = new Date();	var salary = 0;	var email = "";	var person = {};		//parent function created user session to list companies re: permissions	for(i = 0; i < 200 ; i++){		gender = Math.floor(Math.random()*2); //Random number 1 or 0		lastName = lastNames[Math.floor(Math.random() * lastNames.length)] //get a random lastName		birthdate = new Date(Math.floor(Math.random()*799965158463));		salary = Math.floor(Math.random()*300) *1000;		if(gender == 1){ //add a man			firstName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];		} else { //add a woman			firstName = femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];		}		email = firstName.substr(1,1) + lastName + "@" + employer.url;		personArray.push({firstName: firstName, lastName: lastName, employer: employer, autoUser: user, photo: photo, married: Math.floor(Math.random()*2), userName: firstName, password: 'hello', birthdate: birthdate });	}			return personArray;}function initCompanyArray(){	var companyArray = [];	var companyNames = ['Base TDC', 'Bayside & Ellerson', 'Calverton', 'EB Films', 'Fend Industries', 'Foundation Systems Inc.',						'TLC Gift Wrapping', 'Growth Fund Group', 'Hero Guitars', 'Home Team Network', 'Hydra Inc.', 'Moneywise Financial',						'Bandlion Krafts', 'Stations Incorporated', 'TCA Group', 'Towerline', 'True Investment Systems Inc.', 'WT Services Corp'];	var companyURLs = ['basetdc.org', 'baysideellerson.com', 'calverton.com', 'ebfilms.ca', 'fendindustries.com', 						'foundation.com', 'tlcgiftsonline.com', 'growthfund.com', 'heroguitarhero.com', 'hometeamtoday.com',						'hydraincorporated.com', 'moneywise.net', 'bandlion.ca', 'stations.com', 'tcagroup.com', 'towerline.com',						'trueinvestments.com', 'wtservicescorporation.com']	var companyAddresses = ['1121 Riverside Dr.', '18332 Calton Line', '99 Circle Cork Place', '723 Davis Ave.', '99-773 Tantina Rd.', '2212 Teledon Rd.', '12-3322 Force St.', '7736 Blake St.', '66533 Caldon Rd.', '54554 Oxford St.',							'98 Tension Rd.', '12223 Cliftonvale Blvd.', '4-498 Station Park Place', '99443 Everest Heights Rd.', '88333 Quelton St.', '4544 Criston Sideroad', '6644 Weldon Park Rd.', '6544 Canton Rd.'];	var companyCities = ['New York', 'Chicago', 'London', 'London', 'Toronto', 'San Jose', 'Detroit', 'Dearborn', 'Victoria', 'Abbotsford',							'Calgary', 'Austin', 'Arlington', 'Halifax', 'Montreal', 'Seattle', 'Tampa', 'Charlotteville'];	var companyStates = ['NY', 'IL', 'ON', 'CA', 'ON', 'CA', 'MI', 'MI', 'BC', 'BC',							'AB', 'TX', 'VA', 'NS', 'QB', 'WA', 'FL', 'NC'];	var companyCountries = ['USA', 'USA', 'Canada', 'USA', 'Canada', 'USA', 'USA', 'USA', 'Canada', 'Canada',							'Canada', 'USA', 'USA', 'Canada', 'Canada', 'USA', 'USA', 'USA'];	var companyTelephones = ['9959958875', '2263773884', '3776640900', '7760909988', '5198887763', '2264487773', '6635544993', '6635529987', '7098887331', '5399887777',							'2767775384', '7764499953', '3378869938', '2263332228', '8843343322', '8008873336', '2877600087', '2340987645'];	var companyIndustries = ['Medical', 'Industrial', 'Industrial', 'Government', 'Medical', 'Government', 'Technology', 'Technology', 'Industrial', 'Technology',							'Industrial', 'Industrial', 'Medical', 'stations', 'Medical', 'Medical', 'Industrial', 'Medical'];			var theCompany = "";	//create each company based on arrays	for(i = 0 ; i < companyNames.length ; i++){//		theCompany = new ds.Company({name: companyNames[i], logo: theLogo, url: companyURLs[i], autoUser: user});		companyArray.push({name: companyNames[i], address: companyAddresses[i], city: companyCities[i], stateProv: companyStates[i], country: companyCountries[i],		telephone: companyTelephones[i], url: companyURLs[i], industry: companyIndustries[i]});	}	return companyArray;}function initCompanyArray2(){	var companyArray = [];		var companyNames = ['Winslow Holdings', 'Bayfield Inc.', 'Chester Peaks', 'Bandson Total Ltd', 'Tulip Visons', 'Bankerbox.com',						'Tucker Tools', 'Pento Limited', 'Baseline Wellington', 'Bakersville Group', 'Pure Water Industries', 'Total Investment Services',						'Banter Systems', 'TallyHoe Racing', 'TCA Group', 'Sussex Drive Partners', 'Twigglesworth Renovators', 'Talion Brothers Ltd.'];	var companyURLs = ['winslow.org', 'bayfield.com', 'chesterpeakstoday.com', 'bandsontotal.ca', 'tulipvisions.org', 						'bankerbox.com', 'tuckertools.com', 'pentoltd.com', 'baselinewellington.com', 'bakersville.net',						'purewater.com', 'totalinvest.com', 'bantersystems.ca', 'talleyhoemotorway.com', 'tcagroup.com', 'sussexdrivepartners.com',						'twigglesworth.com', 'talionbros.com']	var companyAddresses = ['1285 Ruxton Rd.', '7736 Colip Circle', '12 Circle Cork Place', '723 Wellington Ave.', '99-654 Bonjour Rd.', '776 Teledon Rd.', '12-3322 Quaker St.', '1212 Elias St.', '87 Caldon Rd.', '2212 Queens St.',							'763 Blazing Bull Rd.', '22 Cliftonvale Blvd.', '4-498 Yellowstone Park Place', '443 Quinton Heights Rd.', '88333 Beaverbrook St.', '4-664 Wofton Sideroad', '44 Weldon Park Rd.', '544 Caon Rd.'];	var companyCities = ['New York', 'Chicago', 'London', 'London', 'Toronto', 'San Jose', 'Detroit', 'Dearborn', 'Victoria', 'Abbotsford',							'Calgary', 'Austin', 'Arlington', 'Halifax', 'Montreal', 'Seattle', 'Tampa', 'Charlotteville'];	var companyStates = ['NY', 'IL', 'ON', 'CA', 'ON', 'CA', 'MI', 'MI', 'BC', 'BC',							'AB', 'TX', 'VA', 'NS', 'QB', 'WA', 'FL', 'NC'];	var companyCountries = ['USA', 'USA', 'Canada', 'USA', 'Canada', 'USA', 'USA', 'USA', 'Canada', 'Canada',							'Canada', 'USA', 'USA', 'Canada', 'Canada', 'USA', 'USA', 'USA'];	var companyTelephones = ['9959958875', '2263773884', '3776640900', '7760909988', '5198887763', '2264487773', '6635544993', '6635529987', '7098887331', '5399887777',							'2767775384', '7764499953', '3378869938', '2263332228', '8843343322', '8008873336', '2877600087', '2340987645'];	var companyIndustries = ['Medical', 'Industrial', 'Industrial', 'Government', 'Medical', 'Government', 'Technology', 'Technology', 'Industrial', 'Technology',							'Industrial', 'Industrial', 'Medical', 'stations', 'Medical', 'Medical', 'Industrial', 'Medical'];			var theCompany = "";	//create each company based on arrays	for(i = 0 ; i < companyNames.length ; i++){//		theCompany = new ds.Company({name: companyNames[i], logo: theLogo, url: companyURLs[i], autoUser: user});		companyArray.push({name: companyNames[i], address: companyAddresses[i], city: companyCities[i], stateProv: companyStates[i], country: companyCountries[i],		telephone: companyTelephones[i], url: companyURLs[i], industry: companyIndustries[i]});	}	return companyArray;}