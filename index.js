// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map (function (driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map (function (driver){
    let sepDriver = driver.split(' ')
    return { firstName: sepDriver[0], lastName: sepDriver[1] }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map (function (driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
}
