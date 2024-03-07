// This file contains the general structure for a component.

// class {components name}
class Schedule {
  data;
  search = document.querySelector(`.search__bar`);
  // This function calls the generateMarkup function and performs any other operations that are required for to start correctly.
  init(data) {
    // Init funciton
    this.data = data; // Store data

    this.parseData(); // parseData function call

    this.displaySchedule();
  }

  parseData() {
    // Parse JSON file into variables
    this.user = this.data.person.name;
    this.ouID = this.data.person.ouID;
    this.date = this.data.person.schedules[0].date;
    this.time = this.data.person.schedules[0].events[0].time;
  }

  displaySchedule() {
    const markup = `
    <div class="user">${this.user}</div>
    <div class="ouID">${this.ouID}</div>
    <div class="schedule">Group F meeting on ${this.date} at ${this.time}.</div>
    `;

    document.querySelector(`.scheduleView`).innerHTML = markup;
  }
}

// Most components can/should be exported as a "new" instance. However, some may not be able to be exported this way. In that case, just export the class itself
// and instantiate it somewhere else.
export const schedule = new Schedule();
