import { schedule } from "./schedule.js";

class SellerAccounts {
  data;
  url = `../components/schedules.json`;

  async init() {
    await this.getData(this.url);

    console.log(this.data);

    await schedule.init(this.data);
  }

  async getData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      this.data = await response.json();
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // Handle the error or re-throw it to be caught in an outer catch block
      throw error;
    }
  }
}

// Most components can/should be exported as a "new" instance. However, some may not be able to be exported this way. In that case, just export the class itself
// and instantiate it somewhere else.
// export const sellerAccounts = new SellerAccounts();
const sellerAccounts = new SellerAccounts();
sellerAccounts.init();
