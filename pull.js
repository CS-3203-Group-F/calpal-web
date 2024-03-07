// This file contains the general structure for a component.

// class {components name}
class Search {
  data;
  search = document.querySelector(`.search__bar`);
  // This function calls the generateMarkup function and performs any other operations that are required for to start correctly.
  init(data) {
    this.data = data;
    // this.search.addEventListener(`input`, () => {
    //   this.filterCards(this.search.value);
    // });
  }

  filterCards(query) {
    // Convert the map to an array
    const queryMap = Array.from(this.data);

    // Filter the array into a new array called filtered array
    const filteredArray = queryMap.filter((object) => {
      const account = object[1];
      for (let key in account) {
        if (
          String(account[key]).toUpperCase().indexOf(query.toUpperCase()) > -1
        ) {
          return true;
        }
      }
    });

    // Convert filtered array back to a map
    const filteredMap = new Map();
    filteredArray.forEach((object) => {
      filteredMap.set(object[0], object[1]);
    });

    return filteredMap;
  }

  displaySad() {
    const markup = `
    <div class="user-list empty">
      <div class="no-users-found--dark absolutely-centered">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
        >
          <path
            d="M41.5 28.625V44.7187M80.125 41.5C80.125 46.5723 79.1259 51.5949 77.1848 56.2811C75.2438 60.9673 72.3987 65.2253 68.812 68.812C65.2253 72.3987 60.9673 75.2438 56.2811 77.1848C51.5949 79.1259 46.5723 80.125 41.5 80.125C36.4277 80.125 31.4051 79.1259 26.7189 77.1848C22.0327 75.2438 17.7747 72.3987 14.188 68.812C10.6013 65.2253 7.75624 60.9673 5.81515 56.2811C3.87406 51.5949 2.875 46.5723 2.875 41.5C2.875 31.256 6.94441 21.4316 14.188 14.188C21.4316 6.94441 31.256 2.875 41.5 2.875C51.744 2.875 61.5684 6.94441 68.812 14.188C76.0556 21.4316 80.125 31.256 80.125 41.5ZM41.5 57.5937H41.5343V57.6281H41.5V57.5937Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>No Accounts Found :(</p>
      </div>
    </div>
    `;

    document.querySelector(`.cards__`).innerHTML = markup;
  }
}

// Most components can/should be exported as a "new" instance. However, some may not be able to be exported this way. In that case, just export the class itself
// and instantiate it somewhere else.
export const search = new Search();
